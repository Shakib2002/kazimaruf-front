import { ShieldCheck } from "lucide-react";
import kaziPhoto from "@/assets/kazi-maruf.jpg";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="islamic-pattern absolute -inset-3 rounded-[2rem] opacity-40" aria-hidden />
            <span
              className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-accent/30 blur-2xl"
              aria-hidden
            />
            <span
              className="absolute -bottom-3 -left-3 h-24 w-24 rounded-full bg-primary/30 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border-4 border-primary bg-card shadow-2xl">
              <img
                src={kaziPhoto}
                alt="মাওঃ মারুফ খন্দকার — কাজী অফিস ফার্মগেট"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark via-primary-dark/85 to-transparent p-5 text-primary-foreground">
                <div className="flex items-center gap-2 text-xs opacity-90">
                  <ShieldCheck className="h-4 w-4" />
                  সরকার অনুমোদিত কাজী
                </div>
                <h3 className="mt-1 text-2xl font-bold leading-tight">
                  মাওঃ মারুফ খন্দকার
                </h3>
                <p className="mt-1 text-xs opacity-90">
                  ঢাকা উত্তর সিটি কর্পোরেশন — ২৭ নং ওয়ার্ড
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            আমাদের <span className="text-primary">সম্পর্কে</span>
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন মন্ত্রণালয় কর্তৃক
            অনুমোদিত, ঢাকা উত্তর সিটি কর্পোরেশনের ২৭ নং ওয়ার্ডের
            দায়িত্বপ্রাপ্ত কাজী। দীর্ঘ ২৬ বছর ধরে ফার্মগেট, রাজাবাজার,
            মণিপুরী পাড়া, জাতীয় সংসদ এলাকা ও তেজগাঁও অঞ্চলে
            বিশ্বস্ততার সাথে সেবা প্রদান করে আসছি।
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/60 p-4 text-center">
              <div className="text-2xl font-bold text-primary">২৬+</div>
              <div className="mt-1 text-xs text-muted-foreground">বছরের অভিজ্ঞতা</div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/60 p-4 text-center">
              <div className="text-2xl font-bold text-primary">১০০০+</div>
              <div className="mt-1 text-xs text-muted-foreground">সন্তুষ্ট পরিবার</div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/60 p-4 text-center">
              <div className="text-2xl font-bold text-primary">২৪/৭</div>
              <div className="mt-1 text-xs text-muted-foreground">সেবা প্রদান</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
