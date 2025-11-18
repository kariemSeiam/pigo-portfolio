'use client'

import Skeleton, { SkeletonText } from '@/components/ui/Skeleton'

export default function DomainCardSkeleton() {
  return (
    <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 h-full min-h-[240px] flex flex-col">
      {/* Icon */}
      <Skeleton variant="circular" width={64} height={64} className="mb-4" />

      {/* Title */}
      <Skeleton variant="text" height={32} width="80%" className="mb-3" />

      {/* Description */}
      <SkeletonText lines={2} className="mb-6 flex-grow" />

      {/* Explore Button */}
      <Skeleton variant="rectangular" height={20} width={150} />
    </div>
  )
}
