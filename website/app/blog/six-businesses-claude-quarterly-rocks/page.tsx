import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How I run 6 businesses with Claude to achieve our quarterly rocks | Dru Nguyen",
  description:
    "Six businesses. Eighteen rocks. Ninety days. The operating loop I built around Claude to actually move EOS rocks across Xood, Skylight, GAM, Tictag, East West, and Nuen.",
  alternates: { canonical: "/blog/six-businesses-claude-quarterly-rocks" },
  openGraph: {
    title: "How I run 6 businesses with Claude to achieve our quarterly rocks",
    description:
      "The operating loop that turns six EOS rock lists into one prioritized week. Two production prompts inside.",
    type: "article",
    url: "/blog/six-businesses-claude-quarterly-rocks",
  },
};

// ───────────────────────────────────────────────────────────────────────
// PROMPTS, production-grade. Copy buttons live on the page itself.
// ───────────────────────────────────────────────────────────────────────

const SUNDAY_PROMPT = `You are my Sunday operating partner across 6 businesses I operate or advise:
- Xood (AI data services, Vietnam; I am Co-Founder & MD, Commercial)
- Skylight (rooftop hospitality, Nha Trang; I am Founder)
- GAM Esports (Vietnam esports org; I am Investor/Advisor)
- Tictag (Singapore AI & data solutions; I am Advisor)
- East West Brewing (craft beer, HCMC; I am Investor/Advisor)
- Nuen Motor (premium electric motorbike, Vietnam; I am Investor/Advisor)

For each business below, I will paste:
- The 3 quarterly rocks (priority, owner, due date, current % done)
- Last week's scorecard numbers vs target
- The top 3 open issues from the L10
- Any decisions still pending on me as the operator

Plus my calendar for the upcoming week.

Your task, in this exact order:

1. Flag which rocks are at risk this week. Use the rule:
   if (percent done / percent of quarter elapsed) < 0.85, the rock is at risk.
   Name the rock, the owner, and the gap in one line each.

2. Cross-reference my calendar. Tell me where the calendar does NOT match
   the at-risk rocks. Be specific: name the calendar block, name the rock,
   and propose the swap (move which block to which time).

3. Surface any issue that has been on the list more than 2 weeks.
   Those are decisions I am dodging. Name them.

4. Give me ONE paragraph per business titled "Where to point your week."
   Maximum 4 sentences. Operator voice. No fluff.

5. End with the single hardest question I am not asking myself this week.

Format: markdown. One H2 per business. Be brutal.
I do not need encouragement, I need accuracy.
No em-dashes. No corporate softeners ("perhaps", "consider", "might want to").`;

const DAILY_PROMPT = `You are my morning Chief of Staff across 6 businesses:
Xood, Skylight, GAM, Tictag, East West, Nuen.

Inputs I will paste below:
- Yesterday's notes (meetings, decisions, blockers)
- Today's calendar
- Any messages still waiting on a response from me
- The current at-risk rocks from the Sunday review

Your task:

1. Identify the 3 things that, if I do them today, move an at-risk rock
   forward by a MEASURABLE step. Name the rock. Name the step.
   No vague advice ("follow up with team"). Specific actions only.

2. Identify anything in yesterday's notes that needs a closing message
   from me to the team. Draft each message in my voice (direct, operator,
   no fluff, no em-dashes, no "just wanted to circle back") at one
   paragraph each, ready to copy into Slack.

3. Flag anything from yesterday that I committed to but did not write
   down anywhere. Those are the commitments I will drop. Name them so
   I can put them in the right place.

4. Give me a one-line "do not do today" warning if my calendar contains
   a block that does not match an at-risk rock. State which block and why.

Format: numbered list. No preamble. No closing summary. I will copy
the actions straight into Slack and my task list within 60 seconds.`;

// ───────────────────────────────────────────────────────────────────────
// PAGE
// ───────────────────────────────────────────────────────────────────────

