import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { STATS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function toBengali(n: number): string {
  return String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="font-display text-5xl font-extrabold leading-none tracking-tight text-primary sm:text-6xl"
    >
      {toBengali(value)}
      <span className="text-gold-deep">{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={[
                "flex flex-col items-center text-center px-4",
                i % 2 === 1 ? "border-l border-border lg:border-l" : "",
                "lg:border-l lg:border-border",
                i === 0 ? "lg:border-l-0" : "",
              ].join(" ")}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div className="mt-4 h-px w-8 bg-gold" />
              <div className="mt-4 text-sm font-semibold text-muted-foreground sm:text-base">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs font-display tracking-[0.16em] text-muted-foreground uppercase">
          <span>সরকার অনুমোদিত</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>কাজী রেজি. নং ২৭ — তেজগাঁও</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>আইন মন্ত্রণালয় নিবন্ধিত</span>
        </Reveal>
      </div>
    </section>
  );
}
