import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY, EMAIL } from "@/lib/site-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary-dark py-20 text-primary-foreground sm:py-28"
    >
      <div className="arabic-watermark absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold/40 bg-primary-darker/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            যোগাযোগ
          </span>
          <h2 className="gold-underline mt-4 font-bold text-gold">
            যোগাযোগ করুন
          </h2>
          <p className="mt-6 text-base text-mint">
            যেকোনো প্রয়োজনে আমাদের সঙ্গে যোগাযোগ করুন।
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Address */}
          <article
            className="rounded-2xl border border-white/10 bg-primary-darker/50 p-7 backdrop-blur"
            style={{ borderTop: "3px solid var(--gold)" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-primary-darker shadow-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">ঠিকানা</h3>
            <p className="mt-3 text-sm leading-relaxed text-mint">
              ১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট,<br />
              তেজগাঁও, ঢাকা - ১২১৫
            </p>
          </article>

          {/* Phone & Email + WhatsApp */}
          <article
            className="rounded-2xl border border-white/10 bg-primary-darker/50 p-7 backdrop-blur"
            style={{ borderTop: "3px solid var(--gold)" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-primary-darker shadow-lg">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">ফোন ও ইমেইল</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-mint">
                <Phone className="h-4 w-4 text-gold" />
                <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-mint">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-gold">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </article>

          {/* Hours */}
          <article
            className="rounded-2xl border border-white/10 bg-primary-darker/50 p-7 backdrop-blur"
            style={{ borderTop: "3px solid var(--gold)" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-primary-darker shadow-lg">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">সেবার সময়</h3>
            <p className="mt-3 text-sm leading-relaxed text-mint">
              সপ্তাহের ৭ দিন<br />
              সকাল ৯টা — রাত ১০টা<br />
              জরুরি প্রয়োজনে ২৪/৭ যোগাযোগ
            </p>
            <div className="mt-5 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-center text-sm font-bold text-gold">
              ২৪/৭ — সর্বদা প্রস্তুত
            </div>
          </article>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-3xl shadow-2xl"
          style={{ borderTop: "4px solid var(--gold)" }}
        >
          <iframe
            title="তেজগাঁও, ঢাকা-১২১৫ — কাজী অফিস ফার্মগেট"
            src="https://www.google.com/maps?q=Tejgaon,+Dhaka+1215,+Bangladesh&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
