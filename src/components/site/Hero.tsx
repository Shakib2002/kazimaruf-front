import { MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-data";

const STATS = [
  "২৬+ বছর অভিজ্ঞতা",
  "১০০% গোপনীয়তা",
  "৭ দিন ২৪ ঘণ্টা সেবা",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="islamic-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-accent" /> সরকার অনুমোদিত কাজী অফিস
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            বিশ্বস্ত কাজী অফিস —{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">২৬ বছরের অভিজ্ঞতা</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full rounded bg-accent/25" />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ফার্মগেট, তেজগাঁও ও সংসদ এলাকায় আইনি ও শরীয়াহ সম্মত
            বিবাহ-তালাক সেবা।
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base shadow-lg shadow-primary/20">
              <a href="#booking">
                <CalendarCheck className="h-5 w-5" />
                অ্যাপয়েন্টমেন্ট নিন
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 bg-whatsapp px-6 text-base text-whatsapp-foreground shadow-lg shadow-whatsapp/20 hover:bg-whatsapp/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp করুন
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s}
                className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
