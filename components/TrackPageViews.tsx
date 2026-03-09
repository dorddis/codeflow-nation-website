'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function TrackPageViewsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
      window.gtag('event', 'page_view', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function TrackPageViews() {
  return (
    <Suspense fallback={null}>
      <TrackPageViewsInner />
    </Suspense>
  );
}
