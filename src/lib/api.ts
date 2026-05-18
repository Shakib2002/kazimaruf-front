/**
 * Central API client for the external Cloudflare Workers backend.
 * Base URL is configured via VITE_API_URL.
 */
const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://kaziofficefarmgate.codewithshakib.workers.dev";

export interface BookingPayload {
  name: string;
  phone: string;
  service: string;
  preferred_date: string; // yyyy-MM-dd
  message?: string | null;
  website?: string | null; // honeypot
}

export async function submitBooking(payload: BookingPayload): Promise<{ success: boolean; id?: string | null }> {
  const res = await fetch(`${API_BASE}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let message = "বুকিং পাঠাতে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।";
    try {
      const data = (await res.json()) as { error?: string; message?: string };
      message = data.error || data.message || message;
    } catch {
      // ignore JSON parse error
    }
    throw new Error(message);
  }

  return (await res.json()) as { success: boolean; id?: string | null };
}
