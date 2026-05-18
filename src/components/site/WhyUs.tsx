import { Shield, HandshakeIcon, ScrollText, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Shield,
    title: "২৬ বছরের নির্ভরযোগ্যতা",
    desc: "দীর্ঘ অভিজ্ঞতায় ১০,০০০+ পরিবারের আস্থা অর্জন। প্রতিটি কেস ব্যক্তিগত মনোযোগ ও সম্মানের সাথে সম্পন্ন।",
  },
  {
    icon: HandshakeIcon,
    title: "দালালমুক্ত ও স্বচ্ছ সেবা",
    desc: "সরাসরি কাজীর সঙ্গে স্বচ্ছ লেনদেন। কোনো হিডেন চার্জ নেই, প্রতিটি ফি অগ্রিম পরিষ্কার।",
  },
  {
    icon: ScrollText,
    title: "১০০% আইনি ও শরীয়াহ সম্মত",
    desc: "সরকার অনুমোদিত নিকাহ রেজিস্ট্রার এবং মুসলিম পারিবারিক আইন বিশেষজ্ঞ — উভয় দিকেই পূর্ণ বৈধতা।",
  },
  {
    icon: Zap,
    title: "জরুরি ও প্রবাসী সেবায় অগ্রাধিকার",
    desc: "এক দিনে নিকাহনামা, দ্রুত আরবি অনুবাদ ও পররাষ্ট্র মন্ত্রণালয় সত্যায়ন — ২৪/৭ সহযোগিতা।",
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Why Choose Us</span>
            <h2 className="mt-4 font-bold text-primary-dark">
              কেন আমাদের বেছে নেবেন?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              বিশ্বাস, অভিজ্ঞতা ও আইনি দক্ষতা — তিনটির অপূর্ব সমন্বয়।
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 0.08}
              className="flex gap-5 bg-card p-8 sm:p-10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-primary-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
