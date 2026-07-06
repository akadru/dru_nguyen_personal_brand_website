"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "ok" | "err";

export default function NewsletterPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    if (!email) {
      setStatus("err");
      setErrMsg("Email required.");
      return;
    }
    if (!supabase) {
      setStatus("err");
      setErrMsg("Newsletter is not yet configured.");
      return;
    }
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    if (error) {
      if (error.code === "23505") {
        setStatus("ok");
        return;
      }
      setStatus("err");
      setErrMsg(error.message);
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)", minHeight: "100vh" }}>
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
      <div className="mx-auto max-w-[900px] px-5 pt-32 pb-32 md:px-8 md:pt-40">
        <Reveal>
          <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>The Newsletter</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
            One operator essay.
            <br />
            <span className="marker-highlight">Every Tuesday.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
            Sent at 8am Vietnam time. AI workflows, operator lessons, and the occasional story from running Skylight
            at 2am. No fluff.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <form onSubmit={onSubmit} className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@operator.email"
              className="flex-1 rounded-full px-6 py-4 text-base outline-none"
              style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider disabled:opacity-50"
              style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.05em" }}
            >
              {status === "sending" ? "Sending…" : "Subscribe"}
            </button>
          </form>
          {status === "ok" && (
            <p className="mt-6 max-w-2xl rounded-lg p-4 text-sm font-semibold" style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)" }}>
              You&apos;re in. First essay arrives next Tuesday.
            </p>
          )}
          {status === "err" && errMsg && (
            <p className="mt-6 max-w-2xl rounded-lg p-4 text-sm font-semibold" style={{ background: "#FDF2F7", color: "var(--brand-white)" }}>
              {errMsg}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
