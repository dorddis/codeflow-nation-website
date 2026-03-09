/**
 * View Transitions API Helper Utilities
 *
 * Provides progressive enhancement for native browser transitions.
 * Falls back gracefully for unsupported browsers (Safari, Firefox).
 *
 * Browser Support:
 * - Chrome 111+
 * - Edge 111+
 * - Opera 97+
 */

/**
 * Check if View Transitions API is supported
 */
export function supportsViewTransitions(): boolean {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
}

/**
 * Transition helper that uses View Transitions API when available
 *
 * @param updateCallback - Function that updates the DOM
 * @returns Promise that resolves when transition completes
 *
 * @example
 * ```typescript
 * await transitionHelper(() => {
 *   router.push('/blog');
 * });
 * ```
 */
export async function transitionHelper(
  updateCallback: () => void | Promise<void>
): Promise<void> {
  if (!supportsViewTransitions()) {
    // Fallback for unsupported browsers
    const result = updateCallback();
    if (result instanceof Promise) {
      await result;
    }
    return;
  }

  // Use native View Transitions API
  const transition = (document as any).startViewTransition(async () => {
    const result = updateCallback();
    if (result instanceof Promise) {
      await result;
    }
  });

  // Wait for transition to complete
  await transition.finished;
}

/**
 * Set transition type via data attribute for CSS targeting
 *
 * @param type - Transition type (fade, slide-up, slide-down, scale)
 *
 * @example
 * ```typescript
 * setTransitionType('slide-up');
 * await transitionHelper(() => router.push('/blog'));
 * clearTransitionType();
 * ```
 */
export function setTransitionType(type: string): void {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.transition = type;
  }
}

/**
 * Clear transition type data attribute
 */
export function clearTransitionType(): void {
  if (typeof document !== 'undefined') {
    delete document.documentElement.dataset.transition;
  }
}

/**
 * Get transition type based on route navigation
 *
 * @param from - Current pathname
 * @param to - Target pathname
 * @returns Transition type identifier
 */
export function getTransitionType(from: string, to: string): string {
  // Home to any page
  if (from === '/' && to !== '/') {
    return 'fade';
  }

  // Any page to home
  if (from !== '/' && to === '/') {
    return 'fade';
  }

  // Blog navigation (sequential content)
  if (to.startsWith('/blog') && !from.startsWith('/blog')) {
    return 'slide-up';
  }

  if (from.startsWith('/blog') && !to.startsWith('/blog')) {
    return 'slide-down';
  }

  // Default
  return 'fade';
}
