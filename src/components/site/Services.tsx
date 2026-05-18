import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 font-bold text-primary-dark">
              এক ছাদের নিচে <br />
              সম্পূর্ণ আইনি সেবা
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              বিবাহ রেজিস্ট্রেশন থেকে আরবি অনুবাদ ও ইমিগ্রেশন সনদ — সরকার
              অনুমোদিত ও শরীয়াহ সম্মত পদ্ধতিতে প্রতিটি সেবা আমাদের দীর্ঘ
              অভিজ্ঞতা ও নির্ভরযোগ্যতায় সম্পন্ন হয়।
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 3) * 0.06}
              className="group relative flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-ivory sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-2xl ring-1 ring-primary/10 transition-all duration-500 group-hover:bg-gold/15 group-hover:ring-gold/40"
                  aria-hidden
                >
                  {s.icon}
                </span>
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-primary-dark">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>

              <a
                href="#booking"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-gold-deep"
              >
                বিস্তারিত
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Bottom gold reveal line */}
              <span
                className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
