import type { Metadata } from "next";
import type { ReactNode } from "react";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact | Dru Nguyen",
  description:
    "Book Dru Nguyen to speak, or get in touch about advisory, media and partnerships. Replies within 48 hours.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
