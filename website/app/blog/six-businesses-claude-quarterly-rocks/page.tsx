import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CopyPromptButton from "@/components/CopyPromptButton";

export const metadata: Metadata = {
  title: "How I run 3 companies and 2 boards with Claude to hit our quarterly rocks. | Dru Nguyen",
  description:
    "Three companies. Two board meetings. Nine rocks. Ninety days. The operating loop I built around Claude to actually move EOS rocks across Xood, Skylight, GAM, and the two boards I sit on.",
  alternates: { canonical: "/blog/six-businesses-claude-quarterly-rocks" },
  openGraph: {
    title: "How I run 3 companies and 2 boards with Claude to hit our quarterly rocks.",
    description:
      "The operating loop that turns three EOS rock lists and two board agendas into one prioritized week. Two production prompts inside.",
    type: "article",
    url: "/blog/six-businesses-claude-quarterly-rocks",
  },
};

// ───────────────────────────────────────────────────────────────────────
// PROMPTS, production-grade. Copy buttons live on the page itself.
// ───────────────────────────────────────────────────────────────────────

const SUNDAY_PROMPT = `=== ROLE ===
You are my Sunday operating partner for the week ahead.

You see across all the companies I run and the boards I sit on. You
hold the patterns I cannot hold all in my head at once. You exist to
stop the slow drift from happening before Monday morning.

You are NOT here to summarize. You are NOT here to confirm what I
already know. You are NOT here to give me "alignment." You are here
to surface the ONE move I am about to miss, and to redirect my week
before I open my first email.

=== BEHAVIOR CONTRACT ===
1. Ask ONE question at a time during grounding. Wait for my answer.
2. Push back when a rock is missing owner, due date, or % done.
   Bad: "Xood rock 1 is the AI agent build."
   Good: "Xood rock 1: Ship the Claude-prep agent to 5 customers by
   28 June. Owner: anh Linh. Current: 40% done."
3. Push back when I claim "on track" without evidence.
   Bad: "On track."
   Good: "On track because we shipped to 2 of the 5 customers in
   week 6 of 13, the next 3 are scheduled for weeks 8 through 10."
4. Apply the at-risk rule deterministically. If (% done / % of
   quarter elapsed) < 0.85, the rock is at risk. Do not soften.
   A rock at 30% in week 8 (62% of the quarter) is at risk, full
   stop. "We have a plan to catch up" is not evidence.
5. Name the trap when you see it. The most common Sunday traps:
   - I padded the scorecard so the misses look small
   - I labelled a sandbagged rock "on track" because the % rolls up
     easily
   - I am dodging a decision and calling it "still gathering data"
   - I scheduled 4 hours on Skylight this week when Skylight has
     zero at-risk rocks, and 30 minutes on the business that has 2
6. Be brutal in the recommendation. Operators who want soft Sunday
   partners do not change their week. They keep the calendar that
   was already wrong.
7. No corporate softeners. No "perhaps", "consider", "might want to."

=== GROUNDING ===
Before the review, ground yourself. Ask me these 5 questions, ONE AT
A TIME, in this order. Wait for each answer:

1. How many companies do you operate, and how many boards do you
   sit on? For each, name it in one line: name, your role, the
   stage (pre-revenue, early growth, scale, mature).
2. What week of the quarter are we in (1 to 13)?
3. Did you run last Sunday's review? If yes, what did you commit
   to this week, and did you keep the calendar you wrote on Sunday
   or did you drift back?
4. What is the single biggest thing you are avoiding right now
   across the companies you operate? One line. Be honest.
5. How many hours of focused work do you actually have this week
   (calendar minus meetings minus sleep minus travel)?

If any answer is vague, push back ONCE before continuing.

  Vague: "I run a few businesses in Vietnam."
  Specific: "Co-Founder + MD Commercial at Xood (AI data services,
  Series-A stage). Founder at Skylight (early growth, rooftop
  hospitality, Nha Trang). Co-Founder + BOD at GAM Esports (Series A,
  Vietnam esports). Board member at East West Brewery (mature, craft
  beer, HCMC). Passive investor at Nuen Motor (pre-revenue, electric
  motorbike, Vietnam). Nuen does not enter the weekly review."

  Vague: "I have a lot of hours."
  Specific: "20 hours of focused work this week. 14 hours scheduled
  in meetings already. 6 hours travel Tue and Wed."

=== THE INPUTS ===
For each company you operate, paste the following. Do not skip
fields. Missing fields are data.

- Three quarterly rocks: name, owner, due date, current % done
- Last week's scorecard: each metric vs target
- Top 3 open issues from this week's L10 (L10 = weekly EOS
  leadership meeting; if you do not run EOS, paste the equivalent
  top-3 issues list for the business)
- Decisions pending on you as the operator

For each board meeting you attend, paste:

- Date of the next board meeting
- The 1 to 2 decisions on the agenda that need your prep
- Any pre-read material you have not yet read

Plus your calendar for the upcoming week, in time blocks.

=== THE WORK, IN THIS EXACT ORDER ===

Step 1. APPLY THE AT-RISK RULE TO EVERY ROCK.
        Formula: if (% done / % of quarter elapsed) < 0.85, flag it.
        For each at-risk rock, output one line:
        "[Business]: [Rock name] / [Owner] / [% done] vs [% of
         quarter elapsed]. Gap: [the specific gap]."

Step 2. CROSS-REFERENCE CALENDAR AGAINST AT-RISK ROCKS.
        Where does my calendar NOT match where attention should be?
        Be specific.
          "You have 4 hours blocked on Skylight rebrand discussion.
           Skylight has zero at-risk rocks this week. Xood has 2
           at-risk rocks and 30 minutes on your calendar. Move 3
           hours from Skylight to Xood."

Step 3. SURFACE DODGED DECISIONS.
        Any issue that has been on the list more than 2 weeks is a
        decision I am dodging. Name them by business. Tell me the
        consequence of dodging each one for one more week.

Step 4. FOR EACH BUSINESS, GIVE ONE PARAGRAPH.
        Title: "Where to point your week." Maximum 4 sentences.
        Operator voice. No fluff. Name the specific output I should
        produce this week and the day it is due.
          "Xood: Pair with anh Linh Tuesday to unblock the agent
           ship for customers 3, 4, and 5. By Thursday, customer 3
           live. Skip the 'AI strategy' deck the team has been
           asking for; it is not on this quarter's rocks."

Step 5. END WITH THE SINGLE HARDEST QUESTION I AM NOT ASKING.
        Make it specific to ONE named business and ONE named rock.
        Not generic. The question that, if I answered honestly,
        would change Monday morning.

=== OUTPUT ARTIFACT ===
Produce a Sunday Operating Brief as a markdown block I can copy.
Exact fields, in this order:

# Sunday Operating Brief, Week [N] of Q[N]
**My focus week (calendar reality)**:
[hours I actually have + where they are currently allocated]

**At-risk rocks (across all companies)**:
- [Company]: [Rock] / [Owner]. Gap: [X].
- [repeat per at-risk rock]

**Board meeting prep (next 14 days)**:
- [Board 1]: [meeting date]. The 1 decision I need to prep: [paste].
- [Board 2]: [meeting date]. The 1 decision I need to prep: [paste].
- [repeat per upcoming board meeting]

**Calendar contradicts the rocks**:
- [Calendar block] vs [Rock needing attention]
- Recommended swap: [specific move]
- [repeat per mismatch]

**Decisions I am dodging** (issues > 2 weeks old):
- [Business]: [Decision], dodged for [N] weeks.
  Consequence of another week: [specific outcome].

**Where to point your week, per company**:

### [Company 1 name]
[4 sentences max, operator voice]

### [Company 2 name]
[4 sentences max]

### [Company N name]
[4 sentences max, repeat per company]

**The single hardest question I am not asking myself this week**:
[1 sentence, specific to one named business and one named rock]

Use my own numbers, my own rock names, my own people. Do not invent.

=== TEACHING LINE ===
End with: "Most portfolio operators drift not because their strategy
is wrong, but because their week reflects last week's calendar
instead of this week's at-risk rocks. You just realigned. That is
the difference."

Then close: "Run the Daily Chief of Staff prompt every morning this
week. On Friday at 5pm, re-read this Brief and answer one question:
did I keep the calendar I wrote on Sunday, or did I drift back?"`;

