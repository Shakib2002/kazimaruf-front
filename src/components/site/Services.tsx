import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            আমাদের সেবা
          </span>
          <h2 className="gold-underline mt-4 font-bold text-primary-dark">
            সেবাসমূহ — এক ছাদের নিচে
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            সরকার অনুমোদিত ও শরীয়াহ সম্মত সকল কাজী সেবা — বিশ্বস্ততার সাথে।
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="corner-triangle group relative overflow-hidden rounded-2xl border-l-4 border-primary bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent"
              style={{
                animationDelay: `${i * 60}ms`,
                boxShadow: "0 4px 20px color-mix(in oklab, var(--primary) 15%, transparent)",
              }}
            >
              <div className="text-5xl">{s.icon}</div>
              <h3 className="mt-5 text-xl font-bold text-primary-dark">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <a
                href="#booking"
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-accent"
              >
                বিস্তারিত
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
