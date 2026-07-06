"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { POSTS, postHref } from "@/lib/posts";

/**
 * "What's New" feed — GaryVee-style category filter pills over a card grid,
 * on a white content surface. Pills use jungle/myrtle only (never lime text
 * on white — locked contrast rule).
 */
export default function ContentFeed({ limit }: { limit?: number }) {
  const [active, setActive] = useState("All");

  const topics = useMemo(() => {
    const t = Array.from(new Set(POSTS.map((p) => p.topic)));
    return ["All", ...t];
  }, []);

  const items = useMemo(() => {
    const filtered = active === "All" ? POSTS : POSTS.filter((p) => p.topic === active);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter posts by topic">
        <span
          className="mr-2 text-[10px] font-extrabold uppercase"
          style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
        >
          Filter
        </span>
        {topics.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              aria-pressed={isActive}
              className="rounded-full border px-4 py-2 text-[11px] font-bold uppercase transition-colors"
              style={{
                letterSpacing: "0.12em",
                background: isActive ? "var(--brand-jungle)" : "transparent",
                color: isActive ? "var(--brand-white)" : "var(--brand-jungle)",
                borderColor: isActive ? "var(--brand-jungle)" : "rgba(10,27,36,0.25)",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Card grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link key={p.slug} href={postHref(p)} className="group flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ background: "rgba(10,27,36,0.06)" }}>
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              )}
            </div>
            <div
              className="mt-5 text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
            >
              {p.topic} · {p.read} READ
            </div>
            <h3
              className="display-heading mt-3 transition-colors group-hover:text-[var(--brand-myrtle)]"
              style={{ fontSize: "clamp(24px, 2.2vw, 32px)", color: "var(--brand-jungle)" }}
            >
              {p.title}
            </h3>
            <div
              className="mt-3 text-xs font-semibold uppercase"
              style={{ color: "var(--brand-body)", letterSpacing: "0.08em", opacity: 0.7 }}
            >
              By Dru Nguyen{p.date && <> · {p.date}</>}
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-12 text-base" style={{ color: "var(--brand-body)" }}>
          Nothing under this topic yet. It is coming.
        </p>
      )}
    </div>
  );
}
