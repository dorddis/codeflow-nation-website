'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${
    window.location.protocol === 'https:' ? '; Secure' : ''
  }`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      applyConsent(consent);
    }
  }, []);

  const applyConsent = (consentLevel: string) => {
    setCookie('cookieConsent', consentLevel, 365);
    localStorage.setItem('cookieConsent', consentLevel);

    if (consentLevel === 'all') {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    } else {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  const acceptNecessaryOnly = () => {
    applyConsent('necessary');
    setShowBanner(false);
  };

  const acceptAllCookies = () => {
    applyConsent('all');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Mobile: Compact top banner */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-200 shadow-lg p-3 transition-all duration-500 animate-slideDown">
        <div className="flex items-center justify-between gap-3">
          <p className="text-primary text-[13px] leading-tight flex-1">
            We use cookies.{' '}
            <Link href="/privacy-policy" className="text-accent underline">
              Learn more
            </Link>
          </p>
          <div className="flex gap-2">
            <button
              onClick={acceptNecessaryOnly}
              className="px-3 py-1.5 text-[11px] font-medium text-steel border border-gray-200 rounded-md hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
            >
              Decline
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-3 py-1.5 text-[11px] font-semibold bg-accent text-white rounded-md hover:bg-accent-hover transition-all duration-300 whitespace-nowrap"
            >
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: Bottom banner */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-gray-200 shadow-lg p-6 md:p-8 transition-all duration-500 animate-slideUp">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-primary text-lg font-semibold mb-2">We Value Your Privacy</h3>
            <p className="text-steel text-sm leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic.
              By clicking &quot;Accept All&quot;, you consent to our use of cookies. Learn more in our{' '}
              <Link href="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptNecessaryOnly}
              className="px-6 py-3 text-sm font-medium text-steel border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-6 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-hover transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
