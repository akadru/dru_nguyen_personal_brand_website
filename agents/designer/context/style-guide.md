# Designer Style Guide, Dru Nguyen

This guide is the source of truth for every image generated for Dru Nguyen's personal brand. If anything here conflicts with older docs, this guide wins.

## Visual identity in one line
**Saigon-Tokyo-Kyoto street art with Apple keynote precision.** Energetic, inspiring, coaching-led. Banksy's edge, Sam Flores' painterly character, Upper Playground's gallery-streetwear sensibility, applied to leadership and AI education.

## Who Dru is (the visual brief)
Operator. Co-founder. Investor. Thought leader on **leadership**, **AI education**, and **AI/operator trends**. Identity anchor: **The Scholarly Warrior. Care. Discipline. Grit.** Vietnamese-American, based in Vietnam. Builds in Saigon, trains in Muay Thai, speaks at Zero Project. Audiences are Ray (the plateaued operator) and Linh (the curious Vietnam founder).

The visuals carry that energy: real, urban, hand-made, coaching-inspired, never corporate-sleepy.

---

## Brand palette (locked)

| Name (use in prompts) | Hex | Use |
|---|---|---|
| Jungle | `#0A1B24` | Primary, dark grounds, default backdrop |
| **Lime** | `#ADFB49` | **Accent. Borders. Showcased when possible.** Like a fresh spray tag or a thick stencil border. Only on dark grounds. |
| Myrtle | `#347474` | Secondary depth |
| Tea | `#D3EDC5` | Soft fill |
| Pastel | `#B0BEC5` | Neutral |
| White | `#F2F2F2` | Light |

Use plain English color names in prompts (jungle, lime, myrtle, tea green, pastel grey, white). Never raw hex codes.

### Lime usage rules (because lime is showcased)
- Lime **borders** are encouraged on hero pieces. Thick stencil-edge frame.
- Lime **spray accent** as one mark in a mural, like a fresh tag.
- Lime **highlight** on a single screen line, sticky note, or object.
- One dominant lime moment per image. Never lime everywhere.
- Lime never appears on white grounds. Dark only.

---

## Visual references

The brand sits at the intersection of these:

- **Banksy.** Stencil edge, monochrome with single accent, social and coaching message under the surface.
- **Sam Flores.** Painterly characters with Asian-American sensibility, dreamlike, soft brushwork.
- **Upper Playground.** Gallery-streetwear, character-led, painterly, confident.
- **Apple keynote stills.** Matte dark, hero object center-frame, single dramatic light.
- **Dan Martell.** Clean energy, motion captured mid-thought.
- **Tony Robbins.** High-contrast big-room energy, dramatic light.
- **Saigon street art.** District 1 and District 2 mural walls, hand-painted shophouse signs, motorbike chaos pre-dawn.
- **Tokyo back-alleys.** Neon-warm (not cyberpunk), Golden Gai narrowness, paper-lantern light.
- **Kyoto wabi-sabi.** Weathered wood, paper screens, restraint, a single perfect object.

When a prompt cites a reference, name it in plain English. Example: "in the style of Banksy stencil work, with Sam Flores painterly character softness."

---

## The three image styles

Pick exactly ONE style per image. Mix techniques inside that style if the concept demands it.

### 1. EDITORIAL PHOTO
Apple keynote logic. Operator and tool, or single hero object, on a matte dark ground. Single dramatic light source. Restrained. Cinematic.

**Use for:** tactical Thinker and Builder posts. Object still life. Operator at desk with laptop, prompts visible on screen, notebooks, phin coffee, fountain pen on a contract.

**Mood:** focused, calm, premium, considered.

### 2. STREET ART / ILLUSTRATION
The signature brand look. Banksy stencil + Sam Flores painterly character + Upper Playground gallery-streetwear, fused with Saigon-Tokyo-Kyoto urban fabric. Hand-made feel. Lime as border or spray accent.

**Use for:** manifestos, big ideas, signature moments, identity pieces, anything that needs energy. This is what makes the brand visually distinct.

**Mood:** bold, energetic, coaching, confident, hand-painted.

**Sub-modes inside this style:**

