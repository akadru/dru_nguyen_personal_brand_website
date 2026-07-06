import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Study: drunguyen.me, built with Claude | Dru Nguyen",
  description:
    "How this site was designed, written, and coded with Claude: the research, the build, the publishing system, and the same-day deploy.",
  alternates: { canonical: "/built-with-ai/drunguyen-site" },
};

const CLAUDE_DID = [
  {
    step: "Research",
    body: "Claude tore down the reference site section by section: layout architecture, navigation, typography, color, content patterns. Then it mapped this codebase the same way before touching a line.",
  },
  {
    step: "Design system",
    body: "A display type system in Bebas Neue, the lime marker-highlight signature, and a fixed sidebar nav, all built inside the existing Scholarly Warrior palette and its locked accessibility rules.",
  },
  {
    step: "Code",
    body: "Every component on this site: the sidebar, the pillar tiles, the filterable feed, the footer stack, the video lightbox. Written by Claude, reviewed in the browser, corrected, and shipped.",
  },
  {
    step: "Verify",
    body: "Claude ran the site in a browser and checked its own work: contrast rules, mobile layout, navigation, filters, and a production build across all pages before anything went live.",
  },
  {
    step: "Deploy",
    body: "Committed to GitHub and deployed through Vercel CI/CD the same day the redesign started. The site you are reading is that deploy.",
  },
];

const SHOTS = [
  { src: "/images/built/personal-site.jpg", alt: "drunguyen.me homepage with the sidebar nav and display headlines" },
  { src: "/images/built/personal-site-blog.jpg", alt: "The blog with topic filter pills on the white content surface" },
  { src: "/images/built/personal-site-ventures.jpg", alt: "The ventures page with full-width photo tiles" },
];

export default function DrunguyenSiteCaseStudy() {
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
              Case Study · drunguyen.me
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-heading mt-6" style={{ fontSize: "clamp(52px, 8.5vw, 124px)" }}>
              This site is
              <br />
              <span className="marker-highlight">the proof</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              I say I run businesses with AI. Here is what that looks like when the product is a
              website: designed, written, coded, verified, and deployed with Claude. You are
              standing inside the case study.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { n: "1", label: "Working day from design teardown to production deploy" },
              { n: "31", label: "Pages built and verified before shipping" },
              { n: "0", label: "Agencies, designers, or developers hired" },
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

      {/* WHAT CLAUDE DID */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-white)", borderTop: "1px solid rgba(10,27,36,0.1)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">The Build</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-heading mt-3" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", color: "var(--brand-jungle)" }}>
              What Claude actually did
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {CLAUDE_DID.map((item, i) => (
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
                  The publishing system
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  The site does not stop at launch. An AI content system drafts the weekly posts,
                  generates the hero images, and publishes on schedule. One operator, a full
                  content team&apos;s output.
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
              Shipped, not <span className="marker-highlight">staged</span>
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
                Stack: Claude Code · Next.js 16 · Tailwind 4 · Supabase · Vercel
              </div>
              <a
                href="https://www.drunguyen.me/"
                className="editorial-link font-bold uppercase"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.14em" }}
              >
                You are already on the live demo →
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
