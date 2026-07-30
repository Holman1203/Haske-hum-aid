'use client';

import { useEffect } from 'react';

/**
 * Mount once per page. Watches every `[data-reveal]` element and adds the
 * `.in` class the first time it scrolls into view, driving the CSS reveal
 * transition defined in globals.css.
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const els = document.querySelectorAll('[data-reveal]:not(.in)');
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
