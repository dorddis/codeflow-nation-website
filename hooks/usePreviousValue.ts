/**
 * Custom hook to track previous value
 * Used by FrozenRouter to preserve router context during transitions
 */

'use client';

import { useRef, useEffect } from 'react';

export function usePreviousValue<T>(value: T): T | undefined {
  const prevValue = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
}
