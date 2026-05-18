import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY, EMAIL } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            যোগাযোগ <span className="text-accent">করুন</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">ঠিকানা</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              ১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট, কক্ষ নং-৩৩, আজলাদ হোসেন
              মার্কেট, তেজগাঁও জামে মসজিদ সংলগ্ন, তেজগাঁও, ঢাকা-১২১৫
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">ফোন ও ইমেইল</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`} className="text-foreground hover:text-primary">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-primary">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-md transition-colors hover:bg-whatsapp/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">সেবার সময়</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              সপ্তাহের ৭ দিন, ২৪ ঘণ্টা সেবা প্রদান করা হয়।
              জরুরি প্রয়োজনে যেকোনো সময় যোগাযোগ করুন।
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-center text-sm font-semibold text-primary">
              ২৪/৭ — সর্বদা প্রস্তুত
            </div>
          </article>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <iframe
            title="তেজগাঁও, ঢাকা-১২১৫ — কাজী অফিস ফার্মগেট"
            src="https://www.google.com/maps?q=Tejgaon,+Dhaka+1215,+Bangladesh&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
