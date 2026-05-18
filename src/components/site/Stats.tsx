import { useEffect, useState } from "react";
import { Award, Heart, ShieldCheck, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { STATS } from "@/lib/site-data";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function toBengali(n: number): string {
  return String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

const ICONS = [Award, Heart, ShieldCheck, Clock];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  // Fallback: if observer hasn't fired within 1.2s of mount, start anyway.
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!inView && !started) return;
    const duration = 1800;
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
  }, [inView, started, target]);

  return (
    <div
      ref={ref}
      className="text-5xl font-extrabold leading-none text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-6xl"
    >
      {toBengali(value)}
      <span className="text-gold-soft">{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      style={{
        background:
          "linear-gradient(135deg, var(--accent-deep) 0%, var(--accent-darker) 100%)",
      }}
    >
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 22px)",
        }}
      />
      {/* Gold radial glows */}
      <div
        className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = ICONS[i] ?? Award;
            const isLastCol = (i + 1) % 2 === 0;
            const isLastColLg = i === STATS.length - 1;
            return (
              <div
                key={s.label}
                className={[
                  "group relative flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1",
                  !isLastCol ? "border-r border-gold/30" : "",
                  "lg:border-r lg:border-gold/30",
                  isLastColLg ? "lg:border-r-0" : "",
                ].join(" ")}
              >
                {/* Gold icon medallion */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/70 bg-gradient-to-br from-gold/30 to-gold/5 shadow-[0_4px_20px_rgba(212,175,55,0.35)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 text-gold sm:h-7 sm:w-7" strokeWidth={2.25} />
                </div>

                <Counter target={s.value} suffix={s.suffix} />

                {/* Gold underline */}
                <div className="mt-3 h-0.5 w-10 rounded bg-gold/80" />

                <div className="mt-3 text-sm font-semibold tracking-wide text-gold-soft sm:text-base">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top wave divider into red */}
      <svg
        className="absolute top-0 left-0 h-10 w-full -translate-y-[1px] sm:h-12"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z"
          fill="var(--accent-deep)"
        />
      </svg>

      {/* Bottom wave divider into cream */}
      <svg
        className="absolute bottom-0 left-0 h-10 w-full translate-y-[1px] sm:h-12"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="var(--background)"
        />
      </svg>
    </section>
  );
}
