"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SearchTrigger } from "./SearchModal";

type Sub = { href: string; label: string };
type Pillar = { id: string; label: string; tagline: string; sub: Sub[] };

const pillars: Pillar[] = [
  {
    id: "operator",
    label: "Dru Nguyen",
    tagline: "Operates businesses",
    sub: [
      { href: "/about", label: "My Story" },
      { href: "/ventures", label: "Ventures" },
      { href: "/speaking", label: "Speaking" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    id: "ai",
    label: "AI Operator",
    tagline: "Teaches what works",
    sub: [
      { href: "/blog", label: "Blog" },
      { href: "/newsletter", label: "Tuesday Brief" },
      { href: "/content", label: "Content Hub" },
      { href: "/blog", label: "Frameworks" },
    ],
  },
  {
    id: "ventures",
    label: "Ventures",
    tagline: "Six businesses, three industries",
    sub: [
      { href: "/ventures", label: "Xood" },
      { href: "/ventures", label: "Skylight" },
      { href: "/ventures", label: "Tictag Singapore" },
      { href: "/ventures", label: "East West Brewery" },
      { href: "/ventures", label: "Nuen Motor" },
      { href: "/ventures", label: "GAM Entertainment" },
    ],
  },
];

export default function Nav() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openPillar, setOpenPillar] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function open(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenPillar(id);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenPillar(null), 150);
  }

  return (
    <header
      className="sticky top-0 z-50 transition-colors"
      style={{
        background: scrolled || openPillar ? "rgba(10,27,36,0.96)" : "transparent",
        backdropFilter: scrolled || openPillar ? "blur(8px)" : "none",
        borderBottom: scrolled || openPillar ? "1px solid rgba(176,190,197,0.2)" : "1px solid transparent",
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight" style={{ color: "var(--brand-white)" }}>
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-base font-extrabold"
            style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", border: "1px solid var(--brand-lime)" }}
          >
            D
          </span>
          <span className="text-lg">Dru Nguyen</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="relative"
              onMouseEnter={() => open(p.id)}
              onFocusCapture={() => open(p.id)}
            >
              <button
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--brand-white)", letterSpacing: "0.1em", opacity: openPillar === p.id ? 1 : 0.85 }}
              >
                {p.label}
              </button>
            </div>
          ))}
          <Link
            href="/contact"
            className="ml-3 text-sm font-bold uppercase tracking-wider"
            style={{ color: "var(--brand-white)", letterSpacing: "0.1em", opacity: 0.85 }}
          >
            Contact
          </Link>
          <div className="ml-3">
            <SearchTrigger />
          </div>
          <Link
            href="/newsletter"
            className="ml-3 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.1em" }}
          >
            Newsletter
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <div className="lg:hidden">
            <SearchTrigger compact />
          </div>
          <button
            aria-label="Open menu"
            className="p-2"
            onClick={() => setOpenMobile((o) => !o)}
            style={{ color: "var(--brand-white)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {openMobile ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M3 6h18M3 12h18M3 18h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      {openPillar && (
        <div
          className="hidden lg:block"
          style={{ background: "rgba(10,27,36,0.97)", borderTop: "1px solid rgba(173,251,73,0.25)" }}
          onMouseEnter={() => open(openPillar)}
        >
          <div className="mx-auto grid max-w-[1300px] gap-12 px-5 py-10 md:grid-cols-[1fr_2fr] md:px-10">
            {pillars
              .filter((p) => p.id === openPillar)
              .map((p) => (
                <div key={p.id} className="contents">
                  <div>
                    <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                      {p.label}
                    </div>
                    <p className="mt-3 text-2xl font-extrabold" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
                      {p.tagline}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {p.sub.map((s) => (
                      <Link
                        key={s.href + s.label}
                        href={s.href}
                        className="text-base font-semibold transition-colors hover:text-[var(--brand-lime)]"
                        style={{ color: "var(--brand-white)" }}
                        onClick={() => setOpenPillar(null)}
                      >
                        {s.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {openMobile && (
        <div className="lg:hidden" style={{ background: "rgba(10,27,36,0.98)" }}>
          <nav className="flex flex-col px-5 pb-6 pt-2">
            {pillars.map((p) => (
              <div key={p.id} className="border-b py-4" style={{ borderColor: "rgba(176,190,197,0.15)" }}>
                <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                  {p.label}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {p.sub.map((s) => (
                    <Link
                      key={s.href + s.label}
                      href={s.href}
                      onClick={() => setOpenMobile(false)}
                      className="text-sm font-semibold"
                      style={{ color: "var(--brand-white)" }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpenMobile(false)}
              className="mt-4 py-2 text-sm font-bold uppercase"
              style={{ color: "var(--brand-white)", letterSpacing: "0.1em" }}
            >
              Contact
            </Link>
            <Link
              href="/newsletter"
              onClick={() => setOpenMobile(false)}
              className="mt-2 inline-block self-start rounded-full px-4 py-2 text-xs font-bold uppercase"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.1em" }}
            >
              Newsletter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
