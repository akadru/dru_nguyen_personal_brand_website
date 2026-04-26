export type Post = {
  title: string;
  kind: "Substack" | "LinkedIn" | "Carousel" | "Video";
  pillar: "Thinker" | "Builder" | "Human";
  topic: string;
  read: string;
  href: string;
};

export const POSTS: Post[] = [
  { title: "How I use Claude to run Xood's commercial team in 30 minutes a day", kind: "Substack", pillar: "Thinker", topic: "AI Operator", read: "6 MIN", href: "/blog" },
  { title: "What running a nightclub taught me about AI adoption", kind: "LinkedIn", pillar: "Builder", topic: "Hospitality", read: "4 MIN", href: "/blog" },
  { title: "EOS applied to a pre-revenue startup — the 7-component teardown", kind: "Carousel", pillar: "Thinker", topic: "EOS", read: "5 MIN", href: "/blog" },
  { title: "I quit my family's factory. My dad cried.", kind: "LinkedIn", pillar: "Human", topic: "Family", read: "3 MIN", href: "/blog" },
  { title: "The self-check before hard conversations", kind: "Substack", pillar: "Human", topic: "Leadership", read: "7 MIN", href: "/blog" },
  { title: "From AI is a tool to AI is a workflow — the mindset shift", kind: "Video", pillar: "Thinker", topic: "AI Operator", read: "1 MIN", href: "/blog" },
  { title: "Why I implemented EOS at Skylight (and what I'd do differently)", kind: "LinkedIn", pillar: "Builder", topic: "EOS", read: "6 MIN", href: "/blog" },
  { title: "Building in Vietnam — the cross-industry pattern recognition", kind: "Substack", pillar: "Builder", topic: "Vietnam", read: "9 MIN", href: "/blog" },
  { title: "The Muay Thai fight that changed how I make hard calls", kind: "LinkedIn", pillar: "Human", topic: "Mindset", read: "4 MIN", href: "/blog" },
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
