'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 0.84, 0.34, 1] },
  }),
};

interface Props {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/** Fade-up on scroll into view, powered by Framer Motion. Fires once. */
export default function MotionReveal({ children, delay = 0, style, className }: Props) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      custom={delay}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
