import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Dru Nguyen",
  description:
    "Operator, co-founder, and investor across hospitality, AI data services, and entertainment. The Scholarly Warrior identity in practice.",
};

const stories = [
  {
    title: "The DJ Origin",
    body: "At 17, dad caught me ditching school. First time I ever saw him cry. His punishment? He bought me a DJ setup. I learned community-building by sharing knowledge openly when DJ culture hoarded it.",
  },
  {
    title: "The Factory",
    body: "Quit the family steel manufacturing business in Hanoi after months of struggling. The hardest conversation of my life with my dad. You can't build your future on someone else's blueprint.",
  },
  {
    title: "The Fight",
    body: "Signed up for a Muay Thai exhibition fight in Da Nang. Pissed myself backstage from nerves. Won by TKO in round two. Fear doesn't go away. You just stop letting it decide for you.",
  },
  {
    title: "The EOS Transformation",
    body: "Ran businesses in chaos for years and blamed the team. Read Rocket Fuel and Traction with my brother TK. Implemented EOS. Nine months before the team fully bought in. Structure is freedom.",
  },
  {
    title: "The Move to Vietnam",
    body: "At 27, left SF/LA for Nha Trang with no Vietnamese, no friends outside my brother. Built Skylight. Reconnected with my dad after 22 years apart. The most uncertain chapters often become the most important ones.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="relative z-10 mx-auto grid max-w-[1300px] gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16 md:px-10 md:pb-28 md:pt-40">
          <div>
            <Reveal>
              <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
                About
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
                Operator first.
                <br />
                <span style={{ color: "var(--brand-lime)" }}>Experimenter second.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
                Discipline plus learning as an integrated philosophy. Care. Discipline. Grit.
              </p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/dru-portrait-laughing.jpg"
                alt="Dru Nguyen portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute right-5 bottom-5 rounded-full px-3 py-1 text-xs font-extrabold uppercase" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.12em" }}>
                Care · Discipline · Grit
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <div className="section-label">The Bio</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              Operator first. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Experimenter second.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              <p>
                I&apos;m Dru Nguyen, co-founder of <strong>Xood</strong> (AI data services in Vietnam), founder of{" "}
                <strong>Skylight</strong> (rooftop hospitality, Nha Trang, 10+ years), and advisor to{" "}
                <strong>Tictag Singapore</strong>. I invest in and advise <strong>East West Brewery</strong>,{" "}
                <strong>Nuen Motor</strong>, and <strong>GAM Entertainment</strong>.
              </p>
              <p>
                Most AI creators have never run operations. I have. The content here comes from real work, real
                decisions, and real outcomes across three industries. My benchmarks are Jeff Su (bite-size AI utility)
                and AIO (education depth).
              </p>
              <p>
                I write for the plateaued operator who&apos;s 2–7 years in and stuck at scale, and for the curious
                Vietnam-based founder watching how the next tier moves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <div className="section-label">Five Stories</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-white)" }}>
              The lived material <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>behind the work.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="overflow-hidden rounded-xl"
                  style={{ background: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-lime)" }}
                >
                  {s.title === "The Fight" ? (
                    <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image
                          src="/images/dru-muay-thai-2019.jpg"
                          alt="Dru wins by TKO at the Da Nang Muay Thai exhibition fight, 2019"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-7 md:p-8">
                        <h3 className="text-xl font-extrabold md:text-2xl" style={{ color: "var(--brand-white)" }}>{s.title}</h3>
                        <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{s.body}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-7 md:p-8">
                      <h3 className="text-xl font-extrabold md:text-2xl" style={{ color: "var(--brand-white)" }}>{s.title}</h3>
                      <p className="mt-3 leading-relaxed" style={{ color: "var(--brand-pastel)" }}>{s.body}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[900px] px-5 md:px-8 text-center">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>Three Words</div>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 8vw, 88px)", letterSpacing: "-0.03em" }}>
              Care. <span style={{ color: "var(--brand-lime)" }}>Discipline.</span> Grit.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="/contact"
              className="mt-12 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
