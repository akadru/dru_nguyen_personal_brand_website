import Image from "next/image";
import Link from "next/link";
import { VENTURES } from "@/lib/ventures";

/**
 * Bartlett-style venture wall · full-bleed duotone image tiles.
 * Name + context overlaid on a bottom gradient · B&W by default, color on hover.
 * `wide: true` entries span the full row with a cinematic 21:9 crop.
 */
export default function VenturesGrid({ columns = 3 }: { columns?: 2 | 3 }) {
  const grid = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-4 ${grid}`}>
      {VENTURES.map((v) => {
        const linkProps = v.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        const isWide = !!v.wide;

        return (
          <Link
            key={v.slug}
            href={v.href}
            {...linkProps}
            className={`group card-hover-accent relative block overflow-hidden ${
              isWide
                ? `aspect-[16/10] md:col-span-2 md:aspect-[21/9] ${columns === 3 ? "lg:col-span-3" : ""}`
                : "aspect-[16/10] md:aspect-[4/5]"
            }`}
          >
            <Image
              src={v.image}
              alt={`${v.name}, ${v.tagline}`}
              fill
              sizes={
                isWide
                  ? "(max-width: 768px) 100vw, 100vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              }
              className="img-duotone object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(10,27,36,0.1) 30%, rgba(10,27,36,0.55) 70%, rgba(10,27,36,0.92) 100%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div
                className="text-[10px] font-extrabold uppercase"
                style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}
              >
                {v.context}
              </div>
              {v.logo ? (
                <h3 className="mt-4" style={{ lineHeight: 0 }}>
                  <Image
                    src={v.logo}
                    alt={v.name}
                    width={v.logoW}
                    height={v.logoH}
                    className={`w-auto object-contain ${v.logoClass ?? ""} ${isWide ? "h-14 md:h-20" : "h-10 md:h-12"}`}
                  />
                  <span className="sr-only">{v.name}</span>
                </h3>
              ) : (
                <h3
                  className="mt-2 font-extrabold uppercase leading-none transition-colors group-hover:text-[var(--brand-lime)]"
                  style={{
                    fontSize: isWide ? "clamp(32px, 4.5vw, 64px)" : "clamp(28px, 3vw, 40px)",
                    letterSpacing: "-0.02em",
                    color: "var(--brand-white)",
                  }}
                >
                  {v.name.replace(/\.$/, "")}
                </h3>
              )}
              <p className="mt-3 text-sm italic md:text-base" style={{ color: "var(--brand-pastel)" }}>
                {v.tagline}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
