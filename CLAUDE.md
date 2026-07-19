# Dru Personal Brand — Claude Code Instructions

## What this project is
AI-powered marketing system for Dru Nguyen's personal brand. Runs a Next.js website on
Vercel, manages content across LinkedIn / Substack / Facebook, and automates daily team
communications between Dru, Joy (Brand Architect), and Chi (Producer).

Identity: **The Scholarly Warrior.** Care. Discipline. Grit.

## Live URL & infrastructure (canonical — do not re-ask)
- **Live site:** https://www.drunguyen.me/ — this is THE production domain for this project. Always use it; never guess a `*.vercel.app` URL.
- **Hosting:** Vercel project `dru-nguyen-personal-brand-website` (deploys from `main` via `git push`).
- **Git remote:** github.com/akadru/dru_nguyen_personal_brand_website
- **Database/auth:** Supabase project `crwqvfgdtnmghevzqail` (`https://crwqvfgdtnmghevzqail.supabase.co`). Keys live in `.env.local`.
- **Other services:** Gemini (images), Resend (email), Lark bot (team comms).

## Key paths
- Website: `website/` (Next.js 16 App Router + TypeScript + Tailwind 4, deployed to Vercel). Layout: **GaryVee-style, locked 2026-07-06** — fixed left sidebar nav on desktop (floating lime menu card on mobile), Bebas Neue display headings with lime marker-highlights, three-pillar homepage (Dru Nguyen / Built with AI / Scholarly Warrior), Built-with-AI builds strip on the white surface, social-wall footer. See `resources/design-system.md`.
- **No newsletter.** Dru does not run one (retired 2026-07-06). Never add newsletter CTAs, signup forms, or copy; `/newsletter` redirects to `/blog`.
- Agents: `.claude/agents/` (definitions) + `agents/` (context + skills)
- Content: `content/topics/` (one folder per blog post)
- Resources: `resources/` (brand-voice, design-system, web-style-guide, audience-personas, plus Web/Report/Memo style-guide source docs)
- Standups: `standup/` (individual check-ins + compiled briefings)
- Docs: `architecture/docs/`

## Brand quick reference
- Palette: `#0A1B24` (jungle, primary), `#ADFB49` (lime, accent — dark bg only), `#347474` (myrtle), `#D3EDC5` (tea), `#B0BEC5` (pastel), `#F2F2F2` (white).
- Web fonts: **Bebas Neue** (display headings via `.display-heading`) + **Outfit** (UI/body), self-hosted with next/font. Blog post body (print-card template): Plus Jakarta Sans.
- Hero identity line: **Operator · Builder · Experimenter** + quote "Knowledge with Application is Wisdom".
- Xood logo: only the white-lettering dark-bg mark (blue X, white "ood", orange dot). Never on a white chip.
- Voice blend: 70% Jeff Su / 15% Tony Robbins / 10% Daniel Priestley / 5% Gary Vee.
- Pillars: Thinker (40%) · Builder (35%) · Human (25%).
- Anchor hashtag: `#DoingGoodWithData`. Standing brand hashtag (blog/site): `#ScholarlyWarrior`.
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
