import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are committed in app/fonts (latin subsets, SIL Open Font License),
// so builds never depend on reaching Google Fonts. Outfit and Plus Jakarta
// Sans are variable fonts: one file covers the whole weight range.
const outfit = localFont({
  src: [{ path: "./fonts/outfit-latin.woff2", weight: "400 800", style: "normal" }],
  variable: "--font-outfit",
  display: "swap",
});
const jakarta = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans-latin.woff2", weight: "300 800", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-italic-latin.woff2", weight: "300 800", style: "italic" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
const bebas = localFont({
  src: [{ path: "./fonts/bebas-neue-latin.woff2", weight: "400", style: "normal" }],
  variable: "--font-bebas",
  display: "swap",
});
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import SiteMotion from "@/components/SiteMotion";
import PageCurtain from "@/components/PageCurtain";
import { SOCIAL_LINKS } from "@/components/SocialIcons";

// Tells Google and AI search that the site and these profiles are one person.
const PERSON_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dru Nguyen",
  url: "https://www.drunguyen.me",
  image: "https://www.drunguyen.me/images/dru-portrait-hero.jpg",
  jobTitle: "Operator, Builder, Experimenter",
  homeLocation: { "@type": "Place", name: "Ho Chi Minh City, Vietnam" },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
});

// First visit per browser session: show the short intro. Runs before first
// paint so repeat visits never flash it; no-JS visitors never see it.
const INTRO_SCRIPT = `try{var d=document.documentElement;if(!sessionStorage.getItem("dru-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.setAttribute("data-intro","");sessionStorage.setItem("dru-intro","1");setTimeout(function(){d.removeAttribute("data-intro")},1700)}}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drunguyen.me"),
  title: "Dru Nguyen, Operator. AI Experimenter.",
  description:
    "Operator. Co-founder. Investor. AI-using operator becoming an educator. Skylight, Xood, Tictag, East West Brewery, Nuen Motor, GAM. Care. Discipline. Grit.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dru Nguyen, Operator. AI Experimenter.",
    description:
      "Operator. Co-founder. Investor. AI-using operator becoming an educator. Care. Discipline. Grit.",
    type: "website",
    url: "https://www.drunguyen.me",
    siteName: "Dru Nguyen",
    images: [
      {
        url: "/og-home.jpg",
        width: 3840,
        height: 2016,
        alt: "Dru Nguyen — Operator, Builder, Experimenter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dru Nguyen, Operator. AI Experimenter.",
    description:
      "Operator. Co-founder. Investor. AI-using operator becoming an educator. Care. Discipline. Grit.",
    images: ["/og-home.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${bebas.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: PERSON_JSON_LD }} />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="intro-overlay" aria-hidden>
          <span className="intro-overlay__mark">
            DRU<b>.</b>
          </span>
          <span className="intro-overlay__line" />
        </div>
        <SiteMotion />
        <Nav />
        {/* Content is offset right of the fixed sidebar nav on desktop */}
        <div className="flex min-h-full flex-1 flex-col lg:pl-[230px]">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SearchModal />
        <PageCurtain />
        <div className="film-grain" aria-hidden />
      </body>
    </html>
  );
}
