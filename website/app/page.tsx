import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VenturesGrid from "@/components/VenturesGrid";
import StoriesGrid from "@/components/StoriesGrid";
import NewsGrid from "@/components/NewsGrid";
import NewsletterShowcase from "@/components/NewsletterShowcase";

export default function Home() {
  return (
    <>
      {/* 1. HERO, full-bleed photo · roles stack · manifesto italic · single CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/dru-hero.jpg"
            alt="Dru Nguyen speaking at Zero Project Conference 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.55) 0%, rgba(10,27,36,0.82) 60%, rgba(10,27,36,0.97) 100%)" }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(90deg, rgba(10,27,36,0.94) 0%, rgba(10,27,36,0.62) 45%, rgba(10,27,36,0.18) 75%, rgba(10,27,36,0.05) 100%)" }}
          />
        </div>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-36 pb-28 md:px-10 md:pt-48 md:pb-40 lg:min-h-[92vh] lg:flex lg:flex-col lg:justify-center">
          <Reveal>
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}
            >
              Dru Nguyen
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight max-w-5xl"
              style={{ fontSize: "clamp(56px, 11vw, 168px)", lineHeight: 0.88, letterSpacing: "-0.04em", textShadow: "0 2px 30px rgba(10,27,36,0.6)" }}
            >
              Operator.
              <br />
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Builder.</em>
              <br />
              Educator.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p
              className="mt-8 max-w-3xl"
              style={{
                fontSize: "clamp(22px, 3vw, 40px)",
                lineHeight: 1.25,
                color: "var(--brand-white)",
              }}
            >
              &ldquo;Knowledge with application is{" "}
              <em
                style={{
                  fontFamily: "'Plus Jakarta Sans', serif",
                  fontStyle: "italic",
                  color: "var(--brand-lime)",
                }}
              >
                wisdom.
              </em>
              &rdquo;
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?intent=speaking"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Book Dru to Speak
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-sm transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                About Dru
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors hover:text-[var(--brand-lime)] sm:ml-4"
                style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em", borderBottom: "1px solid rgba(176,190,197,0.4)" }}
              >
                Get the newsletter →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRO, Bartlett-style description block (text-left + portrait-right) */}
      <section className="py-24 md:py-36" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
            <Reveal>
              <p
                className="font-extrabold uppercase tracking-tight"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 56px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--brand-white)",
                }}
              >
                Dru Nguyen:{" "}
                <span style={{ color: "var(--brand-lime)" }}>operator</span>,{" "}
                <span style={{ color: "var(--brand-lime)" }}>investor</span>,{" "}
                <span style={{ color: "var(--brand-lime)" }}>builder</span>,{" "}
                <span style={{ color: "var(--brand-lime)" }}>lifelong learner</span>. The founder building{" "}
                <span style={{ color: "var(--brand-lime)" }}>Vietnam&apos;s next generation</span> of businesses and leaders across hospitality, AI, and entertainment.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-transform hover:translate-x-1"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}
              >
                About Dru
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)]"
                  style={{ borderColor: "var(--brand-lime)" }}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/dru-portrait-laughing.jpg"
                  alt="Dru Nguyen portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  style={{
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. VENTURES, Bartlett 4-up flush grid */}
      <section id="ventures" className="py-28 md:py-40" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Companies &amp; Investments</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--brand-white)" }}>
                Six businesses. <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Three industries.</em>
              </h2>
              <Link
                href="/ventures"
                className="self-start text-sm font-bold uppercase tracking-wider editorial-link md:self-end"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}
              >
                See full portfolio →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-16">
              <VenturesGrid />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. KEY STORIES, replaces Bartlett's Timeline */}
      <section id="stories" className="py-28 md:py-40" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>Key Stories</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--brand-white)" }}>
                Five lived <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>moments.</em>
              </h2>
              <Link
                href="/scholarly-warrior#stories"
                className="self-start text-sm font-bold uppercase tracking-wider editorial-link md:self-end"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}
              >
                Read all stories →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-16">
              <StoriesGrid />
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-16 flex flex-col items-start gap-6 border-t pt-10 md:flex-row md:items-center md:justify-between" style={{ borderColor: "rgba(176,190,197,0.2)" }}>
              <p className="max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
                Want one of these stories, with the operator lesson behind it, at your event?
              </p>
              <Link
                href="/contact?intent=speaking"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Book Dru to Speak
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. NEWS & STORIES, Bartlett 3-up grid */}
      <section id="news" className="py-28 md:py-40" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>News &amp; Stories</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--brand-white)" }}>
                What I&apos;m thinking <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>this week.</em>
              </h2>
              <Link
                href="/blog"
                className="self-start text-sm font-bold uppercase tracking-wider editorial-link md:self-end"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}
              >
                Read the blog →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-16">
              <NewsGrid count={3} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. NEWSLETTER SHOWCASE, full-bleed */}
      <NewsletterShowcase />

      {/* 6. SPEAKING ENGAGEMENTS, Bartlett 2-col (image left / copy right) */}
      <section id="speaking" className="py-28 md:py-40" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/dru-portrait-laughing.jpg"
                  alt="Dru Nguyen, speaking portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <div className="section-label" style={{ color: "var(--brand-lime)" }}>Speaking Engagements</div>
                <h2
                  className="mt-4 font-extrabold tracking-tight"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--brand-white)" }}
                >
                  Bring Dru to <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>your team.</em>
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                  EO forum sessions, founder offsites, AI workshops, EOS implementation coaching.
                  Ten years of real operations across three industries. Operator-to-operator only, no
                  theory, no hype.
                </p>
                <Link
                  href="/contact?intent=speaking"
                  className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
                >
                  Speaking enquiries
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
