/**
 * Custom hook for managing page transitions
 *
 * Handles:
 * - Motion preference detection
 * - Transition type selection
 * - Transition state management
 */

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getTransitionType } from '@/lib/view-transitions';

export function usePageTransition() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [transitionType, setTransitionType] = useState<string>('fade');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect motion preferences
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update transition type on route change
  useEffect(() => {
    if (pathname !== prevPathname) {
      const type = getTransitionType(prevPathname, pathname);
      setTransitionType(type);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return {
    pathname,
    transitionType,
    prefersReducedMotion,
  };
}
