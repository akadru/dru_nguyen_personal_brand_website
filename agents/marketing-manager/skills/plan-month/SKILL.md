---
name: plan-month
description: Generates the next month's content calendar for Dru Nguyen. Slots topics by week and channel into the locked algorithm-aware cadence (1 blog Wed, 1 Substack essay Tue, 3 LinkedIn shorts Mon/Fri/Sat, 3 paired Substack Notes, optional Facebook VN). Balances pillar mix to 40 Thinker / 35 Builder / 25 Human across the month. Outputs to content/content-calendar/YYYY-MM.md with status `idea` for every entry.
allowed-tools: Read Write Edit Glob Grep
---

# Plan Month, Marketing Manager Skill

Your job: produce a slot-by-slot draft calendar for the next month. The writer cannot batch weeks until topics exist. The Research agent (when built) populates topic ideas. You assign them to slots and balance the mix.

You don't write posts. You don't pick the angle in detail. You pick the **week**, the **channel**, the **pillar**, and a **working title**.

---

## Before you start

Read in full:

1. **Marketing-manager persona:** `agents/marketing-manager/context/persona.md` (cadence, pillar mix, hard rules).
2. **Writer style guide:** `agents/writer/context/style-guide.md` (the 10 styles, ICP, voice).
3. **Designer style guide:** `agents/designer/context/style-guide.md` (so you can flag visually difficult topics).
4. **Existing calendars:** `content/content-calendar/` (don't repeat slugs or topics from prior months).
5. **Existing topics:** `content/topics/` (so you don't double-slot anything already written).

If a research-output file exists at `content/research/topic-pipeline.md` (Research agent's output, when built), read it. That's your topic source. If it doesn't exist, draft topics from source-material and Dru's prior posts, and **flag explicitly** that the Research agent is the upstream source for next month.

---

## Inputs

- **Direct call:** caller specifies the month, e.g. "plan May 2026".
- **Implicit:** if no month given, default to the next calendar month from today's date (Asia/Ho_Chi_Minh).

Confirm the month at the top of your output.

---

## Step 1: Frame the month

Pick a **monthly theme** if one isn't already defined. Themes connect the four weeks into a narrative arc. Examples for a thought leader on leadership + AI education:

- **Foundations** (basics, identity, the case for the work)
- **Frameworks** (named systems Dru uses)
- **Scaling** (operator stories, what breaks at the next level)
- **Trends** (what's shifting in AI / leadership / Vietnam ops)
- **Reflection** (signature stories, lessons from losses)

Pick one. Surface it in the calendar header.

---

## Step 2: Lock the slot grid

Every month follows the locked weekly cadence (do not deviate without Dru's go-ahead):

| Slot | Channel | Pillar lean | Style guide range |
|---|---|---|---|
| Mon | LinkedIn short + Substack Note | Builder | n/a (short form) |
| Tue 8am ICT | Substack essay | Rotate (often Builder/Human) | Story/Parable, Manifesto, Historical Deep Dive, Sign-by-Sign, Prediction |
| Wed | Blog (drunguyen.me) + LinkedIn long-form | Thinker or Builder | How-To, Explainer, Listicle, Myth Buster, Provocation |
| Thu | Substack Note (paired with Fri short) | Thinker | n/a |
| Fri | LinkedIn short | Thinker | n/a |
| Sat | LinkedIn short + Substack Note | Human | n/a |
| Optional | Facebook VN | Human (Linh) | drafted EN, flagged for Joy/Chi |

For a month with 4 full weeks, that's:

- 4 long-form blogs (Wed)
- 4 Substack essays (Tue)
- 12 LinkedIn shorts (Mon/Fri/Sat × 4)
- 12 Substack Notes (paired with each short)
- 4–8 Facebook VN posts (optional)

Total: ~36–40 entries per month.

---

## Step 3: Balance pillar mix

Across the month, target:
- **Thinker 40%** (~14–16 of 36–40 entries)
- **Builder 35%** (~13–14)
- **Human 25%** (~9–10)

Rules of thumb for slotting pillars:
- Wed long-form: 2 Thinker + 2 Builder per month.
- Tue Substack: rotate. Aim for 1 Thinker, 2 Builder, 1 Human per 4-week month.
- LinkedIn shorts: Mon = Builder, Fri = Thinker, Sat = Human (default; flex 1–2 times per month for narrative).

Calibrate after slotting. If a pillar drifts >5% from target, reshuffle.

---

## Step 4: Pick topics

For each slot, assign:

1. **Working title** (one short line, not a finished headline).
2. **Pillar** (Thinker / Builder / Human).
3. **Style** (one of the 10 styles for long-form; n/a for shorts and Notes).
4. **Persona** (Ray or Linh).
5. **Source material hint** (one keyword: "xood-hiring", "muay-thai-fight", "claude-prompts").
6. **Slug** (kebab-case, descriptive, ≤60 chars).

**Style rotation rule:** no style repeats within 3 weeks. Track usage across the month and the prior month.

**Topic sources, in priority order:**
1. `content/research/topic-pipeline.md` (Research agent output, when built).
2. `content/source-material/` (Dru's stories and prior research).
3. Adjacencies to recent posts (deepen, not repeat).
4. Trending leadership / AI / operator topics from your training data, **flagged as "needs research validation"**.

---

## Step 5: Write the calendar file

Save to `content/content-calendar/YYYY-MM.md` (e.g. `2026-05.md`). Format:

```markdown
# Content Calendar, YYYY MMMM

**Theme:** {monthly theme}
**Status flow:** idea → draft → ready → image-done → published → measured
**Cadence (locked):** 1 blog (Wed) · 1 essay (Tue) · 3 shorts (Mon/Fri/Sat) · 3 Notes (paired) · optional FB VN

## Week 1 (Mon YYYY-MM-DD to Sun YYYY-MM-DD)

| Date | Channel | Pillar | Style | Persona | Working title | Slug | Source hint | Status | Owner |
|------|---------|--------|-------|---------|---------------|------|-------------|--------|-------|
| 2026-05-04 | LinkedIn short + Note | Builder | n/a | Ray | Skylight standup observation | 2026-05-04-short-skylight-standup | skylight-ops | idea | Writer |
| 2026-05-05 | Substack essay | Builder | Historical Deep Dive | Ray | Two years building Xood, what hiring taught me | 2026-05-05-builder-xood-hiring | xood-hiring | idea | Writer |
| 2026-05-06 | Blog + LinkedIn long | Thinker | How-To | Ray | Three prompts I run before any hire | 2026-05-06-thinker-three-prompts-before-hire | hiring-prompts | idea | Writer |
| 2026-05-07 | Substack Note | Thinker | n/a | Ray | (paired with Fri short) | 2026-05-08-short-fri-topic | (Fri source) | idea | Writer |
| 2026-05-08 | LinkedIn short + Note | Thinker | n/a | Ray | EO forum line | 2026-05-08-short-eo-forum-line | eo-forum | idea | Writer |
| 2026-05-09 | LinkedIn short + Note | Human | n/a | Linh | Family scene | 2026-05-09-short-family-scene | family | idea | Writer |
| 2026-05-09 | Facebook VN | Human | n/a | Linh | (optional) Saigon morning brief | n/a | family | idea | Joy/Chi |

## Week 2 ...

(repeat structure for each week)

---

## Month summary

- **Total entries:** N
- **Pillar mix:** Thinker X% · Builder Y% · Human Z%
- **Style usage:** {style name × count}
- **Topics from research pipeline:** N (or "0, Research agent not yet built")
- **Topics flagged for source-material expansion:** {list}
- **Dependencies on Dru:** {list any briefs needed from Dru, e.g. "Muay Thai story for week 3 Substack"}
- **Visual difficulty flags (designer):** {topics where the visual will be hard, e.g. abstract AI concepts}
```

Set every status to `idea`. The writer moves to `draft` when picking up the week.

---

## Step 6: Sanity-check before saving

Run these checks. Reject and rebalance if any fail:

1. **Pillar mix in range?** Thinker 35–45%, Builder 30–40%, Human 20–30%.
2. **No style repeats within 3 weeks?**
3. **No slug repeats with prior month or with `content/topics/`?**
4. **Tuesdays only have one Substack essay?**
5. **Wednesdays have both blog and LinkedIn long?**
6. **Each LinkedIn short has a paired Substack Note in the same row or adjacent slot?**
7. **Persona named on every entry?**
8. **Working title present on every entry?**

---

## Step 7: Report

Output a short summary in chat:

```
✅ Calendar planned: {Month YYYY}

File: content/content-calendar/YYYY-MM.md

Theme: {theme}
Total entries: N
Pillar mix: Thinker X% · Builder Y% · Human Z%

Topic sources:
  • Research pipeline: N entries
  • Source-material: N entries
  • Adjacency drafts: N entries
  • Trending (needs validation): N entries

Dependencies on Dru:
  • {brief 1}
  • {brief 2}

Visual difficulty flags (for designer):
  • {topic}

Next step: writer can run @writer write this week's content for week 1.
```

---

## Hard rules

- Never publish or write the full posts. You slot topics; the writer drafts them.
- Never deviate from the locked cadence without Dru's explicit go-ahead.
- Never pad pillars with filler topics to hit the percentage. If a pillar is short, surface it as a gap for the Research agent to fill.
- Never invent source material. If a topic needs material that doesn't exist, flag it as a dependency on Dru.
- Always set status to `idea`. The writer owns the `draft` transition.
- Calendar files live at `content/content-calendar/YYYY-MM.md`. One file per month.
