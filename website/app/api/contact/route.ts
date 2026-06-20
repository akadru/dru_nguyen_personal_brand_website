import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  subject?: string;
  source?: string;
};

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json({ error: "Server not configured." }, { status: 500 });
  }

  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return badRequest("Invalid JSON.");
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const message = (body.message ?? "").trim();
  const phone = body.phone?.trim() || null;
  const subject = body.subject?.trim() || null;
  const source = body.source?.trim() || "contact-form";

  if (!name || !email || !message) {
    return badRequest("Name, email, and message are required.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("Please enter a valid email.");
  }
  if (message.length > 5000) {
    return badRequest("Message is too long.");
  }

  const admin = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // Upsert person by email. Repeat senders reuse their row.
  const { data: person, error: personErr } = await admin
    .from("people")
    .upsert(
      { email, name, phone, source },
      { onConflict: "email" }
    )
    .select("id, name, email")
    .single();

  if (personErr || !person) {
    console.error("[contact] people upsert failed:", personErr);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  // Insert the inquiry, linked to the person.
  const { error: inquiryErr } = await admin
    .from("inquiries")
    .insert({ person_id: person.id, message, subject, source });

  if (inquiryErr) {
    console.error("[contact] inquiry insert failed:", inquiryErr);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  // Best-effort email notification via Resend. Do not fail the request if this errors.
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.RESEND_NOTIFY_TO;
  const notifyFrom = process.env.RESEND_FROM ?? "Personal Brand <onboarding@resend.dev>";

  if (resendKey && notifyTo) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: notifyFrom,
          to: [notifyTo],
          subject: `New inquiry from ${person.name}`,
          html: `
            <h2 style="font-family: system-ui, -apple-system, sans-serif; color: #0A1B24;">New inquiry on drunguyen.me</h2>
            <p style="font-family: system-ui, -apple-system, sans-serif;"><strong>From:</strong> ${escapeHtml(person.name)} &lt;${escapeHtml(person.email)}&gt;</p>
            ${subject ? `<p style="font-family: system-ui, -apple-system, sans-serif;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
            <p style="font-family: system-ui, -apple-system, sans-serif;"><strong>Message:</strong></p>
            <pre style="white-space: pre-wrap; font-family: system-ui, -apple-system, sans-serif; background: #F2F2F2; padding: 16px; border-left: 4px solid #ADFB49; color: #0A1B24;">${escapeHtml(message)}</pre>
            <hr style="border: none; border-top: 1px solid #B0BEC5; margin: 24px 0;"/>
            <p style="font-family: system-ui, -apple-system, sans-serif; color: #666; font-size: 12px;">
              Source: ${escapeHtml(source)} · Person ID: ${person.id}
            </p>
          `,
        }),
      });
    } catch (e) {
      console.warn("[contact] resend notify failed (non-fatal):", e);
    }
  }

  return NextResponse.json({ ok: true });
}