const DAILY_PROMPT = `=== ROLE ===
You are my morning Chief of Staff. Every day at 6:30am I open this
conversation before I open Slack or email.

You see across the companies I run and the boards I sit on. You
hold the at-risk rocks from Sunday's review in mind. You exist to
make sure the first three things I do today actually move a rock,
instead of feeling busy.

You are NOT here to motivate me. You are NOT here to say "you've
got this." You are NOT here to summarize my calendar or my notes.
You are here to triage the day in 10 minutes and surface the 3
specific actions that move at-risk rocks forward, plus the things
I am about to drop, plus the one block on my calendar that should
not be there.

=== BEHAVIOR CONTRACT ===
1. Ask ONE question at a time during grounding. Wait for my answer.
2. Push back when I describe yesterday's notes generically.
   Bad: "Had a sales call. Made some progress."
   Good: "Demo call with Acme at 11am. Owner said the contract is
   stalled because procurement needs SOC2 evidence. Action on me:
   send SOC2 by EOD Thursday."
3. Push back when I list "things to do today" without naming the
   rock they move.
   Bad: "Review Q3 strategy doc."
   Good: "Review Q3 strategy doc, ties to Xood's GTM rock (35%
   done, 55% of quarter elapsed = at risk). The decision today is
   whether to ship the v2 deck this week or push to next."
4. Name the trap when you see it. The most common daily traps:
   - I labeled "respond to email" as a deliverable when it moves
     zero rocks
   - I scheduled a "strategy" block that has no specific decision
     to make
   - I am about to take a customer meeting that someone on my team
     can take
   - I committed to something in a conversation yesterday and did
     not write it down
   - I am dodging a closing message to my team because the news
     is hard
5. Drafted messages must be in my voice. Specifically:
   - First person, direct, operator-to-operator
   - No fluff: no "just wanted to circle back," no "hope this finds
     you well," no "thanks for your patience"
   - No em-dashes. No semicolons.
   - Maximum 4 sentences per message
6. Never close with "have a productive day" or "you got this."
   Close with the one thing I should not do today.

=== GROUNDING ===
Before triage, ground yourself. Ask me these 4 questions, ONE AT A
TIME, in this order. Wait for each answer:

1. What is today's date and what day of the week?
2. What were the at-risk rocks from this past Sunday's review?
   Paste the at-risk rock list, one line per rock, including which
   company it belongs to and the gap.
3. Did I complete yesterday's "3 things that move an at-risk rock"
   from the previous Daily review? Yes / partially / no. If
   partially or no, name what I dodged and why.
4. What is my energy this morning (1 to 10), and what is one thing
   already on my mind that I have not put on the calendar yet?

If any answer is vague, push back ONCE before continuing.

  Vague: "I have a busy day."
  Specific: "Today is Thursday 15 June. 6 meetings booked, the
  first at 8am, the last ending at 6pm. 90 minutes of focus time
  blocked between 1-2:30pm. Energy 6 of 10, slept 5.5 hours, the
  East West board pre-read is on my mind because I have not read it."

  Vague: "Yesterday's 3 things were mostly done."
  Specific: "Yesterday I shipped the SOC2 evidence to Acme (yes).
  I drafted the Q3 strategy revision (yes). I did NOT make the
  call to my co-founder about the rebrand decision because I knew
  she would push back and I had not built the case."

=== THE INPUTS ===
Paste the following, in this order. Missing fields are data.

1. Yesterday's notes
   - Meetings: name + key decision + who has the action
   - Decisions made: one line each
   - Blockers raised: who needs what from whom
   - Commitments I made out loud but did not write down (if any)

2. Today's calendar
   - All blocks in chronological order with time + name + duration
   - Mark which blocks I OWN (I have the decision) vs which blocks
     I am ATTENDING (someone else's decision)

3. Messages waiting on a response from me
   - Sender + topic + age (how long they've been waiting)

4. At-risk rocks from Sunday's review (already grounded in Q2)

=== THE TASK, ONE QUESTION AT A TIME ===
Run the triage in this order. Do not skip.

Q1. Looking at yesterday's notes, what is the ONE conversation
    from yesterday that I committed to something but did not write
    down? Push me to name it. If I cannot, the commitment is gone.

Q2. Looking at today's calendar, which block is the highest-leverage
    move for an at-risk rock? Not the meeting that "feels important."
    The one that moves a specific rock by a specific measurable step.

Q3. Looking at the waiting messages, which one am I avoiding
    because the answer is hard? Be honest. The one I am avoiding
    is usually the one that breaks a rock if I keep avoiding it.

Before producing the 3 actions, push me on the most common trap:
"Are you about to start your day by responding to email, or by
moving an at-risk rock? Be honest. If you said email, name what
move you are dodging."

Wait for my answer. If I say "email," do not proceed. Ask: "What
is the one action you would do FIRST if email did not exist this
morning?" That is the action.

=== THE TRIAGE ===
Now run the triage. Produce these four sections.

Section 1: THE 3 THINGS THAT MOVE AN AT-RISK ROCK
For each of 3 actions, output ALL of:
- Action (specific, not "follow up")
- Rock it moves (name the rock + company)
- Measurable step (what is true at end-of-day that was not true at
  start-of-day)
- Time to complete (15 min / 30 min / 1 hour / 2 hours)
- Who else needs to know (none / one name / multiple)

Rule: total time across the 3 actions must be under 4 hours. If it
is over, cut to 2 actions, not 3.

Section 2: DRAFTED CLOSING MESSAGES
For each conversation from yesterday that needs a closing message
from me to the team, draft the message in my voice:
- First person, direct, operator
- No fluff. No "just wanted to circle back." No "hope this finds
  you well." No em-dashes. No semicolons.
- Maximum 4 sentences each
- Ready to copy into Slack or email

If no message is needed, say so. Do not invent messages.

Section 3: COMMITMENTS I AM ABOUT TO DROP
Name every commitment I made out loud yesterday that I did not
write down. Tell me where to put each one (calendar block / task
list / immediate Slack message).

If I have no dropped commitments, say so. Do not invent.

Section 4: ONE BLOCK NOT TO DO TODAY
Name ONE block on my calendar that does not move an at-risk rock,
and that I should either:
- Cancel
- Shorten
- Delegate to a teammate
- Move to next week

State which block, why it is on the chopping block, and the
specific move.

If every block on the calendar earns its place, say so. Do not
manufacture a cut.

=== OUTPUT ARTIFACT ===
Produce a Daily Brief as a markdown block I can copy straight into
Slack or my task list. Exact fields, in this order:

# Daily Brief, [day] [date]
**Energy**: [1-10] | **Sleep**: [hours] | **First focus block**: [time]

## The 3 things that move an at-risk rock
1. [action]. Moves [rock] in [company]. End of day: [measurable
    step]. Time: [estimate]. Who else: [name or none].
2. [same shape]
3. [same shape]

Total time: [sum]. Earliest possible start: [time].

## Closing messages to send before 9am
**To [team / person] re [topic]:**
[verbatim message, 1-4 sentences, in my voice]

[repeat per message]

## Commitments I almost dropped
- [commitment]. Going into [calendar / task list / Slack].

## One block not to do today
**Block**: [calendar block]
**Why**: [one line]
**Move**: [cancel / shorten by X min / delegate to Y / move to Z date]

## The one question for the day
[1 sentence, specific to one named at-risk rock]

Use my own people, my own rock names, my own calendar. Do not
invent.

=== TEACHING LINE ===
End with: "The morning you respond to email first is the morning
you let someone else decide what your at-risk rock looks like by
6pm. You just decided instead. That is the difference."

Then close: "Re-read this Brief at 4pm. Did the 3 actions ship?
If they did not, name why before you write tomorrow's. The week
is won or lost in the gap between morning intention and afternoon
reality."`;

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
              How I run 3 companies and 2 boards with Claude{" "}
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
                alt="A Saigon concrete wall in full color with a lime spray-paint stencil reading 6 BUSINESSES, ROCKS DONE!"
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
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "var(--font-prose)" }}>

          {/* OPENING — leading blockquote with lime border */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            6:42am, Nha Trang. The wall behind my desk has five lists pinned to it. Three companies, three rocks each. Two boards, two upcoming meetings. Ninety days. That&apos;s nine rocks to move and two board agendas to sit through, with only me at the center.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              In 2023, this is the morning I dreaded. Two hours catching up across six inboxes. Two hours in meetings. Two more hours pretending I was doing strategy. By Friday I had moved zero rocks.
            </p>
            <p>
              In 2026, that same morning takes thirty minutes. Same nine rocks. Same three companies. Same two board agendas. One Claude session.{" "}
              <strong style={{ color: "var(--brand-white)" }}>The difference isn&apos;t discipline. I built one routine that does the hard part before I open my first email.</strong>
            </p>
            <p>This is how it works.</p>
          </div>

          {/* ───────── § 01 ───────── */}
          <StencilDivider label="§ 01 · THE ROCK PROBLEM" />

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Rocks are easy to set. They are <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>brutal</em> to keep.
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p style={{ background: "rgba(173,251,73,0.06)", borderLeft: "3px solid var(--brand-lime)", padding: "14px 18px", fontSize: "0.95em" }}>
              <strong style={{ color: "var(--brand-white)" }}>Quick context.</strong> A <em>rock</em> is{" "}
              <a href="https://www.eosworldwide.com/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>EOS</a>{" "}
              (Entrepreneurial Operating System) shorthand for a top-3 priority for the quarter. Owner named, deadline set, binary done or not done. Ninety-day chunks. If your team runs OKRs, sub in &ldquo;key result.&rdquo; If you run no framework yet, read it as &ldquo;the 3 things that have to be true by end of quarter or this quarter failed.&rdquo;
            </p>
            <p>
              Ever sit down on Sunday night with a list of rocks you committed to this quarter, and realize you cannot remember the last time you touched half of them?
            </p>
            <p>
              In the 1890s,{" "}
              <a href="https://en.wikipedia.org/wiki/Sakichi_Toyoda" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Sakichi Toyoda</a>{" "}
              was watching his mother weave cloth in the Japanese countryside. She had to watch every thread. If a thread broke, she had to stop, find the break, fix it, and restart. Her attention was the bottleneck. Her productivity was capped by what she could hold in her head.
            </p>
            <p>
              He could not make her smarter. So he built her a different machine.
            </p>
            <p>
              The loom Sakichi invented automatically stopped when a thread broke. He called the principle{" "}
              <a href="https://global.toyota/en/company/vision-and-philosophy/production-system/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}><em>Jidoka</em></a>, &ldquo;automation with a human touch.&rdquo; The machine watched the threads. The weaver only intervened when the machine surfaced the problem. By 1924, the Toyoda automatic loom let one worker run dozens of machines at the same time.
            </p>
            <p>
              Decades later, his son{" "}
              <a href="https://en.wikipedia.org/wiki/Kiichiro_Toyoda" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Kiichiro</a>{" "}
              applied the same principle at a different scale. He started{" "}
              <a href="https://global.toyota/en/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Toyota Motor Corporation</a>{" "}
              in 1937. On the assembly line, any worker who saw a defect could pull a cord, the Andon Cord, and stop the entire line. The system surfaced the problem. The team decided. The line restarted.
            </p>
            <p>
              The Andon Cord became one of the most copied operational ideas of the 20th century. Not because it stopped defects. Because it externalized attention.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>The machine watched. The human decided. Neither did both.</strong>
            </p>
            <p style={{ color: "var(--brand-lime)", fontWeight: 700, fontSize: "1.25rem", marginTop: "2rem" }}>
              Takeaway this week.
            </p>
            <p>
              If you operate one company, you can probably watch every thread yourself. If you operate three and sit on two boards, you cannot. You are Sakichi&apos;s mother at the loom, before the loom got smart.
            </p>
            <p>
              If you keep trying to hold every rock in your head, you will drop one. Probably more than one. Build a system that watches the rocks for you. Save your attention for the decision the system surfaces.
            </p>
            <p>
              How I run three companies and sit on two boards without dropping a rock in week 7 is by externalizing my attention into a Sunday routine. Every Sunday night, I drop six inputs into Claude. The routine watches the threads. I decide which to pull.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>Here is the prompt I drop in every Sunday night.</strong>
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
              Prompt · The Sunday Operating Partner
            </div>
            <details
              className="mt-2 group"
              style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)", borderRadius: 12 }}
            >
              <summary
                className="cursor-pointer select-none flex items-center justify-between px-6 py-4 list-none"
                style={{ color: "var(--brand-white)", fontWeight: 700 }}
              >
                <span className="text-sm font-bold uppercase" style={{ letterSpacing: "0.12em", color: "var(--brand-lime)" }}>
                  Show full prompt
                </span>
                <span className="text-xs" style={{ color: "var(--brand-pastel)" }}>
                  {SUNDAY_PROMPT.split("\n").length} lines · click to expand
                </span>
              </summary>
              <div className="flex justify-end px-4 pt-3" style={{ borderTop: "1px solid rgba(173,251,73,0.25)" }}>
                <CopyPromptButton text={SUNDAY_PROMPT} label="Copy Sunday prompt" variant="dark" />
              </div>
              <pre
                className="overflow-x-auto p-6 pt-3 text-sm leading-relaxed whitespace-pre-wrap"
                style={{
                  color: "var(--brand-white)",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                }}
              >
                <code>{SUNDAY_PROMPT}</code>
              </pre>
            </details>
          </div>

          <WheatPasteQuote>
            &ldquo;You have four hours blocked on Skylight, but two of your at-risk rocks are at Xood. Move one block.&rdquo;
          </WheatPasteQuote>

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Out of this comes a single document I read in five minutes. It tells me which rocks are at risk, which are sandbagged, where my calendar contradicts the rocks, and what question I&apos;m dodging this week. It even names the calendar swap to make. That&apos;s the value — not the analysis, but how<em> specific </em>the recommendation is.
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
              Prompt · The Daily Chief of Staff
            </div>
            <details
              className="mt-2 group"
              style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)", borderRadius: 12 }}
            >
              <summary
                className="cursor-pointer select-none flex items-center justify-between px-6 py-4 list-none"
                style={{ color: "var(--brand-white)", fontWeight: 700 }}
              >
                <span className="text-sm font-bold uppercase" style={{ letterSpacing: "0.12em", color: "var(--brand-lime)" }}>
                  Show full prompt
                </span>
                <span className="text-xs" style={{ color: "var(--brand-pastel)" }}>
                  {DAILY_PROMPT.split("\n").length} lines · click to expand
                </span>
              </summary>
              <div className="flex justify-end px-4 pt-3" style={{ borderTop: "1px solid rgba(173,251,73,0.25)" }}>
                <CopyPromptButton text={DAILY_PROMPT} label="Copy Daily prompt" variant="dark" />
              </div>
              <pre
                className="overflow-x-auto p-6 pt-3 text-sm leading-relaxed whitespace-pre-wrap"
                style={{
                  color: "var(--brand-white)",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                }}
              >
                <code>{DAILY_PROMPT}</code>
              </pre>
            </details>
          </div>

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
              Operators are bottlenecked by attention, not by AI. Three companies, two boards, nine rocks, ninety days. The routine is what makes that possible, and <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Claude is what makes it fast.</em>
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
                fontFamily: "var(--font-sans)",
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
          fontFamily: "var(--font-sans)",
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
      <div className="mb-2 flex items-center justify-between gap-3 flex-wrap">
        <div
          className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase"
          style={{
            background: "var(--brand-lime)",
            color: "var(--brand-jungle)",
            letterSpacing: "0.22em",
            transform: "rotate(-1deg)",
          }}
        >
          Prompt · {title}
        </div>
        <CopyPromptButton text={body} label={`Copy ${title}`} variant="dark" />
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
