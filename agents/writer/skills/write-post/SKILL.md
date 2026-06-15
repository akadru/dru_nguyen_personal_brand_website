# write-post Skill

## When to use this skill
Produce a long-form blog post (1,000 to 2,000 words) for drunguyen.me that includes one or more copy-paste prompts the reader will paste into Claude / ChatGPT / Gemini for their own situation.

This is the canonical workflow for "prompt-led" posts on the site. Examples: every-olympian-has-a-coach-yours-is-a-prompt-away, six-businesses-claude-quarterly-rocks (now: 3 companies and 2 boards), never-enter-a-meeting-blind-claude-design-prep.

## Inputs the writer needs
- **Pillar** (Thinker / Builder / Human) — from the content calendar
- **Topic + 1-paragraph brief** — from Dru
- **The prompt(s)** to include in the post — or "design them" if Dru hasn't given them yet
- **Calendar slot** — date for the publish

## Process

### Step 1 — Pick the figure category (per pillar + rotation rule)
Read `working_files/figure-rotation-log.md` (create on first run). Identify the figure categories used in the last 3 posts.

The 5 figure categories are:
- (A) Operators / entrepreneurs / business leaders
- (B) Scientists / inventors
- (C) Military leaders / strategists
- (D) Athletes / coaches
- (E) Artists / cultural figures

**Pillar-tied defaults (use when rotation does not constrain):**
- **Thinker** (tactical, AI education) → B or C
- **Builder** (operator stories) → A
- **Human** (signature stories, identity) → D or E

**Hard rule:** no two consecutive posts pull from the same category. If pillar default is blocked by rotation, pick the second-best category that fits.

### Step 2 — Pick the specific figure
Inside the chosen category, pick one real person (or one family / one team) whose story has a clean parallel to the post's principle.

Criteria:
- Real names, real dates, real numbers
- Clear setup → conflict → resolution arc
- The lesson translates to the operator audience
- Not over-used in 2026 thought-leadership content (avoid Steve Jobs, Elon Musk, Bezos clichés unless the angle is sharp and new)

### Step 3 — Draft the 7-Beat Story Arc intro
Follow the rule in `agents/writer/context/persona.md`. The 7 beats:

1. **THE FELT QUESTION** (1 sentence — names reader's pain as a question)
2. **THE STORY** (3-6 short paragraphs — the figure's setup, conflict, resolution)
3. **THE PRINCIPLE** (1-2 sentences — the lesson, plain)
4. **"TAKEAWAY THIS WEEK." HINGE** (heading)
5. **APPLY TO THE READER** (1 short paragraph — "If you [X], you can [Y] by [Z]")
6. **DRU'S APPLICATION** (1 paragraph — "How I [verb] is by [method] using [tool]")
7. **THE HANDOFF** (1 line — "Here is the prompt I drop in every [cadence]")

Worked example: see `agents/writer/context/clarity-examples.md`.

### Step 4 — Draft the prompt(s) in v3 Holtom format (mandatory)
**Every prompt is v3 Holtom format. No exceptions.** Target: 150 to 220 lines per prompt.

Required sections in this exact order:
1. `=== ROLE ===` — 3 paragraphs ending with explicit "You are NOT here to..." statements
2. `=== BEHAVIOR CONTRACT ===` — 6 to 8 numbered rules, with at least 2 bad-vs-good examples and 4-5 named traps
3. `=== GROUNDING ===` — 4 to 6 questions, ONE AT A TIME with wait gates, plus a Vague/Specific example
4. `=== THE INPUTS ===` — what the reader pastes
5. `=== THE TASK, ONE QUESTION AT A TIME ===` — Q1, Q2, Q3 + anti-trap callout
6. `=== THE [WORK NOUN] ===` — the analysis steps
7. `=== OUTPUT ARTIFACT ===` — markdown brief schema, generic placeholders `[Company name]`, `[Rock]`, `[Owner]`
8. `=== TEACHING LINE ===` — one sentence ending "That is the difference."

**Generic templates rule:** ROLE / GROUNDING / INPUTS / OUTPUT use descriptive placeholders. Grounding asks the reader for THEIR specifics. Bad/good examples in BEHAVIOR CONTRACT can keep Dru-named (Xood, Skylight, anh Linh) as illustrative.

**Accordion wrapper on the page:** every prompt block is collapsed by default inside a `<details>` element with a `<summary>` showing "Show full prompt · N lines · click to expand". Match the implementation in the Rocks or Olympian post.

See `persona.md` "Every copy-paste prompt uses the v3 Holtom format" section for the full spec.

### Step 5 — Draft §05 ("Three things that did not work")
Optional but highly recommended for prompt-led posts. Names the dead ends Dru tried first. Reinforces credibility. 3 short numbered items.

### Step 6 — Quality checks (do all before saving)
- ✅ No em dashes anywhere in the post
- ✅ No semicolons in the body prose
- ✅ First person throughout the narrative
- ✅ Felt question opens the post
- ✅ Famous-person story arrives by paragraph 2
- ✅ Principle is plain, not metaphor-on-metaphor
- ✅ "Takeaway this week" hinge is present
- ✅ Reader-apply paragraph speaks directly to the reader
- ✅ Dru's application is concrete and names a tool
- ✅ Prompts are generic templates (not hardcoded with Dru's businesses)
- ✅ Figure category respects rotation log
- ✅ §05 ("Three things that did not work") if appropriate
- ✅ No corporate jargon ("leverage", "synergies", "unlock")
- ✅ Voice markers max 1 to 2 ("Knowledge with application is wisdom", "Care. Discipline. Grit")

### Step 7 — Save to website
- `content/topics/{slug}/blog.md` — markdown draft
- `content/topics/{slug}/image-prompt.md` — image brief for the Designer
- `website/app/blog/{slug}/page.tsx` — published Next.js page (only when calendar status moves to `ready`)

**Mandatory at the end of every page.tsx:** the DRU. signature block. Copy verbatim from `persona.md` ("The DRU. signature is the official end-of-post logo") section. Position: after the CTA and hashtags, before the closing `</section>` tag. No exceptions across topics or pillars.

Reference implementation: `website/app/blog/six-businesses-claude-quarterly-rocks/page.tsx`.

### Step 8 — Update rotation log
After saving, append to `working_files/figure-rotation-log.md`:
```
| Date | Slug | Pillar | Figure category | Figure name |
```

### Step 9 — Update calendar status
Move calendar entry from `draft` → `ready` so the Designer can pick up the image-prompt.

## Output
- A complete `page.tsx` ready for the dev server
- `blog.md` + `image-prompt.md` in content/topics/{slug}/
- Updated `figure-rotation-log.md`
- Calendar entry status updated

## Hard rules (do not violate)
- Never publish (no `git push`) — that is the web-developer's job
- Never lead with Dru's moment — lead with the universal story
- Never hardcode Dru's businesses inside a prompt block
- Never write a long-form post without §01 and §05 paint the pain
- Always run all 7 quality checks before saving

## See also
- `agents/writer/context/persona.md` — voice, rules, the 7-Beat Story Arc
- `agents/writer/context/clarity-examples.md` — worked before/after
- Memory: `prompt_templates_and_pain_narrative.md`, `business_portfolio_framing.md`
