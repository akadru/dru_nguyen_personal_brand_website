# Design System — Dru Personal Brand

The Scholarly Warrior visual system. Three contexts, one palette.

| Context | Source guide | Font |
|---------|-------------|------|
| **Website + landing pages** | `Dru-Nguyen-Web-Style-Guide.docx` | **Bebas Neue** (display headings) + **Outfit** (UI/body) |
| **Blog post body (within site)** | `Dru_BlogPost_StyleGuide.md` | Plus Jakarta Sans |
| **Word docs / memos** | `Dru-Nguyen-Word-Memo-Style-Guide.docx` | Outfit |
| **Reports (.docx)** | `Dru-Nguyen-Report-Style-Guide.docx` | Outfit |

The website framework (this Next.js app) uses the **GaryVee-style layout (locked 2026-07-06)**: fixed left sidebar nav on desktop, giant condensed all-caps display headings, lime marker-highlight swipes on key words, and a sitewide social-wall footer. Display headings are Bebas Neue; everything else is Outfit. Individual blog post pages keep the print-card template with Plus Jakarta Sans body. **No newsletter anywhere** — Dru does not run one; never add signup CTAs (`/newsletter` permanently redirects to `/blog`).

---

## Colour palette (one set across all contexts)

| Token | Hex | Role |
|-------|-----|------|
| French Lime | `#ADFB49` | Hero accent — CTAs on dark, accent bars, highlights. **Primary brand signature.** |
| Dark Jungle Green | `#0A1B24` | Dominant dark — hero bg, CTA blocks, nav on scroll, footers, headings |
| Myrtle Green | `#347474` | Section labels, links, h2 italics, card accents |
| Tea Green | `#D3EDC5` | Light card fills, quote blocks, alternating table rows |
| Pastel Blue | `#B0BEC5` | Secondary body text, captions, metadata, footnotes |
| Anti-Flash White | `#F2F2F2` | Default page background, light card surfaces, text on dark |
| Body text | `#333333` | All running prose (never pure black) |

### Brand mapping (auto-injected by P2 bootstrap)
- **Primary:** `#0A1B24`
- **Accent:** `#ADFB49`
- **Surface:** `#F2F2F2`
- **Background:** `#F2F2F2`
- **Text:** `#0A1B24`
- **Foreground:** `#0A1B24`

### Colour rules
- French Lime on **dark backgrounds only**. On white/light it lacks contrast.
- Dark Jungle Green for full-width dark sections, hero, CTA blocks. **Never** for page background.
- Myrtle Green for section labels, links, h2 italics, card accents. **Never** body text.
- Tea Green for light card fills and quote blocks. **Never** text.
- Pastel Blue for captions, metadata, secondary text only.
- Body text defaults `#333333`. Never pure black `#000000`.
- **Never exceed this palette.** No extra greens, grays, or blues.

---

## Typography (Web — Bebas Neue display + Outfit)

Fonts are **self-hosted via `next/font` in `website/app/layout.tsx`** (no Google Fonts requests): Bebas Neue → `--font-bebas`, Outfit → `--font-outfit`, Plus Jakarta Sans → `--font-jakarta`. Never reintroduce a Google Fonts `<link>`/`@import`, and never hard-code family names in components; use `var(--font-display)` / `var(--font-sans)` / `var(--font-prose)`.

| Style | Face / Treatment | Notes |
|-------|------------------|-------|
| H1 (hero/display) | Bebas Neue 400, `.display-heading`, clamp up to ~150px | Inherently all-caps, line-height 0.92 |
| H2 (large section headers) | Bebas Neue 400, `.display-heading`, clamp min ≥ 32px | Marker-highlight or myrtle span for emphasis |
| H3–H6, card titles, sub-heads | Outfit 700 | Normal caps |
| Paragraph 1 | Outfit 22px / 400 | Hero supporting, large body |
| Paragraph 2 | Outfit 17px / 400 | Standard body |
| Paragraph 3 | Outfit 14px / 400 | Card body, captions |
| Button | Outfit 12px / 700 / UPPERCASE | LS 0.05em |
| Section label | Outfit 10px / 700 / UPPERCASE | LS 0.12em, Myrtle Green |

- **Bebas Neue is for display headings only** (`.display-heading` utility). Bebas has no italics — never fake an oblique; use color spans or `.marker-highlight` for emphasis.
- **Marker highlight** (`.marker-highlight`): the lime swipe behind key headline words. Text inside is ALWAYS Dark Jungle Green (locked lime-contrast rule).
- **Outfit for everything that is not a display heading.** No serif, no system fonts.

### Typography (Blog post body — Plus Jakarta Sans)
For blog posts using the print-card HTML template (760px max-width, two-card layout). See `Dru_BlogPost_StyleGuide.md` for the full type scale.

