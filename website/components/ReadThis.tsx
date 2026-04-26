"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { POSTS, FILTERS, postHref } from "@/lib/posts";

export default function ReadThis() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(() => {
    if (active === "All") return POSTS;
    return POSTS.filter((p) => p.topic === active || p.channel === active);
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
                color: "var(--brand-jungle)",
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
            key={p.slug + i}
            href={postHref(p)}
            className="group block h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-xl"
            style={{ borderColor: "var(--brand-pastel)", background: "#fff", opacity: p.published ? 1 : 0.92 }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ background: "var(--brand-jungle)" }}>
              {p.published && p.image ? (
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              ) : (
                <div className="absolute right-5 top-5 h-1 w-12" style={{ background: "var(--brand-lime)" }} />
              )}
              <div className="absolute inset-0 flex items-end justify-between p-5" style={{ background: p.published ? "linear-gradient(to top, rgba(10,27,36,0.85), rgba(10,27,36,0.15) 60%, transparent)" : "transparent" }}>
                <span className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                  {p.published ? p.channel : `${p.channel} · Coming Soon`}
                </span>
                <span className="text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em" }}>
                  {p.read}
                </span>
              </div>
              {p.published && (
                <div className="absolute left-5 top-5 rounded-full px-2 py-1 text-[10px] font-extrabold uppercase" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
                  Latest
                </div>
              )}
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
