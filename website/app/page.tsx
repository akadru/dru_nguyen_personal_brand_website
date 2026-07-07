import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContentFeed from "@/components/ContentFeed";
import VideoLightbox from "@/components/VideoLightbox";
import SwipeRow from "@/components/SwipeRow";
import { BUILDS } from "@/lib/builds";
import { FEATURED_SLUGS } from "@/lib/posts";

// Drop Dru's YouTube intro/sizzle video ID here when it's ready —
// the "Play Video" button appears automatically.
const HERO_VIDEO_ID: string = "";

// Three-pillar identity architecture (Name + verb), GaryVee-style.
const PILLARS = [
  {
    name: "Operator",
    verb: "builds businesses",
    href: "/ventures",
    image: "/images/dru-speaking-zero-project-2026.jpg",
    alt: "Dru Nguyen speaking on stage at Zero Project Conference 2026",
  },
  {
    name: "Built with AI",
    verb: "the tools my teams run on",
    href: "/built-with-ai",
    image: "/images/built/ai-workshop.jpg",
    alt: "Dru's team building with AI at a workshop in Vietnam",
  },
  {
    name: "Scholarly Warrior",
    verb: "Care · Discipline · Grit",
    href: "/scholarly-warrior",
    image: "/images/dru-muay-thai-2019.jpg",
    alt: "Dru Nguyen training Muay Thai",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO — credential stack + (future) video lightbox + signature quote */}
      <section
        className="relative flex min-h-[100svh] flex-col overflow-hidden"
        style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
      >
        {/* Portrait (original studio shot, white bg kept), right-anchored, faded onto the hero */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/dru-portrait-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-top md:object-right md:translate-x-[7%]"
            style={{ opacity: 0.4 }}
          />
          {/* Desktop: left-heavy gradient — solid dark under the headline, clear on the right so the portrait shows */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(90deg, rgba(10,27,36,0.97) 0%, rgba(10,27,36,0.92) 30%, rgba(10,27,36,0.55) 50%, rgba(10,27,36,0) 70%)" }}
          />
          {/* Mobile: portrait sits up top (face clear); text below stacks over the dark shirt, gentle fade toward the legs */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(180deg, rgba(10,27,36,0) 42%, rgba(10,27,36,0.35) 68%, rgba(10,27,36,0.78) 100%)" }}
          />
          {/* Soft bottom fade for polish (desktop) */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(180deg, rgba(10,27,36,0) 65%, rgba(10,27,36,0.6) 100%)" }}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-start justify-center px-5 py-24 md:px-10">
          <Reveal>
            <h1
              className="display-heading"
              style={{ fontSize: "clamp(64px, 10vw, 150px)", color: "var(--brand-white)" }}
            >
              Operator
              <br />
              Builder
              <br />
              <span className="marker-highlight">Experimenter</span>
            </h1>
          </Reveal>

          {HERO_VIDEO_ID && (
            <Reveal delay={1}>
              <div className="mt-12">
                <VideoLightbox videoId={HERO_VIDEO_ID} />
              </div>
            </Reveal>
          )}

          <Reveal delay={2}>
            <p
              className="display-heading mt-16 md:mt-24"
              style={{ fontSize: "clamp(30px, 3.6vw, 54px)", color: "var(--brand-pastel)" }}
            >
              &ldquo;Knowledge with Application
              <br />
              is <span className="marker-highlight">Wisdom</span>.&rdquo;
            </p>
          </Reveal>
        </div>

        <Reveal delay={3}>
          <a
            href="#pillars"
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

      {/* 2. THREE PILLARS — Name + verb identity tiles */}
      <section id="pillars" className="py-6 md:py-0" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <SwipeRow surface="dark" desktopGrid="md:grid-cols-3" desktopGap="md:gap-0" mobileGap="gap-4" mobilePad="px-5" basis="basis-[86%]">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i as 0 | 1 | 2}>
              <Link href={p.href} className="group relative block aspect-[4/5] overflow-hidden md:aspect-[3/4]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="img-duotone object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.25) 0%, rgba(10,27,36,0.05) 45%, rgba(10,27,36,0.92) 100%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <div
                    className="display-heading"
                    style={{ fontSize: "clamp(34px, 3.2vw, 52px)", color: "var(--brand-white)" }}
                  >
                    {p.name}
                  </div>
                  <div className="display-heading mt-3" style={{ fontSize: "clamp(20px, 1.7vw, 27px)" }}>
                    <span className="marker-highlight">{p.verb}</span>
                  </div>
                  <div
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}
                  >
                    Explore <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </SwipeRow>
      </section>

      {/* 3. BUILT WITH AI — white content surface, live builds strip */}
      <section id="builds" className="py-16 md:py-24" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Live in Production</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(52px, 7vw, 110px)", color: "var(--brand-jungle)" }}
              >
                Built with AI
              </h2>
              <Link
                href="/built-with-ai"
                className="editorial-link self-start text-sm font-bold uppercase tracking-wider md:self-end"
                style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}
              >
                See all builds →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <SwipeRow className="mt-8 md:mt-10" surface="light" desktopGrid="md:grid-cols-2 lg:grid-cols-3" desktopGap="md:gap-x-8 md:gap-y-14" basis="basis-[82%]">
              {BUILDS.map((b) => (
                <Link
                  key={b.slug}
                  href={b.caseStudyHref ?? b.url}
                  className="group flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border" style={{ borderColor: "rgba(10,27,36,0.12)" }}>
                    <Image
                      src={b.image}
                      alt={`Screenshot of ${b.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase"
                      style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.18em" }}
                    >
                      Live
                    </div>
                  </div>
                  <div
                    className="mt-5 text-[10px] font-extrabold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
                  >
                    {b.context}
                  </div>
                  <h3
                    className="display-heading mt-3 transition-colors group-hover:text-[var(--brand-myrtle)]"
                    style={{ fontSize: "clamp(24px, 2.2vw, 32px)", color: "var(--brand-jungle)" }}
                  >
                    {b.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--brand-body)" }}>
                    {b.tagline}
                  </p>
                  <div
                    className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}
                  >
                    Read the case study
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </div>
                </Link>
              ))}
            </SwipeRow>
          </Reveal>
        </div>
      </section>

      {/* 4. WHAT'S NEW — the blog feed, right under the builds */}
      <section id="news" className="py-16 md:py-24" style={{ background: "var(--brand-white)", borderTop: "1px solid rgba(10,27,36,0.1)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Read This</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(52px, 7vw, 110px)", color: "var(--brand-jungle)" }}
              >
                What&apos;s New
              </h2>
              <Link
                href="/blog"
                className="editorial-link self-start text-sm font-bold uppercase tracking-wider md:self-end"
                style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}
              >
                Read the blog →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 md:mt-10">
              <ContentFeed carousel showFilters={false} featuredSlugs={FEATURED_SLUGS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. STAT STRIP — the operating record, continues the white surface */}
      <section className="py-14 md:py-20" style={{ background: "var(--brand-white)", borderTop: "1px solid rgba(10,27,36,0.1)" }}>
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
                    className="display-heading"
                    style={{ fontSize: "clamp(64px, 8vw, 110px)", color: "var(--brand-jungle)" }}
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

      {/* 5. SPEAKING — full-bleed closer, the standing commercial CTA */}
      <section id="speaking" className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--brand-jungle)" }}>
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

        <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>Speaking Engagements</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="display-heading mt-4"
              style={{ fontSize: "clamp(52px, 8vw, 130px)", color: "var(--brand-white)" }}
            >
              Bring Dru to <span className="marker-highlight">your team</span>
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
              Book Dru to Speak
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
