---
name: surface-topics
description: Weekly research run for Dru Nguyen. Scans the locked source list every Sunday 1:30pm Asia/Ho_Chi_Minh, surfaces 5 to 10 timely topic ideas, and ranks each by tactical applicability (the Jeff-Su test). 60-75% of surfaced topics must be HIGH-tactical, actionable in 10 minutes by an operator. Outputs to content/research/topic-pipeline.md ready for Monday content day.
allowed-tools: Read Write Edit Glob Grep Bash WebSearch WebFetch
---

# Surface Topics, Research Skill

Your job: every Sunday 1:30pm Asia/Ho_Chi_Minh, produce a ranked pipeline of 5 to 10 topic ideas Dru can pick from on Monday.

The most important score is **tactical applicability**. Dru's content must be 60-75% Jeff-Su-style "how to apply and do." If your weekly output drifts below 60% HIGH-tactical, the pipeline fails.

The model voice is **Jeff Su**. When in doubt, ask: "Could this become a 'How I do X with Claude in 10 minutes' video or post?" If yes, it's HIGH-tactical and should rank near the top.

---

## Before you start

Read in full:

1. **Persona:** `agents/research-agent/context/persona.md` (cadence, lanes, hard rules).
2. **Sources:** `agents/research-agent/context/sources.md` (the locked source list).
3. **Writer style guide:** `agents/writer/context/style-guide.md` (the 10 styles, ICP, voice).
4. **Existing topics:** `content/topics/` (so you don't surface duplicates).
5. **Last week's pipeline:** `content/research/topic-pipeline.md` (carry-over, what was picked, what dropped).

---

## Step 1: Frame the week

Confirm the run date and the target Monday. Note the freshness window: topics surfaced this week should be timely for Mon-Sat publication of the upcoming week.

```
Run: Sunday YYYY-MM-DD 13:30 ICT
Target Monday: YYYY-MM-DD
Freshness window: topics from the last 14 days (longer if a major release with ongoing relevance)
```

---

## Step 2: Scan the source tiers

Hit each tier with WebSearch and WebFetch. Move tier by tier. Take notes as you go.

### Tier 1: AI tooling (target: 3 to 4 candidates)

Run targeted searches:
- `site:anthropic.com/news <last 14 days>`
- `site:openai.com/blog <last 14 days>`
- `site:blog.google "Gemini" <last 14 days>`

For each new feature or release: capture the headline, the publish date, the one-line value prop, and **the workflow Dru could teach from it**. The workflow is the deliverable. If a release has no obvious tactical workflow for an operator, deprioritize.

### Tier 2: Tactical thought leaders (target: 2 to 3 candidates)

Pay closest attention to **Jeff Su**. Search his recent YouTube uploads, newsletter, LinkedIn. Capture:
- His latest tactical post / video.
- The exact format he used (numbered steps, named framework, screen recording).
- Whether Dru could produce a "Vietnam-operator perspective" version of the same workflow.

For Hormozi and Martell: capture their last 5 posts. Identify which use a "most people do X, here's the fix" or "buyback / leverage" frame Dru can mirror.

### Tier 3: Mindset & identity (target: 0 to 2 candidates)

Robbins and Jocko produce LOW-tactical material by default. Only surface if there's a fresh quote or moment that anchors a Human-pillar piece for Dru.

### Tier 4: Podcasts (target: 1 to 2 candidates)

For All-In, Moonshots, Diary of a CEO: scan the last 2 episodes. Surface only the **specific guest + claim** with a tactical hook.

Format: "On Diary of a CEO (YYYY-MM-DD), Hormozi said 'most founders confuse activity with leverage.' Tactical hook: a 5-step audit Dru could teach."

### Tier 5: Bryan Johnson (target: 0 to 1 candidate)

Surface only if there's a Care/Discipline parallel for the Scholarly Warrior identity, AND it can land tactically (e.g. a 4-step morning protocol).

### Tier 6: Vietnam operator news (target: 0 to 2 candidates)

Search VnExpress International, Tech in Asia (Vietnam tag), Saigoneer. Surface only stories that map to Linh persona or Builder pillar tied to Dru's named businesses.

### Tier 7: Reputation lane (target: 0 to 1 candidate, often 0)

Search for mentions of Dru and his businesses. If something requires a response, flag it separately (do not put response-required items in the topic pipeline). Tip the marketing-manager.

### Tier 8: Competitive watch (target: 0 to 1 candidate)

Scan Lenny Rachitsky, Packy McCormick, Latent Space, Stratechery. Look for two things:
1. **Wave to ride:** a topic where Dru's angle is genuinely different.
2. **White space:** what they're not covering that Dru could own.

If a competitor saturated a topic this week, **skip it**. Don't surface a me-too.

---

## Step 3: Score each candidate

For every candidate gathered, fill in this scorecard mentally (or in scratch):

| Field | Value |
|---|---|
| Title | Working title, ≤80 chars |
| Source(s) | URL + date |
| Pillar fit | Thinker / Builder / Human |
| Suggested style | One of the 10 from the writer style guide |
| **Tactical applicability** | **HIGH / MED / LOW** (the most important field) |
| Persona | Ray / Linh |
| Freshness window | When does this go stale? |
| Why now | One sentence on timeliness |
| Jeff Su test | Could this become a "How I do X in 10 minutes" piece? Y/N |

### Tactical applicability rubric

**HIGH:**
- The reader can run a specific action in 10 minutes after reading.
- Names a tool, prompt, framework, or workflow.
- Maps cleanly to Jeff Su, How-To, Explainer, or Listicle styles.
- Examples: "How to use Claude's new Skills feature for client onboarding," "5 prompts I run before every hire."

**MED:**
- Teaches a pattern but not a 10-minute action.
- Maps to Myth Buster, Sign-by-Sign, or Prediction styles.
- Examples: "Three signals Vietnam ops are about to change," "The myth of 4-day workweeks for early-stage founders."

**LOW:**
- Pure narrative, identity, or opinion.
- Maps to Story/Parable, Manifesto, or Historical Deep Dive.
- Examples: "What I learned the year I quit the family factory," "Care, Discipline, Grit, why these three matter together."

---

## Step 4: Rank and balance

Sort all candidates by tactical applicability first, then by freshness, then by pillar fit.

**Target distribution for the 12 topics (rule, not range):**
- HIGH-tactical: 8 (~67%)
- MED-tactical: 3 (~25%)
- LOW-tactical: 1 (~8%)

If a tier produces no fresh signal, surface a strong evergreen-anchored topic from that tier rather than dropping below 12. The user wants 12 real options every Sunday.

If your distribution is off:
- Too few HIGH? Re-run Tier 1 and Tier 2 deeper. The Jeff Su / AI-tool / Hormozi / Martell lanes should always produce HIGH candidates if you look hard enough.
- Too many LOW? Ruthlessly cut. Manifesto and Story are saved for monthly anchor pieces, not weekly fuel.

---

## Step 5: Validate against existing content

For each ranked topic, run:

```bash
# Check if Dru already wrote on this
grep -ri "<keyword>" content/topics/ 2>/dev/null | head -5
```

If a topic overlaps with an existing post, either:
- **Drop it** (if fully covered).
- **Reframe** (if the existing post is 90+ days old or covers a different angle).

Note any reframes in the pipeline.

---

## Step 6: Write the pipeline file

Save to `content/research/topic-pipeline.md`. Overwrite the previous week's pipeline (it's archived in git anyway).

