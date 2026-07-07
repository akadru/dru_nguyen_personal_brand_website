# `resources/` — Dru Nguyen Brand Source of Truth

> **What this folder is.** Every canonical brand document lives here. Voice, audience, palette, contrast rules, style guides, worked examples, strategic briefs. If you're writing, designing, or building something for the Dru Nguyen brand — for the website, LinkedIn, Substack, Facebook, Word memos, reports, or visual assets — start here. If something contradicts what's in this folder, this folder wins.
>
> **Who maintains it.** Dru. Every change to a file in `resources/` is intentional. AI agents read from here on every run; the human marketing manager downloads the relevant files when she sits down to write.
>
> **How to revert.** This folder is the home base. If anything elsewhere in the project (a draft, a chat, a half-built page) drifts from these rules, revert to what's in this folder. It is the canonical brand record.

---

## Quick start — by task

**"I need to write a LinkedIn / Substack / Facebook post."**
→ Open [`DRU-WRITER-GUIDE-for-marketing-manager.md`](DRU-WRITER-GUIDE-for-marketing-manager.md) + [`SAMPLE-LINKEDIN-POST-and-claude-workflow.md`](SAMPLE-LINKEDIN-POST-and-claude-workflow.md). The sample includes the exact Claude prompt to use.

**"I need to design a social card / OG image / PDF / carousel."**
→ [`DRU-WRITER-GUIDE-for-marketing-manager.md`](DRU-WRITER-GUIDE-for-marketing-manager.md) **Section 16 (Visual / design rules)** + [`web-style-guide.md`](web-style-guide.md) palette section. The lime-background contrast rule is non-negotiable.

**"I need to write a long-form blog post for drunguyen.me with copy-paste prompts."**
→ [`DRU-WRITER-GUIDE-for-marketing-manager.md`](DRU-WRITER-GUIDE-for-marketing-manager.md) Sections 7–9, plus [`web-style-guide.md`](web-style-guide.md) for length/structure. The 7-Beat Story Arc is in Section 8 of the Writer Guide.

**"I need to write a Word memo or a report."**
→ Open the corresponding source file: [`memo-style-guide-source.txt`](memo-style-guide-source.txt) for memos, [`report-style-guide-source.txt`](report-style-guide-source.txt) for reports. The .docx versions are Dru's branded templates.

**"Who is this audience and what do they want from Dru?"**
→ [`audience-personas.md`](audience-personas.md). Two personas: Ray (plateaued operator) and Linh (curious Vietnam builder).

**"What is the brand voice?"**
→ [`brand-voice.md`](brand-voice.md) (the short reference) or [`DRU-WRITER-GUIDE-for-marketing-manager.md`](DRU-WRITER-GUIDE-for-marketing-manager.md) Section 2 (the expanded version).

---

## File index — what each file is

### 1. Master shareable guides (the primary documents)

These are the documents Dru hands to his marketing manager, designer, or any new collaborator. Self-contained, written for humans, current.

| File | Lines | Purpose |
|---|---|---|
| **[`DRU-WRITER-GUIDE-for-marketing-manager.md`](DRU-WRITER-GUIDE-for-marketing-manager.md)** | 441 | The single consolidated brand-voice + rules document. Voice blend, personas, channel rules, hashtag rules, attribution rule, 7-Beat Story Arc, palette + lime-contrast rule, four-question calibration test, five-point clarity gate, weekly batch workflow. The one file every collaborator needs. |
| **[`SAMPLE-LINKEDIN-POST-and-claude-workflow.md`](SAMPLE-LINKEDIN-POST-and-claude-workflow.md)** | 243 | A worked LinkedIn post (the EO Vietnam / Skylight purchasing post) with a rule-by-rule scorecard, the brief shape that produced it, and the verbatim Claude prompt for drafting future posts. Pair with the Writer Guide. |

### 2. Brand foundations (focused atomic files referenced by agents)

These are short, focused documents the AI agents (writer, social-media-manager, marketing-manager, designer) read on every run. The Writer Guide consolidates them, but the atomic files remain for agent context.

| File | Lines | Purpose |
|---|---|---|
| **[`brand-voice.md`](brand-voice.md)** | 64 | Voice blend (70/15/10/5), four attributes, voice markers, words to avoid, CTA style, calibration tests, hard rules. Short and high-signal. |
| **[`audience-personas.md`](audience-personas.md)** | 93 | Ray (plateaued operator) and Linh (curious Vietnam builder). Demographics, goals, pains, what they want from Dru, channel preferences, voice cues. |
| **[`web-style-guide.md`](web-style-guide.md)** | 160 | Palette + lime-contrast rule, **site layout & typography (GaryVee-style)**, content pillars (Thinker/Builder/Human), post types and lengths, S.I.F.P framework, blog post HTML structure. |
| **[`design-system.md`](design-system.md)** | 158 | Scholarly Warrior visual system. GaryVee-style layout, Bebas Neue + Outfit typography, sidebar nav, marker-highlight, one palette, no-newsletter + Xood-logo rules. |

