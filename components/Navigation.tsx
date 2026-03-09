'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-[80px] flex justify-between items-center px-[5%] z-[100] bg-white/90 backdrop-blur-[15px] border-b border-gray-200 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <span className="text-2xl font-bold font-heading text-primary">
            Code<span className="text-accent">Flow</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10">
          <Link
            href="/"
            className="text-[0.9rem] font-medium tracking-[0.5px] text-steel uppercase hover:text-primary transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-[0.9rem] font-medium tracking-[0.5px] text-steel uppercase hover:text-primary transition-all duration-300"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-[0.9rem] font-medium tracking-[0.5px] text-steel uppercase hover:text-primary transition-all duration-300"
          >
            Blog
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2.5 rounded-lg bg-accent text-[0.9rem] font-semibold whitespace-nowrap text-white hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book a Call
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-[30px] h-[30px] relative z-[101] ml-4"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="stroke-primary stroke-[2.5]">
              {mobileMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-[90] flex flex-col justify-center items-center transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className="text-3xl font-semibold text-primary my-4 hover:text-accent transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/work"
          onClick={toggleMenu}
          className="text-3xl font-semibold text-primary my-4 hover:text-accent transition-all duration-300"
        >
          Work
        </Link>
        <Link
          href="/blog"
          onClick={toggleMenu}
          className="text-3xl font-semibold text-primary my-4 hover:text-accent transition-all duration-300"
        >
          Blog
        </Link>
        <div className="mt-8 flex flex-col gap-4">
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="px-8 py-3 rounded-lg bg-accent text-xl font-semibold text-white hover:bg-accent-hover transition-all duration-300 text-center"
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  );
}
