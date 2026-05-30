'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

/* ─── Slide data ──────────────────────────────────────────────── */
const slides = [
  {
    id: 0,
    tag: 'Emergency Response',
    headline: ['A Mother\'s Hope,', 'Our Mission'],
    description:
      'Every woman and child in Nigeria deserves dignity, health, and the chance to thrive. HHAI walks alongside the most vulnerable — delivering life-saving care where it matters most.',
    buttons: [
      { label: 'Donate Now',  href: '/get-involved#donate',    primary: true  },
      { label: 'Learn More',  href: '/about',                   primary: false },
    ],
    image:    'https://images.unsplash.com/photo-1509099382481-f5a8e80bed7d?w=1920&h=1080&auto=format&fit=crop&q=85&crop=center',
    imageAlt: 'African mother holding her young child, representing the communities HHAI serves',
  },
  {
    id: 1,
    tag: 'Health Programs',
    headline: ['Quality Healthcare', 'for Every Mother'],
    description:
      'Community health workers and clinics bringing RMNCHN services — maternal care, child immunisation, and skilled birth attendance — to underserved women across Nigeria.',
    buttons: [
      { label: 'Explore Health Programs', href: '/programs/health', primary: true  },
      { label: 'Support Our Mission',     href: '/get-involved',    primary: false },
    ],
    image:    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&auto=format&fit=crop&q=85',
    imageAlt: 'Healthcare worker conducting maternal health check in a rural community',
  },
  {
    id: 2,
    tag: 'WASH',
    headline: ['Clean Water', 'Changes Everything'],
    description:
      'Safe water, sanitation, and hygiene are the foundation of community health. HHAI rehabilitates boreholes, builds latrines, and trains communities to protect every family.',
    buttons: [
      { label: 'View WASH Projects', href: '/programs/wash',          primary: true  },
      { label: 'Partner With Us',    href: '/get-involved#partners',  primary: false },
    ],
    image:    'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?w=1920&h=1080&auto=format&fit=crop&q=85',
    imageAlt: 'Children and women accessing clean water from a rehabilitated borehole',
  },
  {
    id: 3,
    tag: 'Nutrition',
    headline: ['No Child Should', 'Go to Bed Hungry'],
    description:
      'Through community-based nutrition programs, HHAI screens, treats, and prevents acute malnutrition in children under five and pregnant and lactating mothers.',
    buttons: [
      { label: 'Nutrition Programs', href: '/programs/nutrition',     primary: true  },
      { label: 'Donate Today',       href: '/get-involved#donate',    primary: false },
    ],
    image:    'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=1920&h=1080&auto=format&fit=crop&q=85',
    imageAlt: 'Community nutrition screening and therapeutic feeding for children under five',
  },
  {
    id: 4,
    tag: 'Education & Livelihoods',
    headline: ['Empowering Women,', 'Transforming Communities'],
    description:
      'From girls back in school to women building income and self-reliance — HHAI invests in the long-term resilience of families and communities across Nigeria.',
    buttons: [
      { label: 'View Projects',  href: '/projects',       primary: true  },
      { label: 'Get Involved',   href: '/get-involved',   primary: false },
    ],
    image:    'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&auto=format&fit=crop&q=85',
    imageAlt: 'Young African girls in school, beneficiaries of HHAI education programs',
  },
];

/* ─── Shared transition helpers ──────────────────────────────── */
const easeFast: Transition = { duration: 0.55, ease: 'easeOut' };
const easeSmooth: Transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
const easeMed: Transition  = { duration: 0.60, ease: 'easeOut' };

/* ─── Framer Motion variants ─────────────────────────────────── */
const contentVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.12 } },
  exit:    { opacity: 0, transition: { duration: 0.22 } },
};

const tagVariants: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0,  transition: easeFast },
};

const headlineVariants: Variants = {
  hidden:  { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0,  transition: easeSmooth },
};

const lineVariants: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const descVariants: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,  transition: easeMed },
};

