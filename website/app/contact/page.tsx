"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("err");
      setErrMsg("All fields are required.");
      return;
    }
    if (!supabase) {
      setStatus("err");
      setErrMsg("Form is not yet configured. Please email dru directly.");
      return;
    }
    const { error } = await supabase.from("contact_submissions").insert(payload);
    if (error) {
      setStatus("err");
      setErrMsg(error.message);
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[900px] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Contact
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-extrabold tracking-tight" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Start a <span style={{ color: "var(--brand-lime)" }}>conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Speaking, coaching, advisory, media, partnerships — or just to say hello. Tell me what you&apos;re
              working on. I read every message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--brand-white)" }}>
        <div className="mx-auto max-w-[760px] px-5 md:px-8">
          <Reveal>
            <form onSubmit={onSubmit} className="grid gap-5">
              <div>
                <label htmlFor="name" className="section-label block">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-2 px-4 py-3 text-base outline-none focus:border-[var(--brand-lime)]"
                  style={{ borderColor: "var(--brand-pastel)", background: "#fff", color: "var(--brand-jungle)" }}
                />
              </div>
              <div>
                <label htmlFor="email" className="section-label block">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border-2 px-4 py-3 text-base outline-none focus:border-[var(--brand-lime)]"
                  style={{ borderColor: "var(--brand-pastel)", background: "#fff", color: "var(--brand-jungle)" }}
                />
              </div>
              <div>
                <label htmlFor="message" className="section-label block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-lg border-2 px-4 py-3 text-base outline-none focus:border-[var(--brand-lime)]"
                  style={{ borderColor: "var(--brand-pastel)", background: "#fff", color: "var(--brand-jungle)" }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider disabled:opacity-50"
                style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "ok" && (
                <p className="rounded-lg p-4 text-sm font-semibold" style={{ background: "var(--brand-tea)", color: "var(--brand-jungle)" }}>
                  Got it. I&apos;ll be in touch.
                </p>
              )}
              {status === "err" && errMsg && (
                <p className="rounded-lg p-4 text-sm font-semibold" style={{ background: "#FDF2F7", color: "var(--brand-jungle)" }}>
                  {errMsg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
