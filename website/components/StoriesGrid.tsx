import Image from "next/image";
import Link from "next/link";
import { STORIES } from "@/lib/stories";

/**
 * Key Stories grid · dark theme.
 * Image-led tall cards · gradient overlay · light text below.
 */
export default function StoriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {STORIES.map((s) => (
        <Link
          key={s.slug}
          href={`/scholarly-warrior#${s.slug}`}
          className="group card-hover-accent flex flex-col pt-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={s.image}
              alt={`${s.title}, ${s.lesson}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(10,27,36,0) 30%, rgba(10,27,36,0.92) 100%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div
                className="text-[10px] font-extrabold uppercase"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}
              >
                {s.year}
              </div>
              <h3
                className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl"
                style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
            </div>
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                {s.hook}
              </p>
              <p
                className="mt-3 text-sm italic transition-colors group-hover:text-[var(--brand-lime)]"
                style={{ color: "var(--brand-lime)" }}
              >
                {s.lesson}
              </p>
            </div>
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--brand-lime)] group-hover:border-[var(--brand-lime)] group-hover:text-[var(--brand-jungle)]"
              style={{ borderColor: "var(--brand-lime)", color: "var(--brand-lime)" }}
              aria-hidden
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
