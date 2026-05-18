import { Check } from "lucide-react";
import { WHY_US } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pattern-soft absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            কেন <span className="text-accent">আমাদের</span> বেছে নেবেন?
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-6 w-6" strokeWidth={3} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
