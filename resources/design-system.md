# Design System — Dru Personal Brand

The Scholarly Warrior visual system. Three contexts, one palette.

| Context | Source guide | Font |
|---------|-------------|------|
| **Website + landing pages** | `Dru-Nguyen-Web-Style-Guide.docx` | **Outfit** |
| **Blog post body (within site)** | `Dru_BlogPost_StyleGuide.md` | Plus Jakarta Sans |
| **Word docs / memos** | `Dru-Nguyen-Word-Memo-Style-Guide.docx` | Outfit |
| **Reports (.docx)** | `Dru-Nguyen-Report-Style-Guide.docx` | Outfit |

The website framework (this Next.js app) defaults to **Outfit + Web Style Guide**. Individual blog post pages may opt into Plus Jakarta Sans for the article body when matching the print-style HTML template.

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

## Typography (Web — Outfit)

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
```

| Style | Size / Weight | Notes |
|-------|---------------|-------|
| H1 (hero title) | 60px / 700 | Page hero — primary message only |
| H2 | 44px / 700 | Section headers |
| H3 | 36px / 700 | Subsection headings |
| H4 | 28px / 700 | Card titles, module headers |
| H5 | 22px / 700 | Small section heads |
| H6 | 16px / 700 | Label headings, category tags |
| Paragraph 1 | 22px / 400 | Hero supporting, large body |
| Paragraph 2 | 17px / 400 | Standard body |
| Paragraph 3 | 14px / 400 | Card body, captions |
| Button | 12px / 700 / UPPERCASE | LS 0.05em |
| Section label | 10px / 700 / UPPERCASE | LS 0.12em, Myrtle Green |

- **Outfit is the sole typeface** for web. No serif, no system fonts.
- **Normal caps on all headings.** Never all-caps for headlines.

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

- **Nav bar:** sticky, top:0, bg `rgba(10,27,36,0.94)` + backdrop-blur, height 56px, 1px Pastel Blue bottom border. Logo left (Outfit Bold 16px Anti-Flash White). CTA right (hidden mobile).
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
- **Outfit only** on web. Plus Jakarta Sans **only** in the print-card blog template.
- French Lime never on white/light backgrounds.
- Never exceed the palette.
- Never break section order on landing pages.
- Never use em dashes in **web copy** (Web Style Guide rule). Use a colon or rewrite. *(Note: blog posts and SOP-driven LinkedIn drafts may use em dashes per the Content Engine SOP — em-dash ban is for marketing/web copy.)*
- Never skip scroll-reveal animation.
- Never use corporate jargon or buzzwords.
- Direct and active voice — no passive, no hedging.

*Sources: `Dru-Nguyen-Web-Style-Guide.docx`, `Dru_BlogPost_StyleGuide.md`, `Dru-Nguyen-Report-Style-Guide.docx`, `Dru-Nguyen-Word-Memo-Style-Guide.docx`.*
