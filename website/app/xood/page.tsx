import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Xood, the AI Workflow Marketplace",
  description:
    "Xood gives you ready-to-run AI workflows built by experts for your exact job. Browse, run, get results. Built for Vietnam.",
};

// The plan (StoryBrand): browse → run → get results.
const steps = [
  { n: "01", title: "Browse", body: "Find a workflow built for your exact job, marketing, HR, finance, legal, accounting." },
  { n: "02", title: "Run", body: "Follow the guided steps to complete it. No AI expertise required, no blank prompt box." },
  { n: "03", title: "Get results", body: "Real outcomes in your actual work, often in the first fifteen minutes." },
];

// Authority: why Xood can help.
const proof = [
  { title: "Built for Vietnam", body: "Vietnamese language, business context, and local integrations, not a translated afterthought." },
  { title: "Proven workflows", body: "Built by real experts, rated by real users. The ones that work rise to the top." },
  { title: "One platform, not five", body: "Replaces 5+ scattered AI subscriptions with a single place to get work done." },
  { title: "15 minutes to value", body: "The bar we hold ourselves to: a real result today, not a course you finish someday." },
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
              AI Workflow Marketplace · Vietnam
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(56px, 11vw, 168px)" }}>
              Xood.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--brand-lime)" }}>
              The era of figuring out AI is over.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Most people are tired of hearing they should use AI, but no one shows them how.{" "}
              <strong style={{ color: "var(--brand-white)" }}>Xood gives you ready-to-run workflows built by experts for your exact job.</strong>{" "}
              Browse, run, get results. In minutes, not months.
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
                Start free on xood.io →
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

      {/* THE GAP — villain + empathy */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label">The gap</div>
          </Reveal>
          <Reveal delay={1}>
            <p
              className="mt-8 italic"
              style={{
                fontFamily: "var(--font-prose)",
                fontSize: "clamp(32px, 5vw, 68px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--brand-white)",
              }}
            >
              You&apos;re not behind. You were just never shown a <span style={{ color: "var(--brand-lime)" }}>simple way to start.</span>
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Everyone says AI is the future, but nobody showed you where to begin. Your boss expects it, your
              competitors may already be using it, and quietly you wonder if you&apos;re falling behind. We get it.
              Xood exists to close that gap.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE PLAN */}
      <section id="how" className="py-16 md:py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">How it works</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--brand-white)" }}>
              Browse. Run. <span style={{ color: "var(--brand-myrtle)" }}>Done.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-3 text-base" style={{ color: "var(--brand-pastel)" }}>Familiar like Shopee or Lazada: find it, run it, done.</p>
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

      {/* WHY XOOD — authority */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Why Xood</div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {proof.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) as 0 | 1}>
                <article className="h-full rounded-2xl p-7" style={{ background: "var(--brand-jungle)", borderTop: "3px solid var(--brand-lime)" }}>
                  <h3 className="text-xl font-extrabold leading-snug" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TWO WAYS IN — Adopter + Builder */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Two ways in</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--brand-white)" }}>
              Use it. Or <span style={{ color: "var(--brand-myrtle)" }}>build it.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col rounded-2xl p-8" style={{ background: "var(--brand-jungle)", border: "1px solid rgba(176,190,197,0.25)" }}>
                <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Use it</div>
                <h3 className="mt-3 text-2xl font-extrabold" style={{ color: "var(--brand-white)" }}>Get real work done</h3>
                <p className="mt-4 flex-1 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                  Browse a workflow for your job, follow the guided steps, and walk away with a finished report, a
                  screened shortlist, a processed batch. Buy back the hours, and stop guessing whether you&apos;re
                  doing AI right.
                </p>
                <Link href="https://xood.io" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
                  Start free →
                </Link>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="flex h-full flex-col rounded-2xl p-8" style={{ background: "var(--brand-jungle)", border: "1px solid rgba(176,190,197,0.25)" }}>
                <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Build it</div>
                <h3 className="mt-3 text-2xl font-extrabold" style={{ color: "var(--brand-white)" }}>Turn expertise into income</h3>
                <p className="mt-4 flex-1 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                  You&apos;ve got the expertise. Xood is where the work gets seen, used, and paid. Build the workflow
                  you already know, share it, and earn from skill that used to stay locked inside one company.
                </p>
                <Link href="https://xood.io" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
                  Start building →
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Someone already built the workflow for <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>your exact job.</em>
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://xood.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
            >
              Start free on xood.io →
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
