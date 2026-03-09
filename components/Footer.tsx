import Link from 'next/link';
import { client } from '@/sanity/lib/sanity.client';
import { footerBlogPostsQuery } from '@/sanity/lib/sanity.queries';

interface FooterPost {
  title: string;
  slug: { current: string };
}

export default async function Footer() {
  let posts: FooterPost[] = [];
  try {
    posts = await client.fetch(footerBlogPostsQuery);
  } catch {
    // Fail silently
  }

  return (
    <footer className="border-t border-gray-200 pt-12 pb-8 px-[5%] bg-background-dark text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <span className="text-xl font-bold font-heading">
              Code<span className="text-accent">Flow</span>
            </span>
            <p className="text-steel-light text-sm mt-2">
              Custom AI automation for enterprise workflows.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/siddharth-rodrigues/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-light hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-3">Pages</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-steel-light text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/work" className="text-steel-light text-sm hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/blog" className="text-steel-light text-sm hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Blog */}
          {posts.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-3">Latest Posts</h4>
              <div className="flex flex-col gap-2">
                {posts.map((post) => (
                  <Link
                    key={post.slug.current}
                    href={`/blog/${post.slug.current}`}
                    className="text-steel-light text-sm hover:text-white transition-colors line-clamp-1"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:siddharth@codeflownation.com"
                className="text-steel-light text-sm hover:text-accent transition-colors"
              >
                siddharth@codeflownation.com
              </a>
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/siddharth-rodrigues-personal-calendar-ihwyx1a3d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-hover transition-colors w-fit"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-steel-light text-sm">
            <span>2026 CodeFlow. Built by Siddharth Rodrigues.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
