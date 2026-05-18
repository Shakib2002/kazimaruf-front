import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            আমাদের <span className="text-primary">সেবাসমূহ</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
          <p className="mt-4 text-muted-foreground">
            সরকার অনুমোদিত ও শরীয়াহ সম্মত সকল কাজী সেবা এক ছাদের নিচে।
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 transition-transform group-hover:scale-150"
                aria-hidden
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                {s.icon}
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
