import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Never enter a meeting blind. My 30-min Claude prep.",
  description:
    "Anthropic shipped Claude Design on April 17. Here is the 30-minute prep I now run before every team meeting at Skylight and across my businesses, end to end.",
  alternates: { canonical: "/blog/never-enter-a-meeting-blind-claude-design-prep" },
  openGraph: {
    title: "Never enter a meeting blind. My 30-min Claude prep.",
    description:
      "Anthropic shipped Claude Design on April 17. Here is the 30-minute prep I now run before every team meeting at Skylight and across my businesses.",
    type: "article",
    url: "/blog/never-enter-a-meeting-blind-claude-design-prep",
    images: [{ url: "/images/blog/never-enter-a-meeting-blind-claude-design-prep.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#FutureOfWork", "#AIOperator", "#ClaudeDesign", "#DoingGoodWithData"];

export default function PostPage() {
  return (
    <article style={{ background: "var(--brand-white)" }}>
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
              <span style={{ color: "var(--brand-pastel)" }}>5 MIN READ</span>
              <span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>29 APR 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
            >
              Never enter a meeting blind.{" "}
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>My 30-min Claude prep.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/never-enter-a-meeting-blind-claude-design-prep.webp"
                alt="An operator's MacBook on a wooden desk in a Saigon home-office at dawn, a draft slide deck on screen, lime sticky note tag, Vietnamese phin coffee dripping beside a notebook, motorbikes blurred outside the window"
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
      <section className="py-16 md:py-24" style={{ background: "var(--brand-white)" }}>
        <div
          className="mx-auto max-w-[760px] px-5 md:px-10"
          style={{ fontFamily: "var(--font-prose)" }}
        >
          {/* HOOK */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-jungle)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            <strong>A meeting without a viewing artifact</strong> is a meeting where everyone defends their memory of reality. Add an artifact, and the meeting becomes about correcting the artifact. That is a 10x better meeting.
          </p>

          {/* THE COLD OPEN */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Cold Open</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            8:42 AM. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>No deck. No agenda. No mercy.</em>
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Skylight&apos;s monthly review starts in 18 minutes. I had nothing on screen. No deck. No one-pager. No agenda doc. Just me, a vague memory of last quarter&apos;s numbers, and seven people about to dial in.
            </p>
            <p>
              That meeting cost us <strong style={{ color: "var(--brand-jungle)" }}>47 minutes.</strong> We argued about whose intuition was right.
            </p>
            <p>
              I do not enter meetings that way anymore. I enter every meeting with an artifact people can look at, point to, and disagree with. The artifact does the work the meeting used to do.
            </p>
            <p>
              Anthropic shipped <strong style={{ color: "var(--brand-jungle)" }}><a href="https://www.anthropic.com/news" target="_blank" rel="noopener" style={{ borderBottom: "2px solid var(--brand-lime)" }}>Claude Design</a></strong> on April 17, 2026. It is built for exactly this. Prototypes, slides, one-pagers, briefs. I&apos;ve now run it for ten days across Skylight and two advisory calls.
            </p>
            <p>
              Here is the 30-minute prep I run before any team meeting.
            </p>
          </div>

          {/* THE PRINCIPLE: callout */}
          <div className="mt-14 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The Principle
            </div>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              Operators waste 80% of design time on choices that don&apos;t matter. Claude Design lets me build the artifact in the time it used to take to write the agenda.{" "}
              <strong style={{ color: "var(--brand-lime)" }}>That is the whole post.</strong> The flow below is the implementation.
            </p>
          </div>

          {/* THE FRAMEWORK */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Framework</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            Five steps in <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>thirty minutes.</em>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>1. Define the meeting in 10 words. (3 min)</strong>{" "}
              Open a fresh chat. Type one sentence. <em>&ldquo;Skylight monthly review, April numbers, decide whether to hold or push the rebrand to Q3.&rdquo;</em> That sentence is the brief. Everything else flows from it.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>2. Choose the deliverable type, not the design. (2 min)</strong>{" "}
              Tell Claude Design which artifact to build: 6-slide deck, 1-pager, decision brief, or quick prototype. Do not describe colors, fonts, or layout. Anthropic&apos;s defaults are fine.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>3. Feed the context. (8 min)</strong>{" "}
              Paste the inputs Claude needs. For Skylight monthly: last month&apos;s scorecard, the 3 open issues from L10, the rebrand budget memo, the team list. <strong style={{ color: "var(--brand-jungle)" }}>The artifact is only as good as the inputs.</strong> This is the step most operators skip and then complain about the output.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>4. Iterate one round. (10 min)</strong>{" "}
              Claude returns a draft. Read it like the audience will. Cut the first slide if it&apos;s filler. Tighten the headline of slide 3. Replace any number that is wrong. <strong style={{ color: "var(--brand-jungle)" }}>Ask for one specific change at a time, not a list of seven.</strong> One round is enough. Do not chase perfect.
            </p>
            <p>
              <strong style={{ color: "var(--brand-jungle)" }}>5. Walk in driving the artifact. (7 min)</strong>{" "}
              Open the meeting by sharing the screen on slide 1. The team reads with you. They point at things. They edit live. <strong style={{ color: "var(--brand-jungle)" }}>The meeting is now about the artifact.</strong> That is the win.
            </p>
          </div>

          {/* BEFORE / AFTER TABLE */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Before / After</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.02em" }}>
            What Claude Design <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>replaces</em> in my week.
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--brand-pastel)" }}>
            <table className="w-full text-base">
              <thead>
                <tr style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)" }}>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase" style={{ letterSpacing: "0.18em" }}>Before</th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase" style={{ letterSpacing: "0.18em" }}>After</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--brand-pastel)" }}>
                {[
                  ["90 minutes building decks in Keynote", "22 minutes in Claude Design"],
                  ["Half-baked agendas typed in Slack", "Decision briefs auto-generated from L10 notes"],
                  ["Investor one-pagers rewritten from scratch", "Templated structure, only the inputs change"],
                  ["“Let me circle back with the numbers”", "Numbers are in the artifact; the conversation moves"],
                ].map(([before, after], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "var(--brand-white)" : "var(--brand-tea)" }}>
                    <td className="px-5 py-4 align-top">{before}</td>
                    <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--brand-jungle)" }}>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            The 30-minute prep saves me an average of <strong style={{ color: "var(--brand-jungle)" }}>70 minutes per meeting.</strong> Across 6 to 8 team meetings a week, that is the leverage{" "}
            <a href="https://www.danmartell.com/buy-back-your-time-boost-profits/" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "2px solid var(--brand-lime)", fontWeight: 700 }}>Dan Martell talks about in his Buyback Loop</a>, except I don&apos;t need to hire someone to claim it. The tool runs once and the time is mine.
          </p>

          {/* TAKEAWAYS */}
          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Key takeaways
            </div>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed md:text-xl" style={{ color: "rgba(242,242,242,0.92)" }}>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>A meeting without an artifact is a meeting about everyone&apos;s memory.</strong> Bad meeting.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Claude Design</strong> (Anthropic, April 17 launch) makes the artifact in the time it used to take to write the agenda. Use it.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Skip the design choices.</strong> Pick the deliverable type. Anthropic&apos;s defaults are fine.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Iterate one round, not seven.</strong> Chasing perfect costs you the meeting.</li>
              <li><span style={{ color: "var(--brand-lime)", fontWeight: 700 }}>→</span> <strong style={{ color: "var(--brand-lime)" }}>Drive the meeting from the artifact.</strong> That is where the leverage lives.</li>
            </ul>
          </div>

          {/* THE CLOSE */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Close</div>
          <div className="mt-4 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              The meeting that used to take 47 minutes now takes 18. The other 29 minutes I spent on something my team actually needed me to do.
            </p>
            <p>
              If you run more than five meetings a week and you are not yet on Claude Design, you are paying a tax in time and team energy that you do not need to pay.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-2 p-8 text-center md:p-10" style={{ borderColor: "var(--brand-jungle)" }}>
            <p className="text-2xl font-extrabold leading-snug md:text-3xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
              Try it once this week. Pick one meeting. Build the artifact.
            </p>
            <p className="mt-4 italic text-lg" style={{ color: "var(--brand-myrtle)" }}>
              Knowledge with application is wisdom.
            </p>
            <Link
              href="/newsletter"
              className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
            >
              Get the Tuesday Brief
            </Link>
          </div>

          {/* CREDITS */}
          <p className="mt-12 text-sm leading-relaxed" style={{ color: "var(--brand-myrtle)" }}>
            <strong style={{ color: "var(--brand-jungle)" }}>Credits:</strong> Claude Design by{" "}
            <a href="https://www.anthropic.com/news" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "1px dashed var(--brand-myrtle)" }}>Anthropic</a>, launched 2026-04-17. Buyback Loop framework by{" "}
            <a href="https://www.danmartell.com/buy-back-your-time-boost-profits/" target="_blank" rel="noopener" style={{ color: "var(--brand-jungle)", borderBottom: "1px dashed var(--brand-myrtle)" }}>Dan Martell</a>.
          </p>

          {/* HASHTAGS */}
          <div className="mt-8 flex flex-wrap gap-2">
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
