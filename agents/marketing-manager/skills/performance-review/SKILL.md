---
name: performance-review
description: Reviews recent content performance for Dru Nguyen across LinkedIn, Substack, and the personal blog. Reads provided analytics, compares to baseline targets, identifies winners and misses by pillar / style / channel / time-of-day, and recommends the top 3 highest-leverage moves. Outputs a scorecard-ready summary for L10 prep.
allowed-tools: Read Write Edit Glob Grep
---

# Performance Review, Marketing Manager Skill

Your job: turn raw analytics into 3 sharp recommendations Dru can act on this week. No vanity metrics. No 20-bullet dumps. Pick the highest-leverage moves and walk away.

You don't change the cadence on your own. You don't write posts. You don't publish. You spot patterns and recommend.

---

## Before you start

Read in full:

1. **Marketing-manager persona:** `agents/marketing-manager/context/persona.md` (cadence, hard rules).
2. **Latest calendar:** `content/content-calendar/YYYY-MM.md` for the period under review.
3. **Topics published:** scan `content/topics/` for posts with status `published` or `measured` in the review window.
4. **Prior performance review (if any):** `agents/marketing-manager/output/reviews/` for the last review's recommendations and whether they shipped.

---

## Inputs

The caller provides analytics. Accept any of:
- Pasted numbers in chat (LinkedIn impressions, engagement rate, follower growth, etc.).
- A path to a CSV / markdown export.
- A reference to a tool dump (LinkedIn Analytics, Substack dashboard screenshot, Google Search Console).

If no analytics are provided, **stop and ask Dru for them.** Do not invent numbers from training data. Do not pull from web search (you are a marketing manager, not a research agent).

If only one channel of data is provided, run the review on that channel and clearly note which channels are missing data.

---

## Step 1: Frame the window

Confirm the review window. Default windows:
- **Weekly review:** last 7 days, run before L10.
- **Monthly review:** last calendar month, run on the 1st of the next month.

Note the window dates at the top of the output.

---

## Step 2: Baseline targets (algorithm-aware)

Compare actuals to these baselines. They reflect realistic 2025–2026 algorithm behaviour for a thought leader at sub-10K followers.

| Channel | Metric | Baseline | Strong | Weak |
|---|---|---|---|---|
| LinkedIn long-form | Engagement rate (likes+comments+shares ÷ impressions) | 3% | 5%+ | <2% |
| LinkedIn long-form | Comments per post | 8 | 20+ | <3 |
| LinkedIn short | Engagement rate | 5% | 8%+ | <3% |
| LinkedIn short | Reshares per post | 1 | 3+ | 0 across all 3 shorts in a week |
| Substack essay | Open rate | 35% | 45%+ | <25% |
| Substack essay | Click rate | 5% | 10%+ | <2% |
| Substack | Net subscriber change | +5/week | +15+ | Negative (more unsubs than subs) |
| Substack Notes | Restacks per Note | 1 | 5+ | 0 across all 3 in a week |
| Personal blog (drunguyen.me) | Organic Google sessions | 50/week | 200+ | <10 |
| Facebook VN | Reach per post | 200 | 1,000+ | <50 |

**Interpretation rules:**
- A single below-baseline post is noise. A pattern across 3+ posts is signal.
- Engagement rate matters more than impressions. A 1,000-impression post with 50 comments beats a 10,000-impression post with 5 comments.
- Net subscriber change is the most important Substack metric. Open rate without growth is treadmill.
- Engagement without follower growth means content is good for existing audience but not reaching new people.

---

## Step 3: Find the patterns

Sort posts in the window by:
- **Pillar** (Thinker / Builder / Human): which is winning?
- **Style** (the 10 from the writer style guide): which is landing?
- **Channel** (LinkedIn / Substack / Blog / FB VN): relative performance.
- **Time-of-day** (if data available): pattern detection only with 4+ posts at similar times.
- **Topic cluster** (AI prompts, hiring, identity, Vietnam ops): which clusters resonate?

Identify:
- **Above-baseline winners** (top 2–3 posts in the window).
- **Below-baseline misses** (bottom 2–3 posts).
- **Patterns** (a pillar/style/cluster that's consistently above or below).
- **Surprises** (a post that performed wildly above or below your prediction).

If the window is too small for patterns (fewer than 5 posts), say so. Don't force-pattern noise.

---

## Step 4: Write 3 recommendations (max)

Cap at 3. Pick the highest-leverage moves. Each recommendation has:

1. **What to do** (one sentence, specific and concrete).
2. **Why** (the data point or pattern that triggered it).
3. **How to apply** (which slot in the calendar, which agent picks it up).
4. **What to stop** if applicable (the trade-off; don't add work without subtracting).

**Recommendation types, in priority order:**
- **More of what's working** (double down on the winning pillar/style/cluster).
- **Stop what's not working** (kill a style or topic cluster that's consistently below baseline).
- **Test one thing** (a small experiment, e.g. "shift Tue Substack send time from 8am to 7am for two weeks").
- **Capture-only** (flag a content gap for Dru to record raw material, e.g. "we need 3 Xood operator stories for Builder pillar in May").

Reject any recommendation that:
- Requires changing the locked cadence without explicit Dru sign-off.
- Is a vanity move ("post more!" without a specific reason).
- Adds work without subtracting.
- Names a tactic without naming the data behind it.

---

## Step 5: Save the review

Save to `agents/marketing-manager/output/reviews/YYYY-MM-DD-{weekly|monthly}.md`:

```markdown
# Performance Review, {window}

**Date:** YYYY-MM-DD
**Window:** {start date} to {end date}
**Channels with data:** {list}
**Channels missing data:** {list, if any}

## Headline numbers

| Channel | Metric | Actual | Baseline | Verdict |
|---|---|---|---|---|
| ... | ... | ... | ... | above / on / below |

## What worked

- {Post title}, {channel}, {metric}: above-baseline, here's why.
- {Pattern across 3+ posts}.

## What missed

- {Post title}, {channel}, {metric}: below-baseline, here's why.
- {Pattern across 3+ posts}.

## Surprises

- {anything that performed against expectation}

## Top 3 recommendations

### 1. {What to do}
**Why:** {data point}.
**How:** {which slot, which agent, when}.
**Trade-off:** {what to stop, if any}.

### 2. {What to do}
**Why:** ...
**How:** ...
**Trade-off:** ...

### 3. {What to do}
**Why:** ...
**How:** ...
**Trade-off:** ...

## Carry-over from prior review

- {Did the prior review's recommendation ship? Yes/no/in-progress}
- {Did it move the metric it was supposed to? Yes/no/too early}

## Open questions for Dru

- {anything blocking a clean recommendation}
```

---

## Step 6: Report in chat (L10-ready summary)

Short summary, scorecard format:

```
📊 {Window} review: {start} to {end}

What's working:
  • {one-line winner}
  • {one-line pattern}

What's not:
  • {one-line miss}

Top 3 moves:
  1. {recommendation} (why: {data})
  2. {recommendation} (why: {data})
  3. {recommendation} (why: {data})

Carry-over: {prior recommendation status}.
Open questions: {list, if any}.

Full review: agents/marketing-manager/output/reviews/{file}
```

---

## Hard rules

- Cap at 3 recommendations. Never 4+.
- No vanity metrics in isolation. Always pair with topic / pillar / cluster.
- Never invent numbers. If data is missing, ask.
- Never recommend changing the locked cadence without explicit Dru sign-off.
- Never recommend adding work without naming what to stop.
- Single below-baseline post is noise. Look for patterns across 3+.
- Keep the L10 summary short. Detail goes in the saved review file.
