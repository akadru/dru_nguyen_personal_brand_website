import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why I implemented EOS at Skylight (and what I'd do differently)",
  description:
    "Nine months to buy-in. Six numbers on a wall. What I kept, what I'd cut if I started today, and the single hospitality tweak that made EOS click.",
  alternates: { canonical: "/blog/eos-at-skylight" },
  openGraph: {
    title: "Why I implemented EOS at Skylight (and what I'd do differently)",
    description:
      "Nine months to buy-in. Six numbers on a wall. What I kept, what I'd cut, and the tweak that made EOS click in hospitality.",
    type: "article",
    url: "/blog/eos-at-skylight",
    images: [{ url: "/images/blog/eos-at-skylight.webp", width: 1200, height: 630 }],
  },
};

const HASHTAGS = ["#EOS", "#Operations", "#Skylight", "#ScholarlyWarrior"];

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
              <span>EOS</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>5 MIN READ</span><span style={{ color: "var(--brand-pastel)" }}>·</span>
              <span style={{ color: "var(--brand-pastel)" }}>13 MAY 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>
              Why I implemented EOS at Skylight{" "}
              <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>(and what I&apos;d do differently).</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image src="/images/blog/eos-at-skylight.webp" alt="A Skylight operator's wall, handwritten weekly scoreboard in soft tungsten light" fill priority sizes="(max-width: 1300px) 100vw, 1300px" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "var(--font-prose)" }}>
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            September 2020. Skylight is six years old, four floors of rooftop hospitality in Nha Trang, doing real numbers. I&apos;m sitting in the office at 11pm reviewing the third version of a Friday-night schedule the floor manager has rewritten because every senior person&apos;s quit. Again.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>For two years I blamed the team. Then I read{" "}
              <a href="https://www.eosworldwide.com/traction-book" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}><em>Traction</em></a>{" "}
              by Gino Wickman with my brother TK over a weekend.</p>
            <p>The problem wasn&apos;t the team. It was that the team had no system to hold the standard. <strong style={{ color: "var(--brand-white)" }}>I was the system. And I was the bottleneck.</strong></p>
            <p>We implemented{" "}
              <a href="https://www.eosworldwide.com/" target="_blank" rel="noopener" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>EOS (the Entrepreneurial Operating System)</a>{" "}
              over the next nine months. The team, the same team, started running plays I&apos;d been holding in my head. Nine months in, we hit a Friday night where every section ran clean and I didn&apos;t get a single message until close. That night I realized what &ldquo;the system holds the standard&rdquo; actually means.</p>
          </div>

          <h2 className="mt-14 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>What I <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>kept.</em></h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p><strong style={{ color: "var(--brand-white)" }}>Scorecard.</strong> Six numbers, updated weekly, every Monday at L10. F&amp;B revenue, cover count, average ticket, theft variance, complaint count, staff retention. If a number&apos;s red two weeks running, it goes to IDS.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>Quarterly Rocks.</strong> Each section lead picks one to three Rocks. They own them. If they miss, the Rock comes back to L10. No &ldquo;stretch&rdquo; Rocks, only what they can actually finish.</p>
            <p><strong style={{ color: "var(--brand-white)" }}>Issues list.</strong> Everything that isn&apos;t an emergency goes here. We work it bottom-up at L10. The discipline isn&apos;t writing issues, it&apos;s letting them sit and discussing them in the right context.</p>
          </div>

          <h2 className="mt-14 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--brand-white)", letterSpacing: "-0.02em" }}>What I&apos;d <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>cut today.</em></h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]" style={{ color: "var(--brand-pastel)" }}>
            <p>The People Analyzer template. EOS gives you a 3x3 matrix (Get it / Want it / Capacity, versus Core Values). In hospitality, where I&apos;m hiring eighty people across four sections, that matrix is too slow. I&apos;d replace it with a sixty-second walk-the-floor rubric per shift: did they own a section, did they ask for help, did they leave clean.</p>
            <p>The 1-page Vision/Traction Organizer. Beautiful in theory. In practice, we filled it out, framed it, and never looked at it again. What stuck was a single sentence on every section lead&apos;s whiteboard: <em>What does winning this quarter look like for your section?</em></p>
          </div>

          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>The one thing I wish I&apos;d done from week one</div>
            <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
              We implemented EOS in the office before we implemented it on the floor. Three months wasted. The day we put a Skylight scorecard on the wall behind the bar, sales target, last week&apos;s actual, today&apos;s pace, was the day staff started owning the number. Not because we asked them to. Because the number was visible.
            </p>
            <p className="mt-5 text-lg italic" style={{ color: "var(--brand-white)", fontFamily: "var(--font-prose)", fontSize: "clamp(20px, 2.4vw, 28px)" }}>
              Structure is freedom. But only when the structure is <span style={{ color: "var(--brand-lime)" }}>visible</span> to the people doing the work.
            </p>
          </div>

          <p className="mt-12 text-lg italic" style={{ color: "var(--brand-pastel)" }}>
            What&apos;s one number you could put on a wall this week?
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
