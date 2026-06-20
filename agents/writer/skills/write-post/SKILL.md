---
name: write-post
description: Reads the content calendar for the upcoming week, gathers source material, and drafts the full weekly content set for Dru Nguyen. Each week produces 1 long-form blog (Wed, canonical on drunguyen.me, repurposed to LinkedIn long-form), 1 Substack essay (Tue), 3 LinkedIn shorts (Mon/Fri/Sat), and 3 Substack Notes (repurposed from the shorts). All long-form pieces live on the website as canonical and are distributed outward.
allowed-tools: Read Write Bash Glob Grep Edit WebSearch
---

# Write Post Skill

Your job: produce the full weekly content set for Dru Nguyen, in his voice, ready for Dru's review and the designer's image generation. The website (drunguyen.me) is the hub. Every long-form piece lives there as canonical and is cross-posted outward.

## Weekly target (algorithm-aware, locked 2026-04-27)

| Output | Count | Slot | Lives at | Cross-posted to |
|---|---|---|---|---|
| Long-form blog | 1 | Wed | drunguyen.me/blog/{slug} | LinkedIn long-form |
| Substack essay | 1 | Tue 8am ICT | drunguyen.me/blog/{slug} | Substack |
| LinkedIn shorts | 3 | Mon, Fri, Sat | LinkedIn only | (Substack Notes) |
| Substack Notes | 3 | Tue, Thu, Sat | Substack Notes | repurposed from LinkedIn shorts |
| Facebook VN brief (optional) | 0 to 2 | Joy/Chi schedule | none | drafted in EN, flagged for Joy/Chi |

**Total: 8 to 10 pieces per week.** Hub-and-spoke: drunguyen.me is canonical for both long-form pieces. LinkedIn shorts and Substack Notes are short-form lanes that repurpose into each other.

**Why this cadence (do not push beyond it):**
- LinkedIn at 4/week (1 long + 3 shorts) sits in the algorithmic sweet spot. More cannibalizes reach.
- Substack 1 essay/week protects the email list under 5K subscribers. 2+ essays/week burns subs faster than the list grows.
- Substack Notes is a separate algorithm; repurposing from LinkedIn shorts keeps production cost low.

---

## Before you start

Read these in full. Every run. No memory shortcuts.

