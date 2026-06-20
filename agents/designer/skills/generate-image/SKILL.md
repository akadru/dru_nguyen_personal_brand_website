---
name: generate-image
description: Generates hero images for Dru Nguyen's blog posts, LinkedIn long-form, LinkedIn shorts, and Substack essays. Loads each topic's image-prompt.md (authored by the writer), validates against the designer style guide, calls the Gemini API, and writes an optimised WebP to the topic folder. Never rewrites the writer's creative brief.
allowed-tools: Read Write Bash Glob Grep Edit
---

# Generate Image, Designer Skill

Your job: turn the writer's `image-prompt.md` files into shipped hero images that match Dru's visual identity defined in `agents/designer/context/style-guide.md`. The writer owns creative. You own technical execution and brand compliance.

Engine: `gemini-3.1-flash-image-preview` via the Gemini REST API. Source-image conditioning supported when a relevant photo lives in `content/source-material/images/` or `working_files/`.

---

## Before you start

Read these in full. Every run. No memory shortcuts.

1. **Designer style guide:** `agents/designer/context/style-guide.md`. The full source of truth. Palette, three styles, lime rules, references, face policy, text policy, non-negotiables, approval test.
2. **Designer persona:** `agents/designer/context/persona.md`.

If a writer prompt conflicts with the style guide, follow the writer prompt and flag the conflict. Never silently overwrite intent.

---

## Inputs

- **Direct call:** caller passes a topic `slug` (folder name in `content/topics/`). Generate for that slug.
- **Autonomous mode:** no slug given. Run Step 1 to discover.

---

## Step 1: Discover topics needing images (autonomous mode only)

Skip if a slug was passed in.

```bash
TOPICS_DIR="content/topics"
for slug in $(ls "$TOPICS_DIR"); do
  dir="$TOPICS_DIR/$slug"
  [ -d "$dir" ] || continue
  has_content=0; has_prompts=0; has_hero=0
  ls "$dir"/{blog.md,linkedin-short.md,substack.md} >/dev/null 2>&1 && has_content=1
  [ -f "$dir/image-prompts.json" ] && has_prompts=1
  ls "$dir"/*-hero.webp >/dev/null 2>&1 && has_hero=1
  if [ $has_content -eq 1 ] && [ $has_prompts -eq 1 ] && [ $has_hero -eq 0 ]; then
    echo "$slug"
  fi
done
```

Rules:
- Folder has content but no `image-prompts.json`: stop and report. Writer must run first. Never invent prompts.
- No slugs need images: log `No topics waiting for images.` and exit.

---

## Step 2: Load and validate `image-prompts.json`

**Format change locked 2026-04-27:** the writer now emits multi-entry `image-prompts.json` per topic folder (replaces the older single `image-prompt.md`). One entry per content file in the folder that needs an image.

JSON schema (validate against this):

```json
{
  "topic": "<one-sentence>",
  "week_of": "YYYY-MM-DD",
  "phrases": ["<quotable phrase>", "..."],
  "images": [
    {
      "file": "blog.md",
      "slug": "<url-slug>",
      "image_class": "TEXT | HUMAN | SCENARIO",
      "style": "STREET_ART | EDITORIAL_PHOTO | PLACE_SCENE",
      "sub_mode": "stencil | apple_keynote | saigon_alley | tokyo_alley | kyoto_temple | painted_character | mural",
      "concept": "<one to two sentences>",
      "text": "<1 to 3 word phrase ending with period, TEXT entries only>",
      "aspect_ratio": "16:9",
      "dimensions": "1200x630",
      "prompt": "<full prompt>"
    }
  ]
}
```

