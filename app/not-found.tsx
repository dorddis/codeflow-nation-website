import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | CodeFlow',
  description: 'Error 404: Page Not Found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-background">
      <main className="text-center p-10 max-w-[600px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
        <h1 className="text-[8rem] leading-[1] text-accent mb-5">404</h1>
        <h2 className="text-[2rem] text-primary mb-5">Page Not Found</h2>
        <p className="text-[1.1rem] text-steel mb-8">
          Sorry, we can&apos;t find the page you were looking for. The link may be broken, or the page may have been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-10 py-4 rounded-full text-[1.1rem] font-semibold shadow-lg hover:bg-accent-hover hover:translate-y-[-2px] transition-all duration-300"
        >
          Go To Homepage
        </Link>
      </main>
    </div>
  );
}
