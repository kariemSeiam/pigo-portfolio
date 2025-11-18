'use client'

import Skeleton, { SkeletonText } from '@/components/ui/Skeleton'

export default function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" height={200} className="rounded-none" />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Skeleton variant="text" height={28} width="70%" className="mb-3" />

        {/* Description */}
        <SkeletonText lines={3} className="mb-4" />

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton variant="rectangular" height={24} width={80} />
          <Skeleton variant="rectangular" height={24} width={90} />
          <Skeleton variant="rectangular" height={24} width={70} />
          <Skeleton variant="rectangular" height={24} width={100} />
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Skeleton variant="text" height={20} width="60%" className="mb-1" />
            <Skeleton variant="text" height={16} width="40%" />
          </div>
          <div>
            <Skeleton variant="text" height={20} width="60%" className="mb-1" />
            <Skeleton variant="text" height={16} width="40%" />
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Skeleton variant="rectangular" height={36} width={120} />
          <Skeleton variant="rectangular" height={36} width={120} />
        </div>
      </div>
    </div>
  )
}
