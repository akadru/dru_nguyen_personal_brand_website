import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Xood, Doing Good With AI",
  description:
    "Xood helps people and businesses in Vietnam turn AI into real results: knowledge, tools, and ready-to-run workflows in one place, plus a community that builds and shares what works.",
};

// The plan (StoryBrand): three simple steps the user takes.
const steps = [
  { n: "01", title: "Pick a workflow", body: "Start from a proven, ready-to-run workflow instead of a blank prompt box. Choose the one that fits the job in front of you." },
  { n: "02", title: "Get a real result", body: "Run it and see the outcome, not theory. The point is value you can use today, often in the first fifteen minutes." },
  { n: "03", title: "Share what works", body: "Builders create, share, and rate workflows. The best ones rise to the top, so the whole community gets better together." },
];

// The ecosystem: three ways in, under one brand.
const products = [
  { title: "Xood Platform", body: "Knowledge, tools, and ready-to-run workflows in one place, so anyone can bring AI into their daily work." },
  { title: "Data Solution", body: "End-to-end data for teams that need it: collected, cleaned, and turned into insight you can act on." },
  { title: "AI Solution", body: "AI built into how you operate: assistants, computer vision, forecasting, and agents that do real work." },
];

export default function XoodPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative z-10 mx-auto max-w-[1300px] px-5 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
          <Reveal>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Practical AI Adoption · Vietnam
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(56px, 11vw, 168px)" }}>
              Xood.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--brand-lime)" }}>
              Doing good with AI.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Most people and businesses in Vietnam want to use AI, but it feels distant and complicated.{" "}
              <strong style={{ color: "var(--brand-white)" }}>Xood brings the knowledge, the tools, and ready-to-run workflows into one trusted place</strong>,
              so you can turn AI into a real result today. Built for Vietnam first.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://xood.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Visit xood.io →
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                See how it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY IT EXISTS — the problem, and the belief behind it */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label">Why Xood exists</div>
          </Reveal>
          <Reveal delay={1}>
            <p
              className="mt-8 italic"
              style={{
                fontFamily: "var(--font-prose)",
                fontSize: "clamp(34px, 5.5vw, 72px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "var(--brand-white)",
              }}
            >
              AI shouldn&apos;t be a privilege of <span style={{ color: "var(--brand-lime)" }}>Big Tech.</span>
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Too many scattered tools. Enterprise AI priced out of reach. And the quiet worry that you&apos;re
              falling behind or wasting money on things that never quite work. Xood exists to put AI within reach
              for people and businesses in Vietnam, and to make it actually work on real tasks.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS — the plan */}
      <section id="how" className="py-16 md:py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">How it works</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--brand-white)" }}>
              Three steps, <span style={{ color: "var(--brand-myrtle)" }}>real results.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl p-7" style={{ background: "var(--brand-jungle)", borderTop: "3px solid var(--brand-myrtle)" }}>
                  <div className="display-heading" style={{ fontSize: "40px", color: "var(--brand-myrtle)", lineHeight: 1 }}>{s.n}</div>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM — three products */}
      <section id="ecosystem" className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">The Xood ecosystem</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--brand-white)" }}>
              One brand, <span style={{ color: "var(--brand-myrtle)" }}>three ways in.</span>
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-10 grid gap-5 md:grid-cols-3">
            {products.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl p-8" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", borderTop: "3px solid var(--brand-lime)" }}>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Product</div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight" style={{ letterSpacing: "-0.01em" }}>{o.title}</h3>
                  <p className="mt-4 leading-relaxed" style={{ color: "rgba(242,242,242,0.85)" }}>{o.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Ready to do good <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>with AI?</em>
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://xood.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
            >
              Visit xood.io →
            </Link>
            <Link
              href="/contact?intent=xood"
              className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ borderColor: "var(--brand-jungle)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Talk to Dru
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
