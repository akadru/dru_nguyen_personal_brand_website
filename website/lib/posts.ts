// Source of truth for blog/post listings.
// Only PUBLISHED, live posts are listed here, never "Coming soon" placeholders.
// When a new post goes live, append it to the top of POSTS.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  channel: "Substack" | "LinkedIn" | "Carousel" | "Video";
  pillar: "Thinker" | "Builder" | "Human";
  topic: string;
  read: string;          // e.g. "4 MIN"
  date?: string;         // e.g. "26 APR 2026"
  image?: string;        // /images/blog/{slug}.webp
};

export const POSTS: Post[] = [
  {
    slug: "six-businesses-claude-quarterly-rocks",
    title: "How I run 6 businesses with Claude to achieve our quarterly rocks.",
    excerpt:
      "Six businesses. Eighteen rocks. Ninety days. The operating loop I built around Claude to actually move EOS rocks, with the two prompts I run every Sunday and every morning.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "6 MIN",
    date: "18 MAY 2026",
    image: "/images/blog/six-businesses-claude-quarterly-rocks.webp",
  },
  {
    slug: "nightclub-and-ai-adoption",
    title: "What running a nightclub taught me about AI adoption",
    excerpt:
      "Every AI rollout has the same room: 70% locked in, 20% pretending, 10% gone. The mistake operators make is trying to convert the 20%.",
    channel: "LinkedIn",
    pillar: "Builder",
    topic: "Hospitality",
    read: "4 MIN",
    date: "13 MAY 2026",
    image: "/images/blog/nightclub-and-ai-adoption.webp",
  },
  {
    slug: "eos-at-skylight",
    title: "Why I implemented EOS at Skylight (and what I'd do differently)",
    excerpt:
      "Nine months to buy-in. Six numbers on a wall. What I kept, what I'd cut today, and the single tweak that made EOS click in hospitality.",
    channel: "LinkedIn",
    pillar: "Builder",
    topic: "EOS",
    read: "5 MIN",
    date: "13 MAY 2026",
    image: "/images/blog/eos-at-skylight.webp",
  },
  {
    slug: "every-olympian-has-a-coach-yours-is-a-prompt-away",
    title: "Every Olympian has a coach. Here is why, and how to build yours.",
    excerpt:
      "Why elite performers always have a coach, and how five production-grade LLM prompts give operators most of the same advantage in 20 minutes a week.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "Coaching",
    read: "7 MIN",
    date: "30 APR 2026",
    image: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp",
  },
  {
    slug: "never-enter-a-meeting-blind-claude-design-prep",
    title: "Never enter a meeting blind. My 30-min Claude prep.",
    excerpt:
      "Anthropic shipped Claude Design on April 17. Here is the 30-minute prep I now run before every team meeting at Skylight and across my businesses, end to end.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "5 MIN",
    date: "29 APR 2026",
    image: "/images/blog/never-enter-a-meeting-blind-claude-design-prep.webp",
  },
  {
    slug: "how-i-run-multiple-businesses-with-claude",
    title: "How I run multiple businesses in 30 min/day with Claude",
    excerpt:
      "A real morning batch, four steps, and the prompt I copy-paste. Three hours of commercial work in 30 minutes, no AI hype, no fluff.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "4 MIN",
    date: "26 APR 2026",
    image: "/images/blog/how-i-run-multiple-businesses-with-claude.webp",
  },
];

export const FILTERS = [
  "All",
  "AI Operator",
  "EOS",
  "Hospitality",
  "Vietnam",
  "Mindset",
  "Leadership",
  "Family",
  "Frameworks",
  "Speaking",
  "Coaching",
  "Substack",
  "LinkedIn",
  "Carousel",
  "Video",
] as const;

export function postHref(p: Post): string {
  return `/blog/${p.slug}`;
}
