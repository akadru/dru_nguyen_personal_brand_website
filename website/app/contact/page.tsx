"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "ok" | "err";

const TOPICS = ["Speaking", "Advisory", "Media", "Partnership", "Other"] as const;
type Topic = (typeof TOPICS)[number];

// ?intent=speaking (from every "Book Dru to Speak" button) → preselect a topic.
const INTENT_TO_TOPIC: Record<string, Topic> = {
  speaking: "Speaking",
  advisory: "Advisory",
  media: "Media",
  press: "Media",
  partnership: "Partnership",
};

const fieldClass =
  "mt-2 w-full rounded-xl border px-4 py-3.5 text-base outline-none transition-colors placeholder:text-[var(--brand-pastel)]/50 focus:border-[var(--brand-lime)] focus:ring-2 focus:ring-[var(--brand-lime)]/30";
const fieldStyle = {
  background: "rgba(242,242,242,0.04)",
  borderColor: "rgba(176,190,197,0.35)",
  color: "var(--brand-white)",
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [topic, setTopic] = useState<Topic>("Speaking");

  useEffect(() => {
    const intent = new URLSearchParams(window.location.search).get("intent")?.toLowerCase();
    if (intent && INTENT_TO_TOPIC[intent]) setTopic(INTENT_TO_TOPIC[intent]);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setStatus("sending");
    setErrMsg(null);
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      company: String(fd.get("company") ?? ""), // honeypot
      topic,
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("err");
      setErrMsg("Please fill in your name, email and message.");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("err");
        setErrMsg(data.error || "Sorry, something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setErrMsg("Couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <>
      <section style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand-lime)" }} />
        <div className="mx-auto max-w-[900px] px-5 pt-24 pb-12 md:px-8 md:pt-28 md:pb-14">
          <Reveal>
            <div className="section-label" style={{ color: "var(--brand-lime)", letterSpacing: "0.22em" }}>
              Contact
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 display-heading" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
              Start a <span className="marker-highlight">conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Speaking, advisory, media, partnerships, or just to say hello. Tell me what you&apos;re working on.
              I read every message and reply within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 pt-4" style={{ background: "var(--brand-jungle)" }}>
        <div className="mx-auto max-w-[760px] px-5 md:px-8">
          <Reveal>
            <form ref={formRef} onSubmit={onSubmit} className="grid gap-6" noValidate>
              <fieldset>
                <legend className="section-label block">What&apos;s this about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TOPICS.map((t) => {
                    const active = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setTopic(t)}
                        className="rounded-full border px-4 py-2 text-xs font-bold uppercase transition-colors"
                        style={{
                          letterSpacing: "0.08em",
                          background: active ? "var(--brand-lime)" : "transparent",
                          borderColor: active ? "var(--brand-lime)" : "rgba(176,190,197,0.35)",
                          color: active ? "var(--brand-jungle)" : "var(--brand-pastel)",
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="section-label block">Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="email" className="section-label block">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} style={fieldStyle} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="section-label block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={topic === "Speaking" ? "Event, date, audience size, and what you'd like me to cover." : "What are you working on?"}
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              {/* Honeypot: hidden from people and screen readers, bots fill it in. */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  data-magnetic
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] disabled:opacity-60"
                  style={{ background: "var(--brand-lime)", color: "var(--brand-jungle)", letterSpacing: "0.06em" }}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
                <span className="text-sm" style={{ color: "var(--brand-pastel)" }}>Reply within 48 hours.</span>
              </div>

              <div aria-live="polite">
                {status === "ok" && (
                  <p
                    className="rounded-xl border-l-4 p-4 text-sm font-semibold"
                    style={{ background: "rgba(173,251,73,0.08)", borderColor: "var(--brand-lime)", color: "var(--brand-white)" }}
                  >
                    Got it, thank you. I&apos;ll be in touch within 48 hours.
                  </p>
                )}
                {status === "err" && errMsg && (
                  <p
                    className="rounded-xl border-l-4 p-4 text-sm font-semibold"
                    style={{ background: "rgba(255,107,107,0.08)", borderColor: "#FF6B6B", color: "var(--brand-white)" }}
                  >
                    {errMsg}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
