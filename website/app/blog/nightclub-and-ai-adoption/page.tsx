import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CopyPromptButton from "@/components/CopyPromptButton";
import { PROMPTS } from "./prompts";

export const metadata: Metadata = {
  title: "What running a nightclub taught me about AI adoption | Dru Nguyen",
  description:
    "Every AI rollout has the same room: 70% locked in, 20% pretending, 10% gone. Stop selling to the skeptics. Find the front row.",
  alternates: { canonical: "/blog/nightclub-and-ai-adoption" },
  openGraph: {
    title: "What running a nightclub taught me about AI adoption",
    description:
      "70% locked in, 20% pretending, 10% gone. Stop selling to the skeptics. Find the front row.",
    type: "article",
    url: "/blog/nightclub-and-ai-adoption",
    images: [{ url: "/images/blog/nightclub-and-ai-adoption.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Operations", "#Skylight", "#ScholarlyWarrior", "#DoingGoodWithData"];

export default function PostPage() {
  return (
    <article style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
      <header>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
          <Reveal>
            <Link href="/blog" className="text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}>
              ← Back to the Blog
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              <span>The Builder</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span>Hospitality · AI Adoption</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>4 MIN READ</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>13 MAY 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>
              What running a nightclub taught me{" "}
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>about AI adoption.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image src="/images/blog/nightclub-and-ai-adoption.webp" alt="A late-night view from a DJ booth in a rooftop venue, crowd in soft focus below" fill priority sizes="(max-width: 1300px) 100vw, 1300px" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "var(--font-prose)" }}>

          {/* §01 — Felt question */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            Think about the last tool you rolled out at work. Now picture the three people you fought hardest to convince. If they were the loudest skeptics instead of the people already asking for the tool, you ran the rollout backward.
          </p>

          {/* §02 — Black Coffee at Hï Ibiza */}
          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              In 2018,{" "}
              <a href="https://en.wikipedia.org/wiki/Black_Coffee_(DJ)" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Black Coffee</a>{" "}
              opened his Saturday residency at{" "}
              <a href="https://hiibiza.com/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Hï Ibiza</a>{" "}
              and the room he walked into every night split the same way. <strong style={{ color: "var(--brand-white)" }}>70%</strong> of the crowd was already locked in, ready for the next track. <strong style={{ color: "var(--brand-white)" }}>20%</strong> was wandering through with their phones up, half-watching. <strong style={{ color: "var(--brand-white)" }}>10%</strong> was leaving before he had even played a record.
            </p>
            <p>
              He played for the 70% all night. His sets ran six to seven hours and he built them slowly. The 20% either converted by hour two or wandered out for a louder room. The 10% were never coming back. By 4am, the floor he was left with was the floor he had picked at midnight, just deeper and more committed.
            </p>
            <p>
              Six years later, Hï was voted the number-one club in the world three years running. Black Coffee never changed the rule.
            </p>
          </div>

          {/* §03 — Principle */}
          <div className="mt-10 rounded-2xl p-8 md:p-10" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
            <p className="text-lg italic md:text-xl" style={{ color: "var(--brand-white)", fontFamily: "var(--font-prose)" }}>
              The crowd does not change because you turn the music up. It changes because{" "}
              <span style={{ color: "var(--brand-lime)" }}>the front row is dancing.</span>
            </p>
          </div>

          {/* §04 — Apply to reader */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            The same split shows up <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>at work.</em>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              I have watched the same percentages play out on every AI rollout I have run across my own companies and inside the businesses I advise.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>The 70% are the people on your team who are already running workarounds.</strong> They have a Google Sheet open at midnight. They keep a personal ChatGPT tab next to their work tabs. They are not waiting for a license or a training. They want the tool yesterday.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>The 20% are the people who nod through the all-hands and never open the tool on Monday.</strong> Their objections will sound technical, but the resistance is usually emotional. They will not convert until the 70% has already shipped something they wish they had shipped first.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>The 10% have already decided this is not for them.</strong> Some will leave the company over it. Most will quietly opt out for the rest of their tenure. They are not yours to convert.
            </p>
            <p>
              The mistake almost every operator makes is the same. They burn the rollout arguing with the 20%. The 70% gets ignored, loses momentum, and a few of them start looking for a job somewhere that already has the tool you are failing to deliver.
            </p>
            <p>
              Black Coffee never made that mistake. He served the believers harder every hour and let the rest catch up or leave. Run your rollout the same way. Find your 70% on Monday morning and build the workflow with them.
            </p>
          </div>

          {/* §05 — Dru's application */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            How I ran this <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>at Skylight.</em>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              The workflow that kept breaking at Skylight was setting our weekly purchasing par levels. If I ordered too much, cash sat in inventory and produce died in the walk-in. If I ordered too little, the kitchen ran out at service. I had rewritten the policy three times in twelve months, and none of the rewrites held.
            </p>
            <p>
              One Tuesday afternoon, I gave{" "}
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Claude</a>{" "}
              the current par sheet and the last three months of stockout data. By 5pm, we had a new sheet built as category-level rules, plus two ordering patterns I had not tested.
            </p>
            <p>
              Two weeks later, the team was running the new par sheet on their own. Two months later, Claude was in five workflows across the venue. I never held a training session. <strong style={{ color: "var(--brand-white)" }}>The team owned the work. Claude was the tool.</strong>
            </p>
          </div>

          {/* §06 — The Front Row Test */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            The Front Row Test.
          </h2>
          <p className="mt-4 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            Before any AI tool is purchased at my companies, the rollout has to clear three checks. I write the answers in a Google Doc and I do not approve the budget until all three are filled in clearly.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl p-6 md:p-7" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
              <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Check 1 · The front row</div>
              <p className="mt-3 text-lg leading-[1.7]" style={{ color: "var(--brand-white)" }}>
                Write down three real people on the team who are already running a workaround for this problem.
              </p>
              <p className="mt-2 text-base leading-[1.7]" style={{ color: "var(--brand-pastel)" }}>
                A Google Sheet at midnight. A personal ChatGPT tab. A handwritten log. If three names do not come to mind in five minutes, the front row does not exist yet, and the rollout is not ready.
              </p>
            </div>

            <div className="rounded-xl p-6 md:p-7" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
              <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Check 2 · The Friday artifact</div>
              <p className="mt-3 text-lg leading-[1.7]" style={{ color: "var(--brand-white)" }}>
                Write down the specific deliverable each of those three people will ship by the end of the first week.
              </p>
              <p className="mt-2 text-base leading-[1.7]" style={{ color: "var(--brand-pastel)" }}>
                A revised SOP. A closed report. A draft email that gets sent. The artifact has to be visible to someone outside the team. If the artifact only lives in the team&apos;s notes app, it does not count.
              </p>
            </div>

            <div className="rounded-xl p-6 md:p-7" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
              <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Check 3 · The unblocker</div>
              <p className="mt-3 text-lg leading-[1.7]" style={{ color: "var(--brand-white)" }}>
                Write down the name of the person whose approval moves the budget forward, and the specific number they need to see to clear the runway.
              </p>
              <p className="mt-2 text-base leading-[1.7]" style={{ color: "var(--brand-pastel)" }}>
                The unblocker is never the loudest skeptic. The unblocker is usually the person closest to the cost of the broken workflow. Design the Friday artifact to be visible to them.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            All three checks filled in clearly means you have a real rollout. Any one check missing means you have a vendor pitch in disguise. Do not buy the tool yet.
          </p>

          {/* THE PROMPT */}
          <div className="mt-14 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>The Prompt</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Run the test <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>in Claude.</em>
          </h2>
          <p className="mt-4 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            Paste the prompt below into <a href="https://claude.ai" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Claude</a>, ChatGPT, or Gemini. Out the other end: a Front Row Brief, a scorecard, a go/no-go.
          </p>

          <a
            href="/downloads/nightclub-and-ai-adoption-prompt-pack.zip"
            download
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-extrabold uppercase transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--brand-lime)",
              color: "var(--brand-jungle)",
              letterSpacing: "0.16em",
              borderRadius: 6,
              fontFamily: "var(--font-sans)",
            }}
            aria-label="Download the prompt as a zip"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download the prompt (.zip)
          </a>
          <p className="mt-2 text-xs" style={{ color: "var(--brand-pastel)" }}>
            One <code>.md</code> file + a README.
          </p>

          <div className="mt-6 space-y-12">
            {PROMPTS.map((p) => {
              const lineCount = p.body.split("\n").length;
              return (
                <div key={p.title}>
                  <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-lime)" }}>
                    <strong>Use when:</strong> <span style={{ color: "var(--brand-pastel)" }}>{p.useWhen}</span>
                  </p>
                  <details
                    className="mt-4 group"
                    style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.2)", borderRadius: 12, padding: 0 }}
                  >
                    <summary
                      className="cursor-pointer select-none flex items-center justify-between px-6 py-4 list-none"
                      style={{ color: "var(--brand-white)", fontWeight: 700 }}
                    >
                      <span className="text-sm font-bold uppercase" style={{ letterSpacing: "0.12em", color: "var(--brand-lime)" }}>
                        Show full prompt
                      </span>
                      <span className="text-xs" style={{ color: "var(--brand-pastel)" }}>
                        {lineCount} lines · click to expand
                      </span>
                    </summary>
                    <div className="flex justify-end px-4 pt-3" style={{ borderTop: "1px solid rgba(173,251,73,0.2)" }}>
                      <CopyPromptButton text={p.body} label={`Copy ${p.title}`} variant="dark" />
                    </div>
                    <pre
                      className="mt-0 overflow-x-auto p-6 pt-3 text-sm leading-relaxed whitespace-pre-wrap"
                      style={{ color: "var(--brand-white)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                    >
                      <code>{p.body}</code>
                    </pre>
                  </details>
                </div>
              );
            })}
          </div>

          {/* §07 — What did not work */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>What did not work</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Three rollouts that <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>flopped.</em>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p><strong style={{ color: "var(--brand-white)" }}>1. Top-down launch.</strong> Vendor demo, licenses for everyone, mandatory training. Usage at 12% by month three.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>2. Office hours for skeptics.</strong> Six weeks debating the 20%. None adopted. Lost two of the 70% to a competitor who already had the tool.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>3. Routing through the CFO.</strong> Loud skeptic talked him out of a $4,800/year license that would have saved the ops team eight hours a week. Should have routed through the ops team.</p>
          </div>

          {/* CTA */}
          <p className="mt-12 text-xl italic" style={{ color: "var(--brand-white)" }}>
            Who on your team is already running the workaround?
          </p>
          <p className="mt-2 text-base" style={{ color: "var(--brand-pastel)" }}>
            Find them Monday. That is the rollout.
          </p>

          {/* Voice marker */}
          <p className="mt-12 text-base" style={{ color: "var(--brand-pastel)" }}>
            Knowledge with application is wisdom.
          </p>

          {/* Hashtags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span key={h} className="rounded-full px-3 py-1 text-xs font-bold uppercase" style={{ background: "rgba(173,251,73,0.12)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}>{h}</span>
            ))}
          </div>

          {/* DRU. signature */}
          <div className="mt-20 flex justify-end">
            <div
              className="px-5 py-2 text-xl font-extrabold"
              style={{
                background: "transparent",
                color: "var(--brand-lime)",
                border: "2px solid var(--brand-lime)",
                letterSpacing: "0.28em",
                transform: "rotate(-2deg)",
                fontFamily: "var(--font-sans)",
                textShadow: "0 8px 14px rgba(173,251,73,0.18)",
              }}
            >
              DRU.
            </div>
          </div>

        </div>
      </section>
    </article>
  );
}
