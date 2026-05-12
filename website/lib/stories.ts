export type Story = {
  slug: string;
  year: string;
  title: string;
  hook: string;          // 1-line teaser
  lesson: string;        // the underlined lesson
  image: string;         // /images/stories/{slug}.jpg
};

export const STORIES: Story[] = [
  {
    slug: "dj-origin",
    year: "2007 · Saigon",
    title: "The DJ Origin",
    hook: "Dad caught me ditching school at 17. First time I ever saw him cry. His punishment? He bought me a DJ setup.",
    lesson: "You don't need everyone. You need believers and standards. Share first.",
    image: "/images/stories/dj-origin.jpg",
  },
  {
    slug: "factory",
    year: "2014 · Hanoi",
    title: "The Factory",
    hook: "Quit the family steel manufacturing business. The hardest conversation of my life with my dad.",
    lesson: "You can't build your future on someone else's blueprint.",
    image: "/images/stories/factory.jpg",
  },
  {
    slug: "fight",
    year: "2019 · Da Nang",
    title: "The Fight",
    hook: "Pissed myself backstage from nerves. Won by TKO in round two.",
    lesson: "Fear doesn't go away. You just stop letting it decide for you.",
    image: "/images/stories/fight.jpg",
  },
  {
    slug: "eos",
    year: "2021 · Nha Trang",
    title: "The EOS Transformation",
    hook: "Ran businesses in chaos and blamed the team. Read Traction with my brother TK. Implemented EOS.",
    lesson: "Structure is freedom. When the system holds the standard, the people lead.",
    image: "/images/stories/eos.jpg",
  },
  {
    slug: "move-to-vietnam",
    year: "2014 · Nha Trang",
    title: "The Move to Vietnam",
    hook: "At 27, left SF/LA for Nha Trang with no Vietnamese, no friends. Built Skylight. Reconnected with my dad after 22 years apart.",
    lesson: "The most uncertain chapters often become the most important ones.",
    image: "/images/stories/move-to-vietnam.jpg",
  },
];
