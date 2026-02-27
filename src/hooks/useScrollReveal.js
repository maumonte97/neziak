import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Immediately reveal all elements — no animation
      const el = ref.current;
      if (el) {
        el.querySelectorAll(
          '.reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right, .reveal-scale'
        ).forEach((child) => child.classList.add('revealed'));
      }
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll(
      '.reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right, .reveal-scale'
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
