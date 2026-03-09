/**
 * FrozenRouter Component
 *
 * Fixes AnimatePresence exit animations in Next.js App Router by
 * freezing the LayoutRouterContext during route transitions.
 *
 * Problem:
 * - App Router updates context frequently during navigation
 * - This causes components to unmount before exit animations complete
 * - AnimatePresence can't detect exits properly
 *
 * Solution:
 * - Preserve previous router context using refs
 * - Only update context when layout segment actually changes
 * - Allow animations to complete before context updates
 */

'use client';

import { useContext } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSelectedLayoutSegment } from 'next/navigation';
import { usePreviousValue } from '@/hooks/usePreviousValue';

interface FrozenRouterProps {
  children: React.ReactNode;
}

export function FrozenRouter({ children }: FrozenRouterProps) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const segment = useSelectedLayoutSegment();
  const prevSegment = usePreviousValue(segment);

  // Determine if the route has actually changed
  const changed =
    segment !== prevSegment &&
    segment !== undefined &&
    prevSegment !== undefined;

  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {children}
    </LayoutRouterContext.Provider>
  );
}
