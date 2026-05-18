import { ArrowRight, MessageCircle, ShieldCheck, Award, Clock4, Users } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/site-data";
import kaziPortrait from "@/assets/kazi-portrait.jpg";

const TRUST = [
  { icon: Award, label: "২৬+ বছরের অভিজ্ঞতা" },
  { icon: Users, label: "১০,০০০+ সফল কেস" },
  { icon: Clock4, label: "২৪/৭ পরামর্শ" },
  { icon: ShieldCheck, label: "বিশ্বস্ত আইনি সহায়তা" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-primary-darker text-primary-foreground"
    >
      {/* Background: subtle emerald gradient + sparse gold dot pattern */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 30%, var(--primary-soft) 0%, var(--primary-darker) 65%)",
        }}
      />
      <div className="absolute inset-0 pattern-dots opacity-[0.08]" aria-hidden />
      <div
        className="absolute right-[-15%] top-[10%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        aria-hidden
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto grid min-h-[92vh] w-full max-w-7xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16 lg:pb-32 lg:pt-36">
        {/* Left: copy */}
        <div className="text-left">
          <motion.span {...fade(0)} className="eyebrow text-gold/90">
            সরকার অনুমোদিত কাজী অফিস
          </motion.span>

          <motion.h1
            {...fade(0.1)}
            className="mt-6 max-w-2xl font-bold leading-[1.05] text-white"
          >
            শরীয়াহ সম্মত ও <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">নির্ভরযোগ্য</span>
              <span
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-sm bg-gold/15"
                aria-hidden
              />
            </span>{" "}
            আইনি সেবা
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-mint sm:text-xl"
          >
            ফার্মগেট, তেজগাঁও ও সংসদ এলাকায় দীর্ঘ ২৬ বছরের অভিজ্ঞতায় —
            স্বচ্ছ, দালালমুক্ত ও আইনি প্রক্রিয়ায় বিবাহ, তালাক ও সংশ্লিষ্ট
            সকল সেবা।
          </motion.p>

          <motion.div
            {...fade(0.3)}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#booking"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-7 text-base font-bold text-primary-darker shadow-lg shadow-black/20 transition-all hover:bg-gold-soft hover:shadow-xl"
            >
              অ্যাপয়েন্টমেন্ট বুক করুন
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp এ কথা বলুন
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            {...fade(0.45)}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} />
                <span className="text-[13px] font-medium leading-tight text-white/85">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait card */}
        <motion.div
          {...fade(0.35)}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
        >
          {/* Decorative gold frame */}
          <div
            className="absolute -inset-3 rounded-[2rem] border border-gold/30"
            aria-hidden
          />
          <div
            className="absolute -inset-6 rounded-[2.25rem] border border-gold/10"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40">
            <img
              src={kaziPortrait}
              alt="অভিজ্ঞ কাজী — কাজী অফিস ফার্মগেট"
              width={896}
              height={1152}
              loading="eager"
              decoding="async"
              className="block h-auto w-full object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-32"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--primary-darker) 92%, transparent), transparent)",
              }}
            />

            {/* Floating credential badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <ShieldCheck className="h-5 w-5 text-gold" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Bangladesh Govt.
                </div>
                <div className="truncate text-sm font-bold text-primary-dark">
                  নিকাহ রেজিস্ট্রার · ২৭ নং ওয়ার্ড
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline transition to ivory */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--background) 100%, transparent))",
        }}
      />
    </section>
  );
}
