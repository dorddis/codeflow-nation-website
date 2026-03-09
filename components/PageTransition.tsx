'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useSelectedLayoutSegment } from 'next/navigation';
import { usePageTransition } from '@/hooks/usePageTransition';
import { getVariantWithMotionPreference } from '@/components/transitions/variants';
import { FrozenRouter } from '@/components/transitions/FrozenRouter';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Enhanced page transition component using Framer Motion AnimatePresence
 * with FrozenRouter to fix Next.js App Router issues
 *
 * Features:
 * - Route-aware transition selection (fade, slide-up, slide-down)
 * - Coordinated enter/exit animations (no double appearance)
 * - Respects prefers-reduced-motion
 * - Smooth 300-400ms transitions at 60fps
 *
 * Implementation:
 * - Uses FrozenRouter to prevent premature unmounting
 * - Keys on layout segment for proper AnimatePresence detection
 * - Wraps children in frozen context to complete animations
 *
 * Progressive enhancement:
 * - Modern browsers: View Transitions API (via CSS)
 * - All browsers: Framer Motion fallback
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const { transitionType, prefersReducedMotion } = usePageTransition();

  // Use layout segment as key instead of pathname
  // This ensures AnimatePresence detects route changes properly
  const segment = useSelectedLayoutSegment();

  // Get appropriate variant based on transition type and motion preferences
  const variants = getVariantWithMotionPreference(
    transitionType,
    prefersReducedMotion
  );

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={segment}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
