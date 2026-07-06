import Link from "next/link";
import { SOCIAL_LINKS } from "./SocialIcons";

/**
 * GaryVee-style footer stack, sitewide:
 * 1. Newsletter band (near-black, every page)
 * 2. Social logo wall
 * 3. Minimal one-line copyright — wayfinding lives in the sidebar nav.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* 1. NEWSLETTER BAND */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#050E14", color: "var(--brand-white)", borderTop: "4px solid var(--brand-lime)" }}
      >
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <h2 className="display-heading" style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            Sign up for my <span className="marker-highlight">weekly newsletter</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--brand-pastel)" }}>
            One operator essay. Every Tuesday. 8AM Vietnam time. AI workflows, operator lessons,
            and the occasional story from running Skylight at 2am.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Subscribe, it&apos;s free
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
              style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
            >
              Read a sample issue
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL WALL */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 border py-10 transition-colors hover:border-[var(--brand-lime)]"
                style={{ borderColor: "rgba(176,190,197,0.2)", color: "var(--brand-white)" }}
              >
                <span className="h-10 w-10 transition-colors group-hover:text-[var(--brand-lime)]" aria-hidden>
                  {s.svg}
                </span>
                <span className="display-heading text-2xl">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MINIMAL COPYRIGHT LINE */}
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