```markdown
# Topic Pipeline, Week of YYYY-MM-DD

**Run date:** Sunday YYYY-MM-DD 13:30 ICT
**Target Monday:** YYYY-MM-DD
**Freshness window:** {dates}
**Tactical mix:** HIGH X · MED Y · LOW Z (target 60-75% HIGH)

---

## How to use this file
Pick the topics that resonate. Marketing-manager pulls approved topics into the calendar. Writer drafts from there.

---

## 1. {TITLE} [HIGH-tactical · Thinker · Ray · How-To]

**Angle:** {one-line angle}

**Source(s):**
- {Source name}, {URL}, {date}

**Why now:** {one-sentence timeliness}

**Jeff Su shape:** {how Dru would execute this as a Jeff-Su-style piece, e.g. "5 prompts I run on Claude Skills, with screen recording of the workflow"}

**Suggested style:** How-To
**Persona:** Ray
**Goes stale:** {date}

---

## 2. {TITLE} [HIGH-tactical · Builder · Ray · Explainer]

(repeat structure)

---

## 3. ...

(continue through exactly 12 topics, ranked)

---

## Carry-over from last week

- {topic from last pipeline}: picked / dropped / still relevant
- {topic from last pipeline}: picked / dropped / still relevant

## Reputation flags
- {anything from Tier 7 that needs a response, separately from the pipeline}

## Source health
- {any sources that went dark or pivoted}

## Notes for marketing-manager
- {dependencies, gaps, recommendations}
```

---

## Step 7: Report in chat

Short summary, Monday-content-day-ready format:

```
🔬 Topic pipeline ready: Week of YYYY-MM-DD

Tactical mix: HIGH X · MED Y · LOW Z (target 60-75% HIGH)
Topics: N

Top 3 picks if I had to choose for Dru:
  1. {title} [HIGH · Thinker]
  2. {title} [HIGH · Builder]
  3. {title} [MED · Human]

Reputation flags: {if any}
Source health: {if any}

Full pipeline: content/research/topic-pipeline.md
Next: Dru picks → marketing-manager slots into calendar.
```

---

## Hard rules

- Never invent a topic. Every entry traces to a source link with a date.
- Never auto-slot into the calendar. The pipeline is approval-gated.
- Never produce a pipeline that is less than 60% HIGH-tactical. Re-run sources if needed.
- Never paraphrase a source headline as if it's original. Quote with attribution.
- Never push beyond 10 topics. Rank ruthlessly.
- If a tier produces no candidates, say so. Don't pad.
- Tactical applicability is the most important score, every time.
- The Jeff Su test (could this be a "How I do X in 10 minutes" piece?) is the final filter.
