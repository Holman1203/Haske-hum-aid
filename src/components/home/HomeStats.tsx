'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 85, suffix: '+', label: 'Communities Reached' },
  { target: 12000, suffix: '+', label: 'People Impacted' },
  { target: 4, suffix: '', label: 'States Covered' },
  { target: 58, suffix: '+', label: 'Projects Implemented' },
];

const fmt = (n: number) => n.toLocaleString('en-US');

/** Animated impact counters in a glass card overlapping the hero. Count up once in view. */
export default function HomeStats() {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        io.disconnect();

        const dur = 1700;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          setCounts(STATS.map((s) => Math.round(s.target * e)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ padding: '0 clamp(18px,4vw,48px)', position: 'relative', zIndex: 5 }}>
      <div
        ref={ref}
        className="glass"
        style={{
          maxWidth: 1180,
          margin: '-72px auto 0',
          borderRadius: 22,
          boxShadow: '0 30px 60px -25px rgba(46,27,71,.35)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 'clamp(16px,2.5vw,24px)',
          padding: 'clamp(26px,3.5vw,40px)',
          textAlign: 'center',
        }}
      >
        {STATS.map((s, i) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 800,
                fontSize: 'clamp(34px,4.5vw,48px)',
                letterSpacing: '-.02em',
                lineHeight: 1,
                color: 'var(--primary-deep)',
              }}
            >
              {fmt(counts[i])}
              <span style={{ color: 'var(--secondary)' }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--muted)', marginTop: 9 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
