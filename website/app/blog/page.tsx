import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContentFeed from "@/components/ContentFeed";

export const metadata: Metadata = {
  title: "Blog | Dru Nguyen",
  description:
    "Operator essays, AI workflow teardowns, and lived-experience stories from running businesses across three industries.",
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 md:px-10 md:pt-40 md:pb-24">
          <Reveal>
            <div
              className="text-[10px] font-extrabold uppercase"
              style={{ color: "var(--brand-lime)", letterSpacing: "0.32em" }}
            >
              The Blog
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-heading mt-6" style={{ fontSize: "clamp(56px, 9vw, 130px)" }}>
              Operator essays.
              <br />
              <span className="marker-highlight">From the work.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              AI workflow teardowns, operator lessons, and the occasional story from running Skylight at 2am.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEED — white content surface, filter pills + all posts */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <ContentFeed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