- **Stencil (Banksy mode), locked canon 2026-04-30:**
  - **Always hyper-realistic photographic.** Looks like a photojournalist's documentary photo of an actual stenciled wall. Not illustrated, not painterly, not vector. Camera spec in prompt: Sony A7IV with 35mm prime lens, f/4, natural daylight.
  - **Always lime green spray paint** (`#ADFB49`). The stencil text is the only saturated color in frame.
  - **Always military / industrial stencil typography**: Allerta Stencil, Stardos Stencil, or Trade Gothic Bold cut as a stencil. Block sans-serif, all caps, geometric, monospace-feeling letterforms. Visible stencil bridge gaps in O, A, P, R, B, D. Solid block period at end. NO hand-painted brushwork, NO calligraphy, NO graffiti tag.
  - **Always on a real wall**: weathered brick, peeling-paint concrete, shophouse stucco. Real wall texture, scuffs, stains, age.
  - **Realistic spray detail**: visible overspray haze around letterforms, three to four small lime drips running down from letter bottoms.
  - **Background must change for every image.** Never reuse the same scene twice. Rotation pool: Saigon back-alley with motorbikes; Saigon rooftop wall morning; Saigon pho shop wall; Saigon construction-site hoarding; Tokyo Golden Gai alley wall; Tokyo back-alley vending machine; Kyoto temple side wall; Kyoto warehouse district. Default to Saigon. Track previously-used backgrounds in `working_files/banksy-backgrounds-used.md` (one line per slug + background description).
  - **People in background only**: distant silhouette or back view. Never face the camera. Never as focal subject.
  - **Photographic depth of field**: f/4 aperture means subject wall is sharp, background is in soft focus.
  - **No written language in the background.** The stencil text is the only language in frame. NO kanji, NO Vietnamese, NO English, NO Chinese, NO Korean — no readable words anywhere in the image except the stencil itself. This rules out bar signs, shop names, street signs, vending-machine product labels, license plates, posters, menus.
  - **Visual-only elements ARE welcome.** Paper lanterns (plain, no text on them), vending machines (anonymous face, no logos or labels), murals, geometric icons, pictogram-only signs, art on walls, plain shutters, motorbikes, bicycles, lights. These add atmosphere without breaking the no-language rule.
  - When prompting a scene that naturally includes signage (Saigon shophouses, Tokyo Golden Gai bars), explicitly strip it: "paper lanterns are plain red, no kanji," "vending machine face is anonymous, no product labels," "shop windows blank or shuttered."
  - If readable text appears in the generated image, regenerate.

- **Painted character** (Sam Flores mode): soft brushwork, dreamlike figure, warm tones with lime highlights.
- **Gallery streetwear** (Upper Playground mode): confident character composition, painterly, suitable for a gallery print.
- **Mural** (Saigon street): a wall in District 2 with a painted scene, tagged with lime, motorbike or scooter passing.
- **Pop Grid (Banksy × Warhol, EXCEPTION sub-mode, locked 2026-05-11):** A 2x2 grid of the same stencil silhouette sprayed in four pop colors (lime + 3 secondary brights: hot pink, electric cyan, warm gold) on a hyper-realistic Saigon wall. **Deliberately breaks the lime-only canon for special posts.** Use case: manifestos, brand-identity anchor pieces, launch announcements, anniversary or celebration moments. **Maximum 1 per quarter.** Subject must be a clean stencil silhouette (phin coffee dripper, boxing glove, laptop, scholarly warrior icon — never text). Reference example: `agents/designer/context/banksy-warhol-experiment.png`. Always: no readable language in frame, distant background figure silhouette only, hyper-realistic photo execution. Never default to this; use only when the post is special enough to earn the canon break.

### 3. PLACE / SCENE
Real streets, rooftops, and interiors of Saigon, Tokyo, or Kyoto. No characters as focal subject (figures may appear distant or as silhouettes).

**Use for:** Human pillar (default Saigon), Builder posts about Vietnam businesses (Xood, Skylight, Tictag, EWB, Nuen Motor, GAM), and any post where the place is the meaning.

**Mood:** grounded, atmospheric, lived-in.

**Examples:**
- Saigon rooftop pre-dawn, mural wall, banh mi cart steam, hand-painted shophouse sign.
- Tokyo Golden Gai alley with paper-lantern warmth, narrow back street, vending machine glow.
- Kyoto temple wood door, weathered paper screen, single bonsai on a step.

---

## Pillar to setting to style routing

| Pillar | Setting default | Style options |
|---|---|---|
| **Thinker** (tactical, AI education) | Global / neutral | EDITORIAL PHOTO or STREET ART |
| **Builder** (operator stories) | Global, **Vietnam when about Xood, Skylight, Tictag, EWB, Nuen Motor, GAM** | EDITORIAL PHOTO or PLACE/SCENE |
| **Human** (signature stories, identity) | Vietnam (default), Tokyo or Kyoto when relevant | PLACE/SCENE or STREET ART |

The Thinker pillar can flex into STREET ART for big-idea pieces (manifestos, predictions, myth busters). The Builder pillar can flex into STREET ART for identity-led builder pieces.

---

## Use of Dru's face

- **Tactical posts** (Thinker, Builder default): never.
- **Human pillar / signature story essays:** rarely, only when explicitly stated.
- **Existing photo assets:**
  - `dru-muay-thai-2019.jpg` (warrior identity, Muay Thai story)
  - `dru-portrait-laughing-2025.jpg` (warmth, Human moments)
  - `dru-portrait-serious-2025.jpg` (Thinker authority, sparingly)
  - `dru-speaking-zero-project-2026.jpg` (speaking moments, public stage)
- Default: no faces. Use scenes, objects, or street art figures.

