import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Xood, Applied AI for Real Operations",
  description:
    "Operator-grade AI data. Xood is an AI data services company built on Tictag DNA, sharpened by ten years of operating businesses across three industries.",
};

const offerings = [
  { title: "Data Labelling for Long-Tail AI", body: "Building accurate, unbiased training data, especially for problems most AI labs ignore." },
  { title: "Operator-Grade AI Workflows", body: "AI deployments that survive contact with real teams, real ops, and real P&Ls." },
  { title: "Inclusive Data, by Design", body: "Working with underserved communities to make sure the future of AI doesn't leave them behind." },
];

const beliefs = [
  { title: "Data, not models, is the bottleneck.", body: "Most companies don't lack AI, they lack the labelled, structured, real-world data to make AI useful in their context." },
  { title: "Operators see what creators miss.", body: "Ten years of running real businesses tells you which AI use cases actually work and which are theatre." },
  { title: "Vietnam is the right launchpad.", body: "Long-tail problems, underserved communities, fast deployment, and a Tictag-Singapore data DNA." },
];

export default function XoodPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative z-10 mx-auto max-w-[1300px] px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
          <Reveal>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Identity Layer · 03, The IP
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(56px, 11vw, 168px)" }}>
              Xood.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--brand-lime)" }}>
              <em style={{ fontStyle: "italic" }}>applies</em> AI to real operations.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              <strong style={{ color: "var(--brand-white)" }}>Operator-grade AI data.</strong> Xood is an AI data services company building accurate,
              unbiased training data, especially for the long-tail problems most labs ignore. Built on the
              Tictag Singapore DNA. Sharpened by ten years of operating across hospitality, AI, and entertainment.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?intent=xood"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Work with Xood
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                Read the manifesto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-24 md:py-32" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label">The Manifesto</div>
          </Reveal>
          <Reveal delay={1}>
            <p
              className="mt-8 italic"
              style={{
                fontFamily: "var(--font-prose)",
                fontSize: "clamp(36px, 6vw, 80px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--brand-white)",
              }}
            >
              Doing <span style={{ color: "var(--brand-lime)" }}>good</span>
              <br />
              with data.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              In the AI world, companies lack data to train accurate, unbiased models, especially for long-tail
              problems. AI is advancing at breathtaking speed, and underserved communities are at risk of being
              left behind. Xood exists to close that gap.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THREE BELIEFS */}
      <section className="py-24 md:py-28" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">What We Believe</div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl p-7" style={{ background: "var(--brand-jungle)", borderTop: "3px solid var(--brand-myrtle)" }}>
                  <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>Belief</div>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-24 md:py-32" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Offerings</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--brand-white)" }}>
              How Xood <span style={{ color: "var(--brand-myrtle)" }}>shows up.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl p-8" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", borderTop: "3px solid var(--brand-lime)" }}>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Offering</div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight" style={{ letterSpacing: "-0.01em" }}>{o.title}</h3>
                  <p className="mt-4 leading-relaxed" style={{ color: "rgba(242,242,242,0.85)" }}>{o.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Got data, want AI to <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>actually work?</em>
          </p>
          <Link
            href="/contact?intent=xood"
            className="mt-10 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
          >
            Talk to Xood
          </Link>
        </div>
      </section>
    </>
  );
}
