import { MessageCircle, CalendarCheck, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";
import govtLogo from "@/assets/govt-logo.webp";
import heroWedding from "@/assets/hero-wedding.webp";

const BADGES = [
  "সরকার অনুমোদিত",
  "২৬ বছর অভিজ্ঞতা",
  "২৪/৭ সেবা",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Wedding background image */}
      <img
        src={heroWedding}
        alt=""
        aria-hidden
        loading="eager"
        // @ts-expect-error fetchpriority is a valid HTML attr
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      {/* Green brand wash — multiply keeps photo details visible */}
      <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" aria-hidden />
      {/* Secondary deep-green tint for cohesion */}
      <div className="absolute inset-0 bg-primary-darker/25" aria-hidden />
      {/* Gradient vignette: dark top + bottom, slight clarity in middle */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--primary-darker) 85%, transparent) 0%, color-mix(in oklab, var(--primary-darker) 30%, transparent) 35%, color-mix(in oklab, var(--primary-darker) 30%, transparent) 60%, color-mix(in oklab, var(--primary-darker) 90%, transparent) 100%)",
        }}
      />
      {/* Radial focus behind headline */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 55%, color-mix(in oklab, var(--primary-darker) 50%, transparent) 0%, transparent 100%)",
        }}
      />
      {/* Pattern overlay */}
      <div className="islamic-pattern-strong absolute inset-0 opacity-[0.05]" aria-hidden />
      {/* Decorative glows */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gold/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
        {/* Top eyebrow */}
        <div className="fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-primary-darker/40 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-gold backdrop-blur">
            <img
              src={govtLogo}
              alt="গণপ্রজাতন্ত্রী বাংলাদেশ সরকার"
              className="h-7 w-7 rounded-full bg-white object-contain p-0.5"
            />
            সরকার অনুমোদিত কাজী অফিস
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up mx-auto mt-6 max-w-4xl font-bold leading-[1.1] text-white"
          style={{ animationDelay: "0.15s" }}
        >
          দীর্ঘ{" "}
          <span className="text-gold">২৬ বছর</span>{" "}
          এর বিশ্বস্ত কাজী অফিস
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gold-soft sm:text-xl"
          style={{ animationDelay: "0.25s" }}
        >
          শরীয়াহ সম্মত ও সরকার অনুমোদিত বিবাহ রেজিস্ট্রেশন সেবা —ফার্মগেট, মণিপুরী পাড়া, আগারগাঁও, শেরেবাংলা নগর দক্ষিণ, জাতীয় সংসদ এলাকা ও তেজগাঁও অঞ্চল ।
        </p>

        {/* CTAs */}
        <div
          className="fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href="#booking"
            className="glow-pulse inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-gold px-10 text-lg font-bold text-primary-darker ring-2 ring-gold/40 transition-transform hover:scale-[1.04]"
          >
            <CalendarCheck className="h-6 w-6" />
            অ্যাপয়েন্টমেন্ট নিন
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/70 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp করুন
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-primary-darker/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              <CheckCircle2 className="h-4 w-4 text-gold" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Wave divider to red stats bar */}
      <svg
        className="absolute bottom-0 left-0 z-10 h-12 w-full sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z"
          fill="var(--accent-deep)"
        />
      </svg>
    </section>
  );
}
