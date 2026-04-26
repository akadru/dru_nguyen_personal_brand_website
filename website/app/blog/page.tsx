import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { POSTS, postHref } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Dru Nguyen",
  description: "Operator essays, AI workflow teardowns, and lived-experience stories from running businesses across three industries.",
};

export default function BlogPage() {
  const published = POSTS.filter((p) => p.published);
  const upcoming = POSTS.filter((p) => !p.published);
  const [hero, ...rest] = published;

  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1300px] px-5 pt-28 pb-16 md:px-10 md:pt-36 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Blog
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Operator essays.
              <br />
              <span style={{ color: "var(--brand-lime)" }}>From the work.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              AI workflow teardowns, operator lessons, and the occasional story from running Skylight at 2am.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POSTS_GRID_START */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          {hero && (
            <Reveal>
              <Link
                href={postHref(hero)}
                className="group grid gap-0 overflow-hidden rounded-2xl border transition-shadow hover:shadow-2xl md:grid-cols-[1.4fr_1fr]"
                style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}
              >
                <div className="relative aspect-[16/10] md:aspect-auto">
                  {hero.image && <Image src={hero.image} alt={hero.title} fill priority sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />}
                  <div className="absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
                    Latest
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                    <span>The {hero.pillar}</span>
                    <span>·</span>
                    <span>{hero.topic}</span>
                    <span>·</span>
                    <span>{hero.read} READ</span>
                    {hero.date && (<><span>·</span><span>{hero.date}</span></>)}
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
                    {hero.title}
                  </h2>
                  <p className="mt-4 leading-relaxed" style={{ color: "var(--brand-body)" }}>{hero.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em", borderBottom: "2px solid var(--brand-lime)", alignSelf: "flex-start" }}>
                    Read the post →
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link href={postHref(p)} className="group block h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-xl" style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}>
                    <div className="relative aspect-[16/10] w-full">
                      {p.image && <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />}
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>
                        The {p.pillar} · {p.topic}
                      </div>
                      <h3 className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {/* UPCOMING — clearly badged so it never reads as published */}
          {upcoming.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="section-label">In the pipeline</div>
                  <span className="text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em" }}>
                    {upcoming.length} drafting · ready next
                  </span>
                </div>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                    <article className="h-full rounded-xl border p-6" style={{ borderColor: "var(--brand-pastel)", background: "var(--brand-tea)", opacity: 0.95 }}>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full px-2 py-1 text-[10px] font-extrabold uppercase" style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                          Coming soon
                        </span>
                        <span className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>{p.channel} · {p.read}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--brand-body)" }}>{p.excerpt}</p>
                      <div className="mt-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>The {p.pillar} · {p.topic}</div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* POSTS_GRID_END */}
    </>
  );
}
