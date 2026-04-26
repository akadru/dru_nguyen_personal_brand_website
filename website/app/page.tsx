import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReadThis from "@/components/ReadThis";

const ventures = [
  { name: "Xood", role: "Co-Founder & MD — Commercial & Community", note: "AI data services · Vietnam" },
  { name: "Skylight", role: "Founder", note: "Rooftop hospitality · Nha Trang · 10+ years" },
  { name: "Tictag Singapore", role: "Advisor", note: "AI data services · Singapore" },
  { name: "East West Brewery", role: "Investor / Advisor", note: "F&B" },
  { name: "Nuen Motor", role: "Investor / Advisor", note: "Electric motorbikes" },
  { name: "GAM Entertainment", role: "Investor / Advisor", note: "Entertainment" },
];

const stats = [
  { n: "10+", label: "Years operating Skylight" },
  { n: "6", label: "Active ventures" },
  { n: "3", label: "Industries — F&B · AI · Entertainment" },
];

const press = [
  { outlet: "Zero Project Conference", year: "2026", title: "Speaking on inclusive AI and the future of data work in Southeast Asia.", img: "/images/dru-hero.jpg" },
  { outlet: "Tictag Singapore", year: "2026", title: "On stage at the Tictag x Zero Project keynote — \"Everyone can benefit from working with data.\"", img: "/images/dru-hero.jpg" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dru-nguyen" },
  { label: "Substack", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Threads", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Email", href: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed photo, big bold roles line, motivational quote */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/dru-hero.jpg"
            alt="Dru Nguyen speaking at Zero Project Conference 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,27,36,0.55) 0%, rgba(10,27,36,0.78) 60%, rgba(10,27,36,0.96) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,27,36,0.92) 0%, rgba(10,27,36,0.6) 45%, rgba(10,27,36,0.2) 75%, rgba(10,27,36,0.05) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ background: "var(--brand-lime)" }} />

        <div className="relative z-10 mx-auto max-w-[1300px] px-5 pt-32 pb-24 md:px-10 md:pt-44 md:pb-36 lg:min-h-[92vh] lg:flex lg:flex-col lg:justify-center">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Operator · AI Realist · Educator
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="mt-6 font-extrabold tracking-tight max-w-5xl"
              style={{ fontSize: "clamp(54px, 10vw, 144px)", lineHeight: 0.92, letterSpacing: "-0.035em", textShadow: "0 2px 30px rgba(10,27,36,0.6)" }}
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
              className="mt-10 max-w-3xl text-base leading-relaxed md:text-xl"
              style={{ color: "var(--brand-pastel)" }}
            >
              <strong style={{ color: "var(--brand-white)" }}>Operator. Co-Founder &amp; MD of Xood. Founder of Skylight.</strong> Advisor to Tictag Singapore, East West Brewery, Nuen Motor &amp; GAM Entertainment. AI-using operator becoming an educator.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p
              className="mt-8 max-w-3xl text-lg italic md:text-2xl"
              style={{ color: "var(--brand-white)", fontFamily: "'Plus Jakarta Sans', serif" }}
            >
              &ldquo;Knowledge with application is wisdom.&rdquo;
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
                className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
                style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
              >
                Read the Content
              </Link>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div
              className="mt-14 inline-flex items-center gap-3 self-start rounded-full border px-4 py-2 text-xs font-bold uppercase backdrop-blur-sm"
              style={{ borderColor: "rgba(173,251,73,0.45)", color: "var(--brand-lime)", letterSpacing: "0.18em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-lime)" }} />
              Speaking · Zero Project Conference · 2026
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE STRIP — continuous brand line */}
      <div
        className="overflow-hidden border-t border-b py-6"
        style={{ background: "var(--brand-lime)", borderColor: "var(--brand-jungle)" }}
      >
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {["Care.", "Discipline.", "Grit.", "Operator.", "Founder.", "Educator.", "Care.", "Discipline.", "Grit.", "Knowledge with application is wisdom."].map((w, i) => (
                <span key={i} className="text-2xl font-extrabold uppercase md:text-4xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                  {w} <span style={{ color: "var(--brand-myrtle)" }}>★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* THREE BRAND-PILLAR CARDS (Gary Vee pattern) */}
      <section className="py-16 md:py-24" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <Link
                href="/about"
                className="group flex h-full flex-col justify-between rounded-2xl p-8 transition-shadow hover:shadow-xl md:p-10"
                style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", borderTop: "3px solid var(--brand-lime)" }}
              >
                <div>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
                    Dru Nguyen
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                    Operates <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>businesses.</em>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                    Skylight, Xood, Tictag — plus advisory across East West Brewery, Nuen Motor, GAM. Ten years of real ops, real teams, real P&amp;Ls.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                  My Story →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link
                href="/content"
                className="group flex h-full flex-col justify-between rounded-2xl p-8 transition-shadow hover:shadow-xl md:p-10"
                style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", borderTop: "3px solid var(--brand-jungle)" }}
              >
                <div>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.22em" }}>
                    AI Operator
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                    Teaches <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>what works.</em>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--brand-jungle)" }}>
                    AI workflows, frameworks, and operator essays — three pillars (Thinker, Builder, Human) across LinkedIn, Substack, and Facebook.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
                  Read the Content →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link
                href="/ventures"
                className="group flex h-full flex-col justify-between rounded-2xl p-8 transition-shadow hover:shadow-xl md:p-10"
                style={{ background: "var(--brand-tea)", color: "var(--brand-jungle)", borderTop: "3px solid var(--brand-myrtle)" }}
              >
                <div>
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.22em" }}>
                    Ventures
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                    Six businesses. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Three industries.</em>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--brand-body)" }}>
                    Hospitality, AI data, entertainment. Founding, advising, investing — the lived material the content comes from.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-jungle)", letterSpacing: "0.18em" }}>
                  See the Portfolio →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER — portrait + bio block (Gary Vee pattern) */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16 lg:gap-24">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/dru-portrait-serious.jpg"
                  alt="Dru Nguyen portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute left-0 top-0 h-1.5 w-24" style={{ background: "var(--brand-lime)" }} />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <div className="section-label">The Operator</div>
                <h2
                  className="mt-4 font-extrabold tracking-tight"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}
                >
                  Built across <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>three industries.</em>
                  <br />
                  <span style={{ color: "var(--brand-jungle)" }}>Teaching what actually works.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  Most AI creators have never run operations. I have. <strong>Skylight</strong> for ten years.{" "}
                  <strong>Xood</strong> from zero. Advisory across Tictag, East West Brewery, Nuen Motor, GAM
                  Entertainment. The frameworks here are stress-tested in real businesses with real teams.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                  style={{ color: "var(--brand-jungle)", letterSpacing: "0.12em", borderBottom: "2px solid var(--brand-lime)" }}
                >
                  Read the full story →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ background: "var(--brand-tea)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-6 py-14 sm:grid-cols-3 sm:gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) as 0 | 1 | 2} className="text-center">
                <div className="text-6xl font-extrabold md:text-7xl" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.04em" }}>
                  {s.n}
                </div>
                <div className="mt-2 text-sm font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* READ THIS — Gary Vee filterable content hub */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Read This</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
                What I&apos;m thinking <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>this week.</em>
              </h2>
              <Link href="/blog" className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-jungle)", letterSpacing: "0.12em", borderBottom: "2px solid var(--brand-lime)" }}>
                See all →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-12">
              <ReadThis />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED — The Fight signature story (Muay Thai photo) */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/dru-muay-thai-2019.jpg"
                  alt="Dru wins by TKO at the Da Nang Muay Thai exhibition fight"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-extrabold uppercase" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.12em" }}>
                  The Fight · 2019
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <div className="section-label" style={{ color: "var(--brand-lime)" }}>Signature Story</div>
                <h2 className="mt-4 font-extrabold tracking-tight" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Fear doesn&apos;t go away.
                  <br />
                  <span style={{ color: "var(--brand-lime)" }}>You just stop letting it decide for you.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                  Da Nang. Muay Thai exhibition. I pissed myself backstage from nerves and won by TKO in round two.
                  Same lesson every operator faces — the call you&apos;re avoiding is the one that grows you.
                </p>
                <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
                  All five stories →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS SHELF — operator playbooks (Gary Vee books pattern) */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>The Frameworks</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Playbooks <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>I actually use.</em>
              </h2>
              <Link href="/blog" className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
                Read deeper →
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {[
              { title: "S.I.F.P.", subtitle: "Situation · Insight · Framework · Provocation", body: "The writing framework behind every long-form post." },
              { title: "EOS for Pre-Revenue", subtitle: "Operating System · 7 Components", body: "EOS adapted for startups before product-market fit." },
              { title: "Four-Layer Review", subtitle: "Meaning · Relationship · Identity · Action", body: "How to draft a hard message that lands without breaking trust." },
              { title: "AI Operator Stack", subtitle: "Claude · Workflows · Templates", body: "The exact prompts running Xood's commercial team in 30 min/day." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="group flex h-full flex-col rounded-xl p-7 transition-transform hover:-translate-y-1"
                  style={{ background: "rgba(242,242,242,0.04)", border: "1px solid rgba(176,190,197,0.2)" }}
                >
                  <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>Framework</div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight" style={{ letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.12em" }}>{f.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(242,242,242,0.78)" }}>{f.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.18em" }}>
                    Coming soon →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS / FEATURED MEDIA — Gary Vee pattern */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">In the Press</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
              Recent <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>features &amp; appearances.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {press.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) as 0 | 1}>
                <article className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--brand-pastel)", background: "#fff" }}>
                  <div className="relative aspect-[16/9]">
                    <Image src={p.img} alt={p.outlet} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}>
                      <span>{p.outlet}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <p className="mt-3 text-xl font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-tea)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Companies &amp; Investments</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
              Six businesses. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>Three industries.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className="h-full rounded-xl p-7 transition-transform hover:-translate-y-1"
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

      {/* SPEAKING — laughing portrait + CTA */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <Reveal>
              <div>
                <div className="section-label">Speaking · Coaching · Advisory</div>
                <h2 className="mt-4 font-extrabold tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
                  Bring Dru to <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>your team.</em>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--brand-body)" }}>
                  EO forum sessions. Founder offsites. AI workshops. EOS implementation coaching. Vietnam, SEA,
                  international. Operator-to-operator only — no theory, no hype.
                </p>
                <Link
                  href="/speaking"
                  className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider"
                  style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
                >
                  Book a conversation
                </Link>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/dru-portrait-laughing.jpg"
                  alt="Dru Nguyen — warm portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute right-5 bottom-5 rounded-full px-3 py-1 text-xs font-extrabold uppercase" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.12em" }}>
                  The Warm Teacher
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEWSLETTER — mid/bottom prominent (Garyveekly pattern) */}
      <section className="py-24 md:py-32" style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)" }}>The Tuesday Brief</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-4 grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h2 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
                One operator essay.
                <br />
                <span style={{ color: "var(--brand-lime)" }}>Every Tuesday.</span>
                <br />
                8AM Vietnam time.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                AI workflows, operator lessons, and the occasional story from running Skylight at 2am. No fluff, no
                framework worship, no &ldquo;leverage your synergies.&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <form className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row" action="/newsletter" method="get">
              <label htmlFor="hp-email" className="sr-only">Email</label>
              <input
                id="hp-email"
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
        </div>
      </section>

      {/* WHERE TO FIND ME — 10-platform social grid */}
      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[1300px] px-5 md:px-10">
          <Reveal>
            <div className="section-label">Where to find me</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--brand-jungle)" }}>
              Pick a channel. <em style={{ color: "var(--brand-myrtle)", fontStyle: "italic" }}>I&apos;m there.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="rounded-xl border p-5 text-center transition-colors hover:bg-[var(--brand-jungle)] hover:text-[var(--brand-lime)]"
                  style={{ borderColor: "var(--brand-pastel)", background: "var(--brand-white)", color: "var(--brand-jungle)" }}
                >
                  <span className="text-sm font-bold uppercase" style={{ letterSpacing: "0.12em" }}>{s.label}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
