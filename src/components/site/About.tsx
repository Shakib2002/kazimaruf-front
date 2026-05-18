import { ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-dark p-8 text-primary-foreground shadow-2xl">
            <div className="islamic-pattern absolute inset-0 opacity-20" aria-hidden />
            <div className="relative flex h-full flex-col justify-between">
              <ShieldCheck className="h-12 w-12" />
              <div>
                <p className="text-sm opacity-90">সরকার অনুমোদিত কাজী</p>
                <h3 className="mt-1 text-3xl font-bold leading-tight">
                  কাজী মারুফ হোসেন
                </h3>
                <p className="mt-3 text-sm opacity-90">
                  ঢাকা উত্তর সিটি কর্পোরেশন — ২৭ নং ওয়ার্ড
                </p>
              </div>
            </div>
            <span className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/40 blur-xl" aria-hidden />
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
