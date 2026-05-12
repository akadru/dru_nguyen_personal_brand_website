"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { SearchTrigger } from "./SearchModal";

const PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/scholarly-warrior#stories", label: "Key Stories" },
  { href: "/xood", label: "Xood" },
  { href: "/blog", label: "Blog" },
  { href: "/speaking", label: "Speaking" },
  { href: "/press", label: "Press" },
];

const SECONDARY = [
  { href: "/newsletter", label: "Tuesday Brief" },
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

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-colors"
        style={{
          background: scrolled ? "rgba(10,27,36,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(176,190,197,0.15)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          {/* Wordmark — left */}
          <Link
            href="/"
            className="text-base font-extrabold uppercase tracking-tight transition-colors hover:text-[var(--brand-lime)]"
            style={{ color: "var(--brand-white)", letterSpacing: "0.04em" }}
          >
            Dru Nguyen
          </Link>

          {/* Right side — search + hamburger only */}
          <div className="flex items-center gap-3">
            <SearchTrigger compact />
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
              style={{ borderColor: "rgba(242,242,242,0.4)", color: "var(--brand-white)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU — Bartlett pattern */}
      {open && (
        <div
          className="fixed inset-0 z-[80] overflow-y-auto"
          style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}
          role="dialog"
          aria-modal
        >
          <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 py-6 md:px-10 md:py-8">
            {/* Top row: wordmark + close */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-base font-extrabold uppercase tracking-tight"
                style={{ color: "var(--brand-jungle)", letterSpacing: "0.04em" }}
              >
                Dru Nguyen
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center transition-transform hover:rotate-90"
                style={{ color: "var(--brand-jungle)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            {/* Big primary menu */}
            <nav className="mt-16 flex flex-1 flex-col justify-center md:mt-24">
              <ul className="flex flex-col gap-1">
                {PRIMARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group relative block py-1 font-extrabold uppercase leading-[0.95] tracking-tight transition-transform hover:translate-x-2"
                      style={{
                        fontSize: "clamp(40px, 7.5vw, 92px)",
                        letterSpacing: "-0.025em",
                        color: "var(--brand-jungle)",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-10 h-px md:my-14" style={{ background: "rgba(10,27,36,0.4)" }} />

              <ul className="flex flex-col gap-1">
                {SECONDARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 font-extrabold uppercase leading-[0.95] tracking-tight transition-transform hover:translate-x-2"
                      style={{
                        fontSize: "clamp(32px, 6vw, 64px)",
                        letterSpacing: "-0.02em",
                        color: "var(--brand-jungle)",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom row: socials */}
            <div className="mt-16 flex items-center justify-between border-t pt-6" style={{ borderColor: "rgba(10,27,36,0.4)" }}>
              <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
                Asia/Ho_Chi_Minh · #DoingGoodWithData
              </div>
              <div onClick={() => setOpen(false)}>
                <SocialIcons variant="topbar" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
