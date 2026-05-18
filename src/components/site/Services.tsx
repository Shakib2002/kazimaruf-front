import { SERVICES } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Services() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={headerRef} className="reveal-up mx-auto max-w-2xl text-center">
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
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceItem = (typeof SERVICES)[number];

function ServiceCard({ service: s, index: i }: { service: ServiceItem; index: number }) {
  const ref = useScrollReveal<HTMLElement>();
  const isFeatured = i === 0;

  return (
    <article
      ref={ref}
      className={`reveal-up group relative overflow-hidden rounded-2xl border-l-4 bg-card p-7 transition-all duration-300 hover:-translate-y-2 ${
        isFeatured
          ? "border-gold ring-2 ring-gold/40 shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
          : "border-primary hover:border-accent"
      } ${i < 3 ? "corner-triangle" : ""}`}
      style={{
        transitionDelay: `${i * 70}ms`,
        boxShadow: isFeatured
          ? undefined
          : "0 4px 20px color-mix(in oklab, var(--primary) 15%, transparent)",
      }}
    >
      {isFeatured && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-darker shadow-md">
          জনপ্রিয়
        </span>
      )}
      <div className="text-5xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
        {s.icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-primary-dark">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
      <a
        href="#booking"
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-accent"
      >
        বিস্তারিত
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </article>
  );
}
