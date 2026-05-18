import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { STATS } from "@/lib/site-data";

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
    <div ref={ref} className="shimmer text-5xl font-bold text-white sm:text-6xl">
      {toBengali(value)}
      <span className="text-gold">{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-accent py-14 sm:py-16">
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 18px)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${
                i < STATS.length - 1
                  ? "lg:border-r lg:border-gold/40"
                  : ""
              } ${i % 2 === 0 ? "border-r border-gold/40 lg:border-r" : ""}`}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold sm:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