### 3. Format-specific style guides (Word / Report / Memo)

Used when Dru writes a Word memo or a formal report. Each pair is `.txt` source + `.docx` branded template.

| File | Purpose |
|---|---|
| [`web-style-guide-source.txt`](web-style-guide-source.txt) + [`Dru-Nguyen-Web-Style-Guide.docx`](Dru-Nguyen-Web-Style-Guide.docx) | Web-style writing guide as a Word document. |
| [`report-style-guide-source.txt`](report-style-guide-source.txt) + [`Dru-Nguyen-Report-Style-Guide.docx`](Dru-Nguyen-Report-Style-Guide.docx) | How Dru writes a formal report (board, investor, partner). |
| [`memo-style-guide-source.txt`](memo-style-guide-source.txt) + [`Dru-Nguyen-Word-Memo-Style-Guide.docx`](Dru-Nguyen-Word-Memo-Style-Guide.docx) | How Dru writes a Word memo (internal team, EOS L10, project brief). |

---

## How the files relate

```
                                ┌─────────────────────────────────────┐
                                │  README.md  (you are here)          │
                                │  Index + navigation                  │
                                └─────────────────────────────────────┘
                                              │
              ┌───────────────────────────────┼───────────────────────────────┐
              ▼                               ▼                               ▼
    ┌──────────────────┐         ┌────────────────────────┐       ┌──────────────────┐
    │ MASTER GUIDES    │         │ ATOMIC FOUNDATIONS     │       │ FORMAT GUIDES    │
    │ (shareable)      │         │ (agent-read)           │       │ (Word / Report / │
    │                  │         │                        │       │  Memo)           │
    │ DRU-WRITER-GUIDE │  ◄──────┤ brand-voice            │       │ memo-source.txt  │
    │   (consolidates  │         │ audience-personas      │       │ + .docx          │
    │   all of these   │         │ web-style-guide        │       │                  │
    │   in one file)   │         │ design-system          │       │ report-source.txt│
    │                  │         │                        │       │ + .docx          │
    │ SAMPLE-LINKEDIN  │         │                        │       │                  │
    │   POST           │         │                        │       │ web-style-source │
    │                  │         │                        │       │ + .docx          │
    └──────────────────┘         └────────────────────────┘       └──────────────────┘
              │                               │
              └───────────────┬───────────────┘
                              ▼
              ┌──────────────────────────────┐
              │  AI agents read from here:   │
              │  • writer                    │
              │  • social-media-manager      │
              │  • marketing-manager         │
              │  • designer                  │
              │  • web-developer             │
              └──────────────────────────────┘
```

---

## Non-negotiable rules (the brand's hard limits)

These are scattered across multiple files but they are the ones that matter most. Memorize them.

### Voice and content

1. **Voice blend:** 70% Jeff Su (tactical) · 15% Tony Robbins (identity) · 10% Daniel Priestley (sequence story) · 5% Gary Vee (unfiltered). Tilt the mix per pillar but never abandon any of the four.
2. **Four attributes** must be present in every post: Operator Authority, Warm Teacher, AI Realist, Sharp Observer.
3. **First person, always.** "I learned this the hard way." Never "Leaders often find that..."
4. **No corporate jargon.** No "leverage," "synergies," "unlock," "at scale."
5. **No engagement-bait endings.** No "What are your thoughts?"
6. **No emoji spam.** Zero preferred; one earned emoji rarely.
7. **Specificity over philosophy.** Name the business, the tool, the moment.
8. **Portfolio framing:** "3 companies, 2 board meetings." Never "6 businesses."
9. **EO / YPO / peer forums = protected ground.** Never framed as failure modes.
10. **Never disclose office locations.**
11. **Credit everything you reference, with a hyperlink, on first mention.** People, companies, books, frameworks, terms, podcasts. If someone else made it, link to them.
12. **Define borrowed terms in plain English on first use** (e.g. EOS, OKRs, Rocks, L10).

### Visual / design

13. **Lime-background contrast rule:** on any lime ground, text is **always jungle** (`#0A1B24`). Never white. Never pastel.
14. **One dominant lime moment per visual.** Lime is the accent, not the background.
15. **Lime never appears on white grounds.** Insufficient contrast.

### Publishing

