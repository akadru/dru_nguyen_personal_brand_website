import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Every Olympian has a coach. Yours is a prompt away.",
  description:
    "Every Olympian has a coach. So do every CEO, athlete, and operator playing for real. Five copy-paste prompts to turn your LLM into yours.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away" },
  openGraph: {
    title: "Every Olympian has a coach. Yours is a prompt away.",
    description:
      "Five copy-paste prompts that turn your LLM into a board of advisors, fractional CFO, accountability coach, planning facilitator, and devil's advocate.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away",
    images: [{ url: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#FutureOfWork", "#AIOperator", "#Coaching", "#DoingGoodWithData"];

const PROMPTS: { title: string; useWhen: string; body: string }[] = [
  {
    title: "1. The Board of Advisors",
    useWhen: "you have a real decision and you want five different brains on it before you commit.",
    body: `You are a board of 5 advisors with sharp, differentiated points of view.
Their backgrounds:
1. A pragmatic CFO who has run two companies through a downturn.
2. A former founder who exited at $50M and now invests in early-stage operators.
3. An executive coach who has worked with 100+ CEOs.
4. A skeptical VC who has passed on more deals than they've taken.
5. A long-time customer of a business like mine.

I will describe a decision I'm facing. Each advisor responds in 2 to 3 sentences,
in their distinct voice, with their specific concern. Then they debate each other
for one round (one short paragraph). End with the decision you would make and why.

Decision: [paste yours here]
Context I think matters: [paste 3 to 5 bullets]
What I'm leaning toward: [your current direction]`,
  },
  {
    title: "2. The Financial Advisor",
    useWhen: "you want a fractional CFO read on your numbers, in 10 minutes.",
    body: `Act as my fractional CFO. I'll share my P&L (or a description of the business).
Identify the top 3 financial risks I'm probably not pricing in correctly.

For each risk:
- Name the metric I should watch monthly
- Name the early warning sign (what number changes first)
- Name the response (what I do when the warning fires)

Be blunt. If something looks off, say so. Skip the "great question" preamble.

Business snapshot: [paste]
Top-line revenue: [number]
Gross margin: [%]
Burn rate or net profit: [number/month]
Cash on hand: [months of runway]
Anything keeping me up at night: [one or two lines]`,
  },
  {
    title: "3. The Strategic Planning Facilitator",
    useWhen: "off-sites, annual reviews, quarterly L10s. Anything that should produce decisions, not slide decks.",
    body: `You are a strategic planning facilitator with a track record of running off-sites
that produce decisions, not slide decks.

I have [number] hours with [number] people. Build me an agenda from start to finish.

For each block:
- Time allocation
- The question that opens the block
- 3 facilitation tactics for keeping the conversation honest
- The deliverable that comes out of the block (a decision, a list, a draft)

End with a 1-page summary template I can fill in live during the session.

Context:
- Business stage: [pre-revenue / early growth / scale / mature]
- Top 3 things I want to leave with: [list]
- The hardest topic on the table: [one line]
- Who tends to dominate the room: [one line]`,
  },
  {
    title: "4. The Personal Accountability Check-in",
    useWhen: "every Monday morning, before you open Slack.",
    body: `You are my accountability coach. We meet every Monday.

I will paste:
- The 3 commitments I made last week
- What actually shipped
- What I'm tempted to add to this week's list

Your job:
1. Tell me which commitment I shipped, dodged, or half-shipped. Be specific.
2. Name the most common excuse I'm using lately. Use my exact language back to me.
3. Recommend ONE commitment for this week. Not three. One. Pick the one I'm
   most likely to dodge.
4. End with one question I should sit with for the week.

No softening. No motivational quotes. Talk to me like someone who actually wants
me to ship.

Last week's commitments: [paste]
What I shipped: [paste]
What I'm tempted to add this week: [paste]`,
  },
  {
    title: "5. The Devil's Advocate / Red Team",
    useWhen: "you've already decided. Use it before you commit.",
    body: `Take the position opposite my proposed decision. Argue against it as if you
genuinely believe I am wrong, not as if you're playing a game.

Use real evidence. Steel-man the strongest version of the counter-position.
Cite specific examples of operators who chose differently and what happened.

Structure:
1. The 3 strongest reasons my decision is wrong.
2. The single biggest unknown I haven't priced in.
3. The decision I would make in your shoes.
4. One fact that would change your mind.

My proposed decision: [paste]
The reasoning I'm using: [paste]
What I'm hoping is true that might not be: [one line]`,
  },
];

export default function PostPage() {
  return (
    <article style={{ background: "var(--brand-white)" }}>
      {/* HERO */}
      <header style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Reveal>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase"
              style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
            >
              ← Back to the Blog
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              <span>The Thinker</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span>Coaching · AI</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>6 MIN READ</span>
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
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Yours is a prompt away.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp"
                alt="A weathered Saigon brick wall with a Banksy-style stencil reading 'GET A COACH.' in lime spray paint, motorbike and shophouse paper-lantern warmth in the background"
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
      <section className="py-16 md:py-24" style={{ background: "var(--brand-white)" }}>
        <div
          className="mx-auto max-w-[760px] px-5 md:px-10"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {/* HOOK */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            <strong>Every Olympian has a coach.</strong> Not because they don&apos;t know what they&apos;re doing. Because they know what happens when you try to see your own swing without a mirror. You can&apos;t.
          </p>

          {/* THE COLD OPEN */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Cold Open</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            Phelps had Bowman. Bolt had Mills.{" "}
            <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>You have your laptop.</em>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Phelps had Bowman. Bolt had Glen Mills. Simone Biles has Aimee Boorman. Every single Olympic medalist you can name has a person, often the same one for a decade, who sees what they cannot see.
            </p>
            <p>
              Operators don&apos;t have that. We have peer groups. We have therapists. We have one or two friends who know enough to hold up a mirror once a quarter. And we have the same blind spots for years.
            </p>
            <p>
              I&apos;m not going to argue you should hire a coach. You should, but that&apos;s a different post.
            </p>
            <p>
              This one is about the coach you already have. The one sitting in your laptop right now, with no calendar conflicts, no $400/hour rate, and no ego of its own.{" "}
              <strong style={{ color: "var(--brand-jungle)" }}>The LLM you&apos;ve been using to write emails is also the most patient board of advisors you&apos;ll ever have access to</strong>, if you give it the right context and the right prompt.
            </p>
          </div>

          {/* THE PRINCIPLE callout */}
          <div className="mt-14 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Principle
            </div>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              <a href="https://www.theinnergame.com" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "2px solid var(--brand-lime)" }}>Tim Gallwey&apos;s <em>Inner Game of Tennis</em></a> (1974) made the same point: a coach&apos;s job isn&apos;t to give you answers. It&apos;s to make you aware of what you&apos;re already doing wrong, so you can correct it.{" "}
              <strong style={{ color: "var(--brand-lime)" }}>Awareness, not advice.</strong> A well-prompted LLM does that better than 80% of the consultants you&apos;d hire on a retainer.
            </p>
          </div>

          {/* WHAT THE LLM AS COACH GETS RIGHT */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>What works</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            Three things <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>the LLM coach</em> gets right.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>1. No social cost.</strong> You can ask it the dumb question, the embarrassing question, the third-time question. It does not roll its eyes. It does not remember that you asked the same thing six weeks ago.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>2. Infinite patience for context.</strong> Paste in your P&amp;L, your scorecard, your team accountability chart, last quarter&apos;s notes. It reads everything. It does not glaze. It builds the mental model with you.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>3. You stay the operator.</strong> A real human coach is biased toward keeping you as a client. The LLM does not need you back next month. It will tell you to fire the person, kill the project, or take the meeting in a way a paid coach often won&apos;t.
            </p>
            <p>
              The trade-off: it cannot replace a great human coach. It cannot read the silence in a room. It cannot see your face when you say <em>&ldquo;I think I&apos;m fine.&rdquo;</em> So use it for the 80% it does well, and save the human coach for the 20% it can&apos;t touch.
            </p>
          </div>

          {/* THE FRAMEWORK 5 PROMPTS */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Framework</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            Five coaches in <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>five prompts.</em>
          </h2>
          <p className="mt-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            Each prompt below is copy-paste ready. Drop it into Claude, ChatGPT, or Gemini. Fill in the bracketed parts. Iterate. The best operator coaching session of your week takes 20 minutes.
          </p>
          <p className="mt-4 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            I built each of these for myself across Xood and Skylight over the last eight months. I run them weekly.{" "}
            <Link href="/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack" style={{ color: "var(--brand-jungle)", borderBottom: "2px solid var(--brand-lime)", fontWeight: 700 }}>
              Grab the full prompt pack here
            </Link>{" "}
            (clean printable version, copy them once, run them weekly).
          </p>

          <div className="mt-10 space-y-10">
            {PROMPTS.map((p) => (
              <div key={p.title}>
                <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
                  <strong>Use when:</strong> {p.useWhen}
                </p>
                <pre
                  className="mt-4 overflow-x-auto rounded-xl p-6 text-sm leading-relaxed"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                >
                  <code>{p.body}</code>
                </pre>
              </div>
            ))}
          </div>

          {/* HOW TO ACTUALLY USE */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>How to use these</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            Three things that <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>separate</em> who gets value.
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              { h: "Paste real context.", b: "The prompts are 30% of the result. The other 70% is the inputs you paste. Fake numbers get fake answers. Real P&Ls, real scorecards, real commitments." },
              { h: "Run them on a cadence.", b: "The Accountability Check-in is Monday morning. The Board of Advisors is before any decision over a certain size (mine is anything over $10K or affecting more than one person). The Financial Advisor is monthly when the books close. Cadence beats inspiration." },
              { h: "Iterate, don't just accept.", b: "Push back on the LLM the same way you'd push back on a human coach. \"Why that risk and not this one?\" \"Steel-man the opposing view.\" The conversation is the value. The first answer is rarely the best one." },
            ].map((r) => (
              <div key={r.h} className="rounded-xl p-6" style={{ background: "var(--brand-tea)", borderLeft: "4px solid var(--brand-myrtle)" }}>
                <div className="text-base font-extrabold" style={{ color: "var(--brand-jungle)" }}>{r.h}</div>
                <div className="mt-2 text-base" style={{ color: "var(--brand-pastel)" }}>{r.b}</div>
              </div>
            ))}
          </div>

          {/* TAKEAWAYS */}
          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Key takeaways
            </div>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Olympians have coaches.</strong> Operators usually don&apos;t. The cost gap is closed in 2026.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> A well-prompted LLM is a board of advisors with no ego and no calendar. <strong style={{ color: "var(--brand-lime)" }}>Use it for the 80%.</strong> Save your human coach for the 20%.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> The 5 coaches: <strong style={{ color: "var(--brand-lime)" }}>Board of Advisors, Financial Advisor, Strategic Planning Facilitator, Accountability Check-in, Devil&apos;s Advocate.</strong></li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Context beats prompt.</strong> Vague in equals vague out.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Run on a cadence.</strong> Monday for accountability. Before any real decision for the Board. Make it a habit, not an experiment.</li>
            </ul>
          </div>

          {/* THE CLOSE */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Close</div>
          <div className="mt-4 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Phelps&apos; coach Bob Bowman was once asked what he actually did differently from other coaches. He said, <em>&ldquo;I just made him aware of the gap between what he was doing and what he thought he was doing.&rdquo;</em>
            </p>
            <p>
              That gap is what kills operators. Not strategy. Not market. Not even funding.{" "}
              <strong style={{ color: "var(--brand-jungle)" }}>The gap between what we think we&apos;re doing and what we&apos;re actually doing.</strong>
            </p>
            <p>
              You don&apos;t need an Olympic-level coach to close that gap. You need a mirror that shows up every Monday and a few well-built prompts.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-2 p-8 text-center md:p-10" style={{ borderColor: "var(--brand-jungle)" }}>
            <p className="text-2xl font-extrabold leading-snug md:text-3xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
              The full prompt pack is here. Bookmark it, copy them once, run them weekly.
            </p>
            <Link
              href="/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack"
              className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
            >
              Open the prompt pack →
            </Link>
            <p className="mt-6 italic text-base" style={{ color: "var(--brand-myrtle)" }}>
              Knowledge with application is wisdom.
            </p>
          </div>

          {/* CREDITS */}
          <p className="mt-12 text-sm leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
            <strong style={{ color: "var(--brand-jungle)" }}>Credits:</strong> Coaching philosophy reference:{" "}
            <a href="https://www.theinnergame.com" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "1px dashed var(--brand-myrtle)" }}>Tim Gallwey, <em>The Inner Game of Tennis</em></a> (1974). The &ldquo;awareness, not advice&rdquo; framing comes from him. Olympic coach pairings reference public record (Bowman/Phelps, Glen Mills/Bolt, Aimee Boorman/Biles).
          </p>

          {/* HASHTAGS */}
          <div className="mt-8 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span
                key={h}
                className="rounded-full px-3 py-1 text-xs font-bold uppercase"
                style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}
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
