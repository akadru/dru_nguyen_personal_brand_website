import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROMPTS } from "./prompts";

export const metadata: Metadata = {
  title: "Every Olympian has a coach. Here is why, and how to build yours.",
  description:
    "Why elite performers always have a coach, and how five coaching-engine prompts give operators most of the same advantage in 20 minutes a week.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away" },
  openGraph: {
    title: "Every Olympian has a coach. Here is why, and how to build yours.",
    description:
      "Why elite performers always have a coach, and how five coaching-engine prompts give operators most of the same advantage in 20 minutes a week.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away",
    images: [{ url: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Coaching", "#FutureOfWork"];

export default function PostPage() {
  return (
    <article style={{ background: "var(--brand-jungle)" }}>
      {/* HERO */}
      <header style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Reveal>
            <Link href="/blog" className="text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}>
              ← Back to the Blog
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              <span>The Thinker</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span>Coaching</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>12 MIN READ</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>30 APR 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
            >
              Every Olympian has a coach.{" "}
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Here is why, and how to build yours.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp"
                alt="A Saigon wall with a lime spray-paint stencil reading 'GET A COACH.'"
                fill
                priority
                sizes="(max-width: 1300px) 100vw, 1300px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* BODY */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

          {/* OPENING: 7-Beat Story Arc */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            Name one decision you made last year that you would unmake if you could rewind. Now name the person who could have stopped you. If that second name was &ldquo;nobody,&rdquo; you and I are reading the same post.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              In 1996, a 14-year-old{" "}
              <a href="https://en.wikipedia.org/wiki/Michael_Phelps" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Michael Phelps</a>{" "}
              walked into the{" "}
              <a href="https://www.nbac.net/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>North Baltimore Aquatic Club</a>{" "}
              and met a 24-year-old assistant coach named{" "}
              <a href="https://en.wikipedia.org/wiki/Bob_Bowman_(swim_coach)" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Bob Bowman</a>. Bowman saw something other coaches had missed. Phelps&apos;s stroke was technically sound but his stride was off by a few degrees on the pull. Phelps could not feel it. Nobody in his life had told him.
            </p>
            <p>
              They worked together for the next twenty years. By 2008, Phelps had won eight gold medals in a single Olympics, more than any athlete in history. By 2016, he held 23 Olympic golds in total.
            </p>
            <p>
              What Bowman did was not make Phelps faster. He made Phelps see the gap between what he was doing and what he thought he was doing. Asked years later what he actually did differently from other coaches, Bowman put it plainly: <em>&ldquo;I just made him aware of the gap.&rdquo;</em>
            </p>
            <p>
              That gap is what kills Olympic medals. It is also what kills quarters in a business.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>A coach&apos;s job is not to give you the answer. It is to make you aware of the question you are not asking.</strong>
            </p>
            <p style={{ color: "var(--brand-lime)", fontWeight: 700, fontSize: "1.25rem", marginTop: "2rem" }}>
              Takeaway this week.
            </p>
            <p>
              You probably do not have a Bob Bowman. Most operators do not. You have peer groups that meet once a month, a therapist who has never seen your numbers, a friend or two who can hold up a mirror once a quarter. The gap stays open for years.
            </p>
            <p>
              The new math in 2026 is that a well-built prompt does most of what Bowman did for Phelps in 20 minutes a week. The prompt asks the question. You answer. The prompt makes you aware of the gap between what you are doing and what you think you are doing. The gap closes.
            </p>
            <p>
              How I do this is by running 5 prompts every week that act as a coaching panel: a Board of Advisors before any real decision, a Fractional CFO at monthly close, a Planning Facilitator for any off-site, a Monday Accountability check-in, and a Pre-Mortem before I commit publicly to anything I might be wrong about.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Here are the five prompts I run every week.</strong>
            </p>
          </div>

          {/* PROMPTS */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Five Prompts</div>

          <div className="mt-6 space-y-12">
            {PROMPTS.map((p) => {
              const lineCount = p.body.split("\n").length;
              return (
                <div key={p.title}>
                  <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-lime)" }}>
                    <strong>Use when:</strong> <span style={{ color: "var(--brand-pastel)" }}>{p.useWhen}</span>
                  </p>
                  <details
                    className="mt-4 group"
                    style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.2)", borderRadius: 12, padding: 0 }}
                  >
                    <summary
                      className="cursor-pointer select-none flex items-center justify-between px-6 py-4 list-none"
                      style={{ color: "var(--brand-white)", fontWeight: 700 }}
                    >
                      <span className="text-sm font-bold uppercase" style={{ letterSpacing: "0.12em", color: "var(--brand-lime)" }}>
                        Show full prompt
                      </span>
                      <span className="text-xs" style={{ color: "var(--brand-pastel)" }}>
                        {lineCount} lines · click to expand
                      </span>
                    </summary>
                    <pre
                      className="mt-0 overflow-x-auto p-6 text-sm leading-relaxed whitespace-pre-wrap"
                      style={{ color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", borderTop: "1px solid rgba(173,251,73,0.2)" }}
                    >
                      <code>{p.body}</code>
                    </pre>
                  </details>
                </div>
              );
            })}
          </div>

          {/* WHAT DOES NOT WORK */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>What does not work</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Three things I tried <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>that flopped.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>1. Hiring a human executive coach.</strong> I tried twice. Both coaches were experienced. Both charged $400 an hour. Both met once a week. The cost was not the problem. The cadence was. By the time we met on Thursday, the decision I needed to make had already passed me by Tuesday morning.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>2. Reading every operator book ever written.</strong> Drucker, Collins, Goggins, Robbins, the entire Traction shelf. I learned a lot. None of those books knew my numbers, my team, or the decision in front of me on Tuesday morning. A book doesn&apos;t push back. It doesn&apos;t ask the follow-up. It can&apos;t tell me what I&apos;m missing about myself this week.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>3. AI as a casual chat.</strong> I started by typing my decision into ChatGPT the way I would text a friend: a paragraph, no structure, hope it said something useful. The answers were polite. They never pushed back. They never asked the follow-up. They told me what I already knew, in better grammar.
            </p>
          </div>

          {/* CLOSE */}
          <div className="mt-14 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              An Olympian doesn&apos;t train without a coach because nobody is good enough to see their own gap. Operators aren&apos;t different.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Twenty minutes a week with the prompts above is the closest thing to having one.</strong> Keep the cadence. Keep the inputs real. The gap closes.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-2 p-8 text-center md:p-10" style={{ borderColor: "rgba(173,251,73,0.4)" }}>
            <p className="text-2xl font-extrabold leading-snug md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
              The full prompt pack. Bookmark it, copy them once, run them weekly.
            </p>
            <Link
              href="/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack"
              className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Open the prompt pack →
            </Link>
          </div>

          {/* HASHTAGS */}
          <div className="mt-12 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span
                key={h}
                className="rounded-full px-3 py-1 text-xs font-bold uppercase"
                style={{ background: "rgba(173,251,73,0.12)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* DRU. SIGNATURE: official end-of-post logo */}
          <div className="mt-20 flex justify-end">
            <div
              className="px-5 py-2 text-xl font-extrabold"
              style={{
                background: "transparent",
                color: "var(--brand-lime)",
                border: "2px solid var(--brand-lime)",
                letterSpacing: "0.28em",
                transform: "rotate(-2deg)",
                fontFamily: "'Outfit', system-ui, sans-serif",
                textShadow: "0 8px 14px rgba(173,251,73,0.18)",
              }}
            >
              DRU.
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
