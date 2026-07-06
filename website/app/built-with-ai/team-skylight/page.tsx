import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Study: Team Skylight, built with Claude | Dru Nguyen",
  description:
    "How Skylight's culture, standards, and eleven years of history became one public source of truth the whole company onboards from, built with Claude.",
  alternates: { canonical: "/built-with-ai/team-skylight" },
};

const BUILD_STEPS = [
  {
    step: "Capture",
    body: "Eleven years of Skylight lived in people's heads: the mission, the values, what great service actually looks like on a Saturday night. Step one was pulling all of it out and writing it down, in Vietnamese first.",
  },
  {
    step: "Structure",
    body: "One clear ladder: foundation, core values, then five performance standards, each with five concrete actions per shift. Every team gets its own view: bar, service, hostess, security, kitchen, office.",
  },
  {
    step: "Build",
    body: "A custom Next.js site written with Claude: bilingual, fast, and public. It includes the company journey, guest reviews mapped to standards, and an interactive challenge that tests whether you actually know the material.",
  },
  {
    step: "Onboard",
    body: "Every new hire starts at teamskylight.com: the history, the values we hire for, the standards for their exact role. Day one no longer depends on who happens to be training you.",
  },
  {
    step: "Live",
    body: "It runs in the open. Guests, applicants, and the whole team see the same source of truth, and the /join portal turns culture into hiring: people apply because of what they read.",
  },
];

const SHOTS = [
  { src: "/images/built/team-skylight-values.jpg", alt: "Team Skylight core values section: Friendliness, Passion, Unity" },
  { src: "/images/built/team-skylight-standards.jpg", alt: "The five Skylight performance standards with per-role filters" },
  { src: "/images/built/team-skylight-timeline.jpg", alt: "The Skylight journey timeline since 2014" },
];

export default function TeamSkylightCaseStudy() {
  return (
    <>
      {/* HERO — faded product screenshot behind the title */}
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/built/team-skylight.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
            style={{ filter: "grayscale(1) contrast(1.05)", opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.82) 0%, rgba(10,27,36,0.68) 50%, rgba(10,27,36,0.96) 100%)" }}
          />
        </div>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative mx-auto max-w-[1400px] px-5 pt-28 pb-16 md:px-10 md:pt-40 md:pb-24">
          <Reveal>
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}
            >
              Case Study · Team Skylight
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-heading mt-6" style={{ fontSize: "clamp(52px, 8.5vw, 124px)" }}>
              Eleven years, finally
              <br />
              <span className="marker-highlight">written down</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Skylight ran on tribal knowledge for a decade. Team Skylight turns that into one
              public source of truth: our mission, vision, core values, standards, and history,
              for every role in the company. Built with Claude.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a
              href="https://teamskylight.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Visit teamskylight.com <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { n: "11", label: "Years of operations, finally written down" },
              { n: "5", label: "Performance standards every shift trains on" },
              { n: "1", label: "Source of truth for the entire company" },
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
              From tribal knowledge to a culture OS
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
                  Culture ships like code
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  When a standard sharpens or a chapter gets added to the story, we edit, push,
                  and the whole company sees it the same day. No stale handbooks in a drawer.
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
              The whole company, <span className="marker-highlight">one page at a time</span>
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
                Stack: Claude Code · Next.js · Vietnamese-first, bilingual
              </div>
              <a
                href="https://teamskylight.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-bold uppercase"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.14em" }}
              >
                Open the live site →
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
