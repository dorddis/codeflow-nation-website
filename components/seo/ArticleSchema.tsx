import { urlFor } from '@/sanity/lib/sanity.image';

interface ArticleSchemaProps {
  post: {
    title: string;
    excerpt: string;
    publishedAt: string;
    _updatedAt?: string;
    featuredImage?: {
      asset: { _ref: string; _type: string };
      alt: string;
    };
    author: {
      name: string;
      role?: string;
      bio?: string;
      image?: {
        asset: { _ref: string; _type: string };
        alt: string;
      };
    };
    slug: { current: string };
    categories?: Array<{
      name: string;
    }>;
  };
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage.asset).width(1200).height(630).url()
    : 'https://codeflownation.com/og-image.png';

  const authorImageUrl = post.author.image?.asset
    ? urlFor(post.author.image.asset).width(400).height(400).url()
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": post.publishedAt,
    "dateModified": post._updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      ...(post.author.role && { "jobTitle": post.author.role }),
      ...(post.author.bio && { "description": post.author.bio }),
      ...(authorImageUrl && { "image": authorImageUrl }),
    },
    "publisher": {
      "@type": "Organization",
      "name": "CodeFlow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://codeflownation.com/og-image.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://codeflownation.com/blog/${post.slug.current}`
    },
    ...(post.categories && post.categories.length > 0 && {
      "keywords": post.categories.map(cat => cat.name).join(', ')
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
