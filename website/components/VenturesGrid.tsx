import Image from "next/image";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";

/**
 * Bartlett-style flush grid · dark theme.
 * Borderless cards · image-top · light text · lime hover accents.
 * `wide: true` entries span the full row with horizontal layout (image left, copy right).
 */
export default function VenturesGrid({ columns = 3 }: { columns?: 2 | 3 }) {
  const grid = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-x-8 gap-y-14 ${grid}`}>
      {VENTURES.map((v) => {
        const linkProps = v.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        const isWide = !!v.wide;

        // ── Full-width variant ─────────────────────────────────────────────
        if (isWide) {
          return (
            <Link
              key={v.slug}
              href={v.href}
              {...linkProps}
              className={`group card-hover-accent flex flex-col pt-2 md:col-span-2 ${columns === 3 ? "lg:col-span-3" : ""}`}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.6fr_1fr] md:items-center md:gap-12">
                <div className="relative aspect-[32/12] w-full overflow-hidden md:aspect-[21/9]">
                  <Image
                    src={v.image}
                    alt={`${v.name}, ${v.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.02] group-hover:grayscale"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 md:flex-col md:items-stretch md:gap-6">
                  <div>
                    <div
                      className="text-[10px] font-extrabold uppercase"
                      style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}
                    >
                      {v.context}
                    </div>
                    <h3
                      className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl transition-colors group-hover:text-[var(--brand-lime)]"
                      style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}
                    >
                      {v.name}
                    </h3>
                    <p
                      className="mt-2 text-base italic md:text-lg"
                      style={{ color: "var(--brand-pastel)" }}
                    >
                      {v.tagline}
                    </p>
                  </div>
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--brand-lime)] group-hover:border-[var(--brand-lime)] group-hover:text-[var(--brand-jungle)]"
                    style={{ borderColor: "var(--brand-lime)", color: "var(--brand-lime)" }}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          );
        }

        // ── Standard card ──────────────────────────────────────────────────
        return (
          <Link
            key={v.slug}
            href={v.href}
            {...linkProps}
            className="group card-hover-accent flex flex-col pt-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={v.image}
                alt={`${v.name}, ${v.tagline}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.03] group-hover:grayscale"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <div
                  className="text-[10px] font-extrabold uppercase"
                  style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}
                >
                  {v.context}
                </div>
                <h3
                  className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl transition-colors group-hover:text-[var(--brand-lime)]"
                  style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}
                >
                  {v.name}
                </h3>
                <p
                  className="mt-2 text-base italic"
                  style={{ color: "var(--brand-pastel)" }}
                >
                  {v.tagline}
                </p>
              </div>
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--brand-lime)] group-hover:border-[var(--brand-lime)] group-hover:text-[var(--brand-jungle)]"
                style={{ borderColor: "var(--brand-lime)", color: "var(--brand-lime)" }}
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
