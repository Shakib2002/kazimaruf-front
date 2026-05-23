import kaziPhoto from "@/assets/kazi-maruf.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ACHIEVEMENTS = [
  "২৬ বছরের অভিজ্ঞতা",
  "১০,০০০+ বিবাহ",
  "শরীয়াহ বিশেষজ্ঞ",
];

export function About() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative bg-background py-20 sm:py-28">
      <div className="islamic-pattern absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
        {/* Left: Photo (40%) */}
        <div ref={leftRef} className="reveal-up group lg:col-span-2">
          <div className="relative mx-auto w-full max-w-sm">
            {/* Decorative gold corner ornaments */}
            <span className="absolute -left-3 -top-3 h-10 w-10 rounded-tl-2xl border-l-4 border-t-4 border-gold" aria-hidden />
            <span className="absolute -right-3 -top-3 h-10 w-10 rounded-tr-2xl border-r-4 border-t-4 border-gold" aria-hidden />
            <span className="absolute -bottom-3 -left-3 h-10 w-10 rounded-bl-2xl border-b-4 border-l-4 border-gold" aria-hidden />
            <span className="absolute -bottom-3 -right-3 h-10 w-10 rounded-br-2xl border-b-4 border-r-4 border-gold" aria-hidden />

            <div className="relative overflow-hidden rounded-3xl border-4 border-primary bg-card shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
              <img
                src={kaziPhoto}
                alt="মাওঃ মারুফ খন্দকার — কাজী অফিস ফার্মগেট"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Gold name plate */}
            <div className="relative mx-4 -mt-5 rounded-xl bg-gold px-5 py-3 text-center shadow-xl">
              <div className="mt-1 text-xl font-bold text-primary-darker">
                মাওঃ মারুফ খন্দকার
              </div>
            </div>

            {/* Red designation badge */}
            <div className="mx-auto mt-3 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-center text-sm font-bold text-white shadow-lg">
              নিকা রেজিস্টার কার্যালয় - ২৭ নং ওয়ার্ড
            </div>
          </div>
        </div>

        {/* Right: Content (60%) */}
        <div ref={rightRef} className="reveal-up lg:col-span-3" style={{ transitionDelay: "120ms" }}>
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            আমাদের সম্পর্কে
          </span>
          <h2 className="mt-4 font-bold text-primary-dark">
            বিশ্বাসের ২৬ বছর, <br />
            হাজারো পরিবারের পাশে
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন মন্ত্রণালয় কর্তৃক
            অনুমোদিত, ঢাকা উত্তর সিটি কর্পোরেশনের ২৭ নং ওয়ার্ডের
            দায়িত্বপ্রাপ্ত কাজী।
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            দীর্ঘ ২৬ বছর ধরে ফার্মগেট, রাজাবাজার, মণিপুরী পাড়া,
            জাতীয় সংসদ এলাকা ও তেজগাঁও অঞ্চলে বিশ্বস্ততার সাথে
            শরীয়াহ সম্মত বিবাহ, তালাক ও নিকাহনামা সেবা প্রদান করে
            আসছি — দালালমুক্ত, স্বচ্ছ ও আইনি প্রক্রিয়ায়।
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {ACHIEVEMENTS.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
