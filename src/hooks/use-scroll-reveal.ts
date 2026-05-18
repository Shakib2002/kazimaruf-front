import { useEffect, useRef } from "react";

/**
 * Adds `.is-visible` to the element when it scrolls into view.
 * Pair with `.reveal-up` class for fade+slide-up effect.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already visible (above-the-fold) — show immediately
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
