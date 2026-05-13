// Source of truth for blog/post listings.
// Only PUBLISHED, live posts are listed here — never "Coming soon" placeholders.
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
    slug: "claude-runs-xood-commercial",
    title: "How I run Xood's commercial team in 30 min/day with Claude",
    excerpt:
      "A real morning at Xood, a four-step batch, and the prompt I copy-paste. Three hours of work in 30 minutes — no AI hype, no fluff.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "4 MIN",
    date: "26 APR 2026",
    image: "/images/blog/claude-runs-xood-commercial.webp",
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
