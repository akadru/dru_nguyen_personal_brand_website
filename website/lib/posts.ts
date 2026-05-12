// Source of truth for blog/post listings.
// Only PUBLISHED, live posts are listed here — never "Coming soon" placeholders.
// When a new post goes live, the web-developer agent appends it to the top of POSTS.

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
