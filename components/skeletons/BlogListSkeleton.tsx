/**
 * Blog Listing Skeleton Screen
 *
 * Loading placeholder for blog listing page.
 * Matches the layout structure of app/(main)/blog/page.tsx
 */

import {
  SkeletonBox,
  SkeletonText,
  SkeletonCircle,
  SkeletonImage,
} from './SkeletonBase';

export default function BlogListSkeleton() {
  return (
    <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
      {/* Header */}
      <div className="mb-10 md:mb-16 text-center mx-auto">
        <SkeletonBox width="200px" height="56px" className="mb-5 mx-auto" />
        <div className="max-w-3xl mx-auto">
          <SkeletonBox width="100%" height="20px" className="mb-2 mx-auto" />
          <SkeletonBox width="80%" height="20px" className="mx-auto" />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {Array.from({ length: 9 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <SkeletonBox width="100px" height="44px" borderRadius="22px" />
        <SkeletonBox width="44px" height="44px" borderRadius="22px" />
        <SkeletonBox width="44px" height="44px" borderRadius="22px" />
        <SkeletonBox width="44px" height="44px" borderRadius="22px" />
        <SkeletonBox width="100px" height="44px" borderRadius="22px" />
      </div>
    </main>
  );
}

/**
 * Individual blog card skeleton
 */
function BlogCardSkeleton() {
  return (
    <div className="bg-glass border border-glass-border rounded-[20px] overflow-hidden">
      {/* Featured Image */}
      <SkeletonImage aspectRatio="16/9" />

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          <SkeletonBox width="90px" height="26px" borderRadius="13px" />
          <SkeletonBox width="110px" height="26px" borderRadius="13px" />
        </div>

        {/* Title */}
        <div className="mb-3">
          <SkeletonBox width="100%" height="24px" className="mb-2" />
          <SkeletonBox width="70%" height="24px" />
        </div>

        {/* Excerpt */}
        <div className="mb-4">
          <SkeletonText lines={3} />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
          <SkeletonCircle size="40px" />
          <div className="flex-1">
            <SkeletonBox width="120px" height="16px" className="mb-1" />
            <SkeletonBox width="100px" height="14px" />
          </div>
        </div>
      </div>
    </div>
  );
}
