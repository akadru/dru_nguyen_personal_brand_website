import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ventures — Dru Nguyen",
  description: "Six ventures across hospitality, AI data services, and entertainment. Xood, Skylight, Tictag, EWB, Nuen Motor, GAM Entertainment.",
};

const ventures = [
  { name: "Xood", role: "Co-Founder & MD — Commercial & Community", note: "AI data services · Vietnam · Pre-revenue", body: "Founded with Michael as CEO. Xood is the commercial + community engine for AI data services in Vietnam, drawing on the Tictag Singapore DNA." },
  { name: "Skylight", role: "Founder", note: "Rooftop hospitality · Nha Trang · 10+ years", body: "Built from the ground up after the move from SF/LA. Runs on EOS — structure as freedom. Where many of the operator lessons start." },
  { name: "Tictag Singapore", role: "Advisor", note: "AI data services · Singapore", body: "DNA source for Xood. Where the playbook for AI data services was sharpened before bringing it to Vietnam." },
  { name: "East West Brewery", role: "Investor / Advisor", note: "F&B", body: "Investment + advisory in F&B." },
  { name: "Nuen Motor", role: "Investor / Advisor", note: "Electric motorbikes", body: "Investment + advisory in EV mobility." },
  { name: "GAM Entertainment", role: "Investor / Advisor", note: "Entertainment · TK Nguyen, CEO", body: "Investment + advisory. Brother TK as CEO." },
];

export default function VenturesPage() {
  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1200px] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>The Ventures</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Six businesses.
              <br />
              <span style={{ color: "var(--brand-lime)" }}>Three industries.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 grid gap-5 md:grid-cols-2">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) as 0 | 1 | 2}>
              <article className="h-full rounded-xl p-7" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", borderTop: "3px solid var(--brand-lime)" }}>
                <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>{v.note}</div>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{v.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--brand-pastel)" }}>{v.role}</p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(242,242,242,0.85)" }}>{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
