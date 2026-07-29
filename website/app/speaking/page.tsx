import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Speaking | Dru Nguyen",
  description:
    "Speaking engagements, founder offsites, AI workshops, and EOS coaching. Bring Dru to your team. Vietnam, SEA, international.",
};

const topics = [
  { label: "AI for Operators", body: "How to use AI as a workflow, not a tool. Real prompts, real templates, real outcomes from Xood." },
  { label: "EOS in Practice", body: "What it actually takes to implement EOS, including pre-revenue startups. The 9-month buy-in story." },
  { label: "Building in Vietnam", body: "Cross-industry pattern recognition from operating across F&B, AI services, and entertainment." },
  { label: "Care · Discipline · Grit", body: "The Scholarly Warrior identity, discipline plus learning as an integrated philosophy. For founder offsites and leadership cohorts." },
];

const venues = [
  "Zero Project Conference",
  "EO Vietnam",
  "Tictag Summit",
  "Startup Grind HCMC",
  "Vietnam Tech Forum",
  "Founders Live SEA",
];

const testimonials = [
  {
    quote:
      "Dru speaks like he's already done what he's teaching, because he has. Our EO forum walked away with a workflow, not a buzzword.",
    name: "EO Vietnam · Forum lead",
  },
  {
    quote:
      "Cut through the AI hype faster than anyone we've hosted. The team was running his prompt template the next morning.",
    name: "Founder offsite · Saigon",
  },
];

const quickFacts = [
  { label: "Languages", value: "English · Vietnamese" },
  { label: "Based in", value: "Ho Chi Minh City, Vietnam" },
  { label: "Travels for", value: "Vietnam · SEA · International" },
  { label: "Booking lead time", value: "4 – 8 weeks ideal" },
  { label: "Response time", value: "Within 48 hours" },
  { label: "Press kit", value: "Available on /press" },
];

export default function SpeakingPage() {
  return (
    <>
      {/* HERO, 2-col Bartlett style: image left, copy right */}
      <section style={{ background: "var(--brand-jungle)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-20 pb-16 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-20 md:px-10 md:pt-28 md:pb-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/dru-hero.jpg"
                alt="Dru Nguyen on stage at Zero Project Conference 2026"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <div
                className="text-[10px] font-extrabold uppercase"
                style={{ color: "var(--brand-myrtle)", letterSpacing: "0.32em" }}
              >
                Speaking Engagements
              </div>
              <h1
                className="mt-6 display-heading"
                style={{
                  fontSize: "clamp(48px, 7vw, 96px)",
                  color: "var(--brand-white)",
                }}
              >
                Bring Dru to
                <br />
                <span className="marker-highlight">your team</span>
              </h1>
              <p
                className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl"
                style={{ color: "var(--brand-pastel)" }}
              >
                Operator-to-operator only. Ten years of real ops across hospitality, AI data services, and
                entertainment. No theory, no hype, no &ldquo;leverage your synergies.&rdquo;
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?intent=speaking"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
                >
                  Request a quote
                </Link>
                <Link
                  href="/press"
                  className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
                  style={{ borderColor: "rgba(176,190,197,0.4)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
                >
                  Press kit
                </Link>
              </div>
              <p className="mt-6 text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}>
                Response within 48 hours · Vietnam · SEA · International
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AS FEATURED AT, outlet logo row */}
      <section className="border-y py-12" style={{ background: "var(--brand-jungle)", borderColor: "rgba(176,190,197,0.4)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="text-center">
            <div className="section-label">As featured at</div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {venues.map((v) => (
              <span
                key={v}
                className="text-base font-extrabold uppercase tracking-tight md:text-xl"
                style={{ color: "var(--brand-myrtle)", letterSpacing: "0.04em", opacity: 0.85 }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS, 2-col grid, image-led if you have venue shots later */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Topics</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="mt-3 display-heading"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "var(--brand-white)" }}
            >
              Four <span style={{ color: "var(--brand-myrtle)" }}>signature talks.</span>
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {topics.map((t, i) => (
              <Reveal key={t.label} delay={(i % 2) as 0 | 1}>
                <article className="flex flex-col border-t pt-8" style={{ borderColor: "rgba(176,190,197,0.25)" }}>
                  <div className="text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}>
                    Talk · 0{i + 1}
                  </div>
                  <h3
                    className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl"
                    style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}
                  >
                    {t.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                    {t.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS, for organizers */}
      <section className="py-14 md:py-20" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">For organisers</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              The logistics, <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>upfront.</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl md:grid-cols-3" style={{ background: "rgba(176,190,197,0.2)" }}>
            {quickFacts.map((f) => (
              <Reveal key={f.label}>
                <div className="p-6" style={{ background: "var(--brand-jungle)" }}>
                  <div className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>{f.label}</div>
                  <div className="mt-2 text-base font-semibold" style={{ color: "var(--brand-white)" }}>{f.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">What past audiences say</div>
          </Reveal>
          <div className="mt-8 md:mt-10 grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <blockquote
                  className="border-l-4 pl-6 italic"
                  style={{ borderColor: "var(--brand-lime)", fontFamily: "var(--font-prose)" }}
                >
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "var(--brand-white)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer
                    className="mt-6 not-italic text-xs font-bold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}
                  >
                   , {t.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-8 px-5 md:px-10 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Ready to <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>book Dru?</em>
          </h2>
          <Link
            href="/contact?intent=speaking"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
