"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion — Steven Bartlett-style smooth scroll + scroll-linked reveals,
 * on GSAP (verifiable, and integrated with Lenis). Mounted once in the layout.
 *
 * Lenis smooth scroll is created once and persists across client navigations;
 * the GSAP reveals are (re)built per route so each page animates. Everything is
 * disabled under prefers-reduced-motion (content stays visible, native scroll).
 *
 * Elements opt in via data-attributes:
 *   data-reveal        rise + fade (batched → rows stagger). A wrapper carrying
 *                      this YIELDS if it contains a more specific reveal inside.
 *   data-reveal-text   display headings — split into lines, rise behind a mask
 *   data-reveal-media  images/cards — clip-wipe + slight zoom
 *   data-parallax="N"  scrub parallax drift
 *   data-count         number rolls up from 0 (keeps any non-digit suffix)
 */
export default function SiteMotion() {
  const pathname = usePathname();
  const lenisRef = useRef<{ raf: (t: number) => void; destroy: () => void; on: (e: string, cb: () => void) => void; scrollTo: (t: number, o?: unknown) => void } | null>(null);

  // 1. Lenis smooth scroll — created once, persists across routes.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let onTick: ((t: number) => void) | undefined;
    let gsapRef: { ticker: { add: (f: (t: number) => void) => void; remove: (f: (t: number) => void) => void; lagSmoothing: (n: number) => void } } | undefined;
    let disposed = false;

    (async () => {
      const [lenisMod, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;
      const Lenis = lenisMod.default;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);
      gsapRef = gsap;

      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: true });
      lenisRef.current = lenis as unknown as typeof lenisRef.current;
      lenis.on("scroll", ScrollTrigger.update);
      onTick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      disposed = true;
      if (gsapRef && onTick) gsapRef.ticker.remove(onTick);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Build the scroll-linked reveals for the current route (rebuilt on nav).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let disposed = false;

    lenisRef.current?.scrollTo(0, { immediate: true });

    (async () => {
      const [gsapMod, stMod, splitMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ]);
      if (disposed) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const { ScrollTrigger } = stMod;
      const { SplitText } = splitMod;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      ctx = gsap.context(() => {
        // Headline reveals — split into lines, each rises from behind a mask.
        gsap.utils.toArray<HTMLElement>("[data-reveal-text]").forEach((el) => {
          const split = new SplitText(el, { type: "lines", mask: "lines" });
          gsap.from(split.lines, {
            yPercent: 115,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        // Media reveals — clip-wipe up + settle from a slight zoom (row stagger).
        ScrollTrigger.batch("[data-reveal-media]", {
          start: "top 88%",
          onEnter: (els) =>
            gsap.from(els, {
              clipPath: "inset(0% 0% 100% 0%)",
              scale: 1.06,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.12,
              overwrite: true,
            }),
        });

        // Generic block reveals — rise + fade. A wrapper yields to any more
        // specific reveal it contains, so nothing double-animates.
        const generic = gsap.utils
          .toArray<HTMLElement>("[data-reveal]")
          .filter((el) => !el.querySelector("[data-reveal],[data-reveal-text],[data-reveal-media]"));
        ScrollTrigger.batch(generic, {
          start: "top 90%",
          onEnter: (els) =>
            gsap.from(els, {
              y: 34,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: true,
            }),
        });

        // Parallax — gentle scrub drift.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = parseFloat(el.dataset.parallax || "10");
          gsap.fromTo(
            el,
            { yPercent: -amt },
            {
              yPercent: amt,
              ease: "none",
              scrollTrigger: { trigger: el.closest("section") ?? el, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });

        // Number roll-ups.
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const raw = el.textContent ?? "";
          const target = parseInt(raw.replace(/\D/g, ""), 10) || 0;
          const suffix = raw.replace(/[0-9]/g, "");
          const proxy = { v: 0 };
          gsap.to(proxy, {
            v: target,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            onUpdate: () => {
              el.textContent = Math.round(proxy.v) + suffix;
            },
          });
        });
      });

      // Recalc positions once images/fonts have settled.
      ScrollTrigger.refresh();
    })();

    return () => {
      disposed = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
