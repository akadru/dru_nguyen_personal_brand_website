import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press — Dru Nguyen",
  description: "Speaking appearances, interviews, and media features for Dru Nguyen.",
};

const features = [
  {
    outlet: "Zero Project Conference",
    year: "2026",
    title: "On stage on inclusive AI and the future of data work in Southeast Asia.",
    img: "/images/dru-hero.jpg",
    href: "#",
  },
  {
    outlet: "Tictag x Zero Project",
    year: "2026",
    title: "\"Everyone can benefit from working with data\" — keynote excerpt.",
    img: "/images/dru-hero.jpg",
    href: "#",
  },
];

export default function PressPage() {
  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1300px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>Press</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              On stage. <span style={{ color: "var(--brand-lime)" }}>On the record.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Recent speaking appearances, interviews, and media features. For interview or quote requests:{" "}
              <Link href="/contact" className="underline" style={{ color: "var(--brand-lime)" }}>get in touch</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10 grid gap-6 md:grid-cols-2">
          {features.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) as 0 | 1}>
              <Link href={p.href} className="block overflow-hidden rounded-2xl border transition-shadow hover:shadow-xl" style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}>
                <div className="relative aspect-[16/9]">
                  <Image src={p.img} alt={p.outlet} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                    <span>{p.outlet}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <p className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
