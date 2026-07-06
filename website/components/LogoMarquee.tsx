import Image from "next/image";
import { VENTURES } from "@/lib/ventures";

/**
 * Bartlett-style monochrome brand strip — slow infinite marquee of venture logos.
 * Logos render white via .logo-whiten / .logo-invert; ventures without a logo
 * file (EO) fall back to a typed wordmark so the strip stays complete.
 */
function Items({ suffix }: { suffix: string }) {
  return (
    <>
      {VENTURES.map((v) =>
        v.logo && v.logoChip ? (
          <span
            key={`${v.slug}${suffix}`}
            className="inline-flex items-center rounded-lg px-4 py-2"
            style={{ background: "var(--brand-white)" }}
          >
            <Image
              src={v.logo}
              alt={v.name}
              width={v.logoW}
              height={v.logoH}
              className="h-6 w-auto object-contain md:h-7"
            />
          </span>
        ) : v.logo ? (
          <Image
            key={`${v.slug}${suffix}`}
            src={v.logo}
            alt={v.name}
            width={v.logoW}
            height={v.logoH}
            className={`h-8 w-auto object-contain md:h-10 ${v.logoClass ?? ""}`}
          />
        ) : (
          <span
            key={`${v.slug}${suffix}`}
            className="whitespace-nowrap text-xl font-extrabold uppercase md:text-2xl"
            style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}
          >
            {v.tagline.includes("EO") ? "EO Vietnam" : v.name}
          </span>
        )
      )}
    </>
  );
}

export default function LogoMarquee() {
  return (
    <section
      aria-label="Dru's businesses and affiliations"
      className="overflow-hidden py-10 md:py-12"
      style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}
    >
      <div className="marquee-track flex w-max items-center gap-16 pr-16 md:gap-24 md:pr-24">
        <Items suffix="" />
        {/* duplicate for seamless loop, hidden from screen readers */}
        <div aria-hidden className="contents">
          <Items suffix="-dup" />
        </div>
      </div>
    </section>
  );
}