1. **Style guide:** `agents/writer/context/style-guide.md` (ICP, persona, voice, ten blog styles, universal rules, NO em dashes)
2. **Persona context:** `agents/writer/context/persona.md`
3. **Content calendar:** `content/content-calendar/` (find the upcoming week)
4. **Source material:** `content/source-material/` (Dru's stories, prior research, persona notes)
5. **Existing topics:** `content/topics/` (so you don't repeat angles or styles)

If the calendar for the upcoming week does not exist, stop and report. Do not invent a calendar.

---

## Step 1: Identify the week to write

Read the content calendar. Find the next week whose entries are status `planned` and have not yet been written to `content/topics/`.

For each topic in that week, note:
- **Publish date** (YYYY-MM-DD, Asia/Ho_Chi_Minh)
- **Channel** (Blog/LinkedIn long, Substack, LinkedIn short, Facebook VN)
- **Pillar** (Thinker / Builder / Human)
- **Working title or angle**
- **Persona target** (Ray or Linh)
- **Folder slug** for the topic

Pillar mix target across the week: 40% Thinker, 35% Builder, 25% Human. The Wednesday long-form is usually Thinker or Builder. The Saturday short hook is usually Human.

If the week has fewer than 6 entries, stop and ask before writing.

---

## Step 2: Gather source material

For each topic:

1. **Scan `content/source-material/`** in full. List every subfolder (`brand/`, `images/`, `research/`, plus any topic-specific dumps). Read every relevant `.md` and `.txt`.
2. **Check the calendar's hook or angle** for the topic. That's your brief.
3. **Use WebSearch** if the topic makes a factual claim about an external product, person, or event. Cite plainly in prose. Never link out from LinkedIn body (LinkedIn external links go in the first comment).
4. **Collect specific moments, numbers, business names, voice markers** before writing. Specificity is the credibility move. If you cannot name a business, a tool, or a moment, the post is not ready.

If source material is thin for a topic, **stop and report what you found**. Do not invent stories, numbers, or quotes.

---

## Step 3: Plan the week's styles

Pick a blog style from the 10 in the style guide for each long-form piece. Rules:

- **No style repeats within the same week.**
- **No style repeats within the last 3 weeks** (check `content/topics/` history).
- **Wednesday long-form leans tactical** (Explainer, How-To, Listicle, Myth Buster, or Provocation).
- **Substack essays lean reflective** (Story/Parable, Manifesto, Historical Deep Dive, Sign-by-Sign Breakdown, Prediction).
- **The 3 LinkedIn shorts** don't pick a "style" the same way. Each short is its own form: hook + tight body + close.

Write a one-line plan before drafting. Example:

```
Wed long-form (Thinker, Ray): How-To. "Three prompts I run before any hire"
Substack #1 (Tue, Builder, Ray): Historical Deep Dive. "What two years building Xood taught me about hiring"
Substack #2 (Thu, Human, Linh): Story/Parable. "The Muay Thai fight, ten years later"
LinkedIn short Mon (Builder): observation, Skylight standup
LinkedIn short Fri (Human): one-liner from EO forum
LinkedIn short Sat (Human, Linh): family scene, unfiltered
```

Confirm internally that the plan covers 1 long-form blog, 1 Substack essay, 3 LinkedIn shorts, 3 Substack Notes (paired with shorts), with the pillar mix in range.

---

## Step 4: Write the Wednesday long-form blog

Canonical home: `drunguyen.me/blog/{slug}`. Repurposed for LinkedIn long-form.

### 4a. Write `blog.md`

Frontmatter:

```yaml
---
title: "..."           # ≤60 chars, includes keyword
slug: "..."            # SEO slug (kebab-case, descriptive, ≤60 chars)
pillar: "Thinker"      # Thinker | Builder | Human
category: "Advice"     # News | Advice | Story | Deep Dive | Guide
style: "How-To"        # one of the 10 styles
persona: "Ray"         # Ray | Linh
date: "YYYY-MM-DD"
read_time: "5 MIN READ"
excerpt: "..."         # ≤160 chars, hook not summary
hashtags: ["#FutureOfWork", "#AIOperator", "..."]  # 4 to 6, must include #FutureOfWork
---
```

Body follows the universal blog post structure from the style guide (Part 4):
- Hook block (1 to 2 sentences, bold a phrase)
- Story/anecdote with at least one failure or challenge moment before the insight
- Callout block with the core insight
- 3 to 6 framework steps under "The ___" section labels
- Optional 3-column data table
- Key takeaways (4 to 6 items, bold the action phrase)
- 2 to 4 punchy closing sentences ending on a memorable one-liner
- CTA block per the style: tactical → utility takeaway, human/builder → one real question

Title format: `[What most people do wrong]<br>[The fix]`. One `<em>` word for accent.

Length: 400 to 800 words for tactical, 1,000 to 1,500 for deep dive.

### 4b. Write `linkedin-long.md`

The same post adapted for LinkedIn:
- 1,200 to 1,900 characters total (LinkedIn long-form sweet spot)
- First 200 chars must hook hard (LinkedIn truncation)
- Single-sentence paragraphs and white space
- No external links in the body. End with: `Full piece on drunguyen.me/blog/{slug}. Link in comments.`
- Hashtags: 4 to 6, must include `#DoingGoodWithData`
- Always first person

### 4c. Write `seo.md`

```markdown
# SEO Guide: {Title}

## Target keyword
{primary keyword phrase}

## Secondary keywords
{3 to 5 related phrases}

## Meta title
{≤60 chars, includes primary keyword}

## Meta description
{≤160 chars, includes primary keyword}

## URL slug
{slug}

## Header structure
H1, then every H2 in order

## Internal links (3 to 5)
Anchor text → drunguyen.me/...

## External links (2 to 3)
Authoritative sources only

## FAQ schema (3 to 5 Q&A)
For FAQPage structured data

## Image alt text
Hero + any inline images

## AI search optimization
One-sentence direct answer to the primary query, surfaceable by an LLM
```

### 4d. Write `image-prompts.json`

**Format change locked 2026-04-27:** the writer now emits `image-prompts.json` per topic folder (not `image-prompt.md`). Each topic's JSON contains one or more entries, one per content file in the folder that needs an image.

**Weekly distribution rule (mandatory):** Across the entire week's image set, exactly **2 TEXT + 2 HUMAN + 2 SCENARIO** = 6 baseline images. Up to 2 additional flex images may exceed the baseline (so 6 to 8 unique-image pieces per week max). Track tallies in your scratchpad as you assign styles piece-by-piece.

**Style enum (use Dru's shorthand in JSON, mapped to style guide terms):**
- `TEXT` → STREET_ART, stencil sub-mode (1 to 3 word stencil text generated by Gemini, ends with a period)
- `HUMAN` → EDITORIAL_PHOTO (operator + tool, Apple keynote logic, no faces unless explicitly approved)
- `SCENARIO` → PLACE_SCENE (Saigon, Tokyo, or Kyoto streets and rooftops, no characters as focal subject)

**TEXT cap:** 2 per week (raised from 1–2/month). Stencil text is the only generated text allowed. All other text (titles, quotes) is added in post-production via Figma/Canva.

**Brand palette (use plain English in prompts, never hex):** jungle, lime, myrtle, tea, pastel, white. Lime accent only on dark grounds, never on white.

JSON schema:

```json
{
  "topic": "<one-sentence what this topic is actually about>",
  "week_of": "YYYY-MM-DD (Mon)",
  "phrases": ["<short, quotable line from the post>", "<another>"],
  "images": [
    {
      "file": "blog.md",
      "slug": "<from frontmatter>",
      "image_class": "TEXT | HUMAN | SCENARIO",
      "style": "STREET_ART | EDITORIAL_PHOTO | PLACE_SCENE",
      "sub_mode": "stencil | apple_keynote | saigon_alley | tokyo_alley | kyoto_temple | painted_character | mural",
      "concept": "<what the image shows and why, 1 to 2 sentences>",
      "text": "<exact 1 to 3 word phrase ending with a period, ONLY for TEXT entries>",
      "aspect_ratio": "16:9",
      "dimensions": "1200x630",
      "prompt": "<full prompt, ending with: 'No watermarks, no Western corporate stock aesthetic, no glowing circuits or robot imagery anywhere in the image.'>"
    }
  ]
}
```

**Aspect rules:**
- 16:9 (1200×630) for blog hero, LinkedIn long, LinkedIn short, Substack essay hero
- 1:1 (1080×1080) for Instagram (future) only

**TEXT entries:** include the `text` field with exact phrase. `sub_mode` is always `stencil`. Phrase pulled from the `phrases` array.

**HUMAN entries:** omit `text` field. `sub_mode` is always `apple_keynote` for tactical posts (no human face). Use a face only when explicitly approved (Human-pillar signature stories).

**SCENARIO entries:** omit `text` field. `sub_mode` is one of `saigon_alley`, `tokyo_alley`, `kyoto_temple`, or `mural`. No characters as focal subject.

**Reuse logic:** the LinkedIn long-form repost shares the blog hero (one image, two channels). The Substack edition shares the essay hero. Notes paired with shorts share the short's image. Only generate unique images for: the blog/LinkedIn-long anchor (1), the Substack essay (1), and each of the 3 LinkedIn shorts (1 each). That's 5 unique images. Plus 1 to 3 extras as needed = 6 to 8 per week, balanced 2/2/2.

**End every prompt with this fixed sentence:**
> No watermarks, no Western corporate stock aesthetic, no glowing circuits or robot imagery anywhere in the image.

### 4e. Optional: `facebook-vn-brief.md`

Only if the topic resonates with Linh and Facebook VN distribution makes sense. Draft in EN. Flag clearly at the top:

```markdown
# Facebook VN Brief, for Joy/Chi to write natively in Vietnamese
# DO NOT translate verbatim. Adapt for Vietnamese audience.

Angle: ...
Key story beats: ...
CTA: ...
```

---

## Step 5: Write the Tuesday Substack essay (1 per week)

The Substack essay is canonical on drunguyen.me and cross-posted to Substack. **One essay per week.** More than one burns the email list under 5K subs.

### 5a. `blog.md` (the canonical website version)

Same frontmatter as Step 4a, but `category: "Deep Dive"` typically. Length 1,000 to 1,500 words. Style picked from the reflective set (Story/Parable, Manifesto, Historical Deep Dive, Sign-by-Sign, Prediction).

Substack essays follow S.I.F.P with **P** as a question, never a tactic.

### 5b. `substack.md` (the Substack edition)

Lightly adapted for the Substack reader:
- Pull quote (one max) styled as a Substack blockquote
- Subject line for email send: ≤60 chars, curiosity-driven
- Preview text: ≤120 chars
- Closing CTA: a specific share line. "If this made you think of a founder you know, forward it to them" beats "Subscribe for more."
- Full URL back to drunguyen.me/blog/{slug} as the canonical link near the top

### 5c. `seo.md` and `image-prompt.md`

Same as Step 4c and 4d.

### 5d. Optional `facebook-vn-brief.md`

Same rule as Step 4e. Only if the essay maps to Linh.

---

## Step 6: Write the 3 LinkedIn short-form posts

Each short lives in its own folder under `content/topics/<YYYY-MM-DD>-short-<slug>/`.

### 6a. `linkedin-short.md`

Specs:
- 50 to 150 words (250 to 900 characters)
- First 200 characters hook hard
- One specific moment or observation
- One named business, tool, or person
- Close: utility line OR one real question, never both
- Hashtags: 4 to 6, includes `#DoingGoodWithData`
- No links in body
- No engagement bait

Each short stands alone. Do not number them as "1/3, 2/3, 3/3" unless explicitly part of a series.

Pillar distribution across the week's three shorts: aim for 1 Thinker, 1 Builder, 1 Human (or 1/2 split with the long-form pillar accounted for to hit the 40/35/25 mix).

### 6b. `image-prompt.md` (optional)

Only write an image prompt if the post is visual-led (image post per the web-style-guide). Otherwise skip.

### 6c. `substack-note.md` (always, one per LinkedIn short)

Each LinkedIn short gets a paired Substack Note. Substack Notes is a separate algorithm that rewards short-form posts. Repurposing from LinkedIn keeps production cost low.

Specs:
- 30 to 100 words (Notes is shorter than LinkedIn shorts)
- Same core observation or moment as the LinkedIn short
- No hashtags (Substack Notes ignores them)
- No "link in comments" (Notes allows inline links, drop one back to drunguyen.me when natural)
- More casual register; Substack Notes feels like a writer's group chat
- Schedule slot: Tue / Thu / Sat to spread the week

Save `substack-note.md` next to `linkedin-short.md` in the same folder. The pair is intentional.

---

## Step 7: Folder structure and file save

Create one folder per piece. Folder slug format: `<YYYY-MM-DD>-<pillar>-<slug>` for long-form, `<YYYY-MM-DD>-short-<slug>` for shorts.

Examples for a sample week:

```
content/topics/2026-05-05-builder-xood-hiring-prompts/      # Tue Substack
├── blog.md
├── substack.md
├── seo.md
├── image-prompt.md
└── facebook-vn-brief.md   (optional)

content/topics/2026-05-06-thinker-three-prompts-before-hire/  # Wed long-form
├── blog.md
├── linkedin-long.md
├── seo.md
└── image-prompt.md

content/topics/2026-05-07-human-muay-thai-ten-years/         # Thu Substack
├── blog.md
├── substack.md
├── seo.md
└── image-prompt.md

content/topics/2026-05-04-short-skylight-standup/            # Mon LinkedIn short
├── linkedin-short.md
└── substack-note.md          # Tue Note (paired with Mon short)

content/topics/2026-05-08-short-eo-forum-line/               # Fri LinkedIn short
├── linkedin-short.md
└── substack-note.md          # Thu Note (paired with Fri short)

content/topics/2026-05-09-short-family-scene/                # Sat LinkedIn short
├── linkedin-short.md
└── substack-note.md          # Sat Note (paired)
```

---

## Step 8: Calibration test + attribution check

Run the four-question test from the style guide on every long-form piece AND every short:

1. Does this sound like Dru talking to an operator at an EO meeting?
2. Could 100 other people have posted this? (If yes, fail. Rewrite.)
3. Would Dru be proud of this in two years?
4. Does the ending give the reader a question worth answering OR a tactic worth using?

**Plus the attribution check (non-negotiable):**
5. Does every borrowed framework, named system, or specific concept credit its originator by name and link to a primary source?
   - Jeff Su's CORE Workflow → name Jeff Su, link to jeffsu.org/productivity
   - Dan Martell's Buyback Loop / Buyback Principle → name Dan Martell, link to buybackyourtime.com
   - EOS → credit Gino Wickman, link to eosworldwide.com or the book "Traction"
   - Hormozi's leverage frameworks → name Alex Hormozi, link to acquisition.com
   - Jocko's Extreme Ownership → name Jocko Willink, link to echelon-front.com
   - Tony Robbins concepts → name the specific Robbins idea being borrowed
   - Anthropic / Lenny / podcast guests → name the person AND the show/source
6. Calibration question: "If [originator] read this post, would they feel credited or borrowed-from?" If borrowed-from, fail.

Reject and rewrite anything that fails any of the 6 checks. Note in the final report any piece that needed an attribution add or rewrite.

---

## Step 9: Em dash sweep (MANDATORY)

Em dashes are banned in Dru's voice. From the repo root:

```bash
grep -rn "—" content/topics/<each-folder-you-wrote>/ || echo "clean"
```

For every hit, rewrite the sentence using a period, colon, comma, parentheses, or a full rewrite. Do not blindly replace the em dash character with `-` or `,`. Pick the punctuation that fits the sentence, and rewrite the sentence if none do.

This sweep applies to every file you wrote: `blog.md`, `linkedin-long.md`, `substack.md`, `linkedin-short.md`, `substack-note.md`, `seo.md`, `image-prompt.md`, `facebook-vn-brief.md`. Re-run grep until every folder returns `clean`.

---

## Step 10: Update the content calendar

In the relevant `content/content-calendar/<YYYY-MM>.md`, change each row's status from `planned` to `written` for the topics you just wrote. Add the folder slug to the row if the calendar tracks slugs.

Do not change anything else in the calendar.

---

## Step 11: Update the topic index (if it exists)

If `content/topics/INDEX.md` exists, append a row for each long-form piece:

```
| Date | Title | Pillar | Style | Persona | Primary keyword | Folder |
```

If `INDEX.md` does not exist, do NOT create it. The index belongs to a separate setup task.

---

## Step 12: Report

Output a summary in this shape:

```
✅ Week written: <Mon date> through <Sun date>

Long-form blog:
  • <title> [Thinker, How-To, Ray]. <word count> words. content/topics/<folder>/

Substack essay (1):
  • <title> [Builder, Historical Deep Dive, Ray]. <word count>. content/topics/<folder>/

LinkedIn shorts + paired Substack Notes (3 each):
  • <hook line> [Builder]. content/topics/<folder>/ (linkedin-short.md + substack-note.md)
  • <hook line> [Human]. content/topics/<folder>/ (linkedin-short.md + substack-note.md)
  • <hook line> [Human]. content/topics/<folder>/ (linkedin-short.md + substack-note.md)

Source material used:
  • <file path>
  • <file path>

Pillar mix this week: Thinker X% / Builder Y% / Human Z%
Em dash sweep: clean
Calibration test: all <n> pieces passed (any rewrites noted below)

Flags for Dru:
  • <anything missing, thin, or needing human review>
```

Then stop. **Never publish.** Drafts only. Designer runs next on `image-prompt.md` files. Dru reviews before anything ships.

---

## Hard rules (do not violate)

- First person always.
- **No em dashes.** Anywhere. Run Step 9 every time.
- No engagement-bait endings.
- No corporate jargon ("leverage", "synergies", "unlock", "at scale").
- No generic openers ("In today's rapidly evolving AI landscape...").
- Real businesses named where they fit: Xood, Skylight, Tictag, EWB, Nuen Motor, GAM.
- Voice markers max 1 to 2 per piece. Never forced.
- Hashtags 4 to 6. `#FutureOfWork` on every blog post. `#DoingGoodWithData` on every LinkedIn post.
- LinkedIn body: zero external links. URL goes in first comment.
- Facebook VN: never write final Vietnamese. Brief in English, flag for Joy/Chi.
- **Attribution non-negotiable.** Every borrowed framework or named system credits the originator by name AND links to their primary source. See Step 8 attribution check.
- Never publish. Never push. Never deploy.
