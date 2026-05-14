export type Venture = {
  slug: string;
  name: string;
  tagline: string;     // 3-5 word descriptor under the name
  role: string;        // Dru's role
  context: string;     // industry · location · stage
  image: string;       // /images/ventures/{slug}.jpg
  href: string;        // external site or anchor
  external: boolean;   // open in new tab if true
  wide?: boolean;      // span full row in VenturesGrid (used for EO at the bottom)
};

// Order specified by Dru: Xood → Skylight → GAM → Tictag → East West → Nuen → EO
export const VENTURES: Venture[] = [
  {
    slug: "xood",
    name: "Xood",
    tagline: "Training data for the problems AI labs ignore",
    role: "Co-Founder & MD — Commercial & Community",
    context: "AI data services · Vietnam",
    image: "/images/ventures/xood.jpg",
    href: "/ventures/xood",
    external: false,
  },
  {
    slug: "skylight",
    name: "Skylight",
    tagline: "Nha Trang's rooftop flagship",
    role: "Founder",
    context: "Rooftop hospitality · Nha Trang · 10+ years",
    image: "/images/ventures/skylight.jpg",
    href: "/ventures/skylight",
    external: false,
  },
  {
    slug: "gam",
    name: "GAM Esports & Entertainment",
    tagline: "Esports champions. Real revenue.",
    role: "Investor / Advisor",
    context: "Esports · Entertainment",
    image: "/images/ventures/gam.jpg",
    href: "/ventures/gam",
    external: false,
  },
  {
    slug: "tictag",
    name: "Tictag",
    tagline: "Enterprise AI · Singapore HQ",
    role: "Advisor",
    context: "AI data services · Singapore",
    image: "/images/ventures/tictag.jpg",
    href: "/ventures/tictag",
    external: false,
  },
  {
    slug: "eastwest",
    name: "East West Brewing",
    tagline: "Craft brewery, made in Vietnam",
    role: "Investor / Advisor",
    context: "F&B · Vietnam",
    image: "/images/ventures/eastwest.jpg",
    href: "/ventures/eastwest",
    external: false,
  },
  {
    slug: "nuen",
    name: "Nuen Motor",
    tagline: "Vietnam's first premium electric moto",
    role: "Investor / Advisor",
    context: "Electric motorbikes · Vietnam",
    image: "/images/ventures/nuen.jpg",
    href: "/ventures/nuen",
    external: false,
  },
  {
    slug: "eo",
    name: "Entrepreneurs' Organization",
    tagline: "EO Vietnam · Member",
    role: "Member — EO Vietnam chapter",
    context: "Global peer network · EO Vietnam",
    image: "/images/ventures/eo.jpg",
    href: "/ventures/eo",
    external: false,
    wide: true,
  },
];

// Long-form details rendered on each /ventures/{slug} page.
export type VentureDetail = {
  slug: string;
  name: string;
  intro: string;            // 1-line headline-style intro
  story: string[];          // Dru's POV paragraphs in his voice
  facts: { label: string; value: string }[];
  externalUrl?: string;
  externalLabel?: string;
  heroImage: string;
};

