import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Speaking — Dru Nguyen",
  description: "Speaking, coaching, and advisory: AI workflows, EOS, operator economics. EO forum sessions, founder offsites, AI workshops.",
};

const topics = [
  { label: "AI for Operators", body: "How to use AI as a workflow, not a tool. Real prompts, real templates, real outcomes from Xood." },
  { label: "EOS in Practice", body: "What it actually takes to implement EOS — including pre-revenue startups. The 9-month buy-in story." },
  { label: "Building in Vietnam", body: "Cross-industry pattern recognition from running businesses across F&B, AI, and entertainment." },
  { label: "The Scholarly Warrior", body: "Discipline + learning as an integrated philosophy. Identity work for hard conversations and decisions." },
];

export default function SpeakingPage() {
  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1200px] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>Speaking</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Bring Dru to <span style={{ color: "var(--brand-lime)" }}>your team.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              EO forum sessions, founder offsites, AI workshops, EOS coaching. Vietnam, SEA, international.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 grid gap-5 md:grid-cols-2">
          {topics.map((t, i) => (
            <Reveal key={t.label} delay={(i % 3) as 0 | 1 | 2}>
              <article className="h-full rounded-xl p-7" style={{ background: "var(--brand-tea)", borderTop: "2px solid var(--brand-myrtle)" }}>
                <div className="section-label">Topic</div>
                <h3 className="mt-3 text-2xl font-extrabold" style={{ color: "var(--brand-jungle)" }}>{t.label}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-body)" }}>{t.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-16 text-center" style={{ background: "var(--brand-tea)" }}>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider" style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}>
          Book a conversation
        </Link>
      </section>
    </>
  );
}
