"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Sitewide sign-off above the social wall: one oversized line that is itself
 * the link to /contact. Hidden on /contact (you're already there).
 */
export default function FooterCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/contact")) return null;

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="section-label" style={{ color: "var(--brand-lime)" }} data-reveal>
          Your move
        </div>
        <Link href="/contact" className="group mt-4 block" aria-label="Let's build. Get in touch">
          <span
            className="display-heading block transition-colors duration-300"
            style={{ fontSize: "clamp(84px, 17vw, 280px)", lineHeight: 0.86, color: "var(--brand-white)" }}
            data-reveal-text
          >
            Let&apos;s <span className="marker-highlight">build.</span>
          </span>
          <span
            className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase md:mt-10"
            style={{ color: "var(--brand-lime)", letterSpacing: "0.14em" }}
          >
            Start a conversation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2" aria-hidden>
              →
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
