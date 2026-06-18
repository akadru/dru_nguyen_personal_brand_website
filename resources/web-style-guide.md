# Web Style Guide — Dru Personal Brand

## Brand palette + contrast rules (locked 2026-06-16)

| Token | Hex | Use |
|---|---|---|
| `--brand-jungle` | `#0A1B24` | Primary dark ground. Default text on light grounds. |
| `--brand-lime` | `#ADFB49` | Accent + highlight on dark grounds. Used as a background only when text is JUNGLE. |
| `--brand-myrtle` | `#347474` | Secondary depth. Display-type italic accent. |
| `--brand-tea` | `#D3EDC5` | Soft fill. |
| `--brand-pastel` | `#B0BEC5` | Neutral body text on dark grounds. |
| `--brand-white` | `#F2F2F2` | Light. Body text on jungle. NEVER on lime. |

### Non-negotiable contrast rule

**On lime backgrounds, text is always jungle.** Never white. Never pastel. Never any color with luminance > 0.4.

White-on-lime fails WCAG contrast (~3.7:1 vs. required 4.5:1) and reads as washed-out. The brand's lime moments are high-impact display surfaces — they must be high-impact, not strained.

**Approved combinations:**

| Section background | Body text | Display headlines | Buttons |
|---|---|---|---|
| Jungle | White / Pastel | White (with lime accent words) | Lime bg + Jungle text |
| Lime | **Jungle** | **Jungle** (default) or **Myrtle italic** | Jungle bg + Lime text (inverse) |
| White | Jungle | Jungle (with myrtle italic accent) | Jungle bg + White text |
| Tea | Jungle | Jungle | Jungle bg + Lime/White text |

**Forbidden on lime grounds:** white text, pastel text, light-myrtle text. **Forbidden on white grounds:** lime text (insufficient contrast). **Forbidden on jungle grounds:** myrtle body text (insufficient contrast).

**Reference implementation:** `website/app/scholarly-warrior/page.tsx` hero (after 2026-06-16 fix) — every text element on the lime section explicitly sets `color: var(--brand-jungle)`. Use as the model for any new lime-grounded section.

---

## Content pillars (every post fits one — if it doesn't, it doesn't ship)

| Pillar | Mix | Purpose |
|--------|-----|---------|
| **Thinker** | 40% | Original POV on AI, ops, workflow design. Tactical utility (Jeff Su style). |
| **Builder** | 35% | Behind-the-scenes of building Xood, Skylight, advisory roles. Operator's journey. |
| **Human** | 25% | Real moments, family, Vietnam, EO forum, Scholarly Warrior identity. |

## Categories (web)
- **News** — industry commentary on Vietnam AI / global AI / operator economy
- **Advice** — tactical AI Operator content (prompts, templates, workflows)
- **Story** — lived-experience essays anchored in Dru's signature stories
- **Deep Dive** — long-form Substack-style essays (1,000–1,500 words)
- **Guide** — step-by-step how-tos, frameworks (S.I.F.P, EOS, Four-Layer Communication)

## Post types & length

| Type | Length | Frequency | Pillar lean |
|------|--------|-----------|-------------|
| Short hook | 50–150 words | 1/wk (Sat LinkedIn) | Human |
| Long-form | 400–800 words | 1/wk (Wed LinkedIn) | Thinker / Builder |
| Image post | 50–100 word caption | as triggered | Human / Builder |
| Carousel | 6–10 slides, 30–60 words/slide | 1/wk | Thinker (AI Operator) |
| Short-form video | 30–90 sec | 1/wk (batch Friday) | any |
| Substack essay | 1,000–1,500 words | 1/wk (Tue 8am ICT) | rotate |

## Default writing framework — **S.I.F.P** (Joy's)
For Thinker and Builder long-form:

- **S — Situation** — a specific moment from Dru's work or life
- **I — Insight** — what Dru saw that others might miss
- **F — Framework** — the repeatable principle, workflow, or tactic (save-worthy tier)
- **P — Provocation** — a question that invites the reader to reflect or act

