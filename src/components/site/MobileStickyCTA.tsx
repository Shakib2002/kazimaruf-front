import { Phone, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY } from "@/lib/site-data";

export function MobileStickyCTA() {
  const tel = PHONE_DISPLAY.replace(/-/g, "");
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/40 bg-primary-darker/95 px-3 py-2 shadow-[0_-6px_24px_rgba(0,0,0,0.3)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={`tel:${tel}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gold/60 bg-primary-dark text-sm font-bold text-gold"
        >
          <Phone className="h-4 w-4" />
          কল করুন
        </a>
        <a
          href="#booking"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gold text-sm font-bold text-primary-darker shadow-lg shadow-gold/30"
        >
          <CalendarCheck className="h-4 w-4" />
          অ্যাপয়েন্টমেন্ট
        </a>
      </div>
    </div>
  );
}
