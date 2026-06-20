# Dru Personal Brand — Claude Code Instructions

## What this project is
AI-powered marketing system for Dru Nguyen's personal brand. Runs a Next.js website on
Vercel, manages content across LinkedIn / Substack / Facebook, and automates daily team
communications between Dru, Joy (Brand Architect), and Chi (Producer).

Identity: **The Scholarly Warrior.** Care. Discipline. Grit.

## Key paths
- Website: `website/` (Next.js 16 App Router + TypeScript + Tailwind 4 + Outfit, deployed to Vercel)
- Agents: `.claude/agents/` (definitions) + `agents/` (context + skills)
- Content: `content/topics/` (one folder per blog post)
- Resources: `resources/` (brand-voice, design-system, web-style-guide, audience-personas, plus Web/Report/Memo style-guide source docs)
- Standups: `standup/` (individual check-ins + compiled briefings)
- Docs: `architecture/docs/`

## Brand quick reference
- Palette: `#0A1B24` (jungle, primary), `#ADFB49` (lime, accent — dark bg only), `#347474` (myrtle), `#D3EDC5` (tea), `#B0BEC5` (pastel), `#F2F2F2` (white).
- Web font: **Outfit**. Blog post body (print-card template): Plus Jakarta Sans.
- Voice blend: 50% Jeff Su / 20% Alex Hormozi / 15% Dan Martell / 15% Tony Robbins.
- Focus: thought leadership on **leadership**, **AI education**, and **AI/operator trends**.
- Pillars: Thinker (40%) · Builder (35%) · Human (25%).
- Weekly cadence (algorithm-aware): 1 long-form blog (Wed) · 1 Substack essay (Tue) · 3 LinkedIn shorts (Mon/Fri/Sat) · 3 Substack Notes (paired) · 1–2 Facebook VN (optional).
- Anchor hashtag: `#DoingGoodWithData`. Standing brand hashtag (blog/site): `#FutureOfWork`.
- Timezone: `Asia/Ho_Chi_Minh` (UTC+7).

## Publishing workflow
1. Content brief → `content/topics/{slug}/blog.md`
2. `@writer` drafts post + image prompt for the week
3. `@designer` generates hero image
4. `@web-developer` publishes ONE post per run (today's scheduled post)
5. Run: `git push origin main` — Vercel deploys automatically

## Agents
| Agent | Trigger |
|-------|---------|
| project-manager | "help me write my standup" |
| writer | "@writer write a post about X" |
| designer | "@designer create an image for X" |
| web-developer | "@web-developer publish this post" |

## Rules
- Social posts → draft for approval first.
- Email campaigns → ALWAYS require human approval before sending.
- Never commit `.env` files or credentials.
- Never push directly — user runs `git push` from their terminal.
- No `git add .` or `git add -A` — stage by name.
- No CLI deploys — git push → CI/CD only.
- No corporate jargon: never "leverage," "synergies," "unlock," "at scale."
- No engagement-bait endings.
