import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { VENTURES, VENTURE_DETAILS } from "@/lib/ventures";

type Params = { slug: string };

export function generateStaticParams() {
  return VENTURES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = VENTURE_DETAILS[slug];
  if (!detail) return {};
  return {
    title: `${detail.name} — Dru Nguyen`,
    description: detail.intro,
    alternates: { canonical: `/ventures/${detail.slug}` },
    openGraph: {
      title: `${detail.name} — Dru Nguyen`,
      description: detail.intro,
      type: "article",
      url: `/ventures/${detail.slug}`,
      images: [{ url: detail.heroImage, width: 1600, height: 1000 }],
    },
  };
}

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const detail = VENTURE_DETAILS[slug];
  const card = VENTURES.find((v) => v.slug === slug);
  if (!detail || !card) notFound();

  // Find the next venture in the list for the bottom CTA
  const idx = VENTURES.findIndex((v) => v.slug === slug);
  const next = VENTURES[(idx + 1) % VENTURES.length];

  return (
    <article style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="absolute inset-0">
          <Image
            src={detail.heroImage}
            alt={`${detail.name} — hero`}
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
            style={{ background: "linear-gradient(90deg, rgba(10,27,36,0.94) 0%, rgba(10,27,36,0.6) 45%, rgba(10,27,36,0.15) 75%, rgba(10,27,36,0.05) 100%)" }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-36 lg:min-h-[72vh] lg:flex lg:flex-col lg:justify-center">
          <Reveal>
            <div className="text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}>
              {card.context}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight max-w-5xl"
              style={{ fontSize: "clamp(48px, 9vw, 128px)", lineHeight: 0.92, letterSpacing: "-0.035em", textShadow: "0 2px 30px rgba(10,27,36,0.6)" }}
            >
              {detail.name}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-2xl" style={{ color: "var(--brand-pastel)" }}>
              {detail.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DRU'S POV — long-form story */}
      <section className="py-24 md:py-36" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}>
              Dru&apos;s POV
            </div>
          </Reveal>
          <div className="mt-8 space-y-7 text-lg leading-[1.8] md:text-xl" style={{ color: "var(--brand-pastel)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            {detail.story.map((p, i) => (
              <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <Reveal>
            <div className="text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}>Quick Facts</div>
          </Reveal>
          <div className="mt-10 grid gap-px md:grid-cols-2" style={{ background: "rgba(176,190,197,0.15)" }}>
            {detail.facts.map((f) => (
              <Reveal key={f.label}>
                <div className="p-7" style={{ background: "var(--brand-jungle)" }}>
                  <div className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>{f.label}</div>
                  <div className="mt-2 text-lg font-semibold" style={{ color: "var(--brand-white)" }}>{f.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
          {detail.externalUrl && (
            <Reveal delay={2}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href={detail.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
                >
                  Visit {detail.externalLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* NEXT VENTURE */}
      <section className="py-20 md:py-24" style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}>
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <div className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>Next venture</div>
            <Link href={next.href} className="mt-2 inline-block font-extrabold tracking-tight transition-colors hover:text-[var(--brand-lime)]" style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
              {next.name} →
            </Link>
          </div>
          <Link href="/ventures" className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em", borderBottom: "2px solid var(--brand-lime)" }}>
            ← All ventures
          </Link>
        </div>
      </section>
    </article>
  );
}
