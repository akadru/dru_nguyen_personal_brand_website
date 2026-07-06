// Source of truth for the "Built with AI" showcase.
// Every entry is a real tool, live in production, built with Claude.
// Append new builds to the top of BUILDS as they ship.

export type Build = {
  slug: string;
  name: string;
  context: string;       // eyebrow line, e.g. "Culture OS · Skylight"
  tagline: string;
  summary: string;
  url: string;           // live site — always public
  urlLabel: string;      // how the domain reads on the card
  image: string;         // /images/built/{slug}.jpg (1600×1000 screenshot)
  stack: string;         // "Claude · Next.js · ..." one-liner
  caseStudyHref?: string; // internal case-study page, when one exists
};

export const BUILDS: Build[] = [
  {
    slug: "eos-platform",
    name: "EOS Operating System",
    context: "Business OS · Xood & portfolio",
    tagline: "The full EOS practice, rebuilt as working software",
    summary:
      "The complete Entrepreneurial Operating System as a platform: quarterly rocks, scorecard metrics, weekly meetings, to-dos, issues, business plan, and org chart. It follows the real EOS rules and practices, and my actual team runs our real quarters on it. The demo is live with sample data, click anything.",
    url: "https://demo.drunguyen.me/",
    urlLabel: "demo.drunguyen.me",
    image: "/images/built/eos-platform.jpg",
    stack: "Built with Claude · Live demo, sample data",
  },
  {
    slug: "team-skylight",
    name: "Team Skylight",
    context: "Culture OS · Skylight Nha Trang",
    tagline: "One source of truth for the whole company",
    summary:
      "Skylight's culture and onboarding hub: mission, vision, core values, five performance standards, and eleven years of history in one place. Every new hire onboards from it, and the whole team uses it as the single source of information for how we work.",
    url: "https://teamskylight.com/",
    urlLabel: "teamskylight.com",
    image: "/images/built/team-skylight.jpg",
    stack: "Built with Claude · Next.js",
  },
  {
    slug: "drunguyen-site",
    name: "drunguyen.me",
    context: "Personal brand · This site",
    tagline: "The site you are reading right now",
    summary:
      "My personal brand site, designed, written, and coded with Claude: the research teardown, the layout system, the typography, the publishing workflow, and the deploy. It is the proof behind everything else on this page.",
    url: "https://www.drunguyen.me/",
    urlLabel: "www.drunguyen.me",
    image: "/images/built/personal-site.jpg",
    stack: "Built with Claude · Next.js · Supabase · Vercel",
    caseStudyHref: "/built-with-ai/drunguyen-site",
  },
];
