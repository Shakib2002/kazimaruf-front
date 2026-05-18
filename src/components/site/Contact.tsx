import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY, EMAIL } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: MapPin,
    eyebrow: "Visit",
    title: "অফিস ঠিকানা",
    body: (
      <>
        ১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট, কক্ষ নং-৩৩,
        <br />
        আজলাদ হোসেন মার্কেট, তেজগাঁও জামে মসজিদ সংলগ্ন,
        <br />
        তেজগাঁও, ঢাকা-১২১৫
      </>
    ),
    cta: { label: "Google Maps এ দেখুন", href: "https://maps.google.com/?q=Tejgaon,Dhaka+1215" },
  },
  {
    icon: Phone,
    eyebrow: "Call",
    title: "ফোন ও WhatsApp",
    body: (
      <>
        <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="block font-display text-base font-semibold text-primary hover:text-gold-deep">
          {PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block font-display text-base font-semibold text-primary hover:text-gold-deep"
        >
          WhatsApp · {WHATSAPP_DISPLAY}
        </a>
      </>
    ),
    cta: { label: "WhatsApp এ মেসেজ করুন", href: WHATSAPP_URL, external: true, icon: MessageCircle },
  },
  {
    icon: Clock,
    eyebrow: "Hours",
    title: "সেবার সময়",
    body: (
      <>
        সপ্তাহের ৭ দিন
        <br />
        সকাল ৯টা — রাত ১০টা
        <br />
        জরুরি প্রয়োজনে ২৪/৭
      </>
    ),
    cta: { label: `Email · ${EMAIL}`, href: `mailto:${EMAIL}`, icon: Mail },
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Contact</span>
            <h2 className="mt-4 font-bold text-primary-dark">যোগাযোগ করুন</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              যেকোনো প্রয়োজনে আমাদের সঙ্গে যোগাযোগ করুন — দ্রুত সাড়া দেওয়ার প্রতিশ্রুতি।
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, eyebrow, title, body, cta }, i) => {
            const CtaIcon = "icon" in cta && cta.icon ? cta.icon : ArrowUpRight;
            return (
              <Reveal
                key={title}
                as="article"
                delay={i * 0.08}
                className="card-premium flex flex-col rounded-2xl p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={2.25} />
                </span>
                <div className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {eyebrow}
                </div>
                <h3 className="mt-1 text-lg font-bold text-primary-dark">{title}</h3>
                <div className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </div>
                <a
                  href={cta.href}
                  target={"external" in cta && cta.external ? "_blank" : undefined}
                  rel={"external" in cta && cta.external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold-deep"
                >
                  <CtaIcon className="h-4 w-4" />
                  {cta.label}
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 overflow-hidden rounded-3xl border border-border shadow-lg">
          <iframe
            title="কাজী অফিস ফার্মগেট — তেজগাঁও, ঢাকা"
            src="https://www.google.com/maps?q=Tejgaon,+Dhaka+1215,+Bangladesh&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block", filter: "grayscale(0.15) contrast(1.02)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
