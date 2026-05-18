import { ShieldCheck, Scale, BookOpen, Award } from "lucide-react";
import kaziPortrait from "@/assets/kazi-portrait.jpg";
import { Reveal } from "./Reveal";

const TIMELINE = [
  { year: "১৯৯৯", title: "নিকাহ রেজিস্ট্রার নিয়োগ", desc: "আইন মন্ত্রণালয় কর্তৃক ২৭ নং ওয়ার্ডে দায়িত্ব প্রাপ্তি।" },
  { year: "২০০৮", title: "আরবি অনুবাদ ও এপোস্টেল সেবা সম্প্রসারণ", desc: "প্রবাসী বাংলাদেশীদের জন্য বিশেষ সেবা চালু।" },
  { year: "২০১৫", title: "১০,০০০তম সফল বিবাহ", desc: "দীর্ঘ অভিজ্ঞতায় হাজারো পরিবারের আস্থা অর্জন।" },
  { year: "২০২৪", title: "২৬ বছরের নিরবচ্ছিন্ন সেবা", desc: "শরীয়াহ ও আইন — উভয়ের সমন্বয়ে ২৪/৭ সহযোগিতা।" },
];

const PRACTICE = [
  "সুন্নাহ মোতাবেক বিবাহ",
  "কোর্ট ম্যারেজ",
  "তালাক ও বিচ্ছেদ পরামর্শ",
  "নিকাহনামা ও সার্টিফিকেট",
  "আরবি অনুবাদ ও সত্যায়ন",
  "ধর্মান্তর হলফনামা",
  "ইমিগ্রেশন সনদ",
];

const CREDENTIALS = [
  { icon: ShieldCheck, label: "সরকার অনুমোদিত" },
  { icon: Scale, label: "মুসলিম পারিবারিক আইন" },
  { icon: BookOpen, label: "শরীয়াহ বিশেষজ্ঞ" },
  { icon: Award, label: "২৬+ বছরের অভিজ্ঞতা" },
];

export function About() {
  return (
    <section id="about" className="relative bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">
          {/* Left: portrait + credentials */}
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-3xl border-l border-t border-gold/60" aria-hidden />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-br-3xl border-b border-r border-gold/60" aria-hidden />

              <div className="overflow-hidden rounded-3xl bg-card shadow-xl">
                <img
                  src={kaziPortrait}
                  alt="মাওঃ মারুফ খন্দকার — নিকাহ রেজিস্ট্রার"
                  width={896}
                  height={1152}
                  loading="lazy"
                  className="block aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Lead Registrar
              </div>
              <div className="mt-1 text-2xl font-bold text-primary-dark">
                মাওঃ মারুফ খন্দকার
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                নিকাহ রেজিস্ট্রার · ২৭ নং ওয়ার্ড, তেজগাঁও
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {CREDENTIALS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-2 text-xs font-medium text-foreground/85">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: narrative + timeline + practice areas */}
          <div>
            <Reveal>
              <span className="eyebrow">About Us</span>
              <h2 className="mt-4 font-bold text-primary-dark">
                বিশ্বাসের ২৬ বছর, <br />
                হাজারো পরিবারের পাশে
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন মন্ত্রণালয় কর্তৃক
                অনুমোদিত, ঢাকা উত্তর সিটি কর্পোরেশনের ২৭ নং ওয়ার্ডের
                দায়িত্বপ্রাপ্ত কাজী। দীর্ঘ ২৬ বছর ধরে দালালমুক্ত, স্বচ্ছ ও
                শরীয়াহ সম্মত আইনি সেবা প্রদান করে আসছি।
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="mt-10 border-l border-border pl-6">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[29px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background ring-2 ring-gold"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <div className="font-display text-xs font-semibold tracking-[0.18em] text-gold-deep">
                    {t.year}
                  </div>
                  <div className="mt-1 text-base font-bold text-primary-dark">
                    {t.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Practice areas */}
            <Reveal delay={0.2} className="mt-10">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Practice Areas
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {PRACTICE.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
