import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VenturesGrid from "@/components/VenturesGrid";

export const metadata: Metadata = {
  title: "Ventures — Dru Nguyen",
  description:
    "Six ventures across hospitality, AI data services, and entertainment. Xood, Skylight, Tictag, GAM Entertainment, East West Brewing, Nuen Motor.",
};

export default function VenturesPage() {
  return (
    <>
      {/* HERO — dark, clean, no decorative bar */}
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-20 md:px-10 md:pt-40 md:pb-28">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Ventures
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em" }}
            >
              Six businesses.
              <br />
              <span style={{ color: "var(--brand-lime)" }}>Three industries.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Operating, founding, and advising across hospitality, AI data services, and entertainment.
              Ten years of real ops — the lived material the content engine runs on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BARTLETT-STYLE FLUSH GRID */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <VenturesGrid />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-tea)" }}>
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 px-5 md:px-10 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}
          >
            Want to talk <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>partnership, investment, or advisory?</em>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