**Exception:** AI Operator / tactical content replaces **P** with a utility takeaway (a prompt, template, or specific action). Ending on a question dilutes tactical content.

## Blog post structure (HTML — per BlogPost StyleGuide v1.0)

Required order, every post:

1. **Header card** — dark jungle bg, 4px lime bar, eyebrow tag, H1 title, author meta row
2. **Hook block** — 22px, left 4px lime border. 1–2 sentence thesis. Bold ≥1 phrase.
3. **Story / personal anecdote** — first person. Must include a failure or challenge moment before the insight.
4. **Callout block** — dark jungle bg. Core insight; key phrase bolded in `--lime`.
5. **Horizontal divider** — 1px `#f0f0f0`, 48px vertical margin.
6. **Section label + H2** per section — label "The ___" pattern (e.g. "The Framework").
7. **Framework content** — step blocks, tables, or prose. **Min 3, max 6.**
8. **Data table** *(optional)* — 3 cols max.
9. **Key takeaways block** — dark jungle bg, lime → arrows, 4–6 items. Bold the action phrase per item.
10. **Closing prose** — 2–4 punchy sentences. End with a memorable one-liner.
11. **CTA block** — outlined box (2px `--jungle`), question, sub-text, hashtag pills.
12. **Footer** — avatar circle, name, handle, month/year.

## Title (H1) formula
**[What most people do wrong] + [The fix]**
- Two clauses, `<br>` between them.
- One `<em>` word in `--lime`.
- Example: "Most people use AI like a junk drawer. Here's how to fix *that.*"

## Eyebrow tag
**[Topic] · [Topic] · [Topic]** — 3 max, middle dot separator, uppercase, `--lime`. Example: "Productivity · AI · Systems".

## Section labels
Always "The ___" pattern. Examples: "The Framework", "The Problem", "The Reframe", "The Naming System".

## Read time
- `total words ÷ 200`, round up.
- Display "X MIN READ" — uppercase, number only.
- Typical 4–6 MIN READ.

## SEO defaults
- Every blog post `export const metadata` with: `title`, `description`, `openGraph`, canonical URL.
- **Title** ≤60 chars, includes keyword.
- **Meta description** ≤160 chars.
- **OG image** 1200×630 (16:9), brand palette when custom.
- Category tag matching this guide.
- Read-time estimate in header.
- All images via `next/image` — never `<img>`.

## Hashtag rules
- **4–6** hashtags per blog post / LinkedIn post — no more, no less.
- **Always include** `#FutureOfWork` (blog/standing) and `#DoingGoodWithData` (LinkedIn anchor).
- CamelCase. No punctuation inside (`#AITools` not `#AI-Tools`).
- LinkedIn rotating set: `#AIOperator`, `#BuildingInVietnam`, `#Xood`, `#Skylight`, `#EOS`, `#ScholarlyWarrior`.

## Channel-specific rules
- **LinkedIn:** no external links in post body — put them in the first comment.
- **Substack:** every essay linkable + citable; one pull quote max; ending CTA specific (subscribe / reply / share with someone in mind).
- **Facebook (VN):** create natively in Vietnamese — never translate from English. Hashtags ignored — 1–2 max.

## Pre-publish checklist
- [ ] Pillar fit clear (Thinker / Builder / Human)
- [ ] Voice blend reads as Dru (70/15/10/5)
- [ ] Calibration test passes all 4 questions
- [ ] No bad patterns (jargon, listicle without arc, vague specificity, engagement-bait, emoji spam)
- [ ] Specificity check — real businesses, tools, moments named
- [ ] Length within range
- [ ] Hashtags correct (4–6, includes `#FutureOfWork` for blog / `#DoingGoodWithData` for LinkedIn)
- [ ] Channel-specific rules observed
- [ ] Voice markers ≤1–2, never forced
- [ ] Joy and Dru both approve before ship

*Source: `Dru_Content_Engine_SOP.md` v1.0 + `Dru_BlogPost_StyleGuide.md` v1.0.*
