import Link from "next/link";
import Reveal from "@/components/Reveal";

const ventures = [
  { name: "Xood", role: "Co-Founder & MD — Commercial & Community", href: "#", note: "AI data services · Vietnam" },
  { name: "Skylight", role: "Founder", href: "#", note: "Rooftop hospitality · Nha Trang · 10+ years" },
  { name: "Tictag Singapore", role: "Advisor", href: "#", note: "AI data services · Singapore" },
  { name: "East West Brewery", role: "Investor / Advisor", href: "#", note: "F&B" },
  { name: "Nuen Motor", role: "Investor / Advisor", href: "#", note: "Electric motorbikes" },
  { name: "GAM Entertainment", role: "Investor / Advisor", href: "#", note: "Entertainment" },
];

const pillars = [
  {
    label: "The Thinker",
    pct: "40%",
    blurb: "Original POV on AI, business operations, and workflow design. Tactical utility — the prompts, templates, and frameworks I actually use.",
  },
  {
    label: "The Builder",
    pct: "35%",
    blurb: "Behind-the-scenes of building companies. Real operator decisions across Xood, Skylight, and the advisory portfolio.",
  },
  {
    label: "The Human",
    pct: "25%",
    blurb: "Real moments, family, Vietnam, the EO forum, the Scholarly Warrior identity work that holds the rest together.",
  },
];

const stats = [
  { n: "10+", label: "Years operating Skylight" },
  { n: "6", label: "Active ventures" },
  { n: "3", label: "Industries — F&B, AI, Entertainment" },
];

const featured = [
  { kind: "Substack", title: "How I use Claude to run Xood's commercial team in 30 minutes a day", read: "6 MIN READ" },
  { kind: "LinkedIn", title: "What running a nightclub taught me about AI adoption", read: "4 MIN READ" },
  { kind: "Carousel", title: "EOS applied to a pre-revenue startup — the 7-component teardown", read: "5 MIN READ" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
      >
        {/* lime accent bar */}
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[1200px] px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-28">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Operator · AI Realist · Scholarly Warrior
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(48px, 9vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              I&apos;m Dru.
              <br />
              <span style={{ color: "var(--brand-lime)" }}>I run businesses.</span>
              <br />
              I teach what works.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="mt-10 max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--brand-pastel)" }}
            >
              Operator, co-founder, investor across hospitality, AI data, and entertainment. Most AI creators have
              never run operations. I have. The content here comes from real work, real decisions, real outcomes —
              shared so the next operator doesn&apos;t have to figure it out alone.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Get the Newsletter
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                Read the Content
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div
            className="grid grid-cols-1 gap-6 border-b border-t py-10 sm:grid-cols-3 sm:gap-12 sm:py-14"
            style={{ borderColor: "var(--brand-pastel)" }}
          >
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) as 0 | 1 | 2} className="text-center">
                <div className="text-5xl font-extrabold md:text-6xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.04em" }}>
                  {s.n}
                </div>
                <div className="mt-2 text-sm font-semibold" style={{ color: "var(--brand-myrtle)" }}>
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="py-24" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="section-label">The Content</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
              Three pillars. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>One operating system.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
              Every post fits one of three pillars. If it doesn&apos;t, it doesn&apos;t ship.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="h-full rounded-xl p-8 transition-shadow hover:shadow-lg"
                  style={{ background: "var(--brand-tea)", borderTop: "2px solid var(--brand-myrtle)" }}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="section-label">{p.label}</div>
                    <div className="text-sm font-extrabold" style={{ color: "var(--brand-jungle)" }}>{p.pct}</div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--brand-body)" }}>
                    {p.blurb}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT */}
      <section className="py-24" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="section-label">Featured</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
                Recent <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>essays & teardowns.</em>
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--brand-jungle)", letterSpacing: "0.08em" }}
              >
                See all <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) as 0 | 1 | 2}>
                <Link
                  href="/blog"
                  className="group block h-full overflow-hidden rounded-xl border transition-shadow hover:shadow-lg"
                  style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}
                >
                  <div className="aspect-[16/10] w-full" style={{ background: "var(--brand-jungle)", position: "relative" }}>
                    <div className="absolute inset-0 flex items-end p-5">
                      <span className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                        {p.kind}
                      </span>
                    </div>
                    <div className="absolute right-5 top-5 h-1 w-12" style={{ background: "var(--brand-lime)" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </h3>
                    <div className="mt-4 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                      {p.read}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="py-24" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="section-label">The Ventures</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
              Six businesses. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Three industries.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
              Operating, founding, and advising across hospitality, AI data services, and entertainment.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="h-full rounded-xl p-7"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", borderTop: "3px solid var(--brand-lime)" }}
                >
                  <div className="text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                    {v.note}
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{v.name}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--brand-pastel)" }}>{v.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING / STAKES */}
      <section className="py-24" style={{ background: "var(--brand-tea)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="section-label">The Stakes</div>
              <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
                Most AI advice comes from people who&apos;ve never run a P&amp;L.
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
                I&apos;ve run them across three industries — hospitality, AI services, entertainment. The frameworks
                here are stress-tested in real businesses with real teams, not pulled from theory or hype cycles.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div
                className="rounded-xl border-2 p-8 md:p-10"
                style={{ background: "var(--brand-white)", borderColor: "var(--brand-jungle)" }}
              >
                <div className="section-label">Bring Dru to your team</div>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl" style={{ color: "var(--brand-jungle)" }}>
                  Speaking · Coaching · Advisory
                </h3>
                <p className="mt-4 leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  EO forum sessions, founder offsites, AI workshops, EOS implementation coaching. Vietnam, SEA,
                  international.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
                >
                  Start a conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className="py-24" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>The Newsletter</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-4 grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                One operator essay.
                <br />
                <span style={{ color: "var(--brand-lime)" }}>Every Tuesday.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                Sent at 8am Vietnam time. AI workflows, operator lessons, and the occasional story from running
                Skylight at 2am. No fluff, no framework worship, no &ldquo;leverage your synergies.&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <form className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row" action="/contact" method="get">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@operator.email"
                className="flex-1 rounded-full px-6 py-4 text-base outline-none"
                style={{ background: "var(--brand-white)", color: "var(--brand-jungle)" }}
              />
              <button
                type="submit"
                className="rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
              >
                Subscribe
              </button>
            </form>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 text-xs uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}>
              #DoingGoodWithData · #FutureOfWork
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