export const VENTURE_DETAILS: Record<string, VentureDetail> = {
  xood: {
    slug: "xood",
    name: "Xood",
    intro: "Building accurate, unbiased training data for the long-tail problems most AI labs ignore.",
    story: [
      "Xood is what happens when an operator and a data scientist start a company together. Michael is the CEO; I run commercial and community out of Vietnam. We took the playbook Tictag sharpened in Singapore and adapted it for the markets and use cases the big labs don't bother with.",
      "Most companies don't lack AI. They lack the labelled, structured, real-world data to make AI useful in their context. That's the gap Xood works in — and that's where I spend most of my AI-using-operator energy.",
    ],
    facts: [
      { label: "Role", value: "Co-Founder · Managing Director — Commercial & Community" },
      { label: "Stage", value: "Live · Vietnam" },
      { label: "Industry", value: "AI data services" },
      { label: "Founded with", value: "Michael (CEO)" },
    ],
    heroImage: "/images/ventures/xood.jpg",
  },
  skylight: {
    slug: "skylight",
    name: "Skylight",
    intro: "A four-floor rooftop flagship in Nha Trang. Ten years in. Where I learned that structure is freedom.",
    story: [
      "Skylight is where I learned how to run a business. Built from zero in 2014 after I moved back from SF/LA, it has been a rooftop bar, a wedding venue, a beach club, a kitchen, and a stage for some of the best DJ nights in Vietnam. Ten years of staff turnover, ten years of margin pressure, ten years of late nights in the office reading the next week's schedule.",
      "It is also where EOS finally clicked for me. The day we put a scoreboard on the wall behind the bar, staff started owning the number. That single visible system taught me more about operating than any book.",
    ],
    facts: [
      { label: "Role", value: "Founder" },
      { label: "Founded", value: "2014" },
      { label: "Industry", value: "Rooftop hospitality" },
      { label: "Location", value: "Nha Trang, Vietnam" },
    ],
    externalUrl: "https://skylightnhatrang.com/",
    externalLabel: "skylightnhatrang.com",
    heroImage: "/images/ventures/skylight.jpg",
  },
  gam: {
    slug: "gam",
    name: "GAM Esports & Entertainment",
    intro: "Investing in the show — esports, live entertainment, and the next generation of Vietnamese fan culture.",
    story: [
      "GAM is led by my brother TK. When he asked me to come in as an investor and advisor, the answer was easy: I know the operator, and I know the seriousness with which he runs a team. GAM is one of the top esports organisations in Vietnam, with a championship trophy cabinet most operators would kill for.",
      "What I bring is the operator lens — scorecards, accountability charts, the parts of the business that don't make highlight reels. What I take away is a constant reminder that great teams beat clever strategy, every time.",
    ],
    facts: [
      { label: "Role", value: "Investor / Advisor" },
      { label: "CEO", value: "TK Nguyen" },
      { label: "Industry", value: "Esports · Live entertainment" },
      { label: "Why I'm in", value: "World-class team, operator-led" },
    ],
    externalUrl: "https://gam.gg/",
    externalLabel: "gam.gg",
    heroImage: "/images/ventures/gam.jpg",
  },
  tictag: {
    slug: "tictag",
    name: "Tictag",
    intro: "Southeast Asia's leading AI & data solutions company. The DNA source for Xood.",
    story: [
      "Tictag is the company that taught me how the modern data-services business works. Based in Singapore, working across enterprise AI for clients in finance, logistics, and government, Tictag has been quietly building the data backbone Southeast Asia's AI ecosystem runs on.",
      "When we started Xood, the question wasn't 'can we sell data services in Vietnam?' It was 'how do we adapt what Tictag already does well to the market and use cases that need it most?' My advisory role at Tictag is the open channel between the two companies.",
    ],
    facts: [
      { label: "Role", value: "Advisor" },
      { label: "HQ", value: "Singapore" },
      { label: "Industry", value: "AI · Data solutions" },
      { label: "Connection to Xood", value: "Playbook origin" },
    ],
    externalUrl: "https://www.tictag.io/en/",
    externalLabel: "tictag.io",
    heroImage: "/images/ventures/tictag.jpg",
  },
  eastwest: {
    slug: "eastwest",
    name: "East West Brewing",
    intro: "Craft brewery, made in Vietnam. Beer that survives the Vietnam heat and the Vietnam consumer.",
    story: [
      "East West is one of Vietnam's most recognisable craft breweries — kitchen, taproom, and brewery in Saigon, with a national distribution footprint that's hard to build in F&B here. I came in as an investor because the bar I run on F&B is the one East West built.",
      "I'm not a brewer. What I bring is the operator lens — sales discipline, distribution rhythms, and the financial structure that lets a hospitality business survive its first eight years. What I take is a masterclass in product-led F&B, and beer for the Skylight team.",
    ],
    facts: [
      { label: "Role", value: "Investor / Advisor" },
      { label: "HQ", value: "Ho Chi Minh City" },
      { label: "Industry", value: "F&B · Craft beer" },
      { label: "Why I'm in", value: "Product I'd drink at my own bar" },
    ],
    externalUrl: "https://eastwestbrewing.vn/",
    externalLabel: "eastwestbrewing.vn",
    heroImage: "/images/ventures/eastwest.jpg",
  },
  nuen: {
    slug: "nuen",
    name: "Nuen Motor",
    intro: "Vietnam's first premium electric motorbike. Designed for the country that lives on two wheels.",
    story: [
      "Nuen Motor is the bet that Vietnam can build a premium hardware brand — not just license one. The NI-5 isn't an e-bike or a scooter. It's a real motorbike, designed and engineered for the streets it'll ride on.",
      "I'm in as an investor because the team is what makes hardware companies work — designers and engineers who've shipped, and operators who understand that the hardest part isn't building the first bike, it's building the hundredth one identically.",
    ],
    facts: [
      { label: "Role", value: "Investor / Advisor" },
      { label: "Product", value: "NI-5 · Premium electric motorbike" },
      { label: "Industry", value: "EV mobility · Hardware" },
      { label: "Why I'm in", value: "Premium hardware, made in Vietnam" },
    ],
    externalUrl: "https://nuenmoto.com/en",
    externalLabel: "nuenmoto.com",
    heroImage: "/images/ventures/nuen.jpg",
  },
  eo: {
    slug: "eo",
    name: "Entrepreneurs' Organization",
    intro: "EO Vietnam member. The forum where I think with my peers — eight founders, one room, every month.",
    story: [
      "EO is the operator network I trust most. It's a global peer organisation for founders running businesses of meaningful scale, and I'm a member of the EO Vietnam chapter. The part I show up for is the forum — a confidential monthly meeting with seven other Vietnamese founders who've signed up to be brutally honest with each other.",
      "Half the decisions I've made about Xood, Skylight, and the advisory portfolio were workshopped in that room first. If you're an operator running a real business in Vietnam, joining EO Vietnam was the highest-leverage move I ever made for my own thinking.",
    ],
    facts: [
      { label: "Membership", value: "EO Vietnam · Member" },
      { label: "Format", value: "Monthly forum · 8 founders, confidential" },
      { label: "Global org", value: "Entrepreneurs' Organization (EO)" },
      { label: "Why it matters", value: "Best decision lab I'm in" },
    ],
    externalUrl: "https://eonetwork.org/",
    externalLabel: "eonetwork.org",
    heroImage: "/images/ventures/eo.jpg",
  },
};