const btnVariants: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: easeFast },
};

/* ─── Component ──────────────────────────────────────────────── */
export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey,     setAnimKey    ] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
    setAnimKey((k) => k + 1);
  }, []);

  const goToSlide = (index: number) => {
    // loop mode offsets by 1 internally
    swiperRef.current?.slideToLoop(index);
  };

  const current = slides[activeIndex];

  return (
    <section
      className="relative w-full h-screen min-h-[580px] max-h-[1100px] overflow-hidden"
      aria-label="HHAI Hero Slider"
    >
      {/* ── Background images via Swiper ── */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        speed={1100}
        onSwiper={(s)        => { swiperRef.current = s; }}
        onSlideChange={handleSlideChange}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
            {/* Ken Burns wrapper — class determines which animation variant */}
            <div className={`absolute inset-0 hero-kenburns-${i % 3}`}>
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className="object-cover object-center select-none pointer-events-none"
                priority={i === 0}
                sizes="100vw"
                quality={80}
                draggable={false}
              />
            </div>
            {/* Dual-layer gradients for readability at all screen sizes */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Animated text overlay (independent of Swiper) ── */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            key={animKey}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:max-w-3xl"
          >
              {/* Tag badge */}
              <motion.div variants={tagVariants} className="mb-5">
                <span className="inline-flex items-center gap-2 bg-brand-orange/90 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.14em] shadow-lg">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  {current.tag}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={headlineVariants}
                className="font-serif font-bold text-white leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.25rem)' }}
              >
                {current.headline[0]}
                <br />
                <span className="text-brand-orange">{current.headline[1]}</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div
                variants={lineVariants}
                className="w-20 h-[3px] bg-brand-orange rounded-full mb-5 origin-left"
              />

              {/* Description */}
              <motion.p
                variants={descVariants}
                className="text-white/85 leading-relaxed mb-8 max-w-xl"
                style={{ fontSize: 'clamp(0.92rem, 1.6vw, 1.1rem)' }}
              >
                {current.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={btnVariants} className="flex flex-wrap gap-3">
                {current.buttons.map((btn) =>
                  btn.primary ? (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-purple-700 active:scale-95 text-white font-bold px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 text-sm lg:text-[0.95rem]"
                    >
                      {btn.label} <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-5 py-3 rounded-lg backdrop-blur-sm hover:bg-white hover:text-brand-blue active:scale-95 transition-all duration-300 text-sm lg:text-[0.95rem]"
                    >
                      {btn.label}
                    </Link>
                  )
                )}
              </motion.div>
            </motion.div>
        </div>
      </div>

      {/* ── Left / Right navigation arrows ── */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full
                   bg-white/10 hover:bg-white/25 border border-white/25
                   backdrop-blur-md text-white
                   flex items-center justify-center
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full
                   bg-white/10 hover:bg-white/25 border border-white/25
                   backdrop-blur-md text-white
                   flex items-center justify-center
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Bottom bar: pagination dots + slide counter ── */}
      <div className="absolute bottom-10 inset-x-0 z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12">

        {/* Dots */}
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === activeIndex
                  ? 'w-8 h-2.5 bg-brand-orange shadow-md'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide counter  01 / 05 */}
        <div className="text-white/70 text-sm font-mono select-none">
          <span className="text-white font-bold text-lg tabular-nums leading-none">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="mx-1 text-white/40">/</span>
          <span className="tabular-nums">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* ── Animated progress bar ── */}
      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-white/10 z-20" aria-hidden="true">
        <motion.div
          key={`bar-${animKey}`}
          className="h-full bg-brand-orange origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5.5, ease: 'linear' }}
        />
      </div>

      {/* ── Scroll-down indicator ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20
                   flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.22em] font-semibold hidden sm:block">
          Scroll
        </span>
        {/* Animated mouse icon */}
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 bg-white/60 rounded-full"
            animate={{ y: [0, 11, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
