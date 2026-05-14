import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Every Olympian has a coach. Here's why — and how to build yours from a laptop.",
  description:
    "Why elite performers always have a coach, what a coach actually does, and how five LLM prompts give operators most of the same advantage in 20 minutes a week.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away" },
  openGraph: {
    title: "Every Olympian has a coach. Here's why — and how to build yours from a laptop.",
    description:
      "Why elite performers always have a coach, and how five LLM prompts give operators most of the same advantage in 20 minutes a week.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away",
    images: [{ url: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Coaching", "#FutureOfWork"];

const PROMPTS: { title: string; useWhen: string; body: string }[] = [
  {
    title: "1. Board of Advisors",
    useWhen: "before any real decision you're not sure about.",
    body: `You are a board of 5 advisors with sharp, differentiated points of view:
1. A pragmatic CFO who has run two companies through a downturn.
2. A founder who exited at $50M and now invests in early-stage operators.
3. An executive coach who has worked with 100+ CEOs.
4. A skeptical VC who has passed on more deals than they've taken.
5. A long-time customer of a business like mine.

Each advisor responds in 2-3 sentences, in their voice, with their concern.
Then they debate each other for one short round.
End with the decision you would make and why.

Decision: [paste]
Context that matters: [3-5 bullets]
What I'm leaning toward: [your direction]`,
  },
  {
    title: "2. Fractional CFO",
    useWhen: "monthly, when the books close.",
    body: `Act as my fractional CFO. I'll share my P&L.
Tell me the top 3 financial risks I'm probably not pricing in correctly.

For each risk:
- Metric to watch monthly
- Early warning sign (what number changes first)
- The response (what I do when the warning fires)

Be blunt. Skip the preamble.

Revenue: [number]
Gross margin: [%]
Burn or profit: [number/month]
Runway: [months]
What's keeping me up at night: [one line]`,
  },
  {
    title: "3. Planning Facilitator",
    useWhen: "off-sites, annual reviews, quarterly planning.",
    body: `You are a planning facilitator with a track record of running sessions
that produce decisions, not slide decks.

I have [hours] with [people]. Build me an agenda.

For each block:
- Time
- Opening question
- 3 tactics for keeping the conversation honest
- The deliverable (decision, list, draft)

End with a 1-page summary template I can fill in live.

Stage: [pre-revenue / early growth / scale]
Top 3 things I want to leave with: [list]
Hardest topic on the table: [one line]
Who tends to dominate the room: [one line]`,
  },
  {
    title: "4. Monday Accountability Check-in",
    useWhen: "every Monday morning, before Slack.",
    body: `You are my accountability coach. We meet every Monday.

I'll paste:
- The 3 commitments I made last week
- What actually shipped
- What I'm tempted to add to this week

Your job:
1. Tell me what I shipped, dodged, or half-shipped. Specifically.
2. Name the excuse I'm using lately. Use my own language back to me.
3. Recommend ONE commitment for this week. Pick the one I'm most likely to dodge.
4. End with one question I should sit with all week.

No softening. No motivational quotes. Talk like you want me to ship.

Last week's commitments: [paste]
What I shipped: [paste]
What I'm tempted to add: [paste]`,
  },
  {
    title: "5. Devil's Advocate",
    useWhen: "after you've decided. Before you commit.",
    body: `Take the position opposite my decision. Argue against it as if you believe
I am wrong — not as a game.

Steel-man the counter. Use real evidence.

Structure:
1. The 3 strongest reasons my decision is wrong.
2. The single biggest unknown I haven't priced in.
3. The decision you would make in my shoes.
4. One fact that would change your mind.

My decision: [paste]
The reasoning I'm using: [paste]
What I'm hoping is true that might not be: [one line]`,
  },
];

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
              <span style={{ color: "var(--brand-pastel)" }}>4 MIN READ</span>
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
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Here&apos;s why — and how to build yours from a laptop.</em>
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

          {/* OPENING */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            Every Olympian has a coach. Not because the athlete isn&apos;t great. Because greatness has a blind spot the athlete can&apos;t see from inside themselves.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              You can&apos;t see your own swing in real time. You can&apos;t hear how you sound when you&apos;re mid-decision. You can&apos;t tell when your stride drops by one degree or your jaw clenches before you commit. The coach exists for one job:{" "}
              <strong style={{ color: "var(--brand-white)" }}>to make the gap visible.</strong> The gap between what you&apos;re doing and what you think you&apos;re doing.
            </p>
            <p>
              That gap is what costs Olympians a medal. It&apos;s what costs operators a quarter. Bad strategy isn&apos;t usually what kills a business — repeated execution of a decision the founder didn&apos;t realise was off by a few degrees, six weeks at a time, is.
            </p>

            <p>
              The problem: most operators don&apos;t have a coach for it. We have peer groups that meet monthly. We have a therapist who doesn&apos;t know our P&amp;L. We have one or two friends who hold up a mirror once a quarter. The gap stays open for years.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>What changes the math in 2026 is the LLM.</strong> Not as a magic answer machine. As the closest thing most of us will ever have to a coach who is available every morning, has infinite patience for context, has no incentive to keep us as a client, and will tell us the embarrassing thing without rolling its eyes.
            </p>
            <p>
              A coach&apos;s job isn&apos;t to give you the answer. It&apos;s to ask the question that makes you see what you were already missing. That is exactly what a well-prompted LLM does — when you build the prompt like a coach would build a question.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Below are five prompts I run weekly across my own businesses.</strong> Copy any of them. Paste your real numbers and your real situation. Iterate until the answer is useful. The whole exercise takes 20 minutes.
            </p>
          </div>

          {/* PROMPTS */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Five Prompts</div>

          <div className="mt-6 space-y-10">
            {PROMPTS.map((p) => (
              <div key={p.title}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
                  {p.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-lime)" }}>
                  <strong>Use when:</strong> <span style={{ color: "var(--brand-pastel)" }}>{p.useWhen}</span>
                </p>
                <pre
                  className="mt-4 overflow-x-auto rounded-xl p-6 text-sm leading-relaxed"
                  style={{ background: "rgba(173,251,73,0.06)", color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", border: "1px solid rgba(173,251,73,0.2)" }}
                >
                  <code>{p.body}</code>
                </pre>
              </div>
            ))}
          </div>

          {/* THREE RULES */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>Three rules</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            What separates <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>useful from useless.</em>
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              { h: "Paste real context.", b: "Fake numbers get fake answers. Real P&Ls, real scorecards, real commitments." },
              { h: "Run them on a cadence.", b: "Monday morning for accountability. Monthly close for the CFO prompt. Before any meaningful decision for the Board. Cadence beats inspiration." },
              { h: "Iterate, don't accept.", b: "Push back the same way you would on a human. \"Why that risk and not this one?\" \"Steel-man the opposite.\" The conversation is the value." },
            ].map((r) => (
              <div key={r.h} className="rounded-xl p-6" style={{ background: "rgba(173,251,73,0.06)", borderLeft: "4px solid var(--brand-lime)" }}>
                <div className="text-base font-extrabold" style={{ color: "var(--brand-white)" }}>{r.h}</div>
                <div className="mt-2 text-base" style={{ color: "var(--brand-pastel)" }}>{r.b}</div>
              </div>
            ))}
          </div>

          {/* CLOSE */}
          <div className="mt-14 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              An Olympian doesn&apos;t train without a coach because nobody is good enough to see their own gap. Operators aren&apos;t different. The medal-level performers I know have a coach. Most operators won&apos;t hire one this year.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Twenty minutes a week with the prompts above is the closest thing to having one — and a 90% solution beats a 0% solution every time.</strong> Keep the cadence. Keep the inputs real. The gap closes.
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
        </div>
      </section>
    </article>
  );
}
