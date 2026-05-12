import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { POSTS, postHref } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Dru Nguyen",
  description:
    "Operator essays, AI workflow teardowns, and lived-experience stories from running businesses across three industries.",
};

export default function BlogPage() {
  const published = POSTS.filter((p) => p.published);
  const upcoming = POSTS.filter((p) => !p.published);
  const [hero, ...rest] = published;

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
              The Blog
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(48px, 8vw, 112px)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
              }}
            >
              Operator essays.
              <br />
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>From the work.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              AI workflow teardowns, operator lessons, and the occasional story from running Skylight at 2am.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED — Bartlett-style large image-left + copy-right */}
      {hero && (
        <section className="py-20 md:py-28" style={{ background: "var(--brand-white)" }}>
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <Link
                href={postHref(hero)}
                className="group grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {hero.image && (
                    <Image
                      src={hero.image}
                      alt={hero.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div
                    className="absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase"
                    style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.22em" }}
                  >
                    Latest
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
                  >
                    <span>The {hero.pillar}</span>
                    <span>·</span>
                    <span>{hero.topic}</span>
                    <span>·</span>
                    <span>{hero.read} READ</span>
                    {hero.date && (
                      <>
                        <span>·</span>
                        <span>{hero.date}</span>
                      </>
                    )}
                  </div>
                  <h2
                    className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl"
                    style={{ color: "var(--brand-jungle)", letterSpacing: "-0.03em" }}
                  >
                    {hero.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
                    {hero.excerpt}
                  </p>
                  <span
                    className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group-hover:text-[var(--brand-lime)]"
                    style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}
                  >
                    Read the post
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--brand-jungle)] group-hover:border-[var(--brand-jungle)] group-hover:text-[var(--brand-lime)]" style={{ borderColor: "var(--brand-jungle)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                      </svg>
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* NEWS & STORIES — 3-col cascading editorial grid */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">News &amp; Stories</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--brand-jungle)" }}>
              Recent <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>essays &amp; teardowns.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <Link href={postHref(p)} className="group flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: "var(--brand-jungle)" }}>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div className="mt-5">
                    <div
                      className="text-[10px] font-extrabold uppercase"
                      style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
                    >
                      The {p.pillar} · {p.topic}
                    </div>
                    <h3
                      className="mt-3 text-xl font-extrabold leading-snug md:text-2xl transition-colors group-hover:text-[var(--brand-myrtle)]"
                      style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-10 text-base" style={{ color: "var(--brand-myrtle)" }}>
              More essays drop weekly. Get the next one Tuesday 8am Vietnam time —{" "}
              <Link href="/newsletter" className="editorial-link font-bold" style={{ color: "var(--brand-jungle)" }}>
                subscribe to the Tuesday Brief
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* IN THE PIPELINE — clearly badged, not pretending to be published */}
      {upcoming.length > 0 && (
        <section className="py-24 md:py-32" style={{ background: "var(--brand-tea)" }}>
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="section-label">In the pipeline</div>
                <span className="text-[10px] font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                  {upcoming.length} drafting · ready next
                </span>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((p) => (
                <Reveal key={p.slug}>
                  <article className="flex h-full flex-col border-t pt-6" style={{ borderColor: "var(--brand-jungle)" }}>
                    <div className="flex items-center justify-between">
                      <span
                        className="rounded-full px-2 py-1 text-[10px] font-extrabold uppercase"
                        style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.22em" }}
                      >
                        Coming soon
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase"
                        style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}
                      >
                        {p.channel} · {p.read}
                      </span>
                    </div>
                    <h3
                      className="mt-4 text-xl font-extrabold leading-snug"
                      style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--brand-body)" }}>
                      {p.excerpt}
                    </p>
                    <div className="mt-3 text-[10px] font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>
                      The {p.pillar} · {p.topic}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
