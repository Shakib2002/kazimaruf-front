import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })],
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

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-20 sm:py-28"
    >
      {/* Subtle decorative pattern */}
      <div
        className="islamic-pattern-strong absolute inset-0 opacity-[0.04]"
        aria-hidden
      />
      {/* Decorative gold blobs */}
      <div
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <Star className="h-4 w-4 fill-gold text-gold" />
            গ্রাহকদের মন্তব্য
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-darker sm:text-4xl md:text-5xl">
            যাঁরা আমাদের সেবা নিয়েছেন
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            হাজারো পরিবারের আস্থা ও ভালোবাসায় গড়া আমাদের ২৬ বছরের যাত্রা।
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="group relative flex h-full flex-col rounded-2xl border-2 border-gold/25 bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl sm:p-7">
                  {/* Quote icon */}
                  <Quote
                    className="absolute right-5 top-5 h-10 w-10 text-gold/20"
                    aria-hidden
                  />

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                        aria-hidden
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mt-4 flex-1 text-base italic leading-relaxed text-foreground">
                    “{t.text}”
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-full border-2 border-gold/60 object-cover shadow-md"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-base font-bold text-primary-darker">
                        {t.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{t.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service tag */}
                  <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <span>{t.service}</span>
                    <span className="text-gold">•</span>
                    <span>{t.year}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`স্লাইড ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-8 bg-gold"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
