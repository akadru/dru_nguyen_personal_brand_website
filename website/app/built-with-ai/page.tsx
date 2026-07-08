import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BUILDS } from "@/lib/builds";

export const metadata: Metadata = {
  title: "Built with AI | Dru Nguyen",
  description:
    "Real tools built with Claude and used by real teams: an EOS platform, Skylight's culture hub, and this site itself. All live, all clickable.",
  alternates: { canonical: "/built-with-ai" },
  openGraph: {
    title: "Built with AI | Dru Nguyen",
    description:
      "Real tools built with Claude and used by real teams. All live, all clickable.",
    url: "https://www.drunguyen.me/built-with-ai",
  },
};

export default function BuiltWithAiPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20">
          <Reveal>
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}
            >
              Built with AI
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-heading mt-6" style={{ fontSize: "clamp(52px, 8.5vw, 124px)" }}>
              Real tools.
              <br />
              <span className="marker-highlight">Live in production.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Everything on this page was built with Claude and is used by real teams every week.
              No mockups, no vaporware: every link opens the actual product.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUILDS — white content surface, one large card per build */}
      <section className="py-14 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-20 px-5 md:gap-28 md:px-10">
          {BUILDS.map((b, i) => (
            <Reveal key={b.slug}>
              <article
                className={`grid items-center gap-8 md:gap-14 ${
                  i % 2 === 1 ? "md:grid-cols-[1fr_1.3fr]" : "md:grid-cols-[1.3fr_1fr]"
                }`}
              >
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block aspect-[16/10] overflow-hidden border ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                  style={{ borderColor: "rgba(10,27,36,0.15)" }}
                  aria-label={`Open ${b.name} live`}
                >
                  <Image
                    src={b.image}
                    alt={`Screenshot of ${b.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div
                    className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase"
                    style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.18em" }}
                  >
                    Live
                  </div>
                </a>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div
                    className="text-[10px] font-extrabold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}
                  >
                    {b.context}
                  </div>
                  <h2
                    className="display-heading mt-3"
                    style={{ fontSize: "clamp(36px, 4vw, 60px)", color: "var(--brand-jungle)" }}
                  >
                    {b.name}
                  </h2>
                  <p className="mt-2 text-lg font-semibold" style={{ color: "var(--brand-myrtle)" }}>
                    {b.tagline}
                  </p>
                  <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--brand-body)" }}>
                    {b.summary}
                  </p>
                  <div
                    className="mt-5 text-[11px] font-bold uppercase"
                    style={{ color: "var(--brand-myrtle)", letterSpacing: "0.14em" }}
                  >
                    {b.stack}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                      style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
                    >
                      Visit {b.urlLabel} <span aria-hidden>↗</span>
                    </a>
                    {b.caseStudyHref && (
                      <Link
                        href={b.caseStudyHref}
                        className="editorial-link text-sm font-bold uppercase tracking-wider"
                        style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}
                      >
                        Read the case study →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* More to come */}
          <Reveal>
            <div
              className="border-t pt-10 text-center"
              style={{ borderColor: "rgba(10,27,36,0.12)" }}
            >
              <p className="text-lg font-semibold" style={{ color: "var(--brand-jungle)" }}>
                More builds ship every quarter. The newest ones land here first.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA CLOSER */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
          <Reveal>
            <h2 className="display-heading" style={{ fontSize: "clamp(40px, 6vw, 88px)", color: "var(--brand-white)" }}>
              Want a tool like this <span className="marker-highlight">for your team</span>?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              I run workshops on building with AI, operator to operator. Bring the problem;
              we build the workflow together.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="/contact?intent=speaking"
              className="mt-10 inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Talk to Dru
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
