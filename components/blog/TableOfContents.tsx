'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface RecentPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

interface TableOfContentsProps {
  content: any[]; // Portable Text blocks
  recentPosts?: RecentPost[];
  currentPostId?: string;
}

// Helper function to generate slug from text
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Extract headings from Portable Text
function extractHeadings(blocks: any[]): TOCItem[] {
  const headings: TOCItem[] = [];

  blocks.forEach((block) => {
    if (block._type === 'block' && ['h2', 'h3', 'h4'].includes(block.style)) {
      const text = block.children
        ?.filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('') || '';

      if (text) {
        headings.push({
          id: slugify(text),
          text,
          level: parseInt(block.style.substring(1)), // h2 -> 2, h3 -> 3
        });
      }
    }
  });

  return headings;
}

export default function TableOfContents({ content, recentPosts = [], currentPostId }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeH2Id, setActiveH2Id] = useState<string>('');
  const tocContainerRef = useRef<HTMLUListElement>(null);
  const pendingActiveIdRef = useRef<string>('');
  const rafRef = useRef<number>(0);

  // Debounced setter: batches rapid activeId changes into one update per frame
  const setActiveIdSmooth = useCallback((id: string) => {
    pendingActiveIdRef.current = id;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setActiveId(pendingActiveIdRef.current);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    // Extract headings when component mounts
    const extractedHeadings = extractHeadings(content);
    setHeadings(extractedHeadings);

    // Intersection Observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with highest intersection ratio
        const intersecting = entries.filter(entry => entry.isIntersecting);
        if (intersecting.length > 0) {
          const mostVisible = intersecting.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveIdSmooth(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-100px 0px -60% 0px',
      }
    );

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const headingElements = document.querySelectorAll('h2[id], h3[id], h4[id]');
      headingElements.forEach((element) => observer.observe(element));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [content, setActiveIdSmooth]);

  // Track active H2 section for auto-expanding child items
  useEffect(() => {
    if (!activeId) return;

    // Find the active heading
    const activeHeading = headings.find((h) => h.id === activeId);
    if (!activeHeading) return;

    if (activeHeading.level === 2) {
      // If active item is H2, set it as active section
      setActiveH2Id(activeId);
    } else if (activeHeading.level === 3 || activeHeading.level === 4) {
      // Find parent H2 by looking backwards
      const activeIndex = headings.findIndex((h) => h.id === activeId);
      for (let i = activeIndex - 1; i >= 0; i--) {
        if (headings[i].level === 2) {
          setActiveH2Id(headings[i].id);
          break;
        }
      }
    }
  }, [activeId, headings]);

  // Auto-scroll active item into view within TOC container (desktop only)
  useEffect(() => {
    if (!activeId || !tocContainerRef.current) return;

    // Only auto-scroll on desktop (lg breakpoint = 1024px)
    // This prevents page jumping on mobile where TOC would be at bottom
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const activeElement = tocContainerRef.current.querySelector(
      `a[href="#${activeId}"]`
    ) as HTMLElement;

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [activeId]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24">
      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
        <h3 className="text-[0.8rem] text-primary font-bold uppercase tracking-[2.5px] mb-6">
          Table of Contents
        </h3>
        <ul
          ref={tocContainerRef}
          className="space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto toc-scrollbar -mr-2"
          style={{ scrollbarGutter: 'stable' }}
        >
          {headings.map((heading, index) => {
            // H3/H4 are children that collapse under parent H2
            let isVisible = true;
            let parentH2Id = '';
            let childIndex = 0;

            if (heading.level === 3 || heading.level === 4) {
              // Find parent H2 by looking backwards
              for (let i = index - 1; i >= 0; i--) {
                if (headings[i].level === 2) {
                  parentH2Id = headings[i].id;
                  break;
                }
              }
              // Only visible if parent H2 is the active section
              isVisible = parentH2Id === activeH2Id;

              // Calculate child index for stagger effect
              for (let i = index - 1; i >= 0; i--) {
                if (headings[i].level === 2) break;
                childIndex++;
              }
            }

            // Check if this H2 has children (H3 or H4)
            const hasChildren = heading.level === 2 &&
              headings[index + 1]?.level > 2;

            // Calculate stagger delay for collapse animation
            const staggerDelay = (heading.level === 3 || heading.level === 4) ? childIndex * 0.03 : 0;

            // Indent: H3 gets ml-4, H4 gets ml-8
            const indent = heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-8' : '';
            const isChild = heading.level > 2;

            return (
              <li
                key={heading.id}
                className={`
                  ${indent}
                  ${isChild && !isVisible ? 'toc-item-collapsed' : ''}
                  ${isChild && isVisible ? 'toc-item-expanded' : ''}
                  mr-2
                `}
                style={{
                  transitionDelay: heading.level === 4 ? `${staggerDelay}s` : '0s'
                }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      });
                      setActiveId(heading.id);
                    }
                  }}
                  className={`
                    block py-2 px-3 rounded-lg
                    border-l-[2px] relative
                    transition-[color,background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${heading.level === 2 ? 'text-[1rem] font-semibold' : 'text-[0.95rem]'}
                    ${
                      activeId === heading.id
                        ? 'text-primary bg-primary/10 border-primary'
                        : 'text-steel border-transparent hover:text-primary hover:bg-gray-50 hover:border-primary/30'
                    }
                    ${hasChildren ? 'flex items-center justify-between' : ''}
                  `}
                >
                  <span>{heading.text}</span>
                  {hasChildren && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        activeH2Id === heading.id ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Read More Section */}
        {recentPosts.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-[0.8rem] text-primary font-bold uppercase tracking-[2.5px] mb-4">
              Read More
            </h4>
            <div className="space-y-3">
              {recentPosts
                .filter((post) => post._id !== currentPostId)
                .slice(0, 2)
                .map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group block p-3 rounded-lg border border-transparent hover:border-primary/30 hover:bg-gray-50 transition-all duration-200"
                  >
                    <h5 className="text-[0.95rem] text-primary group-hover:text-accent transition-colors duration-200 mb-1 line-clamp-2">
                      {post.title}
                    </h5>
                    <p className="text-[0.8rem] text-steel">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
