import type { Metadata } from "next";
import Link from "next/link";
import { PROMPTS } from "../prompts";

export const metadata: Metadata = {
  title: "Prompt Pack: 5 Coaches in 5 Prompts",
  description:
    "Copy-paste ready. Five LLM prompts that turn Claude, ChatGPT, or Gemini into your Board of Advisors, Financial Advisor, Strategic Planning Facilitator, Accountability Coach, and Devil's Advocate.",
  alternates: { canonical: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack" },
  openGraph: {
    title: "Prompt Pack: 5 Coaches in 5 Prompts",
    description: "Drop them into Claude, ChatGPT, or Gemini. Cadence beats inspiration.",
    type: "article",
    url: "/blog/every-olympian-has-a-coach-yours-is-a-prompt-away/prompt-pack",
  },
};

export default function PromptPackPage() {
  return (
    <article style={{ background: "var(--brand-white)" }}>
      {/* HERO */}
      <header style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Link
            href="/blog/every-olympian-has-a-coach-yours-is-a-prompt-away"
            className="text-xs font-bold uppercase"
            style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
          >
            ← Back to the post
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
            <span>Prompt Pack</span>
            <span style={{ color: "var(--brand-pastel)" }}>·</span>
            <span>Copy. Paste. Run weekly.</span>
          </div>
          <h1
            className="mt-6 font-extrabold tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            5 coaches in <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>5 prompts.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--brand-pastel)" }}>
            Drop these into Claude, ChatGPT, or Gemini. Fill in the bracketed fields with real numbers and real context. The 30% magic is the prompt. The 70% magic is your inputs. Run them weekly. Cadence beats inspiration.
          </p>
        </div>
      </header>

      {/* PROMPTS */}
      <section className="py-16 md:py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[860px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <div className="space-y-12">
            {PROMPTS.map((p) => (
              <div key={p.title}>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
                  {p.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
                  <strong>Use when:</strong> {p.useWhen}
                </p>
                <pre
                  className="mt-4 overflow-x-auto rounded-xl p-6 text-sm leading-relaxed"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                >
                  <code>{p.body}</code>
                </pre>
              </div>
            ))}
          </div>

          {/* HOW TO RUN */}
          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-tea)", borderLeft: "4px solid var(--brand-myrtle)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>How to actually run these</div>
            <ol className="mt-5 space-y-3 text-base leading-relaxed list-decimal list-inside" style={{ color: "var(--brand-jungle)" }}>
              <li><strong>Paste real context.</strong> Vague in equals vague out.</li>
              <li><strong>Run them on a cadence.</strong> Monday for accountability. Before any real decision for the Board. Monthly for the Financial Advisor.</li>
              <li><strong>Iterate, don&apos;t just accept.</strong> Push back on the first answer. The conversation is the value.</li>
            </ol>
          </div>

          {/* CREDITS */}
          <div className="mt-12 text-sm leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>Credits.</strong> Coaching philosophy reference:{" "}
              <a href="https://www.theinnergame.com" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "1px dashed var(--brand-myrtle)" }}>Tim Gallwey, <em>The Inner Game of Tennis</em></a> (1974). The &ldquo;awareness, not advice&rdquo; framing comes from him.
            </p>
            <p className="mt-3">
              Olympic coach pairings: public record (Bowman/Phelps, Glen Mills/Bolt, Aimee Boorman/Biles). Prompts and operator framing original to Dru Nguyen, refined across Skylight and my businesses, 2026.
            </p>
            <p className="mt-6 italic" style={{ color: "var(--brand-jungle)" }}>
              Knowledge with application is wisdom.
            </p>
            <p className="mt-2 text-xs uppercase" style={{ letterSpacing: "0.18em" }}>
              Dru Nguyen · drunguyen.me · 30 Apr 2026
            </p>
          </div>

          {/* PRINT TIP */}
          <div className="mt-12 rounded-xl border-2 p-6 text-center" style={{ borderColor: "var(--brand-pastel)" }}>
            <p className="text-sm" style={{ color: "var(--brand-myrtle)" }}>
              <strong style={{ color: "var(--brand-jungle)" }}>Save it as PDF:</strong> in your browser, press Cmd+P (Mac) or Ctrl+P (Windows) and choose &ldquo;Save as PDF.&rdquo; Take the prompts with you.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
