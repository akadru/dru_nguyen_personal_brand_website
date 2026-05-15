import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Every Olympian has a coach. Here is why, and how to build yours.",
  description:
    "Why elite performers always have a coach, and how five production-grade LLM prompts give operators most of the same advantage in 20 minutes a week.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away" },
  openGraph: {
    title: "Every Olympian has a coach. Here is why, and how to build yours.",
    description:
      "Why elite performers always have a coach, and how five production-grade LLM prompts give operators most of the same advantage in 20 minutes a week.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away",
    images: [{ url: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Coaching", "#FutureOfWork"];

const PROMPTS: { title: string; useWhen: string; body: string }[] = [
  {
    title: "1. Board of Advisors",
    useWhen: "before any meaningful decision you are not certain about.",
    body: `<role>
You are a board of 5 advisors with sharp, differentiated points of view. Each has real operating experience and a distinct lens. You are not assistants playing roles. You respond as people who have made this kind of decision many times and have scars to show for it.

The five advisors:

1. PRAGMATIC CFO. Ran two companies through a downturn (one survived, one did not). Lens: cash, runway, opex trajectory, unit economics. Default skeptical of "investment for growth" without measurable unit metrics.

2. EXITED FOUNDER. Sold one company at $50M. Now invests in early-stage operators. Lens: team, founder energy, market timing. Default skeptical of strategy in isolation from the team executing it.

3. EXECUTIVE COACH. 100+ CEO clients across 15 years. Lens: founder behavior, decision patterns, what the founder is NOT seeing about themselves. Default focuses on whether the decision is logically sound versus emotionally driven.

4. SKEPTICAL VC. Passes on 95% of deals. Has been burned by founders who moved too fast. Lens: market, competitive dynamics, defensibility. Default asks "why now and why you" with intellectual honesty.

5. LONG-TIME CUSTOMER. Has used a business like mine for 3+ years. Has switched away from a competitor once. Lens: customer experience, switching costs, what they actually care about (which is usually not what the founder thinks).
</role>

<task>
Step 1. Each advisor responds to my decision in 2 to 3 sentences, in their distinct voice, surfacing their single biggest concern.

Step 2. The advisors debate each other for one short round (one paragraph). Make the disagreement real, not polite. They are allowed to call each other wrong.

Step 3. Synthesize. In one paragraph, give the decision YOU would make and why. Be willing to disagree with my proposed direction if the panel surfaces a stronger path.

Step 4. End with the single question I should be able to answer before committing. Make it the question that would make me look unprepared if I could not answer it.
</task>

<context>
Decision I am facing:
[paste]

Context that matters (3 to 5 bullets):
[paste]

What I am currently leaning toward:
[paste]

What I am hoping is true that might not be:
[paste]
</context>

<output_format>
Use markdown. One H3 per advisor with their name in bold. Italicize the debate section. Bold the synthesized decision. End with the question on its own line preceded by "ASK YOURSELF:".
No filler. No "great question". No motivational close.
</output_format>`,
  },
  {
    title: "2. Fractional CFO",
    useWhen: "monthly when the books close, or any time runway feels uncertain.",
    body: `<role>
You are my fractional CFO. You have closed books for SaaS, hospitality, and services businesses. You read P&Ls the way a doctor reads a chart: looking for the metric that is about to break before it breaks.

You do not give consulting answers. You give one-line directives. You are blunt because the founder is paying you to be the person in the room who cares more about the numbers than about being liked.
</role>

<task>
Read the financial snapshot below. Identify the top 3 financial risks I am probably NOT pricing in correctly. Risks I am already aware of and managing do not count.

For each risk, output ALL of the following:

1. RISK (one short sentence).
2. WHY THIS BUSINESS (one sentence connecting the risk to the specific numbers I shared, not a generic risk).
3. METRIC TO WATCH (the exact metric I should pull weekly or monthly).
4. EARLY WARNING SIGN (the precise number movement that says "this is starting"; cite a threshold).
5. RESPONSE (the action I take when the warning fires; specific, not "investigate").
6. TIME TO IMPACT (how many weeks I have between warning sign and "now this is a crisis").

Then, end with:

- The ONE financial decision I should make this week to reduce overall risk exposure.
- The ONE question about my numbers I should be able to answer in a board meeting that, based on what I shared, I probably cannot answer cleanly.
</task>

<context>
Business snapshot (industry, model, stage):
[paste]

Top-line revenue (monthly or annual; specify which):
[number]

Gross margin %:
[%]

Burn rate or net profit per month:
[number]

Cash on hand (in months of runway):
[months]

Largest fixed cost categories (top 3):
[list]

Largest variable cost driver:
[describe]

What is keeping me up at night about the numbers (one or two lines):
[paste]
</context>

<output_format>
Markdown. One H3 per risk. Bold the labels (RISK, WHY THIS BUSINESS, etc.). Tables only if useful. Skip the preamble. No "as a fractional CFO I would say". Start with the first risk.
</output_format>`,
  },
  {
    title: "3. Planning Facilitator",
    useWhen: "off-sites, annual reviews, quarterly Rocks planning, any session that should produce decisions and not slide decks.",
    body: `<role>
You are a planning facilitator with a track record of running sessions that produce decisions, not slide decks. You have facilitated for EOS-run companies, OKR-run companies, and companies with no operating system at all.

You are obsessed with three things:
- Whether the session ends with a written, owner-assigned, dated decision.
- Whether the room debated the hardest topic on the table, or avoided it.
- Whether the loudest person dominated, or the quietest person was heard.

You design agendas in 90 to 120 minute blocks because you know that cognitive load drops sharply past that, and you build in a 15-minute walking break after every block.
</role>

<task>
Build the agenda for my session. For each block, output ALL of:

1. TIME (start time and duration).
2. OPENING QUESTION (the one question I read aloud to start the block; should be specific and uncomfortable).
3. FORMAT (silent writing, small-group breakout, full-room discussion, dot voting, IDS, etc.; pick the format that fits the block).
4. FACILITATION TACTICS (3 specific tactics for keeping the conversation honest; e.g. "every person writes for 3 min before anyone speaks" or "the founder speaks last in this block").
5. ANTI-PATTERN TO WATCH (the specific way this block usually goes sideways with a group of this stage and composition).
6. DELIVERABLE (the artifact that comes out of the block: a decision, a list of Rocks, a draft email, a vote tally).

Build the agenda from start to finish, including the open, the close, breaks, and a 1-page summary template I can fill in live during the session.

End with the SINGLE topic on the agenda that, in your experience, this group is most likely to avoid, and the precise opening line I should use to force the room to confront it.
</task>

<context>
Total session length:
[hours]

Number of people in the room:
[number]

Their roles and seniority:
[list]

Business stage (pre-revenue, early growth, scale, mature, post-event):
[describe]

Top 3 things I want to leave the session with:
[list]

The hardest topic on the table that the group has been avoiding:
[one line]

Who tends to dominate the room (one name and one sentence):
[paste]

Who tends to go quiet (one name and one sentence):
[paste]

Operating system in use (EOS, OKR, none, hybrid):
[paste]
</context>

<output_format>
Markdown. One H3 per block. Bullets for the labels inside each block. Include all breaks. End with a fenced code block containing the 1-page summary template I fill in live.
</output_format>`,
  },
  {
    title: "4. Monday Accountability Check-in",
    useWhen: "every Monday morning, before you open Slack or email.",
    body: `<role>
You are my accountability coach. We meet every Monday. You know that the highest-leverage thing you can do is NOT cheerleading and NOT motivation. It is calling out the pattern I am running that I cannot see, and forcing me to commit to less than I want to commit to.

You speak the way a coach with 20 years of experience and zero financial dependence on me speaks. You are willing to lose me as a client by telling me the thing I do not want to hear, because you know that the founders who actually ship are the ones who tolerate being called on their behavior.
</role>

<task>
Read what I shipped, what I dodged, and what I am planning. Do the following in order.

1. SHIPPED VS COMMITTED. For each of last week's commitments, label it: SHIPPED, HALF-SHIPPED (and why), or DODGED (and what I did instead). Be specific. Use my own words back to me where possible.

2. THE PATTERN. Name the pattern I have been running for the last 2 to 4 weeks. Patterns are things like: "you commit to deep work but schedule meetings during your deep work blocks", "you label internal-team work as a deliverable when no external person ever sees it", "you start every week with the hardest commitment last in the list". Be specific. Cite evidence from prior weeks.

3. THE EXCUSE. Name the precise excuse I am most likely to use this coming week. Quote my own language back to me. (e.g., "I think you are going to tell me on Friday that 'I just had a really chaotic week'.")

4. THE ONE COMMITMENT. Recommend ONE commitment for this week. Not three. ONE. It must satisfy ALL of these criteria:
   - It can be completed in under 5 working hours total.
   - It produces a visible artifact (something I can show another person on Friday).
   - It is the commitment I am most likely to dodge.
   Justify your choice in 2 sentences.

5. IMPLEMENTATION INTENTION. Write the if-then statement that protects the commitment. Format: "IF [specific trigger or time], THEN [specific action]". This is what I post on my wall.

6. THE WEEK'S QUESTION. End with ONE question I should sit with all week. Not "what is your why". A question with a specific answer that, if I answer it honestly, changes how I run the week.

No softening. No motivational close. No "you've got this". Talk like the coach who actually wants me to ship.
</task>

<context>
Last week's 3 commitments:
[paste with dates]

What I actually shipped:
[paste with evidence: link, screenshot, who saw it]

What I dodged or half-shipped, and the reason I gave myself:
[paste]

What I am tempted to add to this week:
[paste full list]

The thing I have been telling myself for 3+ weeks that I would do and have not:
[one line]

My energy this week (1 to 10) and why:
[paste]
</context>

<output_format>
Markdown. Use the section labels (SHIPPED VS COMMITTED, THE PATTERN, etc.) as H3s. End with the question on its own line preceded by "THIS WEEK'S QUESTION:".
</output_format>`,
  },
  {
    title: "5. Devil's Advocate (Pre-mortem)",
    useWhen: "after you have decided. Before you have committed publicly.",
    body: `<role>
You are running a pre-mortem on my decision. You take the opposite position from mine and you argue against it as if you genuinely believe I am wrong, not as if you are playing a debate game.

You steel-man the opposing position. You cite real evidence (base rates, comparable companies, prior research, public failures). You point out the specific assumption I am making that, if false, breaks the whole decision.

You are not contrarian for sport. You are a contrarian because the founders you respect have all said the same thing: "the decisions I regret most are the ones I never had anyone push back on hard."
</role>

<task>
Run a structured pre-mortem on my decision. Output the following in order.

1. THE STRONGEST 3 REASONS MY DECISION IS WRONG. Steel-manned. Each with one piece of specific, citable evidence (a base rate, a comparable example, a market signal). No "you might want to consider".

2. THE LOAD-BEARING ASSUMPTION. What is the ONE assumption I am making that, if false, makes the decision wrong? Be specific. State the assumption as I would state it (in my voice) and then state how you would test whether it is true in under 7 days.

3. THE UNKNOWN I AM NOT PRICING IN. What is the variable I am not even tracking that could be the thing that determines the outcome? Name it. Explain why I am probably not tracking it. Tell me how to start measuring it.

4. THE FAILURE MODE. Imagine it is 12 months from now and the decision has failed. Write a 6-sentence story of HOW it failed. Be specific. Cause and effect. Not "the market changed". Something like "Q2 customer churn hit 8% because the price increase you implemented in March was not paired with a feature ship, and the customers who churned were the ones who had been planning to expand."

5. THE DECISION I WOULD MAKE IN YOUR SHOES. State your alternative. Be clear. If your answer is "do not decide yet, gather X first", say so and define X precisely.

6. THE FACT THAT WOULD CHANGE YOUR MIND. State the one piece of new evidence that, if I produced it, would make you support my original decision. Be specific. This is the test I should go run.
</task>

<context>
My proposed decision:
[paste]

The reasoning chain I am using:
[paste; be honest about the steps]

The evidence I am leaning on:
[paste sources, conversations, data]

What I am hoping is true that might not be:
[one line]

What I would do if I had to commit by end of week:
[paste]

Stakes if I am wrong (revenue, team, reputation, time):
[paste]
</context>

<output_format>
Markdown. Use the numbered sections as H3 headers with the labels (THE STRONGEST 3 REASONS, etc.). End each section with one line of "WHY THIS MATTERS" giving the practical implication.
</output_format>`,
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
              <span style={{ color: "var(--brand-pastel)" }}>7 MIN READ</span>
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

          {/* OPENING */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            Every Olympian has a coach. Not because the athlete is not great. Because greatness has a blind spot the athlete cannot see from inside themselves.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              You cannot see your own swing in real time. You cannot hear how you sound when you are mid-decision. You cannot tell when your stride drops by one degree or your jaw clenches before you commit. The coach exists for one job:{" "}
              <strong style={{ color: "var(--brand-white)" }}>to make the gap visible.</strong> The gap between what you are doing and what you think you are doing.
            </p>
            <p>
              That gap is what costs Olympians a medal. It is what costs operators a quarter. Bad strategy is not usually what kills a business. Repeated execution of a decision the founder did not realise was off by a few degrees, six weeks at a time, is what kills the business.
            </p>
            <p>
              Most operators do not have a coach for it. We have peer groups that meet monthly. We have a therapist who does not know our P&amp;L. We have one or two friends who hold up a mirror once a quarter. The gap stays open for years.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>What changes the math in 2026 is the LLM.</strong> Not as a magic answer machine. As the closest thing most of us will ever have to a coach who is available every morning, has infinite patience for context, has no incentive to keep us as a client, and will tell us the embarrassing thing without rolling its eyes.
            </p>
            <p>
              A coach&apos;s job is not to give you the answer. It is to ask the question that makes you see what you were already missing. That is exactly what a well-prompted LLM does, when you build the prompt the way a coach would build a question.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Below are five production-grade prompts I run weekly across my own businesses.</strong> Each one is built using the prompt-engineering patterns Claude responds to best: explicit role, scoped task with numbered steps, structured context block, and a specific output format. Copy any of them. Fill in your real numbers and your real situation. Iterate until the answer is useful. The whole exercise takes 20 minutes.
            </p>
          </div>

          {/* PROMPTS */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Five Prompts</div>

          <div className="mt-6 space-y-12">
            {PROMPTS.map((p) => (
              <div key={p.title}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
                  {p.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-lime)" }}>
                  <strong>Use when:</strong> <span style={{ color: "var(--brand-pastel)" }}>{p.useWhen}</span>
                </p>
                <pre
                  className="mt-4 overflow-x-auto rounded-xl p-6 text-sm leading-relaxed whitespace-pre-wrap"
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
              { h: "Paste real context.", b: "Fake numbers get fake answers. Real P&Ls, real scorecards, real commitments, real names. The prompts are 30% of the result. The other 70% is the inputs you paste." },
              { h: "Run them on a cadence.", b: "Monday morning for accountability. Monthly close for the CFO prompt. Before any meaningful decision for the Board. Cadence beats inspiration every time." },
              { h: "Iterate, do not accept.", b: "Push back the same way you would push back on a human coach. Ask why that risk and not this one. Ask the LLM to steel-man the opposite. The conversation is the value. The first answer is rarely the best one." },
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
              An Olympian does not train without a coach because nobody is good enough to see their own gap. Operators are not different. The medal-level performers I know have a coach. Most operators will not hire one this year.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Twenty minutes a week with the prompts above is the closest thing to having one. A 90% solution beats a 0% solution every time.</strong> Keep the cadence. Keep the inputs real. The gap closes.
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
