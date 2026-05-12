import Link from "next/link";

/**
 * Bartlett "DOAC showcase" equivalent — full-bleed feature for The Tuesday Brief.
 * Logo / wordmark · long-form headline · CTA.
 */
export default function NewsletterShowcase() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
    >
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(var(--brand-pastel) 1px, transparent 1px), linear-gradient(90deg, var(--brand-pastel) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />
      {/* lime glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full opacity-[0.08] blur-3xl" style={{ background: "var(--brand-lime)" }} />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-10">
        {/* Wordmark */}
        <div
          className="inline-flex items-center gap-3 rounded-full border px-5 py-2 text-[10px] font-extrabold uppercase"
          style={{ borderColor: "rgba(173,251,73,0.4)", color: "var(--brand-lime)", letterSpacing: "0.22em" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-lime)" }} />
          The Tuesday Brief
        </div>

        <h2
          className="mt-10 font-extrabold tracking-tight"
          style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.035em" }}
        >
          One operator essay.
          <br />
          <em style={{ color: "var(--brand-lime)", fontStyle: "italic" }}>Every Tuesday.</em>
          <br />
          8AM Vietnam time.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--brand-pastel)" }}>
          AI workflows, operator lessons, and the occasional story from running Skylight at 2am.
          No fluff, no framework worship, no &ldquo;leverage your synergies.&rdquo;
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
            style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
          >
            Subscribe — it&apos;s free
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[var(--brand-lime)] hover:text-[var(--brand-jungle)] hover:border-[var(--brand-lime)]"
            style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-white)", letterSpacing: "0.05em" }}
          >
            Read a sample issue
          </Link>
        </div>
      </div>
    </section>
  );
}
