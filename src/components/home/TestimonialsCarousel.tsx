'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  age: number | null;
  role: string;
  location: string;
  program: string;
  programColor: string;
  image: string;
}

interface Props {
  items: Testimonial[];
}

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
};

export default function TestimonialsCarousel({ items }: Props) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setDir(1);
    setIdx((c) => (c + 1) % items.length);
  }, [items.length]);

  const retreat = useCallback(() => {
    setDir(-1);
    setIdx((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback(
    (i: number, current: number) => {
      setDir(i > current ? 1 : -1);
      setIdx(i);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, 5500);
    return () => clearInterval(timer);
  }, [advance, paused]);

  const t = items[idx];

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide */}
      <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: 'easeInOut' }}
            className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 lg:p-10"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className={`tag-pill ${t.programColor} font-semibold text-xs`}>
                {t.program}
              </span>
              <Quote size={26} className="text-brand-orange opacity-50" />
            </div>

            {/* Quote */}
            <p className="text-white leading-relaxed text-base lg:text-lg italic mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Person */}
            <div className="flex items-center gap-4 pt-5 border-t border-white/10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-orange/60">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  {t.name}
                  {t.age ? `, ${t.age}` : ''}
                </p>
                <p className="text-green-300 text-xs">{t.role}</p>
                <p className="text-white/50 text-[11px] flex items-center gap-1 mt-0.5">
                  <MapPin size={10} /> {t.location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-7">
        <button
          onClick={retreat}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border-2 border-white/30 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:border-white/60"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, idx)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === idx
                  ? 'bg-brand-orange w-8'
                  : 'bg-white/30 w-2 hover:bg-white/55'
              }`}
            />
          ))}
        </div>

        <button
          onClick={advance}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border-2 border-white/30 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:border-white/60"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden max-w-[200px] mx-auto">
        <motion.div
          key={idx}
          className="h-full bg-brand-orange rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: paused ? undefined : '100%' }}
          transition={{ duration: 5.5, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
