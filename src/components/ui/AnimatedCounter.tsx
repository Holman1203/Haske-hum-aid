'use client';

import { useEffect, useRef, useState } from 'react';

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface Props {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a numeric string (e.g. "10,000+" or "2022") counting up
 * when the element scrolls into view. Fires only once.
 */
export default function AnimatedCounter({ value, duration = 1800, className }: Props) {
  const [display, setDisplay] = useState<string>('');
  const spanRef = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) { setDisplay(value); return; }

    const idx = value.indexOf(numMatch[0]);
    const prefix = value.slice(0, idx);
    const suffix = value.slice(idx + numMatch[0].length);
    const target = parseInt(numMatch[0].replace(/,/g, ''), 10);

    // For year-like numbers start close to avoid counting from 0
    const isYear = target >= 1900 && target <= 2100;
    const from = isYear ? target - 6 : 0;
    const range = target - from;

    setDisplay(`${prefix}${from.toLocaleString()}${suffix}`);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        io.disconnect();

        let raf: number;
        let t0: number | null = null;

        const tick = (ts: number) => {
          if (t0 === null) t0 = ts;
          const p = Math.min((ts - t0) / duration, 1);
          const cur = Math.round(from + range * easeOutExpo(p));
          setDisplay(`${prefix}${cur.toLocaleString()}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    if (spanRef.current) io.observe(spanRef.current);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={spanRef} className={className}>
      {display || value}
    </span>
  );
}
