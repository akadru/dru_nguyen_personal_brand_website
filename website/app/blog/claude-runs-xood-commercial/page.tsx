import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How I run Xood's commercial team in 30 min/day with Claude",
  description:
    "A real morning at Xood, a four-step batch, and the prompt I copy-paste. Three hours of work in 30 minutes — no AI hype, no fluff.",
  alternates: { canonical: "/blog/claude-runs-xood-commercial" },
  openGraph: {
    title: "How I run Xood's commercial team in 30 min/day with Claude",
    description:
      "A real morning at Xood, a four-step batch, and the prompt I copy-paste. Three hours of work in 30 minutes.",
    type: "article",
    url: "/blog/claude-runs-xood-commercial",
    images: [{ url: "/images/blog/claude-runs-xood-commercial.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#FutureOfWork", "#BuildingInVietnam"];

export default function PostPage() {
  return (
    <article style={{ background: "var(--brand-jungle)" }}>
      {/* HERO */}
      <header style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Reveal>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase"
              style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
            >
              ← Back to the Blog
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              <span>The Thinker</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span>AI Operator</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>4 MIN READ</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>26 APR 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
            >
              How I run Xood&apos;s commercial team in 30 min/day{" "}
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>with Claude.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/claude-runs-xood-commercial.webp"
                alt="A laptop on a wooden desk before sunrise in Ho Chi Minh City, Vietnamese phin coffee dripping beside it"
                fill
                priority
                sizes="(max-width: 1300px) 100vw, 1300px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* BODY */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-jungle)" }}>
        <div
          className="mx-auto max-w-[760px] px-5 md:px-10"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            It&apos;s 7:14 AM. I&apos;m in the kitchen at Xood&apos;s office in District 1. Vietnamese coffee dripping.
            A list of <strong>47 prospects</strong> on my screen — names I scraped from yesterday&apos;s Tictag partner event.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "#333" }}>
            <p>By 7:45 AM I have:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>A clean prospect digest with intent signals</li>
              <li>Eleven first-draft outreach emails grounded in each company&apos;s published material</li>
              <li>An updated partner-map showing two new strategic gaps for next week</li>
              <li>Six CRM rows flagged for follow-up with suggested next actions</li>
            </ul>
            <p>That&apos;s roughly three hours of SDR-and-RevOps work. I do it in 30 minutes with Claude.</p>
            <p>
              Most operators hear &ldquo;AI&rdquo; and think &ldquo;junior intern I have to micromanage.&rdquo;
              That&apos;s the trap. The senior ones I respect don&apos;t treat Claude as a person.{" "}
              <strong style={{ color: "var(--brand-white)" }}>They treat it as a workflow.</strong>
            </p>
            <p>
              Here&apos;s the difference. An intern needs to be onboarded, given context, corrected when wrong, and re-onboarded next week when they forget. Claude needs none of that — if you give it a versioned prompt and a tight input, it returns the same shape of output every time. That&apos;s not assistance. That&apos;s infrastructure.
            </p>
          </div>

          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Framework</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            The 30-minute <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>morning batch.</em>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "#333" }}>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>1. Prospect digest (8 min).</strong> I paste yesterday&apos;s CRM export + LinkedIn signal scrape into one prompt. Claude returns a digest grouped by intent tier (warm / observed / cold), with a one-line &ldquo;why-now&rdquo; beside each name. I don&apos;t read the raw data anymore.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>2. First-draft outreach (12 min).</strong> For each warm prospect, I give Claude their company&apos;s published page (about, blog, last announcement) and Xood&apos;s offer. Output: a 3-paragraph email that earns a reply by sounding like I read their stuff — because Claude actually did. I rewrite the first sentence and the CTA. That&apos;s it.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>3. Partner-map refresh (5 min).</strong> Same prompt every Monday. Claude re-runs against last week&apos;s partner-map and highlights deltas: new players, dead ones, gaps. I make the call on which gaps to chase.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>4. CRM hygiene (5 min).</strong> Stale leads (&gt;14 days no touch) get a Claude-suggested next action — &ldquo;DM their founder on LinkedIn referencing X,&rdquo; &ldquo;wait until their Series A closes,&rdquo; &ldquo;kill it.&rdquo; I approve or override.
            </p>
          </div>

          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Prompt</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            One template. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Tweaked monthly.</em>
          </h2>
          <pre
            className="mt-8 overflow-x-auto rounded-xl p-6 text-sm leading-relaxed"
            style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
          >
            <code>
{`You are an SDR-and-RevOps analyst for Xood — AI data services in Vietnam.
Read the input below. Return [SPEC]. Use Xood's voice: direct, operator-to-
operator, no jargon. Cite the prospect's own words when claiming relevance.
If signal is weak, say so.

[CONTEXT — paste your offer + 1-line ICP]
[INPUT — paste data]
[SPEC — what shape of output you want]`}
            </code>
          </pre>

          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Three Rules</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            From theatre to <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>infrastructure.</em>
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              { h: "One prompt, versioned.", b: "Same shape every day. I edit the prompt, not the daily output." },
              { h: "Inputs are real.", b: "CRM exports, the prospect's actual blog, my notes — not vibes." },
              { h: "I review the first paragraph and the ask.", b: "Everything else stays." },
            ].map((r) => (
              <div key={r.h} className="rounded-xl p-6" style={{ background: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-myrtle)" }}>
                <div className="text-base font-extrabold" style={{ color: "var(--brand-white)" }}>{r.h}</div>
                <div className="mt-2 text-base" style={{ color: "#333" }}>{r.b}</div>
              </div>
            ))}
          </div>

          {/* TAKEAWAYS */}
          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Your 10-minute next action
            </div>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              Take the one task you do every weekday morning that should take 30 minutes and somehow takes two hours.
              Write it as a prompt with three blocks — <strong style={{ color: "var(--brand-lime)" }}>context, input, spec</strong>. Run it once.
            </p>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              If the output is 70% there, you&apos;ve found a workflow. If it&apos;s at 40%, your input or your spec is wrong, not the model.
            </p>
            <p className="mt-8 italic" style={{ fontFamily: "'Plus Jakarta Sans', serif", fontSize: "clamp(24px, 3vw, 32px)", color: "var(--brand-lime)", lineHeight: 1.2 }}>
              &ldquo;Knowledge with application is wisdom.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-2 p-8 text-center md:p-10" style={{ borderColor: "rgba(176,190,197,0.25)" }}>
            <p className="text-2xl font-extrabold leading-snug md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.01em" }}>
              Get one operator essay every Tuesday at 8am Vietnam time.
            </p>
            <Link
              href="/newsletter"
              className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
            >
              Subscribe to the newsletter
            </Link>
          </div>

          {/* HASHTAGS */}
          <div className="mt-12 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span
                key={h}
                className="rounded-full px-3 py-1 text-xs font-bold uppercase"
                style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
