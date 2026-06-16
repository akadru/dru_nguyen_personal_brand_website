#!/usr/bin/env node
// Build downloadable .zip prompt packs for every post.
//
// For each post that ships copy-paste prompts, this script:
//   1. Parses the post's prompts source (e.g. app/blog/{slug}/prompts.ts)
//      and extracts the {title, useWhen, body} triples.
//   2. Writes one .md file per prompt + a README.md into a temp dir.
//   3. Bundles the dir into website/public/downloads/{slug}-prompt-pack.zip.
//
// Run from the website/ directory:
//   node scripts/build-prompt-packs.mjs
//
// Add a new post by appending to POSTS below.

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBSITE_DIR = path.resolve(__dirname, "..");

const POSTS = [
  {
    slug: "every-olympian-has-a-coach-yours-is-a-prompt-away",
    title: "Every Olympian has a coach — 5 v3 Holtom prompts",
    source: "app/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompts.ts",
    blogUrl: "https://drunguyen.me/blog/every-olympian-has-a-coach-yours-is-a-prompt-away",
  },
];

function parsePrompts(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  // Match objects of shape { title: "...", useWhen: "...", body: `...` }
  // Bodies are backtick template literals possibly spanning many lines.
  const out = [];
  const re = /\{\s*title:\s*"([^"]+)",\s*useWhen:\s*"([^"]+)",\s*body:\s*`([\s\S]*?)`,?\s*\}/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({ title: m[1], useWhen: m[2], body: m[3] });
  }
  if (out.length === 0) {
    throw new Error(`No prompts parsed from ${filePath}`);
  }
  return out;
}

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildPack(post) {
  const sourcePath = path.join(WEBSITE_DIR, post.source);
  const prompts = parsePrompts(sourcePath);

  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), `pack-${post.slug}-`));
  const packDirName = `${post.slug}-prompt-pack`;
  const packDir = path.join(tmpRoot, packDirName);
  fs.mkdirSync(packDir, { recursive: true });

  // One .md per prompt, ordered.
  prompts.forEach((p, i) => {
    const n = String(i + 1).padStart(2, "0");
    const file = `${n}-${slugifyTitle(p.title)}.md`;
    const md = [
      `# ${p.title}`,
      ``,
      `**Use when:** ${p.useWhen}`,
      ``,
      `---`,
      ``,
      p.body.trim(),
      ``,
    ].join("\n");
    fs.writeFileSync(path.join(packDir, file), md, "utf8");
  });

  // README.
  const readme = [
    `# ${post.title}`,
    ``,
    `Copy-paste prompts from the post: ${post.blogUrl}`,
    ``,
    `## How to use`,
    ``,
    `1. Open Claude (or ChatGPT, or Gemini).`,
    `2. Open the prompt file you want to run.`,
    `3. Copy the whole body and paste it into a new conversation.`,
    `4. Answer the grounding questions one at a time. Be specific.`,
    ``,
    `## What's in this pack`,
    ``,
    ...prompts.map((p, i) => `- \`${String(i + 1).padStart(2, "0")}-${slugifyTitle(p.title)}.md\` — ${p.useWhen}`),
    ``,
    `## License`,
    ``,
    `Free to use. If you remix or republish, credit drunguyen.me.`,
    ``,
  ].join("\n");
  fs.writeFileSync(path.join(packDir, "README.md"), readme, "utf8");

  // Bundle.
  const outDir = path.join(WEBSITE_DIR, "public", "downloads");
  fs.mkdirSync(outDir, { recursive: true });
  const outZip = path.join(outDir, `${post.slug}-prompt-pack.zip`);
  if (fs.existsSync(outZip)) fs.unlinkSync(outZip);

  execSync(`zip -r "${outZip}" "${packDirName}"`, { cwd: tmpRoot, stdio: "inherit" });

  // Cleanup tmp.
  fs.rmSync(tmpRoot, { recursive: true, force: true });

  console.log(`\n  ✓ ${path.relative(WEBSITE_DIR, outZip)} (${prompts.length} prompts)\n`);
}

for (const post of POSTS) buildPack(post);
