import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const bookingInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[0-9+\-\s]{10,20}$/),
  service: z.string().trim().min(1).max(200),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  message: z.string().trim().max(1000).optional().nullable(),
  // honeypot — bots fill it, humans don't see it
  website: z.string().max(0).optional().nullable(),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => bookingInputSchema.parse(input))
  .handler(async ({ data }) => {
    // Silently drop bot submissions
    if (data.website && data.website.length > 0) {
      return { success: true, id: null };
    }

    const { data: row, error } = await supabaseAdmin
      .from("bookings")
      .insert({
        name: data.name,
        phone: data.phone,
        service: data.service,
        preferred_date: data.preferred_date,
        message: data.message ?? null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[submitBooking] insert error:", error);
      throw new Error("বুকিং সংরক্ষণে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।");
    }

    // Send notification email via Resend (if configured)
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.BOOKING_NOTIFY_EMAIL;
    if (resendKey && notifyTo) {
      try {
        const html = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;background:#fff;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
            <div style="background:linear-gradient(135deg,#0f5132,#0a3a24);color:#d4af37;padding:18px;border-radius:8px;text-align:center">
              <h1 style="margin:0;font-size:20px">🕌 নতুন অ্যাপয়েন্টমেন্ট রিকোয়েস্ট</h1>
              <p style="margin:4px 0 0;font-size:13px;color:#fff;opacity:.85">কাজী অফিস ফার্মগেট</p>
            </div>
            <table style="width:100%;margin-top:18px;font-size:14px;color:#1f2937;border-collapse:collapse">
              <tr><td style="padding:8px;border-bottom:1px solid #f3f4f6"><strong>নাম:</strong></td><td style="padding:8px;border-bottom:1px solid #f3f4f6">${escapeHtml(data.name)}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #f3f4f6"><strong>ফোন:</strong></td><td style="padding:8px;border-bottom:1px solid #f3f4f6"><a href="tel:${escapeHtml(data.phone)}" style="color:#0f5132">${escapeHtml(data.phone)}</a></td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #f3f4f6"><strong>সেবা:</strong></td><td style="padding:8px;border-bottom:1px solid #f3f4f6">${escapeHtml(data.service)}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #f3f4f6"><strong>পছন্দের তারিখ:</strong></td><td style="padding:8px;border-bottom:1px solid #f3f4f6">${escapeHtml(data.preferred_date)}</td></tr>
              ${data.message ? `<tr><td style="padding:8px;vertical-align:top"><strong>বার্তা:</strong></td><td style="padding:8px">${escapeHtml(data.message)}</td></tr>` : ""}
            </table>
            <p style="margin-top:18px;font-size:12px;color:#6b7280">Booking ID: ${row?.id ?? "-"}</p>
          </div>
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
            to: [notifyTo],
            subject: `নতুন অ্যাপয়েন্টমেন্ট — ${data.name} (${data.service})`,
            html,
            reply_to: undefined,
          }),
        });
        if (!res.ok) {
          console.error("[submitBooking] resend error:", res.status, await res.text());
        }
      } catch (err) {
        // Don't fail the booking if email fails
        console.error("[submitBooking] resend exception:", err);
      }
    }

    return { success: true, id: row?.id ?? null };
  });

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