**Style enum mapping (Dru's shorthand → style guide):**
- TEXT → STREET_ART, stencil sub-mode (1 to 3 word stencil text)
- HUMAN → EDITORIAL_PHOTO, apple_keynote sub-mode (no faces unless approved)
- SCENARIO → PLACE_SCENE (Saigon / Tokyo / Kyoto)

**Weekly distribution check:** if you have visibility across the week's pipeline (multiple topic folders), tally `image_class` across all of them. **Expected weekly tally: 2 TEXT + 2 HUMAN + 2 SCENARIO** (with up to 2 flex pieces above baseline). If the week's tally is off, flag for the writer; do not silently rebalance.

**TEXT-specific validation:**
- `text` field is present, 1 to 3 words, ends with a period
- `sub_mode` is `stencil`
- This is one of at most 2 TEXT images per week
- The `text` value must be a phrase from the `phrases` array (no inventing new text)

Validate every field:

| Check | Rule | Action if failing |
|---|---|---|
| `style` value | One of `EDITORIAL_PHOTO`, `STREET_ART`, `PLACE_SCENE` | Map old enums (`HUMAN→EDITORIAL_PHOTO`, `SCENE→PLACE_SCENE`, `TEXT→STREET_ART`), patch and log |
| `colors` | Plain English names from the brand palette only (jungle, lime, myrtle, tea, pastel, white) | Translate hex codes, patch and log. Flag non-brand colors. |
| `text` field | Present only if `style = STREET_ART` and stencil exception is intended | If text on non-STREET_ART, pause and ask Dru |
| Stencil text length | 1 to 3 words max, ends with a period | Patch period, flag if longer |
| Lime usage | One dominant lime moment per image (border, spray accent, OR highlight). Never lime everywhere. Never lime on white. | Patch composition clause to single lime moment, flag if conflict |
| Pillar fit | Style matches pillar per the routing table in the style guide | Flag mismatch (do not auto-correct) |
| Face usage | Tactical posts (Thinker/Builder default): never. Human pillar: only if writer explicitly approved in prompt or blog frontmatter. | If face cued without approval, pause and ask Dru |
| Muay Thai imagery | Sparingly, only when fight metaphor is earned | Pause and ask Dru |
| `negative` minimum set | No robots, no glowing circuits, no neural nets, no neon cyberpunk, no stock team meetings, no humanoid AI, no purple/orange/red dominant, no watermarks, no clip-art, no Oriental tropes | Patch in any missing entries |

**Patch policy:**
- Structural fixes (enum mapping, missing tail sentence, hex-to-name translation, missing standard negatives): patch in place. Log every patch in the final report.
- Creative concerns (concept feels off, wrong tone, conflicts with style guide intent): never rewrite. Generate as written, flag the concern in the final report.

---

## Step 3: Compose the Gemini text prompt

Combine the writer's fields into a single coherent prompt. Template:

```
A {aspect_label} image, {dimensions}.

Subject: {subject}

Style: {style_description}.
{references_clause}

Mood: {mood}.
Colors: dominant {primary_color}, with {accent_color} used as {accent_usage_clause}.
Composition: {composition}.

{text_clause}

Avoid: {negative_list}.

No watermarks, no Western corporate stock aesthetic, no glowing circuits or robot imagery anywhere in the image.
```

The final tail sentence is fixed. It comes verbatim from the style guide's "Image prompt format" section.

### `style_description` (lookup from style guide)

- **EDITORIAL_PHOTO:** "matte editorial photography in the style of an Apple keynote still, single dramatic light source, hero subject center-frame, restrained and cinematic. Mood is focused, calm, premium, considered."
- **STREET_ART:** "hand-painted street art in the style of Banksy stencil work, Sam Flores painterly characters, and Upper Playground gallery streetwear, fused with Saigon-Tokyo-Kyoto urban fabric. Visible brushwork, imperfect edges, hand-made feel. Mood is bold, energetic, coaching, confident, hand-painted." Then append the relevant sub-mode: stencil (high-contrast monochrome with single lime accent, sharp edges), painted character (soft brushwork, dreamlike figure, warm tones with lime highlights), gallery streetwear (confident character composition, gallery-print quality), or mural (a wall in Saigon's District 2 with a painted scene, tagged with lime, motorbike or scooter passing).
- **PLACE_SCENE:** "atmospheric documentary photography of a real place, lived-in detail, available natural or paper-lantern light, no styled-stock feel. Mood is grounded, atmospheric, lived-in." Then append the location specific: Saigon rooftop pre-dawn / mural wall / banh mi cart steam / hand-painted shophouse sign, OR Tokyo Golden Gai alley / paper-lantern warmth / vending machine glow, OR Kyoto temple wood door / weathered paper screen / single bonsai on a step.

### `accent_usage_clause`

For lime accents, pick ONE in priority order based on the writer's composition cue:
1. "a thick stencil border framing the composition"
2. "a single fresh spray-paint tag accent, like a fresh mark on a wall"
3. "a subtle highlight on one screen line, sticky note, or object"

For non-lime accents, name the colour directly (e.g. "myrtle in the deeper shadows").

### `references_clause`

If the writer named references: `Visual references: {comma-separated references}.`
If none: omit.

### `text_clause`

If `text` field is present (stencil exception only):
> Render the word "{TEXT}" stenciled in lime green spray paint, sharp letterforms, Banksy stencil style. Spell every letter correctly. Include the period at the end.

If absent:
> No text, letters, numbers, or symbols anywhere in the image.

### Aspect mapping

| Channel inferred from folder | Aspect | Dimensions |
|---|---|---|
| Default (blog hero, LinkedIn long, LinkedIn short, Substack hero) | 16:9 | 1200×630 |
| Instagram (folder hint or explicit override) | 1:1 | 1080×1080 |

OG image is always 1200×630. Default 16:9 unless an Instagram cue exists.

---

## Step 4: Resolve a source image (optional conditioning)

Scan `content/source-material/images/` and `working_files/` for a filename whose stem contains the slug or a keyword from `subject` (e.g. "muay-thai", "speaking", "portrait").

Use the source image ONLY if all three are true:
1. A match is found.
2. `style = EDITORIAL_PHOTO`.
3. The writer explicitly approved using Dru's face for this post (note in `image-prompt.md` or `blog.md` frontmatter).

If any of the three fails, run text-only.

Per the style guide face policy: never on tactical posts. Rare on Human pillar. The four available photo assets are reserved for specific signature moments (`dru-muay-thai-2019.jpg`, `dru-portrait-laughing-2025.jpg`, `dru-portrait-serious-2025.jpg`, `dru-speaking-zero-project-2026.jpg`).

---

## Step 5: Generate via Gemini API (loop per entry)

The writer's `image-prompts.json` may contain multiple entries (one per content file). Loop through them. Generate each independently. Run sequentially, not in parallel (rate limits + Gemini occasional flakiness on rapid-fire).

```bash
GEMINI_API_KEY=$(grep -h 'GEMINI_API_KEY' .env.local .env 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'")
SLUG="<slug>"
mkdir -p working_files

# Iterate every entry in image-prompts.json
jq -c '.images[]' "content/topics/${SLUG}/image-prompts.json" | while read entry; do
  FILE=$(echo "$entry" | jq -r '.file')
  STEM="${FILE%.md}"  # blog.md → blog
  PROMPT=$(echo "$entry" | jq -r '.prompt')
  RAW_PATH="working_files/${SLUG}-${STEM}-raw.png"

  PAYLOAD=$(jq -n --arg prompt "$PROMPT" '{
    contents: [{ parts: [{ text: $prompt }] }],
    generationConfig: { responseModalities: ["IMAGE"] }
  }')

  curl -s -X POST \
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${GEMINI_API_KEY}" \
    -H "Content-Type: application/json" \
    -d "$PAYLOAD" \
    | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' \
    | base64 --decode > "$RAW_PATH"

  # Archive raw
  cp "$RAW_PATH" "content/topics/${SLUG}/${STEM}-hero-original.png"

  # Verify non-empty
  [ -s "$RAW_PATH" ] || echo "WARN empty output for $FILE, retry needed"
done
```

**Source image conditioning** (face usage only, see Step 4): for HUMAN entries with explicit face approval, run the with-source-image variant (load `$SOURCE_PATH`, base64 encode, include as second part in the payload). Default text-only.

**If any entry returns empty:** re-run that single entry's curl without the base64 decode and pipe through `jq .` to surface the API error. Shorten the prompt for that entry and retry once. Skip and flag if still empty after retry.

**Output naming convention (multi-image):**
- `working_files/<slug>-<stem>-raw.png` (intermediate raw, e.g. `2026-04-29-thinker-claude-design-meeting-prep-blog-raw.png`)
- `content/topics/<slug>/<stem>-hero-original.png` (archive, e.g. `blog-hero-original.png`)
- `content/topics/<slug>/<stem>-hero.webp` (final, e.g. `blog-hero.webp`, `linkedin-short-hero.webp`)

Where `<stem>` is the content filename without `.md` extension.

---

## Step 6: Approval test

Inspect the generated image. Answer all five questions from the style guide:

1. Does it look energetic and inspiring? (Corporate-sleepy = fail.)
2. Could this hang in an Upper Playground gallery and feel right?
3. Could it hang on a Saigon café wall and feel right?
4. Is the lime earning its showcase moment, not spraying everywhere?
5. Does it look like Dru's world, or could it belong to any AI thought leader?

If any answer is "no":
- **Retry 1:** sharpen the prompt. Replace abstract nouns with physical objects. Tighten the accent_usage_clause to one specific element.
- **Retry 2:** ask Dru to confirm direction before regenerating.
- **Stop after 3 attempts.** Flag for the writer to rewrite the prompt. The designer never rewrites creative.

For stencil text exceptions: confirm spelling is correct. Regen up to 3 times. If still misspelled, flag for the writer to rewrite without text.

A failing image is never shipped.

---

## Step 7: Optimise to WebP (loop per entry)

```bash
jq -c '.images[]' "content/topics/${SLUG}/image-prompts.json" | while read entry; do
  FILE=$(echo "$entry" | jq -r '.file')
  STEM="${FILE%.md}"
  ASPECT=$(echo "$entry" | jq -r '.aspect_ratio')
  SOURCE="working_files/${SLUG}-${STEM}-raw.png"
  OUTPUT="content/topics/${SLUG}/${STEM}-hero.webp"

  [ -s "$SOURCE" ] || { echo "SKIP no raw for $FILE"; continue; }

  if [ "$ASPECT" = "1:1" ]; then
    W=1080; H=1080; MAX_KB=150
  else
    W=1200; H=630; MAX_KB=200
  fi

  for Q in 82 72 65; do
    ffmpeg -y -i "$SOURCE" \
      -vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}" \
      -q:v $Q "$OUTPUT" 2>/dev/null
    SIZE_KB=$(du -k "$OUTPUT" | cut -f1)
    if [ "$SIZE_KB" -le "$MAX_KB" ]; then
      echo "PASS ${SIZE_KB} KB → $OUTPUT"
      break
    fi
  done

  if [ "$SIZE_KB" -gt "$MAX_KB" ]; then
    echo "WARN ${SIZE_KB} KB exceeds ${MAX_KB} KB at q65, using as-is"
  fi
done
```

Output convention (multi-image):
- `content/topics/<slug>/<stem>-hero.webp` (final per content file)
- `content/topics/<slug>/<stem>-hero-original.png` (archive)

Where `<stem>` is the content file name without `.md` (e.g. `blog`, `linkedin-short`, `substack`).

---

## Step 8: Log and report

Append to `agents/designer/output/run-log.md` (create if missing):

```
| YYYY-MM-DD HH:MM | <slug> | <style> | <aspect> | <size KB> | ✅ or ⚠️ |
```

Final report shape:

```
✅ Image generated: <slug>
  • Style: <EDITORIAL_PHOTO | STREET_ART | PLACE_SCENE>
  • Sub-mode (if STREET_ART): <stencil | painted character | gallery streetwear | mural>
  • Aspect: <16:9 | 1:1>
  • Size: <KB>
  • Source image used: <path or none>
  • Approval test: <pass / which question failed / retry count>
  • Patches applied to image-prompt.md: <list or none>
  • Flags for Dru: <creative concerns, face/Muay Thai pauses, or none>
  • Output: content/topics/<slug>/<slug>-hero.webp
  • Archive: content/topics/<slug>/<slug>-hero-original.png
```

---

## Error handling

| Situation | Action |
|---|---|
| `GEMINI_API_KEY` not set | Stop. Log ❌ to run-log. Ask Dru. |
| API call returns empty | Re-run with `jq .` to surface error. Shorten prompt. Retry once. Log ❌ if still failing. |
| Image is too generic / corporate-sleepy | Replace abstract nouns with specific physical objects. Retry Step 5. |
| Unwanted text or watermark | Strengthen negative: "No text, letters, numbers, symbols, or watermarks anywhere in the image." Retry. |
| Stencil text misspelled | Regen up to 3 times. If still wrong, flag writer to rewrite without text. |
| Lime sprayed everywhere | Tighten accent_usage_clause to one specific element. Regen. |
| Robot or sci-fi tone leaked in | Strengthen negative list. Replace abstract AI nouns ("intelligence", "the future") with physical operator objects (a laptop, a notebook, a phin coffee). |
| Face appears without approval | Stop and ask Dru before continuing. |
| `jq` not found | `brew install jq` |
| `ffmpeg` not found | `brew install ffmpeg` |

---

## Hard rules

- Never rewrite the writer's creative brief. Patch structure only.
- Never generate Dru's face on a tactical post. Never on Human pillar without explicit writer approval.
- Never ship an image that fails the approval test. Regenerate or flag.
- Never use raw hex codes in the Gemini prompt. Plain English names only.
- Never include text inside the image except the stencil exception (max 1 to 2 per month).
- Never use lime on a white ground.
- Never publish or push. The web-developer ships.
