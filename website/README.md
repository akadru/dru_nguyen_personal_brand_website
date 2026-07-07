# drunguyen.me — Dru Nguyen personal brand site

Next.js 16 (App Router) + TypeScript + Tailwind 4, deployed to Vercel at
**https://www.drunguyen.me/**. Personal brand: **The Scholarly Warrior** — Care · Discipline · Grit.

## Design language (GaryVee-style, locked 2026-07-06)

A dark, editorial, poster-energy layout inspired by garyvaynerchuk.com, rendered in Dru's
own palette:

- **Fixed left sidebar nav** on desktop (230px, jungle bg): DRU. wordmark + search, links
  grouped under the three pillars, "Book Dru to Speak" lime CTA, social icons. On mobile it
  collapses to a sticky top bar + a quarter-width lime slide-in drawer.
- **Display typography:** condensed all-caps **Bebas Neue** for headlines (`.display-heading`),
  **Outfit** for UI and body. Both self-hosted via `next/font` — no Google Fonts request.
- **Marker-highlight** (`.marker-highlight`): a lime swipe behind key headline words; text inside
  is always jungle (the locked lime-contrast rule — see `resources/web-style-guide.md`).
- **Footer** (sitewide): social wall + one-line copyright. **No newsletter** — Dru does not run one.

## Homepage sections (`app/page.tsx`)

1. **Hero** — OPERATOR / BUILDER / EXPERIMENTER over a faded Zero Project speaking photo, with
   the quote "Knowledge with Application is Wisdom." (A `HERO_VIDEO_ID` const lights up a "Play
   Video" lightbox when a YouTube id is set.)
2. **Three pillar tiles** — *Dru Nguyen · builds businesses* → `/ventures`; *Built with AI · the
   tools my teams run on* → `/built-with-ai`; *Scholarly Warrior · lives Care · Discipline · Grit*
   → `/scholarly-warrior`.
3. **Built with AI** — the three live builds (see below).
4. **What's New** — blog feed with topic filter pills.
5. **Operating record** — stat strip.
6. **Speaking** — full-bleed closer + "Book Dru to Speak".

## Routes

- `/` home · `/about` · `/ventures` + `/ventures/[slug]` · `/scholarly-warrior` · `/xood`
- `/blog` + `/blog/[post]` (print-card template, Plus Jakarta Sans body)
- `/built-with-ai` showcase + case studies: `/built-with-ai/drunguyen-site`,
  `/built-with-ai/team-skylight`, `/built-with-ai/eos-platform`
- `/speaking` · `/press` · `/contact` (Supabase-backed) · `/content`
- `/newsletter` → **permanent redirect to `/blog`** (newsletter retired)

## Built with AI (`lib/builds.ts`)

Three real tools, all live, all built with Claude. Each has a card on `/built-with-ai` linking to
the live product, plus its own case-study page:

- **EOS Operating System** — `demo.drunguyen.me` (the full EOS practice as software)
- **Team Skylight** — `teamskylight.com` (culture + onboarding hub)
- **drunguyen.me** — this site

## Key data files

- `lib/builds.ts` — the Built-with-AI entries · `lib/ventures.ts` — the six ventures · `lib/posts.ts` — blog posts + topic filters

## Develop

```bash
npm run dev     # local dev server
npm run build   # production build (must pass before pushing)
```

Deploy is **git push → Vercel CI/CD only** (never `vercel` CLI). Fonts, palette tokens, and the
lime-contrast rule live in `app/globals.css`. See the repo root `CLAUDE.md` and
`resources/design-system.md` for the full brand + engineering rules.
