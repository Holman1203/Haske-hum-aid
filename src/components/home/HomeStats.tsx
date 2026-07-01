'use client';

import { useEffect, useRef, useState } from 'react';

const TARGETS = [12000, 85, 4, 100];
const LABELS = [
  'People reached since 2022',
  'Communities served',
  'States across NE & NW Nigeria',
  'Community-led delivery',
];
const SUFFIX = ['+', '+', '', '%'];

const fmt = (n: number) => n.toLocaleString('en-US');

/** Animated impact counters — count up once when scrolled into view. */
export default function HomeStats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
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
          setCounts(TARGETS.map((t) => Math.round(t * e)));
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
    <section style={{ background: 'var(--ink)', color: '#fff' }}>
      <div
        ref={ref}
        data-reveal
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(40px,6vw,50px) clamp(18px,5vw,64px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
          gap: 'clamp(20px,3vw,30px)',
        }}
      >
        {TARGETS.map((_, i) => (
          <div key={i}>
            <div
              style={{
                fontFamily: "'Bricolage Grotesque'",
                fontWeight: 800,
                fontSize: 'clamp(32px,5.5vw,44px)',
                letterSpacing: '-.03em',
                lineHeight: 1,
              }}
            >
              {fmt(counts[i])}
              <span style={{ color: 'var(--gold)' }}>{SUFFIX[i]}</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.66)', marginTop: 8 }}>
              {LABELS[i]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
