import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Study: EOS Operating System, built with Claude | Dru Nguyen",
  description:
    "How the full EOS practice became working software: rocks, scorecard, the 90-minute weekly meeting, issues, and the business plan, built with Claude and run by a real team.",
  alternates: { canonical: "/built-with-ai/eos-platform" },
};

const BUILD_STEPS = [
  {
    step: "The rules",
    body: "EOS works because of its discipline: 90-day rocks with milestones, a weekly scorecard, and a meeting that never changes shape. The platform encodes those rules instead of trusting everyone to remember them.",
  },
  {
    step: "The modules",
    body: "Run the business: dashboard, weekly meeting, metrics, rocks, to-dos, issues, and headlines. Foundation: business plan, org chart, and team. Ten modules, one tool, no spreadsheets taped together.",
  },
  {
    step: "The meeting",
    body: "The weekly meeting runs the full agenda by the book: check-in, scorecard, rock review, headlines, to-do review, IDS, conclude. Ninety minutes, timed, same day, same time, every week.",
  },
  {
    step: "The build",
    body: "Designed and coded with Claude. Multi-company from day one: switch between businesses in one place, because I run more than one and the operating rhythm is the same everywhere.",
  },
  {
    step: "The dogfood",
    body: "This is not a concept. My actual team runs our real quarters on it: real rocks, real scorecard numbers, real issues solved in real meetings. When the tool annoys us, we fix the tool.",
  },
];

const SHOTS = [
  { src: "/images/built/eos-platform.jpg", alt: "EOS platform dashboard: rocks on track, to-dos, issues, and pulse" },
  { src: "/images/built/eos-rocks.jpg", alt: "Q3 rocks with owners, due dates, milestones, and on-track status" },
  { src: "/images/built/eos-weekly-meeting.jpg", alt: "The weekly meeting screen with the full 90-minute agenda" },
];

export default function EosPlatformCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 md:px-10 md:pt-40 md:pb-24">
          <Reveal>
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}
            >
              Case Study · EOS Operating System
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-heading mt-6" style={{ fontSize: "clamp(52px, 8.5vw, 124px)" }}>
              The whole EOS practice,
              <br />
              <span className="marker-highlight">as software</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              I ran EOS across my companies on spreadsheets, docs, and whiteboards. Then I rebuilt
              the entire practice as a platform with Claude: same rules, same rhythm, zero drift.
              The demo is live with sample data.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a
              href="https://demo.drunguyen.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Open the live demo <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { n: "10", label: "EOS modules, from rocks to org chart, in one platform" },
              { n: "90", label: "Minutes: the weekly meeting agenda, enforced by the tool" },
              { n: "0", label: "Mockups: the demo is the real product with sample data" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="border-t-2 pt-6" style={{ borderColor: "var(--brand-myrtle)" }}>
                  <div className="display-heading" style={{ fontSize: "clamp(56px, 7vw, 96px)", color: "var(--brand-jungle)" }}>
                    {s.n}
                  </div>
                  <p className="mt-3 text-base" style={{ color: "var(--brand-body)" }}>
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE BUILD */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-white)", borderTop: "1px solid rgba(10,27,36,0.1)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">The Build</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-heading mt-3" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", color: "var(--brand-jungle)" }}>
              By the book, then by the code
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {BUILD_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={(i % 3) as 0 | 1 | 2}>
                <article className="border-t pt-6" style={{ borderColor: "rgba(10,27,36,0.15)" }}>
                  <div
                    className="text-[10px] font-extrabold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.28em" }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold" style={{ color: "var(--brand-jungle)" }}>
                    {item.step}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-body)" }}>
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={2}>
              <article className="border-t pt-6" style={{ borderColor: "rgba(10,27,36,0.15)" }}>
                <div
                  className="text-[10px] font-extrabold uppercase"
                  style={{ color: "var(--brand-myrtle)", letterSpacing: "0.28em" }}
                >
                  Ongoing
                </div>
                <h3 className="mt-2 text-xl font-extrabold" style={{ color: "var(--brand-jungle)" }}>
                  The practice sharpens the product
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  Every quarter we run teaches us something about running quarters. Those lessons
                  ship into the platform the same week, with Claude writing the code.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>The Result</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-heading mt-3" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", color: "var(--brand-white)" }}>
              Run the business, <span className="marker-highlight">by the book</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SHOTS.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) as 0 | 1 | 2}>
                <div className="relative aspect-[16/10] overflow-hidden border" style={{ borderColor: "rgba(176,190,197,0.25)" }}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div
              className="mt-12 flex flex-col items-start gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between"
              style={{ borderColor: "rgba(176,190,197,0.2)", color: "var(--brand-pastel)" }}
            >
              <div className="font-bold uppercase" style={{ letterSpacing: "0.14em" }}>
                Stack: Claude Code · Multi-company · Live demo with sample data
              </div>
              <a
                href="https://demo.drunguyen.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-bold uppercase"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.14em" }}
              >
                Click anything in the demo →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <Reveal>
            <h2 className="display-heading" style={{ fontSize: "clamp(40px, 6vw, 88px)", color: "var(--brand-white)" }}>
              See the other <span className="marker-highlight">builds</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/built-with-ai"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                All builds
              </Link>
              <Link
                href="/contact?intent=speaking"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                Build one with Dru
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
