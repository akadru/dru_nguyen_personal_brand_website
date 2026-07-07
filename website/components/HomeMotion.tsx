"use client";
import { useEffect } from "react";

/**
 * Homepage motion system — Steven Bartlett-style smooth scroll + scroll-linked motion.
 * Lenis provides buttery momentum scrolling; GSAP ScrollTrigger drives the reveals.
 * Everything is scoped to the homepage (mount/unmount) and fully disabled under
 * prefers-reduced-motion. Elements opt in via data-attributes:
 *   data-reveal-text   big display headings — split into lines, rise behind a mask
 *   data-reveal-media  images/cards — clip-wipe + slight scale as they enter
 *   data-reveal        generic block — rise + fade (batched, so rows stagger)
 *   data-parallax="N"  scrub parallax; N = yPercent drift
 *   data-count         number that rolls up from 0 (keeps any non-digit suffix)
 */
export default function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; destroy: () => void; on: (e: string, cb: () => void) => void } | undefined;
    let ctx: { revert: () => void } | undefined;
    let onTick: ((t: number) => void) | undefined;
    let disposed = false;

    (async () => {
      const [lenisMod, gsapMod, stMod, splitMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ]);
      if (disposed) return;
      const Lenis = lenisMod.default;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const { ScrollTrigger } = stMod;
      const { SplitText } = splitMod;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      // 1. Smooth momentum scrolling, driven off GSAP's ticker so ScrollTrigger stays in sync.
      lenis = new Lenis({ duration: 1.05, smoothWheel: true }) as unknown as typeof lenis;
      lenis!.on("scroll", ScrollTrigger.update);
      onTick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
      document.documentElement.classList.add("home-motion");

      ctx = gsap.context(() => {
        // Headline reveals — split into lines, each rises out from behind a mask.
        // Bigger travel + longer decel so the rise reads clearly.
        gsap.utils.toArray<HTMLElement>("[data-reveal-text]").forEach((el) => {
          const split = new SplitText(el, { type: "lines", mask: "lines" });
          gsap.from(split.lines, {
            yPercent: 130,
            duration: 1.15,
            ease: "expo.out",
            stagger: 0.16,
            scrollTrigger: { trigger: el, start: "top 82%" },
          });
        });

        // Media reveals — clip-wipe up while rising and settling from a zoom.
        // Batched so a row staggers. More travel + a longer settle = premium.
        ScrollTrigger.batch("[data-reveal-media]", {
          start: "top 82%",
          onEnter: (els) =>
            gsap.from(els, {
              clipPath: "inset(0% 0% 100% 0%)",
              scale: 1.14,
              yPercent: 8,
              duration: 1.3,
              ease: "expo.out",
              stagger: 0.18,
              overwrite: true,
            }),
        });

        // Generic block reveals — a clearly visible rise + fade, batched for row stagger.
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 86%",
          onEnter: (els) =>
            gsap.from(els, {
              y: 64,
              autoAlpha: 0,
              duration: 1.0,
              ease: "expo.out",
              stagger: 0.14,
              overwrite: true,
            }),
        });

        // Parallax — stronger scrub drift for visible depth.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = parseFloat(el.dataset.parallax || "10");
          gsap.fromTo(
            el,
            { yPercent: -amt },
            {
              yPercent: amt,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section") ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
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
            duration: 1.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
            onUpdate: () => {
              el.textContent = Math.round(proxy.v) + suffix;
            },
          });
        });
      });

      ScrollTrigger.refresh();
    })();

    return () => {
      disposed = true;
      document.documentElement.classList.remove("home-motion");
      ctx?.revert();
      if (onTick) {
        import("gsap").then((m) => (m.gsap ?? m.default).ticker.remove(onTick!));
      }
      lenis?.destroy();
    };
  }, []);

  return null;
}
