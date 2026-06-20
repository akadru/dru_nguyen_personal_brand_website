# Banksy Canon Example

Visible reference image for the STREET_ART stencil sub-mode locked 2026-04-30.

**Image:** [banksy-canon-example.png](banksy-canon-example.png)

## What this image demonstrates

- **Hyper-realistic photography** (not illustrated): Sony A7IV / 35mm prime / f/4 / dusk natural light. Photographic depth of field down the alley.
- **Military stencil typography**: block sans-serif, all caps, geometric monospace-feeling letterforms, visible stencil bridge gaps, solid block period at end.
- **Lime green (#ADFB49)** as the only saturated accent in frame.
- **Real wall**: weathered Japanese wood panelling with peeling paint, water staining, scuffs.
- **Realistic spray detail**: visible overspray haze, drips running down from letter bottoms.
- **Background variety**: Tokyo Golden Gai alley with plain paper lanterns (no kanji), anonymous vending machine glow at the alley end, weathered wood panelling, wet cobblestone, distant figure silhouette walking away. NOT a repeat of the Saigon alley used in the GET A COACH post.
- **People in background only**: single silhouette walking away, never facing camera.
- **No readable language in frame** except the SHIP IT. stencil. Visual atmosphere is OK (lanterns, vending machine, lights), readable language is NOT.

## Hard rule, locked 2026-05-11: no written language in the background

The stencil text is the only readable language allowed in the frame. NO kanji, NO Vietnamese, NO English, NO Chinese, NO Korean — no readable words anywhere in the image except the stencil itself. This rules out bar signs, shop names, street signs, vending-machine product labels, license plates, posters, menus, door numbers.

**Visual-only elements ARE welcome.** Paper lanterns (plain, no text), vending machines (anonymous face, no logos), murals, geometric icons, pictogram-only signs, art on walls, plain shutters, motorbikes, bicycles, lights. These add atmosphere without breaking the no-language rule.

When prompting a scene that naturally includes signage (Saigon shophouses, Tokyo Golden Gai bars), explicitly strip it in the prompt: "paper lanterns are plain red, no kanji," "vending machine face is anonymous, no product labels," "shop windows blank or shuttered."

If readable text appears in the generated image, regenerate.

## Variation rule

Every Banksy stencil image must have a different background. See `working_files/banksy-backgrounds-used.md` for the rotation log.

## When to reference this image

The writer's image prompt for any STREET_ART stencil entry should produce a photo that:
- Could sit next to this canon example without looking out of place.
- Differs in background scene (the rotation rule).
- Matches in: typography style, lime accent, hyper-realistic photographic look, realistic spray detail, single-silhouette-background-figure rule.

If a generated image doesn't pass that "could sit next to this without looking out of place" test, regenerate.

## Prompt that produced this image

Reusable as a template, swap the stencil text and background scene:

```
A 16:9 hyper-realistic photograph, 1200x630. Shot on Sony A7IV with 35mm prime lens, f/4, natural light at dusk, ISO 400.

Subject: [BACKGROUND SCENE]. On a [WALL TYPE], the phrase '[STENCIL TEXT].' freshly sprayed in lime green spray paint (#ADFB49) through a real cardboard military stencil.

CRITICAL FONT REQUIREMENT: Authentic military or industrial stencil typeface (Allerta Stencil, Stardos Stencil, or Trade Gothic Bold cut as a stencil). Block sans-serif, all caps, geometric, monospace-feeling letterforms. Visible stencil bridge gaps. Solid block period at end. NO hand-painted brushwork. NO calligraphic strokes.

Realistic spray detail: visible overspray haze around letterforms, two or three small lime drips running down from letter bottoms.

Background context (in soft focus from f/4 aperture): [BACKGROUND DETAIL], a single distant figure walking away in silhouette.

Style: hyper-realistic documentary street photography. Mood: bold, observant, industrial-precise, photojournalistic.

Colors: dominant [SCENE COLORS], with lime green as the only saturated accent.

Spell every letter correctly. Include the period at the end.

Avoid: illustrated or painterly look, cartoon, hand-drawn, AI-art over-smoothness, hand-painted brushwork, graffiti tag, decorative typography, people facing camera, AI iconography, robots, neon cyberpunk, Blade Runner palette.

No watermarks, no Western corporate stock aesthetic, no glowing circuits or robot imagery anywhere in the image.
```