---

## Layout (web)

- **Page bg:** `#F2F2F2` (Anti-Flash White).
- **Container:** max-width **900px**, centred.
- **Padding:** desktop 32px horizontal, mobile 20px horizontal.
- **Breakpoint:** 720px — below this all grids collapse to single column.
- **Section spacing:** 72px top margin + padding (48px on mobile), with a 1px Pastel Blue top border per major section.
- **Buttons:** full-width below 720px.

### Grid patterns
- **Three-column** — feature cards, team bios, step cards, stat blocks. Gap 16px (cards) / 24px (text).
- **Two-column** — before/after, stakes comparison. Gap 24px.
- **Stat strip** — three numbers in a centred flex row, bordered.
- **Single column** — all mobile views, hero, CTA, footer.

### Required page section order (landing pages)
1. Nav Bar (sticky)
2. Hero Section
3. Stat Strip
4. The Problem
5. The Solution
6. How It Works
7. Stakes
8. Authority
9. Transformation
10. Final CTA
11. Footer

Sections may be omitted, but **order is fixed**.

---

## Components

- **Nav (desktop ≥1024px):** fixed left sidebar, 230px wide, Dark Jungle Green bg, 1px pastel right border. DRU. wordmark + search top; links in Bebas Neue grouped under the three pillars (Dru Nguyen / The AI Operator / Scholarly Warrior); "Book Dru to Speak" lime CTA + social icons bottom. Content offset right via `lg:pl-[230px]`.
- **Nav (mobile/tablet <1024px):** sticky top bar (wordmark, socials, search, hamburger) + a **floating rounded lime menu card** that slides in from the right and hugs its content (vertically centered over the dimmed page), jungle text only.
- **Hero:** label (Myrtle Green) above H1 (Anti-Flash White on Dark Jungle Green). Supporting paragraph in Pastel Blue. Two CTAs — Primary (French Lime bg / Dark Jungle Green text), Secondary (transparent + Pastel Blue border).
- **Section labels:** uppercase, Outfit Bold 10px, LS 0.12em, Myrtle Green. Always above the section heading. "THE PROBLEM", "THE SOLUTION", "HOW IT WORKS".
- **CTA block:** full-width Dark Jungle Green. Headline 28px / 700 / Anti-Flash White. Supporting 15px / 400 / 60% white opacity. Primary button French Lime. Secondary transparent.
- **Quote block:** Tea Green bg, 3px Myrtle Green left border, 24px 28px padding, Outfit Medium italic 16px Dark Jungle Green.
- **Cards:**
  - Feature: Tea Green bg, 2px Myrtle Green top accent bar.
  - Dark: Dark Jungle Green bg, French Lime accent bar, Anti-Flash White text.
  - Team bio: 2px Myrtle Green top border, label, name (Outfit Bold 18px).

---

## Animation

- **Scroll-triggered reveal** on every section. Elements fade in + move up 20px.
- Duration: 0.6s. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Threshold: 10% visible.
- Stagger: 0.08s per element in a grid (0s, 0.08s, 0.16s for three-column).
- Once triggered, element stays visible permanently.

---

## Image style
- **Authenticity > polish.** Phone photos beat stock images.
- Team moments, EO sessions, behind-the-scenes at Skylight or Xood.
- Custom illustrations / diagrams use the brand palette.
- Hero image required on every Substack essay; brand colours when custom.
- No generic stock. No corporate team-high-fiving.

---

## Identity assets
- Footer avatar: 52px circle, Dark Jungle Green bg, "D" in French Lime, weight 800.
- Personal brand identity: **The Scholarly Warrior**.
- Standing brand hashtag (blog/site): `#FutureOfWork`.
- Anchor social hashtag: `#DoingGoodWithData`.

---

## Hard rules
- **Bebas Neue for display headings, Outfit for everything else** on web. Plus Jakarta Sans **only** in the print-card blog template.
- **Xood logo:** only the white-lettering dark-bg mark (blue X, white "ood", orange dot). Never on a white chip; never run it through whiten/invert filters.
- French Lime never on white/light backgrounds.
- Never exceed the palette.
- Never break section order on landing pages.
- Never use em dashes in **web copy** (Web Style Guide rule). Use a colon or rewrite. *(Note: blog posts and SOP-driven LinkedIn drafts may use em dashes per the Content Engine SOP — em-dash ban is for marketing/web copy.)*
- Never skip scroll-reveal animation.
- Never use corporate jargon or buzzwords.
- Direct and active voice — no passive, no hedging.

*Sources: `Dru-Nguyen-Web-Style-Guide.docx`, `Dru_BlogPost_StyleGuide.md`, `Dru-Nguyen-Report-Style-Guide.docx`, `Dru-Nguyen-Word-Memo-Style-Guide.docx`.*
