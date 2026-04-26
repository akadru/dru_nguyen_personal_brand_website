import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — Dru Nguyen",
  description: "Operator essays, AI workflow teardowns, and lived-experience stories from running businesses across three industries.",
};

export default function BlogPage() {
  // Empty grid, ready for posts. Web Developer agent will add cards here.
  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1200px] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Blog
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Operator essays.
              <br />
              <span style={{ color: "var(--brand-lime)" }}>From the work.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              AI workflow teardowns, operator lessons, and the occasional story from running Skylight at 2am.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          {/* POSTS_GRID_START */}
          <div
            className="rounded-xl border-2 border-dashed p-12 text-center"
            style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-myrtle)" }}
          >
            <div className="section-label">Coming soon</div>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl" style={{ color: "var(--brand-jungle)" }}>
              First essays drop in the coming weeks.
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--brand-body)" }}>
              In the meantime, get the operator essay every Tuesday in your inbox.
            </p>
            <Link
              href="/newsletter"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}
            >
              Get the Newsletter
            </Link>
          </div>
          {/* POSTS_GRID_END */}
        </div>
      </section>
    </>
  );
}
