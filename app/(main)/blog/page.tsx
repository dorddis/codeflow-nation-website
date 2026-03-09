import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/sanity.client';
import { blogPostsQuery, blogPostsCountQuery } from '@/sanity/lib/sanity.queries';
import { urlFor } from '@/sanity/lib/sanity.image';

export const metadata: Metadata = {
  title: 'Blog | CodeFlow',
  description:
    'Insights on enterprise automation, AI workflows, and building efficient operations at scale.',
  keywords: 'CodeFlow blog, enterprise automation, AI workflows, business process automation, workflow optimization',
  alternates: {
    canonical: 'https://codeflownation.com/blog',
  },
  openGraph: {
    title: 'Blog | CodeFlow',
    description:
      'Insights on enterprise automation, AI workflows, and building efficient operations at scale.',
    url: 'https://codeflownation.com/blog',
    siteName: 'CodeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | CodeFlow',
    description:
      'Insights on enterprise automation, AI workflows, and building efficient operations.',
  },
};

const POSTS_PER_PAGE = 12;

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  featuredImage?: {
    asset: { _ref: string; _type: string };
    alt: string;
  };
  categories?: Array<{
    name: string;
    slug: { current: string };
  }>;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalPosts] = await Promise.all([
    client.fetch<BlogPost[]>(blogPostsQuery, { start, end }),
    client.fetch<number>(blogPostsCountQuery),
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%] bg-background">
      {/* Header */}
      <div className="mb-10 md:mb-16 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-primary">
          Blog
        </h1>
        <p className="text-lg text-steel max-w-3xl mx-auto">
          Insights on enterprise automation, AI workflows, and building efficient operations at scale.
        </p>
      </div>

      {/* Blog Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-steel">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {post.featuredImage?.asset && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={urlFor(post.featuredImage.asset).width(600).height(338).url()}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <span
                          key={category.slug.current}
                          className="text-sm text-accent border border-accent/30 rounded-full px-3 py-1"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-steel mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-steel">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-primary hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                >
                  Previous
                </Link>
              )}

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`min-w-[44px] min-h-[44px] flex items-center justify-center px-4 py-3 rounded-full transition-all duration-300 ${
                      page === currentPage
                        ? 'bg-accent text-white'
                        : 'bg-white border border-gray-200 text-primary hover:border-accent'
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-primary hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
}
