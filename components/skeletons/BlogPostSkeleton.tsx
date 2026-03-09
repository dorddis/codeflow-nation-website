/**
 * Blog Post Skeleton Screen
 *
 * Loading placeholder for individual blog post pages.
 * Matches the layout structure of app/(main)/blog/[slug]/page.tsx
 */

import {
  SkeletonBox,
  SkeletonText,
  SkeletonCircle,
  SkeletonImage,
  SkeletonCard,
} from './SkeletonBase';

export default function BlogPostSkeleton() {
  return (
    <main className="max-w-7xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Main Content */}
        <article>
          {/* Back Link */}
          <SkeletonBox width="120px" height="24px" className="mb-8" />

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-5">
            <SkeletonBox width="100px" height="28px" borderRadius="14px" />
            <SkeletonBox width="120px" height="28px" borderRadius="14px" />
          </div>

          {/* Title */}
          <div className="mb-6">
            <SkeletonBox width="100%" height="48px" className="mb-3" />
            <SkeletonBox width="70%" height="48px" />
          </div>

          {/* Publish Date & Share */}
          <div className="flex items-center justify-between py-4 border-y border-glass-border mb-12">
            <SkeletonBox width="150px" height="16px" />
            <SkeletonBox width="100px" height="36px" borderRadius="20px" />
          </div>

          {/* Featured Image */}
          <SkeletonImage aspectRatio="16/9" className="mb-12" />

          {/* Body Content */}
          <div className="space-y-8">
            {/* Paragraph 1 */}
            <div>
              <SkeletonText lines={5} />
            </div>

            {/* Paragraph 2 */}
            <div>
              <SkeletonText lines={4} />
            </div>

            {/* Heading */}
            <SkeletonBox width="60%" height="32px" className="mt-12" />

            {/* Paragraph 3 */}
            <div>
              <SkeletonText lines={6} />
            </div>

            {/* Paragraph 4 */}
            <div>
              <SkeletonText lines={4} />
            </div>

            {/* Image in content */}
            <SkeletonImage aspectRatio="16/9" className="my-8" />

            {/* Paragraph 5 */}
            <div>
              <SkeletonText lines={5} />
            </div>
          </div>

          {/* Author Bio */}
          <SkeletonCard className="mt-16">
            <SkeletonBox width="180px" height="24px" className="mb-4" />
            <div className="flex items-start gap-5">
              <SkeletonCircle size="80px" className="flex-shrink-0" />
              <div className="flex-1">
                <SkeletonBox width="140px" height="20px" className="mb-2" />
                <SkeletonBox width="100px" height="16px" className="mb-3" />
                <SkeletonText lines={3} />
              </div>
            </div>
          </SkeletonCard>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-24">
            <div className="bg-glass border border-glass-border rounded-[20px] p-6 backdrop-blur-sm">
              {/* Table of Contents */}
              <SkeletonBox width="150px" height="12px" className="mb-6" />
              <div className="space-y-2">
                <SkeletonBox width="100%" height="16px" />
                <SkeletonBox width="90%" height="16px" />
                <SkeletonBox width="95%" height="16px" />
                <SkeletonBox width="85%" height="16px" />
                <SkeletonBox width="92%" height="16px" />
                <SkeletonBox width="88%" height="16px" />
              </div>

              {/* Read More Section */}
              <div className="mt-8 pt-6 border-t border-glass-border">
                <SkeletonBox width="100px" height="12px" className="mb-4" />
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="p-3 rounded-lg">
                      <SkeletonBox width="100%" height="16px" className="mb-1" />
                      <SkeletonBox width="80%" height="16px" className="mb-2" />
                      <SkeletonBox width="100px" height="12px" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
