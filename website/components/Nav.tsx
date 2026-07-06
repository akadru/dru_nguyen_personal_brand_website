"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { SearchTrigger } from "./SearchModal";

// Three-pillar nav architecture: Name + verb, GaryVee-style.
const GROUPS = [
  {
    label: "Dru Nguyen",
    verb: "builds businesses",
    items: [
      { href: "/about", label: "My Story" },
      { href: "/ventures", label: "Ventures" },
      { href: "/press", label: "Press Kit" },
      { href: "/speaking", label: "Speaking" },
    ],
  },
  {
    label: "The AI Operator",
    verb: "runs 6 businesses with Claude",
    items: [
      { href: "/built-with-ai", label: "Built with AI" },
      { href: "/blog", label: "Blog" },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    label: "Scholarly Warrior",
    verb: "lives Care · Discipline · Grit",
    items: [
      { href: "/scholarly-warrior", label: "The Philosophy" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function Wordmark({ dark = false, onClick }: { dark?: boolean; onClick?: () => void }) {
  const color = dark ? "var(--brand-jungle)" : "var(--brand-lime)";
  return (
    <Link href="/" onClick={onClick} className="inline-flex" aria-label="Dru Nguyen, home">
      <span
        className="px-3 py-1 text-base font-extrabold"
        style={{
          background: "transparent",
          color,
          border: `2px solid ${color}`,
          letterSpacing: "0.28em",
          transform: "rotate(-2deg)",
          fontFamily: "var(--font-sans)",
          textShadow: dark ? "none" : "0 8px 14px rgba(173,251,73,0.18)",
          display: "inline-block",
        }}
      >
        DRU.
      </span>
    </Link>
  );
}

function BookCta({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href="/contact?intent=speaking"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.03] ${className}`}
      style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.08em" }}
    >
      Book Dru to Speak
    </Link>
  );
}

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
      {/* FIXED LEFT SIDEBAR — desktop only. Content scrolls beside it. */}
      <aside
        className="fixed inset-y-0 left-0 z-50 hidden w-[230px] flex-col overflow-y-auto px-7 py-8 lg:flex"
        style={{ background: "var(--brand-jungle)", borderRight: "1px solid rgba(176,190,197,0.15)" }}
        aria-label="Primary"
      >
        <div className="flex items-center justify-between">
          <Wordmark />
          <SearchTrigger compact />
        </div>

        <nav className="mt-12 flex flex-1 flex-col gap-9">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <div className="section-label" style={{ color: "var(--brand-lime)" }}>
                {g.label}
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="menu-item-line sidebar-link inline-block transition-colors hover:text-[var(--brand-lime)]"
                      style={{ color: "var(--brand-white)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-8">
          <BookCta />
          <SocialIcons variant="topbar" />
        </div>
      </aside>

      {/* STICKY TOP BAR — mobile / tablet only */}
      <header
        className="sticky top-0 z-50 transition-colors lg:hidden"
        style={{
          background: scrolled ? "rgba(10,27,36,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(176,190,197,0.15)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <div className="flex items-center gap-6 md:gap-8">
            <Wordmark />
            <div className="hidden sm:block">
              <SocialIcons variant="topbar" />
            </div>
          </div>

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

      {/* SLIDE-IN PANEL MENU — mobile / tablet */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(10,27,36,0.55)", backdropFilter: open ? "blur(2px)" : "none" }}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-modal
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-[80] h-full w-1/4 min-w-[280px] max-w-full overflow-y-auto transition-transform duration-[450ms] ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}
      >
        <div className="flex min-h-full flex-col px-6 py-6 md:px-10 md:py-8">
          <div className="flex items-center justify-between">
            <Wordmark dark onClick={() => setOpen(false)} />
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

          <nav className="mt-10 flex flex-1 flex-col justify-center gap-8 md:mt-14">
            {GROUPS.map((g) => (
              <div key={g.label}>
                <div className="section-label" style={{ color: "var(--brand-jungle)", opacity: 0.7 }}>
                  {g.label}
                </div>
                <ul className="mt-2 flex flex-col gap-1">
                  {g.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="menu-item-line display-heading inline-block py-1 transition-transform hover:translate-x-2"
                        style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "var(--brand-jungle)" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-10 flex items-center justify-between border-t pt-6" style={{ borderColor: "rgba(10,27,36,0.4)" }}>
            <div className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
              © Dru Nguyen
            </div>
            <div onClick={() => setOpen(false)}>
              <SocialIcons variant="topbar" tone="jungle" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
