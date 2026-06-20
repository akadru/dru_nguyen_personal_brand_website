---
name: validate-topic
description: Given a topic Dru is interested in, checks whether it's already been covered in content/topics/, whether a competitor just published on it, and whether the timing is right. Returns a clean GO / RESHAPE / SKIP verdict with the reasoning. Used by Dru directly or by marketing-manager before slotting a topic into the calendar.
allowed-tools: Read Glob Grep Bash WebSearch WebFetch
---

# Validate Topic, Research Skill

Your job: take a single topic idea and decide whether it should ship, get reshaped, or be skipped. Fast turnaround. One topic, one verdict.

This is NOT the weekly surface run. This is a single-topic check, on demand.

---

## Before you start

Read in full:

1. **Persona:** `agents/research-agent/context/persona.md` (tactical bias, hard rules).
2. **Sources:** `agents/research-agent/context/sources.md` (where to check competitive coverage).
3. **Existing topics:** scan `content/topics/` for overlap.

---

## Inputs

The caller provides:
- A topic title or angle (always).
- Optional: pillar fit, persona, suggested style.
- Optional: source link if the topic was triggered by something specific.

If only a title is given, infer pillar fit, persona, and style from the writer style guide. Note the inferences in your verdict.

---

## Step 1: Internal coverage check

```bash
# Search topic folder names and blog body for the topic keyword
grep -ril "<keyword 1>\|<keyword 2>" content/topics/ 2>/dev/null | head -10
```

Categorize the result:

| Finding | Verdict input |
|---|---|
| No matches | Internal: clear |
| Match in a folder slug only | Internal: thin overlap, check the body |
| Match in 1 blog body, 90+ days old | Internal: aged coverage, reshape candidate |
| Match in 1 blog body, <90 days old | Internal: recent overlap, likely SKIP unless angle is genuinely different |
| Match in 2+ blog bodies | Internal: saturated, SKIP unless this is a deliberate series |

---

## Step 2: Competitive coverage check

Run targeted searches for the past 14 days:

```
"<topic phrase>" lenny OR packy OR latentspace OR stratechery 2026
"<topic phrase>" jeff su OR hormozi OR martell 2026
"<topic phrase>" site:linkedin.com 2026
```

Categorize:

| Finding | Verdict input |
|---|---|
| Nobody covered it | Competitive: white space, GO |
| One competitor, generic angle | Competitive: room for Dru's specific operator/Vietnam angle, GO with framing note |
| One competitor, exactly Dru's angle | Competitive: saturated, RESHAPE or SKIP |
| Multiple competitors in last 14 days | Competitive: wave is breaking, SKIP unless Dru can publish in <72 hours with a sharp angle |

---

## Step 3: Source freshness check

If the topic is triggered by a specific source (a new Anthropic feature, an Hormozi post, a podcast claim):

- **Source <14 days old:** fresh, GO.
- **Source 14-30 days old:** check if it's still being discussed; if yes, GO; if not, RESHAPE.
- **Source 30+ days old:** stale, SKIP unless there's a recent trigger renewing relevance.

If no source was provided, this step is skipped. Note the absence in the verdict.

---

## Step 4: Tactical applicability check

Apply the rubric from surface-topics:

| Score | Definition |
|---|---|
| **HIGH** | Reader can run a specific 10-minute action. Maps to How-To, Explainer, Listicle. |
| **MED** | Teaches a pattern, no immediate action. Maps to Myth Buster, Sign-by-Sign, Prediction. |
| **LOW** | Pure narrative, identity, opinion. Maps to Story/Parable, Manifesto, Historical Deep Dive. |

The Jeff Su test: "Could this become a 'How I do X in 10 minutes' piece?"

LOW-tactical topics are not blocked, but flag them. Dru's mix needs 60-75% HIGH-tactical, so LOW topics need to be paired with a higher-tactical week.

---

## Step 5: Verdict

Output one of three verdicts:

### GO
The topic clears all checks. Ship it. Include:
- The pillar / style / persona recommendation.
- The angle that differentiates it (if competitive coverage exists).
- The Jeff Su shape if HIGH-tactical.
- The freshness window (when it goes stale).

### RESHAPE
The topic has merit but the current framing doesn't work. Suggest 1-2 specific reframes.
Examples:
- "The same topic but from the Xood Vietnam-operator angle, not generic AI."
- "Same hook, but make it a How-To with screen recording instead of a manifesto."

### SKIP
The topic should not ship. Explain why in one sentence. Examples:
- "Lenny posted exactly this 8 days ago, no differentiated angle."
- "Dru already wrote this in 2026-03, fully covered."
- "Source is 6 weeks old, no recent renewal."

---

## Step 6: Report

Short, scannable:

```
🔬 Validation: "{topic title}"

Verdict: GO / RESHAPE / SKIP

Internal coverage: {finding}
Competitive coverage: {finding}
Source freshness: {finding or n/a}
Tactical applicability: HIGH / MED / LOW

{If GO:}
Recommended framing: {one line}
Suggested style: {one of the 10}
Persona: Ray / Linh
Goes stale: {date}
Jeff Su shape: {one sentence}

{If RESHAPE:}
Suggested reframe 1: {one line}
Suggested reframe 2: {one line}

{If SKIP:}
Reason: {one sentence}
```

---

## Hard rules

- Never give a soft "maybe" verdict. GO, RESHAPE, or SKIP.
- Never validate a topic without checking both internal AND competitive coverage.
- Never recommend a LOW-tactical topic without flagging the mix implication.
- If you cannot fetch a source URL (paywall, error), say so. Do not fabricate freshness.
- One topic per call. If multiple are passed in, do them one at a time and return separate verdicts.
