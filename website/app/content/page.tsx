import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/components/SocialIcons";

// One source of truth for profile URLs (components/SocialIcons.tsx).
const urlFor = (label: string) => SOCIAL_LINKS.find((s) => s.label === label)?.href ?? "#";

export const metadata: Metadata = {
  title: "Content | Dru Nguyen",
  description: "Three pillars: The Thinker, The Builder, The Human. Where to find Dru's content across LinkedIn, Substack, and Facebook.",
};

const channels = [
  { label: "LinkedIn", desc: "International + professional reach. Long-form, carousels, short-form video. 3 posts/week.", href: urlFor("LinkedIn") },
  { label: "Substack", desc: "The deep tier. One operator essay per week, Tuesday 8am Vietnam time.", href: urlFor("Substack") },
  { label: "Facebook", desc: "Local + human. Vietnamese-primary. Community posts, photo posts, English crosspost.", href: urlFor("Facebook") },
];

export default function ContentHub() {
  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1200px] px-5 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Content Hub
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
              One voice.
              <br />
              <span className="marker-highlight">Three channels.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="py-14" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 grid gap-6 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) as 0 | 1 | 2}>
              <Link href={c.href} target="_blank" rel="me noopener noreferrer" className="block h-full rounded-xl p-7 transition-shadow hover:shadow-lg" style={{ background: "var(--brand-jungle)", borderTop: "2px solid var(--brand-myrtle)" }}>
                <div className="section-label">Channel</div>
                <h3 className="mt-3 text-2xl font-extrabold" style={{ color: "var(--brand-white)" }}>{c.label}</h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{c.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
