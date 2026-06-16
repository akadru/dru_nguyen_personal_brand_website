"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { SearchTrigger } from "./SearchModal";

const PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Dru's Story" },
  { href: "/ventures/xood", label: "Xood" },
  { href: "/ventures/skylight", label: "Skylight" },
  { href: "/ventures/gam", label: "GAM Esports" },
  { href: "/ventures/tictag", label: "Tictag" },
  { href: "/ventures/eastwest", label: "East West" },
  { href: "/ventures/nuen", label: "Nuen Moto" },
  { href: "/ventures/eo", label: "Entrepreneurs' Org" },
  { href: "/blog", label: "News & Stories" },
  { href: "/speaking", label: "Speaking" },
];

const SECONDARY = [
  { href: "/newsletter", label: "Newsletter" },
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
          {/* Left cluster: wordmark + socials */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/" className="inline-flex" aria-label="Dru Nguyen, home">
              <span
                className="px-3 py-1 text-base font-extrabold"
                style={{
                  background: "transparent",
                  color: "var(--brand-lime)",
                  border: "2px solid var(--brand-lime)",
                  letterSpacing: "0.28em",
                  transform: "rotate(-2deg)",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  textShadow: "0 8px 14px rgba(173,251,73,0.18)",
                  display: "inline-block",
                }}
              >
                DRU.
              </span>
            </Link>
            <div className="hidden sm:block">
              <SocialIcons variant="topbar" />
            </div>
          </div>

          {/* Right cluster: search + hamburger */}
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

      {/* SLIDE-IN PANEL MENU, right-anchored, ~40% width on desktop */}
      {/* Backdrop scrim, clickable to close */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(10,27,36,0.55)", backdropFilter: open ? "blur(2px)" : "none" }}
        aria-hidden
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-modal
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-[80] h-full w-1/4 overflow-y-auto transition-transform duration-[450ms] ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}
      >
        <div className="flex min-h-full flex-col px-6 py-6 md:px-10 md:py-8">
          {/* Top row: wordmark + close */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex"
              aria-label="Dru Nguyen, home"
            >
              <span
                className="px-3 py-1 text-base font-extrabold"
                style={{
                  background: "transparent",
                  color: "var(--brand-jungle)",
                  border: "2px solid var(--brand-jungle)",
                  letterSpacing: "0.28em",
                  transform: "rotate(-2deg)",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  display: "inline-block",
                }}
              >
                DRU.
              </span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center transition-transform hover:rotate-90"
              style={{ color: "var(--brand-jungle)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Primary menu */}
          <nav className="mt-10 flex flex-1 flex-col justify-center md:mt-14">
            <ul className="flex flex-col gap-1">
              {PRIMARY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-item-line group inline-block py-1 font-extrabold uppercase leading-[1.0] tracking-tight transition-transform hover:translate-x-2"
                    style={{
                      fontSize: "clamp(18px, 2vw, 26px)",
                      letterSpacing: "-0.02em",
                      color: "var(--brand-jungle)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px md:my-8" style={{ background: "rgba(10,27,36,0.4)" }} />

            <ul className="flex flex-col gap-1">
              {SECONDARY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-item-line inline-block py-1 font-extrabold uppercase leading-[1.0] tracking-tight transition-transform hover:translate-x-2"
                    style={{
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      letterSpacing: "-0.015em",
                      color: "var(--brand-jungle)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom row: socials only */}
          <div className="mt-10 flex items-center justify-between border-t pt-6" style={{ borderColor: "rgba(10,27,36,0.4)" }}>
            <div className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
              © Dru Nguyen
            </div>
            <div onClick={() => setOpen(false)}>
              <SocialIcons variant="topbar" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
