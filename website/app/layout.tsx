import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dru Nguyen — Operator. AI Educator.",
    template: "%s — Dru Nguyen",
  },
  description:
    "Operator. Co-founder. Investor. AI-using operator becoming an educator. Skylight, Xood, Tictag, East West Brewery, Nuen Motor, GAM. Care. Discipline. Grit.",
  openGraph: {
    title: "Dru Nguyen — Operator. AI Educator.",
    description:
      "Operator. Co-founder. Investor. AI-using operator becoming an educator. Care. Discipline. Grit.",
    type: "website",
    images: [{ url: "/images/dru-hero.jpg", width: 2000, height: 1125, alt: "Dru Nguyen on stage at Zero Project Conference 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dru Nguyen — Operator. AI Educator.",
    description: "AI-using operator becoming an educator. Care. Discipline. Grit.",
    images: ["/images/dru-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <SearchModal />
      </body>
    </html>
  );
}
