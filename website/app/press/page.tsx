import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press — Dru Nguyen",
  description: "Speaking appearances, interviews, media features, and a downloadable press kit for Dru Nguyen.",
};

const features = [
  {
    outlet: "Zero Project Conference",
    year: "2026",
    title: "On stage on inclusive AI and the future of data work in Southeast Asia.",
    img: "/images/dru-hero.jpg",
    href: "#",
  },
  {
    outlet: "Tictag · Singapore",
    year: "2026",
    title: "\"Everyone can benefit from working with data\" — keynote excerpt.",
    img: "/images/dru-hero.jpg",
    href: "#",
  },
];

const logos = ["Bloomberg", "TechCrunch", "Forbes Vietnam", "Tech in Asia", "VnExpress", "EO Vietnam"];

const quickFacts = [
  { label: "Full name", value: "Dru Nguyen" },
  { label: "Roles", value: "Co-Founder & MD of Xood · Founder of Skylight · Advisor: Tictag, EWB, Nuen, GAM" },
  { label: "Industries", value: "Hospitality · AI Data Services · Entertainment" },
  { label: "Based in", value: "Ho Chi Minh City, Vietnam (UTC+7)" },
  { label: "Tagline", value: "Operator. AI Educator. Care. Discipline. Grit." },
  { label: "Speaking topics", value: "AI for Operators · EOS in Practice · Building in Vietnam" },
];

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative z-10 mx-auto max-w-[1300px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>Press</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              On stage. <span style={{ color: "var(--brand-lime)" }}>On the record.</span>
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

      {/* AS SEEN IN — outlet logo strip (Gary Vee press cred pattern) */}
      <section className="border-y py-10" style={{ background: "var(--brand-jungle)", borderColor: "var(--brand-pastel)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="text-center">
            <div className="section-label">As featured in</div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <span
                key={l}
                className="text-base font-extrabold uppercase tracking-tight md:text-xl"
                style={{ color: "var(--brand-myrtle)", letterSpacing: "0.04em", opacity: 0.85 }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Recent features</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              Interviews &amp; <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>appearances.</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) as 0 | 1}>
                <Link href={p.href} className="block overflow-hidden rounded-2xl border transition-shadow hover:shadow-xl" style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}>
                  <div className="relative aspect-[16/9]">
                    <Image src={p.img} alt={p.outlet} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                      <span>{p.outlet}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <p className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS — for journalists */}
      <section className="py-20" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Quick Facts</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              For journalists &amp; <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>bookers.</em>
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
