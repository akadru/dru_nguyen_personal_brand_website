import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export const metadata: Metadata = {
  title: "Dru Nguyen — Operator. AI Educator.",
  description:
    "Operator. Co-founder. Investor. AI-using operator becoming an educator. Skylight, Xood, Tictag, East West Brewery, Nuen Motor, GAM. Care. Discipline. Grit.",
  openGraph: {
    title: "Dru Nguyen — Operator. AI Educator.",
    description:
      "Operator. Co-founder. Investor. AI-using operator becoming an educator. Care. Discipline. Grit.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <SearchModal />
      </body>
    </html>
  );
}