16. **Never publish on Dru's behalf without explicit approval.** Drafts only.
17. **Email campaigns ALWAYS require human approval before sending.**
18. **Never draft in Vietnamese.** Output English source, flag for native rewrite.
19. **Never auto-translate.** A machine translation reads as a machine translation.

---

## Changelog — when the source of truth was updated

- **2026-07-06** — **Site redesigned to a GaryVee-style layout** (fixed left sidebar nav, Bebas Neue display headings + Outfit, lime marker-highlight, three-pillar homepage). The middle pillar became **Built with AI** (`/built-with-ai`) with case studies for the EOS platform, Team Skylight, and this site; hero is OPERATOR / BUILDER / EXPERIMENTER + "Knowledge with Application is Wisdom." **Newsletter retired entirely** (`/newsletter` → `/blog`, footer band removed). **Xood logo** locked to the white-lettering dark-bg mark, never on a white chip. Synced across `CLAUDE.md`, `resources/web-style-guide.md`, `resources/design-system.md`, and `website/README.md`.
- **2026-06-18** — Lime-background contrast rule locked across `web-style-guide.md`, `DRU-WRITER-GUIDE-for-marketing-manager.md`, `agents/designer/context/style-guide.md`, and `website/app/globals.css`. Bug fixed on `/scholarly-warrior` hero (white text on lime → jungle). Memory entry added: `lime_contrast_rule.md`.
- **2026-06-16** — `DRU-WRITER-GUIDE-for-marketing-manager.md` (441 lines) created as the consolidated source of truth for the human marketing manager. `SAMPLE-LINKEDIN-POST-and-claude-workflow.md` (243 lines) added as the worked example with Claude prompt.
- **2026-06-16** — Credit + define rules locked. Every framework, person, book, term referenced in a post must be hyperlinked to canonical source on first mention.
- **2026-06-15** — Voice blend + four attributes + HBR-style opening + EO protected-ground rules locked across agent files.
- **2026-04-27** — Brand foundations established: `brand-voice.md`, `audience-personas.md`, `web-style-guide.md`, `design-system.md`.

---

## How AI agents use this folder

Every Dru-brand AI agent reads from `resources/` on every run. The agent files at `agents/*/context/persona.md` reference specific files here:

- **Writer agent** reads `brand-voice.md`, `audience-personas.md`, `web-style-guide.md`, plus the consolidated `DRU-WRITER-GUIDE-for-marketing-manager.md` and `SAMPLE-LINKEDIN-POST-and-claude-workflow.md`.
- **Social Media Manager agent** reads the same set, weighted toward `SAMPLE-LINKEDIN-POST-and-claude-workflow.md` for the worked example.
- **Marketing Manager agent** reads `web-style-guide.md`, `audience-personas.md`, plus the Writer Guide for briefing the Writer.
- **Designer agent** reads `design-system.md` and `agents/designer/context/style-guide.md` (which references this folder's palette + contrast rules).
- **Web Developer agent** reads `web-style-guide.md` for HTML structure conventions.

If you change a file in this folder, the change propagates to every agent on their next run automatically. No agent code edits needed.

---

## Adding a new document to `resources/`

When you add a new canonical document to this folder, do all of these:

1. **Name it clearly.** Use ALL-CAPS-WITH-DASHES if it's a shareable master document (e.g. `DRU-WRITER-GUIDE-for-marketing-manager.md`). Use lowercase-with-dashes if it's an atomic foundation file the agents read (e.g. `brand-voice.md`).
2. **Add it to the file index** above with a one-line purpose and a line count.
3. **Add a line to the changelog** above with the date and what changed.
4. **Reference it from the agents** if it's something the agents should read. Edit `agents/writer/context/persona.md` (or whichever agent applies) to add the file to the "Always read first" section.
5. **Don't duplicate content.** If a rule is now in the Writer Guide, don't also add it to `brand-voice.md` — pick one source of truth and link to it. The Writer Guide consolidates; the atomic files stay short.

---

## What is NOT in this folder

These live elsewhere and are referenced from here:

- **Agent persona / skill files** → `agents/{role}/context/persona.md`, `agents/{role}/skills/{skill}/SKILL.md`
- **Project documentation** → `architecture/docs/`
- **Content calendar** → `content/content-calendar/{YYYY-MM}.md`
- **Per-post draft content** → `content/topics/{slug}/`
- **Published Next.js pages** → `website/app/`
- **Shared components** → `website/components/`
- **Standup briefings + daily notes** → `standup/`

---

*Last updated 2026-06-18. This folder is the canonical source of truth for the Dru Nguyen brand. If anything elsewhere in the project drifts from these rules, revert to what's here.*
