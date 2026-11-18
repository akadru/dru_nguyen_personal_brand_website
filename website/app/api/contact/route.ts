import { createClient } from "@supabase/supabase-js";

/**
 * Contact form endpoint.
 *
 * 1. Validates the submission (and drops bots via the hidden `company` honeypot).
 * 2. Saves it to Supabase `contact_submissions` (anon key; RLS allows inserts).
 * 3. Emails a notification through Resend when configured:
 *      RESEND_API_KEY        — Resend key (server-only)
 *      CONTACT_NOTIFY_EMAIL  — where new messages are sent
 *      CONTACT_FROM_EMAIL    — optional verified sender; defaults to Resend's
 *                              test sender, which only delivers to the Resend
 *                              account owner's own address.
 *
 * Succeeds if the message was saved OR the notification went out, so a lead is
 * never lost because one of the two services is down.
 */

const TOPICS = ["Speaking", "Advisory", "Media", "Partnership", "Other"] as const;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field.
  if (clean(body.company, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const rawTopic = clean(body.topic, 40);
  const topic = (TOPICS as readonly string[]).includes(rawTopic) ? rawTopic : "Other";
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  // The table has no topic column, so the topic is prefixed onto the message.
  const stored = `[${topic}] ${message}`;

  // 1. Save to Supabase.
  let saved = false;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && key) {
    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from("contact_submissions").insert({ name, email, message: stored });
    saved = !error;
    if (error) console.error("[contact] supabase insert failed:", error.message);
  }

  // 2. Email notification.
  let notified = false;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL;
  if (resendKey && notifyTo) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "drunguyen.me <onboarding@resend.dev>",
          to: [notifyTo],
          reply_to: email,
          subject: `New ${topic.toLowerCase()} enquiry from ${name}`,
          html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)}) sent a <strong>${escapeHtml(topic)}</strong> enquiry via drunguyen.me:</p><blockquote style="border-left:3px solid #ADFB49;padding-left:12px;white-space:pre-wrap">${escapeHtml(message)}</blockquote><p>Reply to this email to answer them directly.</p>`,
        }),
      });
      notified = res.ok;
      if (!res.ok) console.error("[contact] resend failed:", res.status, await res.text());
    } catch (err) {
      console.error("[contact] resend error:", err);
    }
  }

  if (!saved && !notified) {
    return Response.json(
      { error: "Sorry, your message couldn't be sent right now. Please try again in a few minutes." },
      { status: 503 }
    );
  }
  return Response.json({ ok: true });
}
