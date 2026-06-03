/**
 * Skeleton Base Components
 *
 * Reusable skeleton primitives for loading states.
 * Matches the CodeFlow brand aesthetic (charcoal/emerald) with shimmer effect.
 */

import React from 'react';

interface SkeletonBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

interface SkeletonTextProps {
  lines?: number;
  width?: string;
  className?: string;
}

interface SkeletonCircleProps {
  size?: string;
  className?: string;
}

interface SkeletonImageProps {
  aspectRatio?: string;
  className?: string;
}

/**
 * Generic skeleton box with shimmer animation
 */
export function SkeletonBox({
  width = '100%',
  height = '20px',
  borderRadius = '8px',
  className = '',
}: SkeletonBoxProps) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}

/**
 * Skeleton text lines with varying widths
 */
export function SkeletonText({
  lines = 3,
  width = '100%',
  className = '',
}: SkeletonTextProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => {
        // Vary widths for natural look
        const lineWidth = i === lines - 1 ? '60%' : i % 2 === 0 ? '90%' : '100%';
        return (
          <SkeletonBox
            key={i}
            width={lineWidth}
            height="16px"
            borderRadius="4px"
          />
        );
      })}
    </div>
  );
}

/**
 * Circular skeleton (for avatars, icons)
 */
export function SkeletonCircle({
  size = '48px',
  className = '',
}: SkeletonCircleProps) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
      }}
    />
  );
}

/**
 * Image placeholder with aspect ratio
 */
export function SkeletonImage({
  aspectRatio = '16/9',
  className = '',
}: SkeletonImageProps) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width: '100%',
        aspectRatio,
        borderRadius: '12px',
      }}
    />
  );
}

/**
 * Skeleton card container
 */
export function SkeletonCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card border border-card-border rounded-[20px] p-8 ${className}`}
    >
      {children}
    </div>
  );
}
