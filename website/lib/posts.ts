// Source of truth for blog/post listings.
// The web-developer agent appends new published posts here (top of `POSTS`).
// Items with `published: true` deep-link to /blog/{slug}; "Coming soon" items don't.

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
  published: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "every-olympian-has-a-coach-yours-is-a-prompt-away",
    title: "Every Olympian has a coach. Yours is a prompt away.",
    excerpt:
      "Every Olympian has a coach. So do every CEO and operator playing for real. Five copy-paste prompts that turn your LLM into yours.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "Coaching",
    read: "6 MIN",
    date: "30 APR 2026",
    image: "/images/blog/every-olympian-has-a-coach-yours-is-a-prompt-away.webp",
    published: true,
  },
  {
    slug: "never-enter-a-meeting-blind-claude-design-prep",
    title: "Never enter a meeting blind. My 30-min Claude prep.",
    excerpt:
      "Anthropic shipped Claude Design on April 17. Here is the 30-minute prep I now run before every team meeting at Xood and Skylight, end to end.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "5 MIN",
    date: "29 APR 2026",
    image: "/images/blog/never-enter-a-meeting-blind-claude-design-prep.webp",
    published: true,
  },
  {
    slug: "claude-runs-xood-commercial",
    title: "How I run Xood's commercial team in 30 min/day with Claude",
    excerpt:
      "A real morning at Xood, a four-step batch, and the prompt I copy-paste. Three hours of work in 30 minutes, no AI hype, no fluff.",
    channel: "LinkedIn",
    pillar: "Thinker",
    topic: "AI Operator",
    read: "4 MIN",
    date: "26 APR 2026",
    image: "/images/blog/claude-runs-xood-commercial.webp",
    published: true,
  },
  // Upcoming, Writer + Designer + Web Developer queue:
  { slug: "nightclub-and-ai-adoption", title: "What running a nightclub taught me about AI adoption", excerpt: "Skylight at 2am taught me more about who adopts AI than any case study.", channel: "LinkedIn", pillar: "Builder", topic: "Hospitality", read: "4 MIN", published: false },
  { slug: "eos-pre-revenue-teardown", title: "EOS applied to a pre-revenue startup: the 7-component teardown", excerpt: "How EOS holds up before product-market fit. What we kept, what we cut at Xood.", channel: "Carousel", pillar: "Thinker", topic: "EOS", read: "5 MIN", published: false },
  { slug: "factory-conversation", title: "I quit my family's factory. My dad cried.", excerpt: "The hardest conversation of my life, and what I'd say differently today.", channel: "LinkedIn", pillar: "Human", topic: "Family", read: "3 MIN", published: false },
  { slug: "self-check-hard-conversations", title: "The self-check before hard conversations", excerpt: "Four-Layer Communication Review. What to ask yourself before you speak.", channel: "Substack", pillar: "Human", topic: "Leadership", read: "7 MIN", published: false },
  { slug: "ai-tool-vs-workflow", title: "From AI is a tool to AI is a workflow: the mindset shift", excerpt: "The senior operators don't treat AI as a person. They treat it as infrastructure.", channel: "Video", pillar: "Thinker", topic: "AI Operator", read: "1 MIN", published: false },
  { slug: "skylight-eos", title: "Why I implemented EOS at Skylight (and what I'd do differently)", excerpt: "Nine months before the team fully bought in. The frame I'd use if I started today.", channel: "LinkedIn", pillar: "Builder", topic: "EOS", read: "6 MIN", published: false },
  { slug: "building-in-vietnam", title: "Building in Vietnam: the cross-industry pattern recognition", excerpt: "F&B, AI services, entertainment. Where the patterns transfer and where they break.", channel: "Substack", pillar: "Builder", topic: "Vietnam", read: "9 MIN", published: false },
  { slug: "muay-thai-hard-calls", title: "The Muay Thai fight that changed how I make hard calls", excerpt: "Pissed myself backstage. Won by TKO. The decision rule I use ever since.", channel: "LinkedIn", pillar: "Human", topic: "Mindset", read: "4 MIN", published: false },
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
  return p.published ? `/blog/${p.slug}` : "/blog";
}
