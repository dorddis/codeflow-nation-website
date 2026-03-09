import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/sanity.client';

const baseUrl = 'https://codeflownation.com';

const blogPostsQuery = `*[_type == "blogPost" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await client.fetch<Array<{
    slug: string;
    publishedAt: string;
    _updatedAt: string;
  }>>(blogPostsQuery);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
