"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
  { href: "/ventures", label: "Ventures" },
  { href: "/speaking", label: "Speaking" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      style={{
        background: scrolled ? "rgba(10,27,36,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--brand-pastel)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight" style={{ color: "var(--brand-white)" }}>
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-full font-extrabold"
            style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)" }}
          >
            D
          </span>
          <span className="text-base">Dru Nguyen</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-opacity hover:opacity-100"
              style={{ color: "var(--brand-white)", opacity: 0.85 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
          >
            Newsletter
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          style={{ color: "var(--brand-white)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M3 6h18M3 12h18M3 18h18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ background: "rgba(10,27,36,0.98)" }}>
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold"
                style={{ color: "var(--brand-white)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block self-start rounded-full px-4 py-2 text-xs font-bold uppercase"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Newsletter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
