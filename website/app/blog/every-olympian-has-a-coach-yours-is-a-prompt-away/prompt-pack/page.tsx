import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prompt Pack: 5 Coaches in 5 Prompts",
  description:
    "Copy-paste ready. Five LLM prompts that turn Claude, ChatGPT, or Gemini into your Board of Advisors, Financial Advisor, Strategic Planning Facilitator, Accountability Coach, and Devil's Advocate.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack" },
  openGraph: {
    title: "Prompt Pack: 5 Coaches in 5 Prompts",
    description: "Drop them into Claude, ChatGPT, or Gemini. Cadence beats inspiration.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack",
  },
};

const PROMPTS: { title: string; useWhen: string; body: string }[] = [
  {
    title: "1. The Board of Advisors",
    useWhen: "you have a real decision and want five sharp brains on it.",
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

export default function PromptPackPage() {
  return (
    <article style={{ background: "var(--brand-white)" }}>
      {/* HERO */}
      <header style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Link
            href="/blog/every-olympian-has-a-coach-yours-is-a-prompt-away"
            className="text-xs font-bold uppercase"
            style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
          >
            ← Back to the post
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
            <span>Prompt Pack</span>
            <span style={{ color: "var(--brand-pastel)" }}>·</span>
            <span>Copy. Paste. Run weekly.</span>
          </div>
          <h1
            className="mt-6 font-extrabold tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            5 coaches in <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>5 prompts.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--brand-pastel)" }}>
            Drop these into Claude, ChatGPT, or Gemini. Fill in the bracketed fields with real numbers and real context. The 30% magic is the prompt. The 70% magic is your inputs. Run them weekly. Cadence beats inspiration.
          </p>
        </div>
      </header>

      {/* PROMPTS */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[860px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <div className="space-y-12">
            {PROMPTS.map((p) => (
              <div key={p.title}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
                  {p.title}
                </h2>
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

          {/* HOW TO RUN */}
          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-tea)", borderLeft: "4px solid var(--brand-myrtle)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>How to actually run these</div>
            <ol className="mt-5 space-y-3 text-base leading-relaxed list-decimal list-inside" style={{ color: "var(--brand-jungle)" }}>
              <li><strong>Paste real context.</strong> Vague in equals vague out.</li>
              <li><strong>Run them on a cadence.</strong> Monday for accountability. Before any real decision for the Board. Monthly for the Financial Advisor.</li>
              <li><strong>Iterate, don&apos;t just accept.</strong> Push back on the first answer. The conversation is the value.</li>
            </ol>
          </div>

          {/* CREDITS */}
          <div className="mt-12 text-sm leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>Credits.</strong> Coaching philosophy reference:{" "}
              <a href="https://www.theinnergame.com" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "1px dashed var(--brand-myrtle)" }}>Tim Gallwey, <em>The Inner Game of Tennis</em></a> (1974). The &ldquo;awareness, not advice&rdquo; framing comes from him.
            </p>
            <p className="mt-3">
              Olympic coach pairings: public record (Bowman/Phelps, Glen Mills/Bolt, Aimee Boorman/Biles). Prompts and operator framing original to Dru Nguyen, refined across Skylight and my businesses, 2026.
            </p>
            <p className="mt-6 italic" style={{ color: "var(--brand-jungle)" }}>
              Knowledge with application is wisdom.
            </p>
            <p className="mt-2 text-xs uppercase" style={{ letterSpacing: "0.18em" }}>
              Dru Nguyen · drunguyen.me · 30 Apr 2026
            </p>
          </div>

          {/* PRINT TIP */}
          <div className="mt-12 rounded-xl border-2 p-6 text-center" style={{ borderColor: "var(--brand-pastel)" }}>
            <p className="text-sm" style={{ color: "var(--brand-myrtle)" }}>
              <strong style={{ color: "var(--brand-jungle)" }}>Save it as PDF:</strong> in your browser, press Cmd+P (Mac) or Ctrl+P (Windows) and choose &ldquo;Save as PDF.&rdquo; Take the prompts with you.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
