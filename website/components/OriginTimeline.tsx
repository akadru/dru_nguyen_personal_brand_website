import Image from "next/image";
import Link from "next/link";

/**
 * Homepage origin story — six chapters on one horizontal track.
 *
 * Desktop (md+): SiteMotion pins the section and scrubs the track sideways as
 * you scroll down ([data-hscroll] / [data-hscroll-track] / [data-hscroll-bar]).
 * Mobile: a native swipe row with scroll-snap. With JS off or reduced motion,
 * the track simply scrolls horizontally, so nothing is ever hidden.
 *
 * Copy is drawn only from the About / Scholarly Warrior stories (no new claims).
 */
const CHAPTERS: {
  when: string;
  title: string;
  body: string;
  img?: string;
  alt?: string;
  pos?: string;
  /** Pull quote shown in place of a photo (chapters with no image). */
  quote?: string;
}[] = [
  {
    when: "Age 17 · San Diego",
    title: "The DJ Origin",
    body: "Music was my first real passion. I shared what I learned when DJ culture hoarded it. My first lesson in community.",
    img: "/images/stories/dj-origin.jpg",
    alt: "Dru behind the DJ decks as a teenager",
    pos: "center 30%",
  },
  {
    when: "2014 · Hanoi",
    title: "The Factory",
    body: "Walked away from the family steel business. One of the hardest calls I've made. You can't build your future on someone else's blueprint.",
    quote: "Not someone else's blueprint.",
  },
  {
    when: "Age 27 · Nha Trang",
    title: "The Move",
    body: "Left California with no Vietnamese and no network. Built Skylight from zero, and I've run it for over a decade.",
    img: "/images/ventures/skylight.jpg",
    alt: "Skylight Nha Trang rooftop",
  },
  {
    when: "2019 · Da Nang",
    title: "The Fight",
    body: "A Muay Thai exhibition fight. Terrified backstage. Won by TKO in round two. Fear doesn't go away. You stop letting it decide.",
    img: "/images/dru-muay-thai-2019.jpg",
    alt: "Dru wins by TKO at the Da Nang Muay Thai exhibition fight, 2019",
    pos: "center 25%",
  },
  {
    when: "2021 · Nha Trang",
    title: "EOS",
    body: "Years of chaos, blaming the team. Then EOS. Nine months before everyone bought in. Structure is freedom.",
    quote: "Structure is freedom.",
  },
  {
    when: "Now · Ho Chi Minh City",
    title: "Built with AI",
    body: "Three companies, two boards, AI in the loop. I share what actually works, so the next operator has a clearer path.",
    img: "/images/built/ai-workshop.jpg",
    alt: "Dru's team building with AI at a workshop in Vietnam",
  },
];

export default function OriginTimeline() {
  // The outer div is what React mounts/unmounts. GSAP's pin wraps the
  // <section> in a pin-spacer at runtime; without this wrapper React would try
  // to remove the section from a parent it no longer has (removeChild crash on
  // client-side navigation).
  return (
    <div>
    <section
      id="story"
      data-hscroll
      className="relative overflow-hidden py-16 md:flex md:h-[100svh] md:flex-col md:justify-center md:py-0"
      style={{ background: "var(--brand-jungle)", borderTop: "1px solid rgba(176,190,197,0.15)" }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="section-label" data-reveal>The Story</div>
        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display-heading" style={{ fontSize: "clamp(52px, 7vw, 110px)", color: "var(--brand-white)" }} data-reveal-text>
            How I got <span className="marker-highlight">here</span>
          </h2>
          <Link
            href="/about"
            className="editorial-link self-start text-sm font-bold uppercase tracking-wider md:self-end"
            style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}
          >
            The full story →
          </Link>
        </div>
      </div>

      {/* Track viewport: clips the track on desktop; native swipe on mobile */}
      <div
        data-hscroll-viewport
        data-lenis-prevent-touch
        className="mt-8 snap-x snap-mandatory scroll-px-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] md:mt-12 md:snap-none md:scroll-px-0 md:overflow-hidden [&::-webkit-scrollbar]:hidden"
      >
        <ol
          data-hscroll-track
          className="flex w-max gap-4 px-5 md:gap-6 md:px-10 min-[1400px]:pl-[max(2.5rem,calc((100%-1400px)/2+2.5rem))]"
          style={{ willChange: "transform" }}
        >
          {CHAPTERS.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl md:w-[min(440px,34vw)]"
              style={{ background: "rgba(242,242,242,0.04)", border: "1px solid rgba(176,190,197,0.2)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {c.img ? (
                  <Image
                    src={c.img}
                    alt={c.alt ?? c.title}
                    fill
                    sizes="(max-width: 768px) 82vw, 440px"
                    className="img-duotone object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={c.pos ? { objectPosition: c.pos } : undefined}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-end p-6"
                    style={{ background: "radial-gradient(120% 90% at 85% 15%, rgba(52,116,116,0.55), rgba(10,27,36,0) 60%), var(--brand-jungle)" }}
                  >
                    <span className="display-heading text-[36px] md:text-[clamp(40px,3.6vw,60px)]" style={{ color: "var(--brand-white)", opacity: 0.92 }}>
                      &ldquo;{c.quote}&rdquo;
                    </span>
                  </div>
                )}
                <span
                  className="display-heading absolute left-5 top-4"
                  style={{ fontSize: 56, color: "transparent", WebkitTextStroke: "1.5px var(--brand-lime)", lineHeight: 1 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="text-[10px] font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
                  {c.when}
                </div>
                <h3 className="display-heading mt-3" style={{ fontSize: "clamp(30px, 2.6vw, 40px)", color: "var(--brand-white)" }}>
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Scroll progress (desktop, driven by the pin scrub) */}
      <div className="mx-auto mt-10 hidden w-full max-w-[1400px] px-10 md:block" aria-hidden>
        <div className="h-[2px] w-full overflow-hidden" style={{ background: "rgba(176,190,197,0.18)" }}>
          <div data-hscroll-bar className="h-full w-full origin-left" style={{ background: "var(--brand-lime)", transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
    </div>
  );
}
