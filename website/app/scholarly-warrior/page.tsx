import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Scholarly Warrior | Dru Nguyen",
  description:
    "Care · Discipline · Grit. The POV, the frameworks, and the operator essays. Discipline plus learning as an integrated philosophy.",
};

const frameworks = [
  { title: "S.I.F.P.", subtitle: "Situation · Insight · Framework · Provocation", body: "The writing framework behind every long-form post." },
  { title: "EOS for Pre-Revenue", subtitle: "Operating System · 7 Components", body: "EOS adapted for startups before product-market fit." },
  { title: "Four-Layer Review", subtitle: "Meaning · Relationship · Identity · Action", body: "How to draft a hard message that lands without breaking trust." },
  { title: "AI Operator Stack", subtitle: "Claude · Workflows · Templates", body: "The exact prompts running my commercial teams in 30 min/day." },
];

const stories = [
  { title: "The DJ Origin", body: "Dad caught me ditching school at 17. His punishment: a DJ setup. I learned community-building by sharing knowledge openly when DJ culture hoarded it." },
  { title: "The Factory", body: "Quit the family steel manufacturing business in Hanoi. Hardest conversation of my life. You can't build your future on someone else's blueprint." },
  { title: "The Fight", body: "Da Nang Muay Thai exhibition. Pissed myself backstage. Won by TKO in round two. Fear doesn't go away. You just stop letting it decide for you.", img: "/images/dru-muay-thai-2019.jpg" },
  { title: "The EOS Transformation", body: "Ran businesses in chaos and blamed the team. Read Traction with my brother TK. Implemented EOS. Nine months before the team fully bought in. Structure is freedom." },
  { title: "The Move to Vietnam", body: "At 27, left SF/LA for Nha Trang. No Vietnamese, no friends. Built Skylight. Reconnected with my dad after 22 years apart." },
];

export default function ScholarlyWarriorPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-jungle)" }} />
        <div className="relative z-10 mx-auto grid max-w-[1300px] gap-10 px-5 pb-20 pt-28 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16 md:px-10 md:pb-28 md:pt-36">
          <div>
            <Reveal>
              <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-white)", letterSpacing: "0.22em" }}>
                Identity Layer · 02
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(48px, 9vw, 128px)", lineHeight: 0.92, letterSpacing: "-0.035em" }}>
                Scholarly
                <br />
                <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Warrior.</em>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-white)" }}>
                <strong>Care. Discipline. Grit.</strong> The operating identity. Discipline plus learning as an
                integrated philosophy. The POV, the frameworks, and the operator essays.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/newsletter"
                  className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
                >
                  Subscribe to the newsletter
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider"
                  style={{ borderColor: "rgba(176,190,197,0.25)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
                >
                  Read the essays
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/dru-portrait-laughing.jpg"
                alt="Dru Nguyen, the Scholarly Warrior"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute right-5 bottom-5 rounded-full px-3 py-1 text-xs font-extrabold uppercase" style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
                I see · I hear · I feel · I KNOW
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE WORDS */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 text-center md:px-10">
          <Reveal>
            <div className="section-label">The Three Words</div>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 8vw, 112px)", letterSpacing: "-0.03em", lineHeight: 1.0, color: "var(--brand-white)" }}>
              Care. <span style={{ color: "var(--brand-lime)" }}>Discipline.</span> Grit.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { word: "Care", body: "For the work. For the team. For the ones I lead. Without care the rest is performance." },
              { word: "Discipline", body: "The system holds the standard. EOS. S.I.F.P. The Four-Layer Review. Structure is freedom." },
              { word: "Grit", body: "The fight, the move to Vietnam, the factory conversation. Never give up. Always find a way." },
            ].map((w, i) => (
              <Reveal key={w.word} delay={(i % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-2xl p-8 text-left" style={{ background: "var(--brand-jungle)", borderTop: "3px solid var(--brand-myrtle)" }}>
                  <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>The Word</div>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight" style={{ color: "var(--brand-white)" }}>{w.word}</h3>
                  <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section id="frameworks" className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>The Frameworks</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Playbooks <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>I actually use.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {frameworks.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="flex h-full flex-col rounded-xl p-6" style={{ background: "rgba(242,242,242,0.04)", border: "1px solid rgba(176,190,197,0.2)" }}>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Framework</div>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight" style={{ letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em" }}>{f.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(242,242,242,0.78)" }}>{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE STORIES */}
      <section id="stories" className="py-24 md:py-32" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Signature Stories</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              Five lived <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>moments.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="overflow-hidden rounded-xl"
                  style={{ background: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-lime)" }}
                >
                  {s.img ? (
                    <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                      </div>
                      <div className="p-7 md:p-9">
                        <h3 className="text-2xl font-extrabold" style={{ color: "var(--brand-white)" }}>{s.title}</h3>
                        <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{s.body}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-7 md:p-9">
                      <h3 className="text-2xl font-extrabold" style={{ color: "var(--brand-white)" }}>{s.title}</h3>
                      <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{s.body}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[800px] px-5 md:px-10">
          <p className="font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Knowledge with application <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>is wisdom.</em>
          </p>
          <Link
            href="/newsletter"
            className="mt-10 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
          >
            Subscribe to the newsletter
          </Link>
        </div>
      </section>
    </>
  );
}
