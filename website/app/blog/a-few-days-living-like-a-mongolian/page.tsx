import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const SLUG = "a-few-days-living-like-a-mongolian";
const TITLE = "A Few Days Living Like a Mongolian Changed How I Think About Scale";
const DESCRIPTION =
  "I spent a few days living like a Mongolian in the time of Genghis Khan, on behalf of EO, hosted by EO Mongolia. Three lessons on hardship, clear roles, and why the empires that last are built on systems, not heroes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: `/blog/${SLUG}`,
    // JPG (not WebP) so LinkedIn and Facebook render the share card.
    images: [{ url: `/images/blog/${SLUG}-og.jpg`, width: 3840, height: 2016 }],
  },
};

const HASHTAGS = ["#EOMongolSpirit", "#Leadership", "#Xood", "#ScholarlyWarrior"];

const body = "space-y-6 text-lg leading-[1.8]";
const muted = { color: "var(--brand-pastel)" } as const;
const strong = { color: "var(--brand-white)" } as const;
const accent = { color: "var(--brand-lime)", fontStyle: "italic" } as const;
const h2Class = "mt-14 text-3xl font-extrabold tracking-tight md:text-4xl";
const h2Style = { color: "var(--brand-white)", letterSpacing: "-0.02em" } as const;

const PHOTO_DIR = "/images/blog/mongolia";

type Shot = { src: string; alt: string };

