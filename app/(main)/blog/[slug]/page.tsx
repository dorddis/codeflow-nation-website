import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/sanity.client';
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  recentBlogPostsQuery,
} from '@/sanity/lib/sanity.queries';
import { urlFor } from '@/sanity/lib/sanity.image';
import { PortableTextComponents } from '@/components/blog/PortableTextComponents';
import TableOfContents from '@/components/blog/TableOfContents';
import ShareButton from '@/components/blog/ShareButton';
import FadeIn from '@/components/FadeIn';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

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
  author: {
    name: string;
    slug: { current: string };
    role?: string;
    image?: {
      asset: { _ref: string; _type: string };
      alt: string;
    };
    bio?: string;
  };
  categories?: Array<{
    name: string;
    slug: { current: string };
  }>;
  body: any;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

interface RecentPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  featuredImage?: {
    asset: { _ref: string; _type: string };
    alt: string;
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(blogPostSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery, { slug });

  if (!post) {
    return {
      title: 'Post Not Found | CodeFlow',
    };
  }

  const title = post.seo?.metaTitle || `${post.title} | CodeFlow`;
  const description = post.seo?.metaDescription || post.excerpt;
  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage.asset).width(1200).height(630).url()
    : 'https://codeflownation.com/og-image.png';

  return {
    title,
    description,
    alternates: {
      canonical: `https://codeflownation.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://codeflownation.com/blog/${slug}`,
      siteName: 'CodeFlow',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    client.fetch<BlogPost>(blogPostBySlugQuery, { slug }),
    client.fetch<RecentPost[]>(recentBlogPostsQuery),
  ]);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://codeflownation.com' },
    { name: 'Blog', url: 'https://codeflownation.com/blog' },
    { name: post.title, url: `https://codeflownation.com/blog/${post.slug.current}` },
  ];

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Main Content */}
        <article>
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-8 transition-colors duration-400"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.categories.map((category) => (
                    <span
                      key={category.slug.current}
                      className="text-[0.85rem] text-primary border border-primary/30 rounded-full px-3 py-1"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-primary mb-6">
                {post.title}
              </h1>

              <div className="flex items-center justify-between py-4 border-y border-gray-200">
                <time className="text-[0.95rem] text-steel">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <ShareButton title={post.title} />
              </div>
            </div>
          </FadeIn>

          {post.featuredImage?.asset && (
            <FadeIn delay={0.3}>
              <div className="relative aspect-[16/9] mb-12 rounded-[20px] overflow-hidden">
                <Image
                  src={urlFor(post.featuredImage.asset).width(1200).height(675).url()}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={PortableTextComponents} />
            </div>
          </FadeIn>

          {post.author.bio && (
            <FadeIn delay={0.5}>
              <div className="mt-16 p-8 bg-white border border-gray-200 rounded-[20px] shadow-sm">
                <h3 className="text-[1.3rem] text-primary mb-4">About the Author</h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  {post.author.image?.asset && (
                    <Image
                      src={urlFor(post.author.image.asset).width(160).height(160).quality(90).url()}
                      alt={post.author.image.alt}
                      width={80}
                      height={80}
                      className="rounded-full flex-shrink-0"
                    />
                  )}
                  <div className="text-center sm:text-left">
                    <p className="text-[1.1rem] text-primary font-semibold mb-1">
                      {post.author.name}
                    </p>
                    {post.author.role && (
                      <p className="text-[0.95rem] text-accent mb-3">{post.author.role}</p>
                    )}
                    <p className="text-[1rem] text-steel leading-[1.7]">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <TableOfContents
            content={post.body}
            recentPosts={recentPosts}
            currentPostId={post._id}
          />
        </aside>
      </div>
    </main>
    </>
  );
}
