import Image from "next/image";
import Link from "next/link";
import { POSTS, postHref } from "@/lib/posts";

/**
 * Bartlett "News & Stories" 3-up grid.
 * Top 3 published posts (or upcoming if not enough published).
 */
export default function NewsGrid({ count = 3 }: { count?: number }) {
  const items = [
    ...POSTS.filter((p) => p.published),
    ...POSTS.filter((p) => !p.published),
  ].slice(0, count);

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <Link key={p.slug} href={postHref(p)} className="group flex flex-col">
          <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: "var(--brand-jungle)" }}>
            {p.published && p.image ? (
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase"
                  style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.22em" }}
                >
                  Coming Soon
                </span>
              </div>
            )}
          </div>
          <div className="mt-5">
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
            >
              The {p.pillar} · {p.topic}
            </div>
            <h3
              className="mt-3 text-xl font-extrabold leading-snug md:text-2xl transition-colors group-hover:text-[var(--brand-myrtle)]"
              style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}
            >
              {p.title}
            </h3>
            <div
              className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase"
              style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}
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
