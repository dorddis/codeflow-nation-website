/**
 * Framer Motion Transition Variants
 *
 * Reusable animation variants for page transitions.
 * All transitions use Material Design easing for consistency.
 */

import { Variants } from 'framer-motion';

/**
 * Easing functions
 */
export const easings = {
  // Material Design standard easing
  easeOutCubic: [0.4, 0, 0.2, 1] as const,
  easeInCubic: [0.4, 0, 1, 1] as const,
  easeInOutCubic: [0.4, 0, 0.6, 1] as const,

  // Apple-style smooth easing
  easeOutExpo: [0.16, 1, 0.3, 1] as const,

  // Bounce effect
  easeOutBack: [0.34, 1.56, 0.64, 1] as const,
};

/**
 * Fade transition (default, fastest)
 * Duration: 300ms
 * Use for: Most page transitions
 */
export const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.easeOutCubic,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easings.easeInCubic,
    },
  },
};

/**
 * Slide up transition (entering from below)
 * Duration: 400ms
 * Use for: Blog posts, case studies (new content)
 */
export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOutCubic,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.easeInCubic,
    },
  },
};

/**
 * Slide down transition (returning to previous)
 * Duration: 400ms
 * Use for: Back navigation
 */
export const slideDownVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOutCubic,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: easings.easeInCubic,
    },
  },
};

/**
 * Scale transition (zoom in effect)
 * Duration: 350ms
 * Use for: Modal-like pages, detail views
 */
export const scaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easings.easeOutCubic,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.25,
      ease: easings.easeInCubic,
    },
  },
};

/**
 * Lift transition (card expanding to page)
 * Duration: 500ms
 * Use for: Card → detail page transitions (future enhancement)
 */
export const liftVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -40,
    transition: {
      duration: 0.4,
      ease: easings.easeInCubic,
    },
  },
};

/**
 * Reduced motion variants (respects user preferences)
 * No movement, only opacity changes
 */
export const reducedMotionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.01, // Almost instant
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};

/**
 * Get variant based on transition type
 */
export function getVariant(type: string): Variants {
  switch (type) {
    case 'slide-up':
      return slideUpVariants;
    case 'slide-down':
      return slideDownVariants;
    case 'scale':
      return scaleVariants;
    case 'lift':
      return liftVariants;
    case 'fade':
    default:
      return fadeVariants;
  }
}

/**
 * Get variant with motion preferences applied
 */
export function getVariantWithMotionPreference(
  type: string,
  prefersReducedMotion: boolean
): Variants {
  if (prefersReducedMotion) {
    return reducedMotionVariants;
  }
  return getVariant(type);
}
