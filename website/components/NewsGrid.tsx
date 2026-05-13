import Image from "next/image";
import Link from "next/link";
import { POSTS, postHref } from "@/lib/posts";

/**
 * News & Stories · dark theme.
 * 0 → null · 1 → featured 2-col · 2+ → 3-up grid
 */
export default function NewsGrid({ count = 3 }: { count?: number }) {
  const items = POSTS.slice(0, count);
  if (items.length === 0) return null;

  if (items.length === 1) {
    const p = items[0];
    return (
      <Link href={postHref(p)} className="group grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
        <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ background: "var(--brand-jungle)" }}>
          {p.image && (
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          <div
            className="absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.22em" }}
          >
            Latest
          </div>
        </div>
        <div>
          <div
            className="text-[10px] font-extrabold uppercase"
            style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}
          >
            The {p.pillar} · {p.topic} · {p.read} READ{p.date && <> · {p.date}</>}
          </div>
          <h3
            className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl transition-colors group-hover:text-[var(--brand-lime)]"
            style={{ color: "var(--brand-white)", letterSpacing: "-0.03em" }}
          >
            {p.title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
            {p.excerpt}
          </p>
          <span
            className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider"
            style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}
          >
            Read the post
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--brand-lime)] group-hover:border-[var(--brand-lime)] group-hover:text-[var(--brand-jungle)]"
              style={{ borderColor: "var(--brand-lime)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7" /><path d="M8 7h9v9" />
              </svg>
            </span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <Link key={p.slug} href={postHref(p)} className="group card-hover-accent flex flex-col pt-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
            {p.image && (
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            )}
          </div>
          <div className="mt-5">
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}
            >
              The {p.pillar} · {p.topic}
            </div>
            <h3
              className="mt-3 text-xl font-extrabold leading-snug md:text-2xl transition-colors group-hover:text-[var(--brand-lime)]"
              style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}
            >
              {p.title}
            </h3>
            <div
              className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase"
              style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
            >
              {p.channel} · {p.read}
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