## Muay Thai / fighter imagery

Sparingly. **Ask Dru before using.** Reserved for signature-story moments where the fight metaphor is earned. Not a recurring motif.

---

## Channel dimensions

| Content type | Aspect | Dimensions |
|---|---|---|
| Blog hero (drunguyen.me) | 16:9 | 1200×630 |
| LinkedIn long-form | 16:9 | 1200×630 |
| LinkedIn short-form | 16:9 | 1200×630 |
| Substack hero | 16:9 | 1200×630 |
| Instagram (future) | 1:1 | 1080×1080 |

OG image is always 1200×630 in brand palette.

---

## Text in images (hybrid policy, locked)

**Default: NO text inside generated images.** Gemini renders text unreliably. Quote cards, titles, and pull quotes go on a brand template in Figma or Canva, post-production, with locked typography and correct spelling.

**Exception: Banksy-style stencil hero pieces.** 1 to 3 words maximum, sprayed or stenciled on a wall. Examples: "DISCIPLINE.", "GRIT.", "CARE.", "DO THE WORK.". Accept that regen cycles are likely.

**Cap: 2 stencil-text images per week** (raised 2026-04-27 from the prior 1–2/month cap, to support the weekly 2 TEXT / 2 HUMAN / 2 SCENE image distribution rule).

When using stencil text, name it in the prompt: *"the word 'DISCIPLINE.' stenciled in lime green spray paint, sharp letterforms, Banksy stencil style."* Always include the period at the end of the word in the prompt.

## Weekly image style distribution (locked 2026-04-27)

Across the week's image set, the writer must produce a 2 / 2 / 2 distribution:
- **2 TEXT** images (STREET_ART stencil sub-mode, the exception above)
- **2 HUMAN** images (EDITORIAL_PHOTO with operator + tool, Apple keynote logic)
- **2 SCENARIO** images (PLACE_SCENE: Saigon, Tokyo, or Kyoto streets and rooftops)

**Style enum mapping (Dru's shorthand → style guide terms):**
- TEXT → STREET_ART (stencil sub-mode)
- HUMAN → EDITORIAL_PHOTO
- SCENARIO → PLACE_SCENE

The week typically has 5 to 7 unique-image pieces (1 blog/LinkedIn-long shared, 1 Substack essay hero, 3 LinkedIn shorts, occasional extras). The writer assigns one image_class per piece such that the week-wide tally hits 2/2/2 (with up to 2 flex pieces beyond).

---

## Image prompt format

Every prompt written by the writer (and saved to `image-prompt.md` or `image-prompts.json`) follows this shape:

```
subject: what is in the image, the topic not the medium
style: EDITORIAL_PHOTO | STREET_ART | PLACE_SCENE
mood: 2 to 3 emotional words
colors: [primary plain-English name, accent plain-English name]
composition: framing, light direction, focal point
references: [relevant ones from the visual references list]
text: only if stencil exception, otherwise omit
negative: [elements to avoid]
```

Always end every prompt with this fixed sentence:
> No watermarks, no Western corporate stock aesthetic, no glowing circuits or robot imagery anywhere in the image.

---

## Non-negotiables

- No glowing circuit boards, no neural-net brains, no humanoid robots, no robot-hand-handshakes.
- No stock team-meeting photos, no boardroom handshakes, no fake "diverse team smiling at laptop."
- No futuristic sci-fi tones, no neon cyberpunk, no Blade Runner palette.
- No purple, orange, or red dominant.
- Lime only on dark grounds. Never on white.
- No watermarks. No clip-art. No generic stock.
- Street art must feel hand-made. No "AI street art" cliché (vector-perfect, suspiciously clean, identical bricks). Imperfection is the signature.
- Women never face the camera as a saleable subject. Real people are operators or passers-by, not models.
- No culturally insensitive imagery (no "Oriental" tropes, no geisha stereotypes, no conical-hat clichés).

---

## Approval test (every image must pass before ship)

1. Does it look energetic and inspiring? (Corporate-sleepy = fail.)
2. Could this hang in an Upper Playground gallery and feel right?
3. Could it hang on a Saigon café wall and feel right?
4. Is the lime earning its showcase moment, not spraying everywhere?
5. Does it look like Dru's world, or could it belong to any AI thought leader?

A failing image gets regenerated, never shipped.

---

## Designer workflow snapshot

1. Read `image-prompt.md` (or `image-prompts.json`) written by the writer.
2. Read this style guide. Confirm the chosen style is appropriate for the pillar.
3. Generate via Gemini API using the prompt verbatim. Do not rewrite the prompt without writer agreement.
4. Run the approval test. Regenerate if any answer is "no."
5. For stencil-text exceptions, validate spelling on the rendered image. Regenerate until letters are correct.
6. Save to the topic folder per the agent's standard convention.
7. Notify writer if any prompt cannot be rendered cleanly after 3 regen attempts (the writer rewrites the prompt, not the designer).
