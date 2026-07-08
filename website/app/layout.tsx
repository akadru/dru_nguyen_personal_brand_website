import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — no runtime requests to Google.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import SiteMotion from "@/components/SiteMotion";

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
        width: 1200,
        height: 630,
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
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${bebas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteMotion />
        <Nav />
        {/* Content is offset right of the fixed sidebar nav on desktop */}
        <div className="flex min-h-full flex-1 flex-col lg:pl-[230px]">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SearchModal />
      </body>
    </html>
  );
}