function Photo({ shot, wide }: { shot: Shot; wide?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${wide ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[2/3]"}`}>
      <Image src={`${PHOTO_DIR}/${shot.src}.jpg`} alt={shot.alt} fill sizes="(max-width: 760px) 100vw, 760px" className="object-cover" />
    </div>
  );
}

function Single({ shot, caption }: { shot: Shot; caption: string }) {
  return (
    <figure className="mt-14">
      <div className="mx-auto max-w-[560px]">
        <Photo shot={shot} wide />
      </div>
      <figcaption className="mt-4 text-center text-sm" style={{ color: "var(--brand-pastel)" }}>{caption}</figcaption>
    </figure>
  );
}

function Pair({ a, b, caption }: { a: Shot; b: Shot; caption: string }) {
  return (
    <figure className="mt-14">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <Photo shot={a} />
        <Photo shot={b} />
      </div>
      <figcaption className="mt-4 text-center text-sm" style={{ color: "var(--brand-pastel)" }}>{caption}</figcaption>
    </figure>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-14 text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
      {children}
    </div>
  );
}

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
              <span>Scholarly Warrior</span><span style={muted}>·</span>
              <span>Leadership</span><span style={muted}>·</span>
              <span style={muted}>5 MIN READ</span><span style={muted}>·</span>
              <span style={muted}>21 NOV 2026</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>
              A few days living like a Mongolian changed{" "}
              <em style={accent}>how I think about scale.</em>
            </h1>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1300px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal delay={3}>
            <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-2xl">
              <Image
                src={`/images/blog/${SLUG}.webp`}
                alt="Dru in a traditional Mongolian deel and hat beside Bactrian camels on the grassland, hills behind"
                fill
                priority
                sizes="(max-width: 1300px) 100vw, 1300px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] px-5 md:px-10" style={{ fontFamily: "var(--font-prose)" }}>
          <p className="text-xl leading-relaxed md:text-2xl" style={{ color: "var(--brand-white)", borderLeft: "4px solid var(--brand-lime)", paddingLeft: "20px" }}>
            I spent a few days living like a Mongolian in the time of Genghis Khan.
          </p>

          <div className={`mt-10 ${body}`} style={muted}>
            <p>
              No signal. No shortcuts. You live off what the land gives you, nothing more. The weather there swings from
              minus 40 to plus 40 degrees in a single year. It is one of the harshest places a human being can try to
              survive.
            </p>
            <p>
              And somehow, out of that exact hardship, a small nomadic people built the largest land empire the world has
              ever seen. An empire that didn&apos;t collapse when its founder died. It outlasted him by generations.
            </p>
            <p>
              I went on this trip on behalf of EO, and EO Mongolia hosted us for Mongol Spirit 2026 in Gorkhi-Terelj
              National Park. I came home with three lessons I can&apos;t stop thinking about.
            </p>
          </div>

          <Single
            shot={{ src: "dru-eo-flag", alt: "Dru talking with a fellow EO member under an Entrepreneurs' Organization flag, mountains behind" }}
            caption="EO Mongol Spirit, hosted by EO Mongolia. Gorkhi-Terelj National Park, August 2026."
          />

          {/* Lesson 1 */}
          <Kicker>Lesson 1</Kicker>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl" style={h2Style}>
            Hardship isn&apos;t the obstacle to success. <em style={accent}>It&apos;s what builds it.</em>
          </h2>
          <div className={`mt-6 ${body}`} style={muted}>
            <p>
              We have it backwards in the modern world. We treat comfort as the goal and hardship as the thing to engineer
              out of our lives. Faster, easier, smoother, softer.
            </p>
            <p>
              <strong style={strong}>But grit is not earned in comfort. It is earned in the cold.</strong>
            </p>
            <p>
              Standing in that landscape, you understand why the Mongols were who they were. They didn&apos;t become tough
              despite the conditions. They became tough because of them. The environment set a standard, and everyone who
              survived it met that standard or didn&apos;t survive.
            </p>
            <p>
              That is true of people, and it is true of teams. The teams that get strong are the ones that went through
              something hard together, not the ones that had everything handed to them. If you are a founder trying to
              protect your team from every difficulty, you might be stealing the exact thing that would make them strong.
            </p>
          </div>

          <Pair
            a={{ src: "dru-golden-eagle", alt: "Dru smiling with a golden eagle perched on his gloved arm in front of a ger" }}
            b={{ src: "dru-eagle-hunter", alt: "Dru holds a golden eagle aloft while the Mongolian eagle hunter looks on" }}
            caption="A golden eagle, and the hunter who trained it. Grit is earned in the cold."
          />

          {/* Lesson 2 */}
          <Kicker>Lesson 2</Kicker>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl" style={h2Style}>
            Everyone and everything <em style={accent}>had a clear role.</em>
          </h2>
          <div className={`mt-6 ${body}`} style={muted}>
            <p>
              In a nomadic system with no margin for waste, there was no confusion about who does what. Every person, every
              animal, every tool had a defined job. The horse had a role. The herder had a role. The scout, the archer, the
              leader, all of it was clear.
            </p>
            <p>
              <strong style={strong}>When survival is on the line, ambiguity is a luxury you cannot afford.</strong>
            </p>
            <p>
              Most modern companies carry a level of role confusion that would have killed a Mongol camp in a week. Three
              people think they own the same decision. Nobody owns the one that actually matters. Work falls through the
              cracks not because people are lazy, but because nobody was clear on whose job it was.
            </p>
            <p>
              This is the Alignment letter in the operating system I teach, C.L.E.A.R. The customer or the mission is the
              hero. Your job as a leader is to make sure every person around you knows their seat and their result. Clear
              roles are not bureaucracy. They are what lets a team move fast without tripping over each other.
            </p>
          </div>

<Single
            shot={{ src: "dru-horseback-fistbump", alt: "Dru on horseback fist-bumping a rider in traditional Mongol armour" }}
            caption="The horse had a role. The rider had a role. Nobody wondered whose job it was."
          />

          {/* Lesson 3 */}
          <Kicker>Lesson 3</Kicker>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl" style={h2Style}>
            Genghis Khan&apos;s real genius wasn&apos;t conquest. <em style={accent}>It was the system.</em>
          </h2>
          <div className={`mt-6 ${body}`} style={muted}>
            <p>This is the one that hit me hardest.</p>
            <p>
              I&apos;ve been reading a book called <em>Strategy Is Attitude</em>, and it makes an argument that reframed the
              whole trip for me. The claim is this: for fifty years we have treated strategy as a conscious, analytical
              skill. We built better tools, better frameworks, better spreadsheets. And the failure rate didn&apos;t move.
              Because real strategic judgment doesn&apos;t live in the conscious mind. It lives in attitude, in instinct, in
              how a person is trained to see reality before they even start analyzing.
            </p>
            <p>
              Here is the part that stayed with me. According to the author, only one leader in history built a command
              system that actually installed this capability in others. One leader who didn&apos;t just win battles, but
              mass-produced strategists who could win without him in the room.
            </p>
            <p className="text-2xl font-extrabold md:text-3xl" style={{ color: "var(--brand-lime)", fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}>
              Genghis Khan.
            </p>
            <p>
              Alexander the Great couldn&apos;t do it. His empire fractured the moment he died. Napoleon couldn&apos;t do it.
              No modern corporation has truly done it either.
            </p>
            <p>
              Genghis built something different. He built a system that produced strategic leaders again and again, so the
              empire didn&apos;t depend on his presence. It depended on the structure he created. That is why it outlasted
              him.
            </p>
            <p>
              <strong style={strong}>And that is exactly the problem we are solving at Xood.</strong>
            </p>
          </div>

          <Single
            shot={{ src: "dru-horseback-rider", alt: "Dru on horseback beside a rider in Mongol armour, open sky above" }}
            caption="Riding beside a horseman in Mongol armour. The empire outlasted its founder."
          />

          <h2 className={h2Class} style={h2Style}>
            Most businesses run on heroes. <em style={accent}>That&apos;s the trap.</em>
          </h2>
          <div className={`mt-6 ${body}`} style={muted}>
            <p>
              Think about your own company. The results probably depend on a few people who just know how to get things
              done. The one person who understands the real process. The one who holds the client relationship. The one who
              can fix the thing when it breaks.
            </p>
            <p>They are your heroes. And they are also your biggest risk.</p>
            <p>
              Because when they leave, the results leave with them.{" "}
              <strong style={strong}>You didn&apos;t build a business. You built a dependency with a logo on it.</strong>
            </p>
            <p>
              This is the Execution letter in C.L.E.A.R., and it is the whole game: repeatable beats heroic. At{" "}
              <Link href="/xood" style={{ color: "var(--brand-lime)", borderBottom: "1px dashed var(--brand-lime)" }}>Xood</Link>,
              every workflow has one clear role and delivers one clear result. A builder designs the workflow once, and
              anyone can use it to get the same outcome. The system produces the result, not one irreplaceable person.
            </p>
            <p>
              That is the same principle Genghis understood 800 years ago. The founder&apos;s job is not to be the hero. It is
              to build the thing that no longer needs the hero.
            </p>
          </div>

          <h2 className={h2Class} style={h2Style}>
            The last lesson was <em style={accent}>the quietest one.</em>
          </h2>
          <div className={`mt-6 ${body}`} style={muted}>
            <p>
              For a few days, with no signal and nowhere to be, I got to just be present. No notifications. No tabs. No next
              thing pulling at my attention.
            </p>
            <p>
              That might have been the most important lesson of all. You cannot see your business clearly, or your life
              clearly, when you never step far enough back to look at it. Sometimes the cold, quiet, disconnected place is
              where the thinking actually happens.
            </p>
          </div>

          <Single
            shot={{ src: "dru-eagle-wings", alt: "Dru looks up at a golden eagle spreading its wings on his arm, a ger and hills behind" }}
            caption="No signal. Nowhere to be."
          />

          <div className="mt-16 rounded-2xl p-8 md:p-10" style={{ background: "rgba(173,251,73,0.06)", border: "1px solid rgba(173,251,73,0.25)" }}>
            <div className="text-xs font-extrabold uppercase" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              The question I came home with
            </div>
            <p className="mt-5 italic" style={{ color: "var(--brand-white)", fontFamily: "var(--font-prose)", fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.3 }}>
              Does your company run on a <span style={{ color: "var(--brand-lime)" }}>system</span>, or on a few heroes?
            </p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed md:text-xl" style={muted}>
              <p>
                Be honest about the answer. Because the empires that last, in history and in business, are never built on
                one person. They are built on structure that outlives the person who started it.
              </p>
              <p>
                <strong style={strong}>That is the standard. Now the work is building toward it.</strong>
              </p>
            </div>
          </div>

          <p className="mt-12 text-lg italic" style={muted}>
            What is the one part of your business that would fall apart if your best person walked out tomorrow? That is
            where I would start.
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            {HASHTAGS.map((h) => (
              <span key={h} className="rounded-full px-3 py-1 text-xs font-bold uppercase" style={{ background: "rgba(173,251,73,0.12)", color: "var(--brand-lime)", letterSpacing: "0.08em" }}>
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
