'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

/**
 * Wraps children in a Framer Motion div that fades + slides in once
 * when the element scrolls into view.
 */
export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = 'up',
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 36 : 0,
        x: direction === 'left' ? -36 : direction === 'right' ? 36 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
