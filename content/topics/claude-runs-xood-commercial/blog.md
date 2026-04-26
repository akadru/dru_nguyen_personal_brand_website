---
title: How I run Xood's commercial team in 30 min/day with Claude
slug: claude-runs-xood-commercial
date: 2026-04-26
category: Advice
pillar: Thinker
topic: AI Operator
channel: LinkedIn long-form
read_time: 4
meta_description: A real morning at Xood, a four-step batch, and the prompt I copy-paste. Three hours of work in 30 minutes — no AI hype, no fluff.
hashtags: ["#DoingGoodWithData", "#AIOperator", "#FutureOfWork", "#BuildingInVietnam"]
---

It's 7:14 AM. I'm in the kitchen at Xood's office in District 1. Vietnamese coffee dripping. A list of 47 prospects on my screen — names I scraped from yesterday's Tictag partner event.

By 7:45 AM I have:

- A clean prospect digest with intent signals
- Eleven first-draft outreach emails grounded in each company's published material
- An updated partner-map showing two new strategic gaps for next week
- Six CRM rows flagged for follow-up with suggested next actions

That's roughly three hours of SDR-and-RevOps work. I do it in 30 minutes with Claude.

Most operators hear "AI" and think "junior intern I have to micromanage." That's the trap. The senior ones I respect don't treat Claude as a person. **They treat it as a workflow.**

Here's the difference. An intern needs to be onboarded, given context, corrected when wrong, and re-onboarded next week when they forget. Claude needs none of that — if you give it a versioned prompt and a tight input, it returns the same shape of output every time. That's not assistance. That's infrastructure.

## The 30-minute morning batch

**1. Prospect digest (8 min).** I paste yesterday's CRM export + LinkedIn signal scrape into one prompt. Claude returns a digest grouped by intent tier (warm / observed / cold), with a one-line "why-now" beside each name. I don't read the raw data anymore.

**2. First-draft outreach (12 min).** For each warm prospect, I give Claude their company's published page (about, blog, last announcement) and Xood's offer. Output: a 3-paragraph email that earns a reply by sounding like I read their stuff — because Claude actually did. I rewrite the first sentence and the CTA. That's it.

**3. Partner-map refresh (5 min).** Same prompt every Monday. Claude re-runs against last week's partner-map and highlights deltas: new players, dead ones, gaps. I make the call on which gaps to chase.

**4. CRM hygiene (5 min).** Stale leads (>14 days no touch) get a Claude-suggested next action — "DM their founder on LinkedIn referencing X," "wait until their Series A closes," "kill it." I approve or override.

## The prompt template I copy-paste

The whole thing runs on one prompt I tweak monthly:

```
You are an SDR-and-RevOps analyst for Xood — AI data services in Vietnam.
Read the input below. Return [SPEC]. Use Xood's voice: direct, operator-to-
operator, no jargon. Cite the prospect's own words when claiming relevance.
If signal is weak, say so.

[CONTEXT — paste your offer + 1-line ICP]
[INPUT — paste data]
[SPEC — what shape of output you want]
```

## The three rules that turn this from theatre into infrastructure

- **One prompt, versioned.** Same shape every day. I edit the prompt, not the daily output.
- **Inputs are real.** CRM exports, the prospect's actual blog, my notes — not vibes.
- **I review the first paragraph and the ask.** Everything else stays.

## Your 10-minute next action

Take the one task you do every weekday morning that should take 30 minutes and somehow takes two hours. Write it as a prompt with three blocks — **context, input, spec**. Run it once.

If the output is 70% there, you've found a workflow. If it's at 40%, your input or your spec is wrong, not the model.

Knowledge with application is wisdom.

`#DoingGoodWithData` `#AIOperator` `#FutureOfWork` `#BuildingInVietnam`
