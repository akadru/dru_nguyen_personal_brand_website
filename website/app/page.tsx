import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VenturesGrid from "@/components/VenturesGrid";
import StoriesGrid from "@/components/StoriesGrid";
import NewsGrid from "@/components/NewsGrid";
import NewsletterShowcase from "@/components/NewsletterShowcase";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <>
      {/* 1. HERO, Bartlett-style: giant lime wordmark on pure jungle · scroll cue */}
      <section
        className="relative flex min-h-[100svh] flex-col overflow-hidden"
        style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
      >
        <div className="flex flex-1 flex-col items-center justify-center px-5">
          <Reveal>
            <div className="hero-display text-center" aria-label="Dru Nguyen">
              DRU
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="mt-8 text-center text-[11px] font-extrabold uppercase md:text-[13px]"
              style={{ color: "var(--brand-white)", letterSpacing: "0.42em" }}
            >
              Operator · Builder · AI Experimenter
            </h1>
          </Reveal>
        </div>
        <Reveal delay={3}>
          <a
            href="#intro"
            className="mb-10 flex flex-col items-center gap-2 self-center text-[10px] font-extrabold uppercase"
            style={{ color: "var(--brand-white)", letterSpacing: "0.3em" }}
          >
            Scroll
            <svg
              className="scroll-cue-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--brand-lime)"
              strokeWidth="2.5"
              aria-hidden
            >
              <path d="M12 3v18" />
              <path d="m5 14 7 7 7-7" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* 2. INTRO, Bartlett-style description block (text-left + duotone portrait-right) */}
      <section id="intro" className="py-24 md:py-36" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
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
              <div className="group relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/dru-portrait-laughing.jpg"
                  alt="Dru Nguyen portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="img-duotone object-cover"
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

      {/* 2b. LOGO MARQUEE, monochrome brand strip */}
      <LogoMarquee />

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

      {/* 5. STAT STRIP, Bartlett's white contrast section */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">The Operating Record</div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { n: "6", label: "Businesses in the portfolio" },
              { n: "3", label: "Industries: hospitality, AI, entertainment" },
              { n: "10+", label: "Years operating in Vietnam" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="border-t-2 pt-6" style={{ borderColor: "var(--brand-myrtle)" }}>
                  <div
                    className="font-extrabold"
                    style={{ fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 1, letterSpacing: "-0.03em", color: "var(--brand-jungle)" }}
                  >
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

      {/* 6. NEWSLETTER SHOWCASE, full-bleed */}
      <NewsletterShowcase />

      {/* 6. SPEAKING ENGAGEMENTS, Bartlett full-bleed B&W closer */}
      <section id="speaking" className="relative overflow-hidden py-32 md:py-48" style={{ background: "var(--brand-jungle)" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/dru-hero.jpg"
            alt="Dru Nguyen speaking at Zero Project Conference 2026"
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "grayscale(1) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.92) 0%, rgba(10,27,36,0.62) 50%, rgba(10,27,36,0.92) 100%)" }}
          />
        </div>
        {/* lime arc accent */}
        <svg
          className="pointer-events-none absolute -right-24 top-0 hidden h-full w-auto md:block"
          viewBox="0 0 400 800"
          fill="none"
          aria-hidden
        >
          <path d="M 400 0 A 500 500 0 0 0 400 800" stroke="var(--brand-lime)" strokeWidth="2" />
        </svg>

        <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>Speaking Engagements</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="mt-4 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 104px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--brand-white)" }}
            >
              Bring Dru to <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>your team.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              EO forum sessions, founder offsites, AI workshops, EOS implementation coaching.
              Ten years of real operations across three industries. Operator-to-operator only, no
              theory, no hype.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link
              href="/contact?intent=speaking"
              className="mt-12 inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Speaking enquiries
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
