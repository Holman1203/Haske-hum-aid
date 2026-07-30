'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    src: '/images/hero-field-2.jpeg',
    alt: 'HHAI humanitarian workers distributing aid to displaced families in Northern Nigeria',
    eyebrow: 'Woman-led · Youth-driven · Est. 2022',
    heading: (
      <>
        Restoring Hope.
        <br />
        Transforming <span style={{ color: 'var(--secondary-lt)', fontStyle: 'italic' }}>Communities.</span>
      </>
    ),
    text: 'Haske Humanitarian Aid Initiative improves lives through humanitarian assistance and sustainable development across Nigeria — delivering health, nutrition, education, protection and dignity to the communities that need it most.',
  },
  {
    src: '/images/1.jpeg',
    alt: 'HHAI staff distributing food supplies to women in an IDP community, Borno State',
    eyebrow: 'Emergency Response',
    heading: (
      <>
        Life-saving relief,
        <br />
        <span style={{ color: 'var(--secondary-lt)', fontStyle: 'italic' }}>delivered.</span>
      </>
    ),
    text: 'When crisis strikes, we move fast — food, relief supplies and protection for internally displaced families, returnees and the communities that host them.',
  },
  {
    src: '/images/hero-field-3.jpeg',
    alt: 'Community awareness and sensitisation session led by HHAI in Borno State',
    eyebrow: 'Advocacy & Gender Equality',
    heading: (
      <>
        Communities leading
        <br />
        their <span style={{ color: 'var(--secondary-lt)', fontStyle: 'italic' }}>own change.</span>
      </>
    ),
    text: 'Through awareness, sensitization and community-led campaigns, we challenge harmful practices and promote the rights of women, girls and the most vulnerable.',
  },
  {
    src: '/images/5.jpeg',
    alt: 'HHAI health worker speaking with a mother and her baby during community outreach',
    eyebrow: 'Health & Nutrition',
    heading: (
      <>
        Care for every mother
        <br />
        <span style={{ color: 'var(--secondary-lt)', fontStyle: 'italic' }}>and child.</span>
      </>
    ),
    text: 'From primary healthcare and psychosocial support to emergency nutrition, our outreach brings care directly to mothers and children affected by crisis.',
  },
  {
    src: '/images/3.jpeg',
    alt: 'HHAI protection team engaging with community members in Maiduguri',
    eyebrow: 'Protection',
    heading: (
      <>
        Safety and dignity,
        <br />
        <span style={{ color: 'var(--secondary-lt)', fontStyle: 'italic' }}>restored.</span>
      </>
    ),
    text: 'We prevent gender-based violence and stand with survivors — with medical care, case management and referral pathways that rebuild lives.',
  },
];

const INTERVAL_MS = 7000;

/**
 * Full hero carousel: crossfading background photos with synchronized
 * per-slide copy. The CTAs stay constant; only the message changes.
 * Rendered inside the hero <section> (position: relative) from page.tsx.
 */
export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[active];

  return (
    <>
      {/* Background slides */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
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
        {/* Deep purple gradient overlay for readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, rgba(46,27,71,.93) 0%, rgba(75,46,131,.8) 42%, rgba(75,46,131,.34) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hero copy — keyed by slide so it fades in with each photo */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(80px,12vh,140px) clamp(18px,4vw,48px) clamp(120px,16vh,160px)',
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <div key={active} style={{ animation: 'heroFadeUp .8s cubic-bezier(.16,.84,.34,1) both' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#8FE08A',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--secondary)' }} />
              {slide.eyebrow}
            </span>
            <h1
              style={{
                fontSize: 'clamp(42px,6.2vw,76px)',
                color: '#fff',
                margin: '20px 0 0',
                textShadow: '0 2px 30px rgba(46,27,71,.4)',
              }}
            >
              {slide.heading}
            </h1>
            <p
              style={{
                margin: '24px 0 0',
                maxWidth: 560,
                fontSize: 'clamp(16px,1.4vw,18.5px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,.88)',
                minHeight: '4.95em',
              }}
            >
              {slide.text}
            </p>
          </div>

          {/* Constant CTAs — outside the keyed block so they don't re-animate */}
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <Link
              href="/what-we-do"
              className="lift"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                height: 54,
                padding: '0 28px',
                borderRadius: 12,
                background: 'var(--secondary)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15.5,
                boxShadow: '0 16px 36px -12px rgba(58,170,53,.65)',
              }}
            >
              Explore Our Programs <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 54,
                padding: '0 26px',
                borderRadius: 12,
                border: '1.5px solid rgba(255,255,255,.45)',
                background: 'rgba(255,255,255,.08)',
                backdropFilter: 'blur(6px)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

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
              background: i === active ? 'var(--secondary)' : 'rgba(255,255,255,.45)',
              transition: 'all .35s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </>
  );
}
