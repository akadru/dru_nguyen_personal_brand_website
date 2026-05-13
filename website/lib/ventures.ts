export type Venture = {
  slug: string;
  name: string;
  tagline: string;     // 3-5 word descriptor under the name
  role: string;        // Dru's role
  context: string;     // industry · location · stage
  image: string;       // /images/ventures/{slug}.jpg
  href: string;        // external site or anchor
  external: boolean;   // open in new tab if true
};

// Order specified by Dru: Xood → Skylight → GAM → Tictag → East West → Nuen
export const VENTURES: Venture[] = [
  {
    slug: "xood",
    name: "Xood",
    tagline: "Operator-grade AI data",
    role: "Co-Founder & MD — Commercial & Community",
    context: "AI data services · Vietnam",
    image: "/images/ventures/xood.jpg",
    href: "/xood",
    external: false,
  },
  {
    slug: "skylight",
    name: "Skylight",
    tagline: "Nha Trang's rooftop flagship",
    role: "Founder",
    context: "Rooftop hospitality · Nha Trang · 10+ years",
    image: "/images/ventures/skylight.jpg",
    href: "https://skylightnhatrang.com/",
    external: true,
  },
  {
    slug: "gam",
    name: "GAM Esports & Entertainment",
    tagline: "Investing in the show",
    role: "Investor / Advisor",
    context: "Esports · Entertainment",
    image: "/images/ventures/gam.jpg",
    href: "https://gam.gg/",
    external: true,
  },
  {
    slug: "tictag",
    name: "Tictag",
    tagline: "Southeast Asia's data backbone",
    role: "Advisor",
    context: "AI data services · Singapore",
    image: "/images/ventures/tictag.jpg",
    href: "https://www.tictag.io/en/",
    external: true,
  },
  {
    slug: "eastwest",
    name: "East West Brewing",
    tagline: "Craft brewery, made in Vietnam",
    role: "Investor / Advisor",
    context: "F&B · Vietnam",
    image: "/images/ventures/eastwest.jpg",
    href: "https://eastwestbrewing.vn/",
    external: true,
  },
  {
    slug: "nuen",
    name: "Nuen Motor",
    tagline: "Vietnam's first premium electric moto",
    role: "Investor / Advisor",
    context: "Electric motorbikes · Vietnam",
    image: "/images/ventures/nuen.jpg",
    href: "https://nuenmoto.com/en",
    external: true,
  },
];