export default function Page() {
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
              <span>AI Operator · EOS</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>6 MIN READ</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>18 MAY 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(40px, 7vw, 88px)",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                // Stencil treatment: tight letter-spacing + spray-shadow on lime word
              }}
            >
              How I run 6 businesses with Claude{" "}
              <em
                style={{
                  color: "var(--brand-lime)",
                  fontStyle: "italic",
                  textShadow: "0 1px 0 rgba(173,251,73,0.4), 0 6px 18px rgba(173,251,73,0.18)",
                }}
              >
                to achieve our quarterly rocks.
              </em>
            </h1>
          </Reveal>
        </div>

        {/* HERO IMAGE, wheat-paste/B&W treatment with single lime tag overlay */}
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/six-businesses-claude-quarterly-rocks.webp"
                alt="A Saigon concrete wall with a lime spray-paint stencil reading SIX ROCKS, black and white base."
                fill
                priority
                sizes="(max-width: 1300px) 100vw, 1300px"
                className="object-cover"
                style={{ filter: "grayscale(0.85) contrast(1.05)" }}
              />
              {/* Lime stencil tag overlay, bottom-left */}
              <div
                className="absolute bottom-6 left-6 px-4 py-2 text-[11px] font-extrabold uppercase"
                style={{
                  background: "var(--brand-lime)",
                  color: "var(--brand-jungle)",
                  letterSpacing: "0.28em",
                  transform: "rotate(-1.5deg)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                }}
              >
                § 18 ROCKS · 90 DAYS
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* BODY */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

          {/* OPENING — leading blockquote with lime border */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            6:42am, Nha Trang. The wall behind my desk has six lists pinned to it. Six businesses, three rocks each, ninety days. Eighteen rocks. One operator.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              In 2023, this is the morning I dreaded. Two hours catching up across six inboxes. Two hours in meetings. Two more hours pretending I was doing strategy. By Friday I had moved zero rocks.
            </p>
            <p>
              In 2026, the same morning takes thirty minutes. Same eighteen rocks. Same six businesses. One Claude session.{" "}
              <strong style={{ color: "var(--brand-white)" }}>Not because I got more disciplined. Because I built one operating loop that does the heavy lift before I open the first email.</strong>
            </p>
            <p>This is how it works.</p>
          </div>

          {/* ───────── § 01 ───────── */}
          <StencilDivider label="§ 01 · THE ROCK PROBLEM" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Rocks are easy to set. They are <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>brutal</em> to keep.
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Quarterly rocks are EOS gospel. Three priorities per business, ninety days, owned by a name. The math is clean. The execution is where everyone loses.
            </p>
            <p>
              Every operator I know in EO Vietnam has had the same conversation with themselves in week 7: <em>we set good rocks, the quarter is half over, I cannot remember the last time I touched two of them.</em>
            </p>
            <p>
              Portfolio operators drift faster. Six businesses means six L10s, six scorecards, six issues lists. Six contexts switching in your head every hour. The switching tax compounds. By Wednesday afternoon you are answering Skylight in GAM&apos;s voice and forgetting why Nuen&apos;s rock matters this week.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>The bottleneck is not strategy. It is attention.</strong> AI does not fix attention. A loop does. AI is what makes the loop run in thirty minutes instead of three hours.
            </p>
          </div>

          {/* ───────── § 02 ───────── */}
          <StencilDivider label="§ 02 · THE SUNDAY SETUP" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Sunday night. <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Six lists. One prompt.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>Every Sunday night, I drop six things into Claude:</p>
            <ol className="ml-6 list-decimal space-y-2">
              <li>The rock list for each business (rock, owner, due date, % done).</li>
              <li>The scorecard numbers from last week.</li>
              <li>The top three open issues per business.</li>
              <li>My calendar for the week ahead.</li>
              <li>Decisions still pending on me as the operator.</li>
              <li>The single biggest thing I avoided last week.</li>
            </ol>
            <p>Then I run this prompt:</p>
          </div>

          <PromptBlock title="The Sunday Operating Partner" body={SUNDAY_PROMPT} />

          <WheatPasteQuote>
            &ldquo;You have four hours blocked on Skylight, but two of your at-risk rocks are at Xood. Move one block.&rdquo;
          </WheatPasteQuote>

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Out of this comes a single document I read in five minutes. It tells me which rocks are at risk, which are sandbagged, where my calendar contradicts the rocks, and what question I am dodging this week. Specifically calls out the swap, by name. That is the value: not the analysis, the<em> specificity </em>of the recommendation.
            </p>
          </div>

          {/* ───────── § 03 ───────── */}
          <StencilDivider label="§ 03 · THE DAILY 30" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            6:30 to 7:00am. <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Coffee, terminal, Claude.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>The thirty minutes break into four blocks.</p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>5 minutes.</strong> I dump yesterday&apos;s notes into a single prompt and ask Claude to extract: what moved, what stalled, what needs me today.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>10 minutes.</strong> I run the daily filter prompt.
            </p>
          </div>

          <PromptBlock title="The Daily Chief of Staff" body={DAILY_PROMPT} />

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>10 minutes.</strong> I do the three things Claude flagged as must-move-today. Usually it is a Loom for a team, a Slack message to a co-founder, or a one-line decision in a thread that has been stuck for two days.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>5 minutes.</strong> I close the loop with the team. One message per business that needs one. The message is one paragraph. The team knows what to do with it because the message names the rock.
            </p>
          </div>

          {/* ───────── § 04 ───────── */}
          <StencilDivider label="§ 04 · THE QUARTERLY ROLLUP" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Day 88. <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>The verdict, by evidence.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Three days before the next L10, I run the rollup. Claude gets ninety days of weekly summaries, scorecard data, and rock progress notes. It returns:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong style={{ color: "var(--brand-white)" }}>Per business:</strong> rock 1, 2, 3 → done / on track / dropped, with the evidence quoted.</li>
              <li><strong style={{ color: "var(--brand-white)" }}>Across all six:</strong> the pattern.</li>
              <li><strong style={{ color: "var(--brand-white)" }}>Three candidate rocks for next quarter,</strong> ranked by leverage.</li>
            </ul>
            <p>
              The pattern is the part you do not see when you are inside week-to-week. Last quarter it was this: every rock owned by a co-founder hit. Every rock owned by me solo missed. That was a real finding. It changed how we set Q2. I now refuse to own any rock alone.
            </p>
          </div>

          {/* ───────── § 05 ───────── */}
          <StencilDivider label="§ 05 · WHAT DOES NOT WORK" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Three things I tried that <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>flopped.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>1. Multi-agent setups.</strong> I wired three Claude agents to talk to each other and produce a synthesized briefing. The synthesis was worse than a single Claude with the right prompt. Multi-agent solves a problem I do not have.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>2. Voice-only loops.</strong> I tried dictating my morning notes. Transcripts were fine. The thinking was worse. Writing IS the thinking. Skip the writing, skip the thinking.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>3. Fully autonomous email replies.</strong> Drafts were good. Judgment about which threads to actually reply to was not. Claude drafts. Claude never sends.
            </p>
          </div>

          {/* CLOSING */}
          <div className="mt-16 border-t pt-10" style={{ borderColor: "rgba(173,251,73,0.25)" }}>
            <p className="text-2xl font-extrabold leading-snug md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
              Operators are bottlenecked by attention, not by AI. Six businesses. Eighteen rocks. Ninety days. The loop is what makes it possible. <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Claude is what makes the loop fast.</em>
            </p>
            <p className="mt-6 text-lg" style={{ color: "var(--brand-pastel)" }}>
              Spend the thirty minutes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Get the next teardown
              </Link>
              <Link
                href="/contact?intent=speaking"
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ borderColor: "var(--brand-lime)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
              >
                Book this as a workshop
              </Link>
            </div>
          </div>

          {/* SIGNATURE — stencil tag */}
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

// ───────────────────────────────────────────────────────────────────────
// BANKSY COMPONENTS, scoped to this post.
// ───────────────────────────────────────────────────────────────────────

function StencilDivider({ label }: { label: string }) {
  return (
    <div className="mt-16 mb-8 md:mt-20 md:mb-10">
      {/* Torn-paper jagged edge */}
      <div
        aria-hidden
        style={{
          height: "12px",
          background:
            "linear-gradient(180deg, rgba(173,251,73,0.0) 0%, rgba(173,251,73,0.0) 50%, var(--brand-lime) 50%, var(--brand-lime) 60%, transparent 60%)",
          clipPath:
            "polygon(0 50%, 3% 40%, 6% 55%, 10% 45%, 14% 55%, 18% 42%, 22% 55%, 26% 47%, 30% 55%, 34% 44%, 38% 55%, 42% 46%, 46% 55%, 50% 43%, 54% 55%, 58% 47%, 62% 55%, 66% 44%, 70% 55%, 74% 46%, 78% 55%, 82% 43%, 86% 55%, 90% 47%, 94% 55%, 98% 44%, 100% 55%, 100% 100%, 0 100%)",
        }}
      />
      <div
        className="mt-4 text-[10px] font-extrabold uppercase"
        style={{
          color: "var(--brand-lime)",
          letterSpacing: "0.32em",
          fontFamily: "'Outfit', system-ui, sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function PromptBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-6">
      <div
        className="mb-2 inline-block px-3 py-1 text-[10px] font-extrabold uppercase"
        style={{
          background: "var(--brand-lime)",
          color: "var(--brand-jungle)",
          letterSpacing: "0.22em",
          transform: "rotate(-1deg)",
        }}
      >
        Prompt · {title}
      </div>
      <pre
        className="overflow-x-auto rounded-xl p-6 text-sm leading-relaxed whitespace-pre-wrap"
        style={{
          background: "rgba(173,251,73,0.06)",
          color: "var(--brand-white)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          border: "1px solid rgba(173,251,73,0.25)",
          // Stencil-edge feel: subtle corner notch via clip-path
          clipPath:
            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
        }}
      >
        <code>{body}</code>
      </pre>
    </div>
  );
}

function WheatPasteQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 flex justify-center">
      <blockquote
        className="max-w-xl px-6 py-5 text-lg md:text-xl font-bold"
        style={{
          background: "rgba(173,251,73,0.08)",
          color: "var(--brand-white)",
          borderLeft: "4px solid var(--brand-lime)",
          borderRight: "1px solid rgba(173,251,73,0.25)",
          transform: "rotate(-0.6deg)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
          fontStyle: "italic",
        }}
      >
        {children}
      </blockquote>
    </div>
  );
}
