import Link from "next/link";
import { SOCIAL_LINKS } from "./SocialIcons";

/**
 * GaryVee-style footer stack, sitewide:
 * 1. Social logo wall
 * 2. Minimal one-line copyright — wayfinding lives in the sidebar nav.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* 1. SOCIAL WALL */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-jungle)", borderTop: "4px solid var(--brand-lime)" }}>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 border py-5 transition-colors hover:border-[var(--brand-lime)] sm:gap-4 sm:py-10"
                style={{ borderColor: "rgba(176,190,197,0.2)", color: "var(--brand-white)" }}
              >
                <span className="h-6 w-6 transition-colors group-hover:text-[var(--brand-lime)] sm:h-10 sm:w-10" aria-hidden>
                  {s.svg}
                </span>
                <span className="display-heading text-sm sm:text-2xl">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MINIMAL COPYRIGHT LINE */}
      <div style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div
          className="mx-auto flex max-w-[1100px] flex-col gap-2 px-5 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-10"
          style={{ color: "var(--brand-pastel)" }}
        >
          <div>© {year} Dru Nguyen. All rights reserved.</div>
          <div className="font-semibold uppercase tracking-wider" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
            #FutureOfWork
          </div>
        </div>
      </div>
    </footer>
  );
}
