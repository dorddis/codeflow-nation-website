'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number; // For horizontal slides
  className?: string;
  once?: boolean;
}

/**
 * FadeIn component for scroll-triggered animations.
 *
 * Uses whileInView so content reveals as it enters the viewport. The viewport
 * margin pulls the trigger boundary down so above-the-fold content animates in
 * immediately on load. Critically, opacity is never left stuck at 0: framer-motion
 * sets the final `whileInView` state once the element is in view, and if the
 * IntersectionObserver / motion fails entirely the element still resolves to its
 * animate target rather than the initial hidden state.
 *
 * @param delay - Animation delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 0.8)
 * @param yOffset - Initial Y offset in pixels (default: 30)
 * @param xOffset - Initial X offset in pixels for horizontal slides (default: 0)
 * @param once - Whether animation should trigger only once (default: true)
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  xOffset = 0, // For horizontal slides
  className = '',
  once = true, // Animation triggers once and stays visible
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
