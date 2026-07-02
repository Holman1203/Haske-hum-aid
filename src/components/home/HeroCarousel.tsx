'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  {
    src: '/images/hero-field-2.jpeg',
    alt: 'HHAI humanitarian workers distributing aid to displaced families in Northern Nigeria',
  },
  {
    src: '/images/1.jpeg',
    alt: 'HHAI staff distributing food supplies to women in an IDP community, Borno State',
  },
  {
    src: '/images/hero-field-3.jpeg',
    alt: 'Community awareness and sensitisation session led by HHAI in Borno State',
  },
  {
    src: '/images/5.jpeg',
    alt: 'HHAI health worker speaking with a mother and her baby during community outreach',
  },
  {
    src: '/images/3.jpeg',
    alt: 'HHAI protection team engaging with community members in Maiduguri',
  },
];

const INTERVAL_MS = 6000;

/**
 * Cinematic crossfading background slider for the hero.
 * Fills its (position: relative) parent; the gradient overlay and hero copy
 * are layered above it by the caller.
 */
export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.4s ease-in-out',
          }}
          aria-hidden={i !== active}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
              animation: i === active ? 'kenburns 22s ease-in-out infinite alternate' : 'none',
            }}
          />
        </div>
      ))}

      {/* Slide indicator dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          right: 'clamp(18px,4vw,48px)',
          display: 'flex',
          gap: 8,
          zIndex: 3,
        }}
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            style={{
              width: i === active ? 26 : 9,
              height: 9,
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              background: i === active ? 'var(--orange)' : 'rgba(255,255,255,.45)',
              transition: 'all .35s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </>
  );
}
