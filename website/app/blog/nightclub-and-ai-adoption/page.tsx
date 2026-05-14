import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "What running a nightclub taught me about AI adoption",
  description:
    "Every AI rollout has the same room: 70% locked in, 20% pretending, 10% gone. The mistake operators make is trying to convert the 20%.",
  alternates: { canonical: "/blog/nightclub-and-ai-adoption" },
  openGraph: {
    title: "What running a nightclub taught me about AI adoption",
    description:
      "70% locked in, 20% pretending, 10% gone. Stop selling to the skeptics. Find the 70%.",
    type: "article",
    url: "/blog/nightclub-and-ai-adoption",
    images: [{ url: "/images/blog/nightclub-and-ai-adoption.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#AIOperator", "#Operations", "#Skylight", "#FutureOfWork"];

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
              <span>Hospitality</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
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
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            The DJ booth at Skylight is two metres above the dancefloor. From there you can see who&apos;s locked in and who&apos;s about to leave.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>I learned this watching the same thing happen with AI rollouts in three of my advisory portfolio companies last year. The pattern is identical: <strong style={{ color: "var(--brand-white)" }}>70% locked in, 20% pretending, 10% already gone.</strong></p>
            <p>The mistake most operators make is trying to convert the 20% who are pretending. You can&apos;t. They&apos;re not for you yet. The energy you&apos;re spending on them is energy you&apos;re stealing from the 70% who are with you.</p>
          </div>

          <h2 className="mt-14 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>The night I <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>learned this.</em></h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>October 2023. Friday at Skylight. The DJ before our headliner had cleared the floor, the wrong way. Crowd was milling toward the exit. Our headliner had been in the wings for ten minutes refusing to come on until the room reset.</p>
            <p>The floor manager wanted to call last-track on the warm-up DJ. I told him to do the opposite: <strong style={{ color: "var(--brand-white)" }}>cut the music for 90 seconds, drop the lights, let the headliner walk out into silence and start cold.</strong></p>
            <p>We lost the 20% who&apos;d already mentally checked out. The 70% who&apos;d been waiting locked in harder. Best second set we did that quarter.</p>
          </div>

          <h2 className="mt-14 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>How this maps <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>to AI rollouts.</em></h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>Every AI adoption I&apos;ve watched go well at Xood, Skylight, and three advisory portfolio companies followed the same pattern:</p>
            <p><strong style={{ color: "var(--brand-white)" }}>Stop selling the platform to the skeptics.</strong> Find your 70%, the ops people who already feel the work is broken and are looking for a way to fix it. Build the workflow with them. Let them ship something useful in week one.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>Make the win visible.</strong> The skeptics don&apos;t change their mind from a Slack post. They change their mind when they see Anh from finance close her month-end three days early because she used Claude to reconcile the bank export.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>Don&apos;t promote the AI. Promote the operator.</strong> Anh got the credit. Claude was a tool, not a brand. The next week three other people on her team asked her how she did it.</p>
          </div>

          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>The trap</div>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              Treating AI adoption like a top-down rollout, pick a vendor, push a license to everyone, run a training. You&apos;ll get 70% locked in, 20% pretending, 10% gone. Same as the dancefloor. But you&apos;ll have spent your CFO&apos;s budget on the 30% who weren&apos;t going to convert.
            </p>
            <p className="mt-5 text-lg italic" style={{ color: "var(--brand-white)", fontFamily: "'Plus Jakarta Sans', serif", fontSize: "clamp(20px, 2.4vw, 28px)" }}>
              The crowd doesn&apos;t change because you turn the music up. It changes because <span style={{ color: "var(--brand-lime)" }}>the people in the front row are dancing.</span>
            </p>
          </div>

          <p className="mt-12 text-lg italic" style={{ color: "var(--brand-pastel)" }}>
            What&apos;s the workflow your 70% are already trying to fix?
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span key={h} className="rounded-full px-3 py-1 text-xs font-bold uppercase" style={{ background: "rgba(173,251,73,0.12)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}>{h}</span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
