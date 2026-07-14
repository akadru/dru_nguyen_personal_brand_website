import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VideoFacade from "@/components/VideoFacade";

export const metadata: Metadata = {
  title: "Press | Dru Nguyen",
  description: "Speaking appearances, interviews, media features, and a downloadable press kit for Dru Nguyen.",
};

const talks = [
  {
    id: "GoMieoEj8kM",
    poster: "/images/press/gradion-1.jpg",
    kicker: "Scaling Business Summit 2026 · Keynote",
    title: "AI Community Engine: Data Built for People, by People",
  },
  {
    id: "0L46PkFoGBk",
    poster: "/images/press/gradion-2.jpg",
    kicker: "Scaling Business Summit 2026 · Panel",
    title: "Asia's Future of IoT",
  },
];

const brandFilm = {
  id: "arYMAFfdGKs",
  poster: "/images/press/story-film.jpg",
  kicker: "Brand Film",
  title: "In his own words",
};

const quickFacts = [
  { label: "Full name", value: "Dru Nguyen" },
  { label: "Roles", value: "Co-Founder & MD of Xood · Founder of Skylight · Advisor: Tictag, EWB, Nuen, GAM" },
  { label: "Industries", value: "Hospitality · AI Data Services · Entertainment" },
  { label: "Based in", value: "Ho Chi Minh City, Vietnam (UTC+7)" },
  { label: "Tagline", value: "Operator. AI Experimenter. Care. Discipline. Grit." },
  { label: "Speaking topics", value: "AI for Operators · EOS in Practice · Building in Vietnam" },
];

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative z-10 mx-auto max-w-[1300px] px-5 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>Press</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(40px, 7vw, 96px)" }}>
              On stage. <span className="marker-highlight">On the record.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Recent speaking appearances, interviews, and media features. For interview, quote, or speaking
              requests:{" "}
              <Link href="/contact" className="underline" style={{ color: "var(--brand-lime)" }}>get in touch</Link>.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Request press kit
              </Link>
              <Link
                href="/speaking"
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                Speaking deck
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ON STAGE — real Gradion / Scaling Business Summit talk footage */}
      <section className="py-14" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">On Stage</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--brand-white)" }}>
              Watch Dru <span style={{ color: "var(--brand-myrtle)" }}>present.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Keynote and panel from the Scaling Business Summit 2026 (powered by Gradion), Ho Chi Minh City.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {talks.map((t, i) => (
              <Reveal key={t.id} delay={(i % 2) as 0 | 1}>
                <VideoFacade id={t.id} poster={t.poster} kicker={t.kicker} title={t.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA — personal brand film */}
      <section className="border-t py-14" style={{ background: "var(--brand-jungle)", borderColor: "rgba(176,190,197,0.2)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Media</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--brand-white)" }}>
              The <span style={{ color: "var(--brand-myrtle)" }}>story.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mx-auto mt-10 max-w-[900px]">
              <VideoFacade id={brandFilm.id} poster={brandFilm.poster} kicker={brandFilm.kicker} title={brandFilm.title} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK FACTS, for journalists */}
      <section className="py-14" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Quick Facts</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 display-heading" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--brand-white)" }}>
              For journalists &amp; <span style={{ color: "var(--brand-myrtle)" }}>bookers.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2" style={{ borderColor: "var(--brand-pastel)", background: "var(--brand-pastel)" }}>
            {quickFacts.map((f) => (
              <div key={f.label} className="p-6" style={{ background: "var(--brand-jungle)" }}>
                <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>{f.label}</div>
                <div className="mt-2 text-base font-semibold" style={{ color: "var(--brand-white)" }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Booking, quotes, or interview requests?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
