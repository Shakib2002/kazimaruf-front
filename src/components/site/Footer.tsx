import { Facebook, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  EMAIL,
  SERVICES,
} from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-base font-bold text-primary-darker">
                ك
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-gold">কাজী অফিস ফার্মগেট</span>
                <span className="mt-1 font-display text-[10px] tracking-[0.18em] text-gold/70">
                  EST. 1999 · GOVT. APPROVED
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mint">
              দীর্ঘ ২৬ বছরের অভিজ্ঞতায় শরীয়াহ সম্মত ও সরকার অনুমোদিত বিবাহ,
              তালাক ও সংশ্লিষ্ট আইনি সেবা।
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mint transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mint transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mint transition-colors hover:border-gold hover:text-gold"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-mint transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-mint transition-colors hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-mint">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>তেজগাঁও, ঢাকা-১২১৫</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-gold">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-mint/70 sm:flex-row">
          <p>© {year} কাজী অফিস ফার্মগেট। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
