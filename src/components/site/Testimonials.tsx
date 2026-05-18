import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Client Reviews</span>
            <h2 className="mt-4 font-bold text-primary-dark">
              যাঁরা আমাদের সেবা নিয়েছেন
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-display font-semibold">৪.৯/৫</span>
              <span>·</span>
              <span>৫০০+ সত্যায়িত রিভিউ</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="card-premium relative flex h-full flex-col rounded-2xl p-7 sm:p-8">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/15" aria-hidden />

                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="mt-5 flex-1 text-[15px] italic leading-relaxed text-foreground/90">
                    "{t.text}"
                  </p>

                  <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/40"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-primary-dark">
                        <span className="truncate">{t.name}</span>
                        <BadgeCheck className="h-4 w-4 shrink-0 text-gold-deep" aria-label="Verified Client" />
                      </div>
                      <div className="mt-0.5 truncate text-xs text-muted-foreground">
                        {t.service} · {t.year}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`স্লাইড ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
