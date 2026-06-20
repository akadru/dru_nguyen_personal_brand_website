import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "What a Paradise Garage DJ taught me about AI adoption | Dru Nguyen",
  description:
    "Every AI rollout has the same room: 70% locked in, 20% pretending, 10% gone. The mistake operators make is trying to convert the 20%. Find your front row instead.",
  alternates: { canonical: "/blog/nightclub-and-ai-adoption" },
  openGraph: {
    title: "What a Paradise Garage DJ taught me about AI adoption",
    description:
      "70% locked in, 20% pretending, 10% gone. Stop selling to the skeptics. Find your front row.",
    type: "article",
    url: "/blog/nightclub-and-ai-adoption",
    images: [{ url: "/images/blog/nightclub-and-ai-adoption.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Operations", "#Skylight", "#FutureOfWork", "#DoingGoodWithData"];

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
              <span style={{ color: "var(--brand-pastel)" }}>6 MIN READ</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>13 MAY 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>
              What a Paradise Garage DJ taught me{" "}
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
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

          {/* §01 — FELT QUESTION (HBR-style provocation) */}
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            Name one team rollout you launched in the last twelve months. Now name the three people you actually spent your energy on. If most of them were the ones complaining the loudest, you and I are reading the same post.
          </p>

          {/* §02 — THE STORY (Larry Levan / Paradise Garage) */}
          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              1979. Saturday night at{" "}
              <a href="https://en.wikipedia.org/wiki/Paradise_Garage" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Paradise Garage</a>{" "}
              in Manhattan. Twelve hundred people on a converted parking garage floor.{" "}
              <a href="https://en.wikipedia.org/wiki/Larry_Levan" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Larry Levan</a>{" "}
              is in the DJ booth.
            </p>
            <p>
              By midnight Larry can tell you who in that room is dancing because the music caught them, and who is dancing because they came with someone who is. He plays to the first group. He has said this openly in interviews. He picks the front row, the dancers locked in by 1am, and serves them for the rest of the night.
            </p>
            <p>
              The back half catches up or leaves. Either result is fine. He does not turn the music up to convince them. He does not change the genre to flatter them. He picks one cut, drops the energy on purpose, and pulls his believers deeper. The believers pull the curious. The curious pull the back row, or they go home.
            </p>
            <p>
              By 4am the back half is either gone or fully converted. The room he ends with is the room he picked at midnight, just bigger.
            </p>
          </div>

          {/* §03 — THE PRINCIPLE */}
          <div className="mt-10 rounded-2xl p-8 md:p-10" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
            <p className="text-lg italic md:text-xl" style={{ color: "var(--brand-white)", fontFamily: "'Plus Jakarta Sans', serif" }}>
              The crowd does not change because you turn the music up. It changes because{" "}
              <span style={{ color: "var(--brand-lime)" }}>the people in the front row are dancing.</span>
            </p>
          </div>

          {/* §04 — TAKEAWAY THIS WEEK */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Takeaway <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>this week.</em>
          </h2>

          {/* §05 — APPLY TO THE READER */}
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              If you are rolling out{" "}
              <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Claude</a>, ChatGPT, or any other AI tool at your company, you have the same room as Larry. It splits the same way every time.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>70% are already locked in.</strong> Ops people who feel the work is broken and are looking for a way to fix it. Finance people tired of reconciling exports by hand. Account managers tired of writing the same email seventeen times. They are not waiting for permission. They are waiting for a tool that does not feel like a toy.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>20% are pretending.</strong> They nod in the all-hands. They go to the training. They do not actually open the tool on Monday. Their objections sound technical but they are emotional. They will not convert until the 70% have already shipped something they wish they had shipped first.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>10% are gone.</strong> They will leave the company over this or quietly opt out for the rest of their tenure. Not your problem. Not your job to change. Your job is to make sure they do not slow the 70%.
            </p>
            <p>
              The mistake almost every operator makes is spending the rollout energy on the 20%. You will not convert them in week one. The energy you spend on them is energy you are stealing from the 70%.
            </p>
            <p>
              Find the 70% on Monday. Serve them harder. Let the rest catch up.
            </p>
          </div>

          {/* §06 — DRU'S APPLICATION */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            How I run this <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>at Skylight.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              I learned the room split before I learned it applied to software. October 2023. Friday at Skylight, our rooftop venue in Nha Trang. The DJ before our headliner had cleared the floor, the wrong way. Crowd was milling toward the exit. Our headliner was in the wings refusing to come on until the room reset.
            </p>
            <p>
              The floor manager wanted to call last-track on the warm-up DJ and cross-fade into the headliner. I told him to do the opposite.{" "}
              <strong style={{ color: "var(--brand-white)" }}>Cut the music for 90 seconds. Drop the lights. Let the headliner walk out into silence and start cold.</strong>
            </p>
            <p>
              We lost the 20% who had already mentally checked out. The 70% who had been waiting locked in harder. Best second set we did that quarter.
            </p>
            <p>
              When I rolled Claude into Skylight ops last year, I ran the same play. I did not push a license to every manager. I sat with my F&amp;B controller, Anh, for one Tuesday afternoon. She had been hand-reconciling bank exports against the POS for six hours a month. By 5pm we had Claude doing the variance check in eight minutes. She closed her month three days early.
            </p>
            <p>
              The next week three of her teammates asked her how she did it. Two months in, Claude was in five workflows across the venue, and I had not held a single training session. The 70% pulled the 20% in.{" "}
              <strong style={{ color: "var(--brand-white)" }}>Anh got the credit. Claude was a tool, not a brand.</strong>
            </p>
          </div>

          {/* §07 — THE HANDOFF (3-question test, tactical utility) */}
          <h2 className="mt-16 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            The 3 questions I run <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>before any rollout.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              Before I roll a tool into any of my companies or any of my advisory portfolio, I sit down on a Sunday and answer these three questions. No tool gets purchased until I can answer all three.
            </p>
            <ol className="mt-6 space-y-5 pl-5 list-decimal">
              <li>
                <strong style={{ color: "var(--brand-white)" }}>Who on my team is already hacking around this problem?</strong>{" "}
                Not who would benefit. Who is already running a Google Sheet, a Zapier, a personal ChatGPT tab, a manual workaround. They are my 70%. They have done half the work already. Find them first.
              </li>
              <li>
                <strong style={{ color: "var(--brand-white)" }}>What is the one task I can give them on Monday that ships by Friday?</strong>{" "}
                Not a license. Not a training. A specific deliverable: close the month, draft the SOP, reconcile the export, write the QBR. Ship something visible inside one week.
              </li>
              <li>
                <strong style={{ color: "var(--brand-white)" }}>Who does my 70% report to, and what do they need to see to clear the runway?</strong>{" "}
                Anh&apos;s manager needed to see the closed month three days early. That was enough. Identify the unblocker for the 70% in advance. Make the win visible to them, not to the skeptics.
              </li>
            </ol>
            <p className="mt-8">
              If you can answer all three questions cleanly, you have a rollout. If you cannot, you have a vendor pitch. Buy nothing until you have a rollout.
            </p>
          </div>

          {/* §08 — THREE THINGS THAT DID NOT WORK */}
          <div className="mt-16 mb-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>What did not work</div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>
            Three approaches I tried <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>that flopped.</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>1. The all-hands launch.</strong> First time I introduced AI tools across a portfolio company, I did the full top-down rollout. Vendor demo. License for everyone. Mandatory training Thursday. Three months later, usage was at 12%. The 70% had been invisible to me because I never asked who was already trying.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>2. Trying to debate the 20%.</strong> I spent six weeks at one company hosting weekly office hours to convert the loud skeptics. Every meeting was a fresh objection. None of them adopted the tool. The 70% I had ignored for six weeks lost momentum. By the time I came back to them, two of them had already left for a competitor that had the tool I was failing to roll out.
            </p>
            <p>
              <strong style={{ color: "var(--brand-white)" }}>3. Letting the loudest skeptic block the budget.</strong> One operator on my advisory portfolio talked the CFO out of a $4,800/year tool license that would have saved the ops team eight hours a week. The skeptic was not the budget owner. The ops team was. I should have routed the request through them, not through the all-hands.
            </p>
          </div>

          {/* CTA — one real question (Builder pillar close) */}
          <p className="mt-16 text-xl italic" style={{ color: "var(--brand-white)" }}>
            Who is the Anh in your team right now, hand-reconciling something they should not have to?
          </p>
          <p className="mt-4 text-base" style={{ color: "var(--brand-pastel)" }}>
            Find them on Monday. That is the rollout.
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

          {/* DRU. SIGNATURE: official end-of-post logo */}
          <div className="mt-20 flex justify-end">
            <div
              className="px-5 py-2 text-xl font-extrabold"
              style={{
                background: "transparent",
                color: "var(--brand-lime)",
                border: "2px solid var(--brand-lime)",
                letterSpacing: "0.28em",
                transform: "rotate(-2deg)",
                fontFamily: "'Outfit', system-ui, sans-serif",
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
