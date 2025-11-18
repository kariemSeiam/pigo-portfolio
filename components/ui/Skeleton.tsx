'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animate?: boolean
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animate = true,
}: SkeletonProps) {
  const baseClasses = 'bg-gray-800/50'

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  const Component = animate ? motion.div : 'div'

  const animationProps = animate
    ? {
        animate: {
          opacity: [0.5, 0.8, 0.5],
        },
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {}

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      {...animationProps}
    />
  )
}

// Preset skeleton components for common use cases
export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height={16}
          width={i === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-gray-900/50 border border-white/10 rounded-xl p-6 ${className}`}>
      <Skeleton variant="rectangular" height={200} className="mb-4" />
      <Skeleton variant="text" height={24} width="60%" className="mb-3" />
      <SkeletonText lines={2} />
      <div className="flex gap-2 mt-4">
        <Skeleton variant="rectangular" height={32} width={80} />
        <Skeleton variant="rectangular" height={32} width={80} />
        <Skeleton variant="rectangular" height={32} width={80} />
      </div>
    </div>
  )
}

export function SkeletonAvatar({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  )
}
