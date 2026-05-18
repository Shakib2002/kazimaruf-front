import { WHY_US } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-primary-foreground sm:py-28">
      <div className="arabic-watermark absolute inset-0 opacity-[0.07]" aria-hidden />
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold/40 bg-primary-darker/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            কেন আমরা
          </span>
          <h2 className="gold-underline mt-4 font-bold text-gold">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <p className="mt-6 text-base text-mint">
            বিশ্বাস, অভিজ্ঞতা ও শরীয়াহ — তিনটির অপূর্ব সমন্বয়।
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w) => (
            <div
              key={w.title}
              className="group relative rounded-2xl border border-white/10 bg-primary-darker/50 p-7 backdrop-blur transition-transform hover:-translate-y-1"
              style={{ borderTop: "3px solid var(--gold)" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-primary-darker shadow-lg">
                {w.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mint">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
