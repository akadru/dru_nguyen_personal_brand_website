"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Post = {
  title: string;
  kind: "Substack" | "LinkedIn" | "Carousel" | "Video";
  pillar: "Thinker" | "Builder" | "Human";
  topic: string;
  read: string;
  href: string;
};

const POSTS: Post[] = [
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

const FILTERS = [
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

export default function ReadThis() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(() => {
    if (active === "All") return POSTS;
    return POSTS.filter((p) => p.topic === active || p.kind === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase transition-colors"
              style={{
                background: isActive ? "var(--brand-lime)" : "transparent",
                color: isActive ? "var(--brand-jungle)" : "var(--brand-jungle)",
                border: isActive ? "1px solid var(--brand-lime)" : "1px solid var(--brand-pastel)",
                letterSpacing: "0.12em",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Link
            key={p.title + i}
            href={p.href}
            className="group block h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-xl"
            style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}
          >
            <div className="relative aspect-[16/10] w-full" style={{ background: "var(--brand-jungle)" }}>
              <div className="absolute inset-0 flex items-end justify-between p-5">
                <span className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                  {p.kind}
                </span>
                <span className="text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em" }}>
                  {p.read}
                </span>
              </div>
              <div className="absolute right-5 top-5 h-1 w-12" style={{ background: "var(--brand-lime)" }} />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>
                The {p.pillar} · {p.topic}
              </div>
              <h3 className="mt-3 text-xl font-extrabold leading-snug transition-colors group-hover:text-[var(--brand-myrtle)]" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
