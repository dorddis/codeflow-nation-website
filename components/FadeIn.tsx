'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

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
 * FadeIn component for scroll-triggered animations
 * Matches the reveal animation style from the original public_html implementation
 *
 * @param delay - Animation delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 0.8)
 * @param yOffset - Initial Y offset in pixels (default: 40)
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
  // TEMPORARY: Disable animations to test if they're causing content to be hidden
  return (
    <div className={className}>
      {children}
    </div>
  );
}
