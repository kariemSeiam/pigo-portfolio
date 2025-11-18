'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface DomainCardProps {
  title: string
  description: string
  domain: 'android' | 'web' | 'forex' | 'data' | 'design'
  icon: string
}

export default function DomainCard({
  title,
  description,
  domain,
  icon
}: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Domain-specific styling
  const getDomainClasses = () => {
    switch (domain) {
      case 'android':
        return {
          card: 'card-android',
          gradient: 'text-gradient-android',
          color: 'text-android-primary',
          border: 'border-android-primary'
        }
      case 'web':
        return {
          card: 'card-web',
          gradient: 'text-gradient-web',
          color: 'text-web-primary',
          border: 'border-web-primary'
        }
      case 'forex':
        return {
          card: 'bg-gray-950 border border-forex-primary/30 rounded-xl p-6 hover:border-forex-primary/60 transition-all',
          gradient: 'text-gradient-forex',
          color: 'text-forex-primary',
          border: 'border-forex-primary'
        }
      case 'data':
        return {
          card: 'bg-gray-900/50 border border-data-secondary/40 rounded-xl p-6 hover:border-data-secondary transition-all',
          gradient: 'text-gradient-data',
          color: 'text-data-primary',
          border: 'border-data-primary'
        }
      case 'design':
        return {
          card: 'bg-gray-900 border border-white/10 rounded-xl p-6 hover:border-design-primary/50 transition-all group relative overflow-hidden',
          gradient: 'text-gradient-design',
          color: 'text-design-primary',
          border: 'border-design-primary'
        }
      default:
        return {
          card: 'card-android',
          gradient: 'text-gradient-android',
          color: 'text-android-primary',
          border: 'border-android-primary'
        }
    }
  }

  const styles = getDomainClasses()

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: ['web', 'design'].includes(domain) ? 1.02 : 1,
      y: domain === 'data' ? -5 : 0,
      transition: { duration: 0.3 }
    }
  }

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: domain === 'android' ? [0, -10, 10, -10, 0] : 0,
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <Link href={`/${domain}`}>
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`${styles.card} cursor-pointer h-full min-h-[240px] flex flex-col relative`}
      >
        {/* Design domain gradient background */}
        {domain === 'design' && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-design-primary/10 via-design-secondary/10 to-design-accent/10 rounded-xl pointer-events-none"
          />
        )}

        <motion.div
          variants={iconVariants}
          className="text-5xl sm:text-6xl mb-4 relative z-10"
        >
          {icon}
        </motion.div>

        <h2 className={`text-title sm:text-headline font-bold mb-3 ${styles.gradient} relative z-10`}>
          {title}
        </h2>

        <p className="text-body text-gray-400 mb-6 flex-grow relative z-10">
          {description}
        </p>

        {/* Explore Button */}
        <div className={`flex items-center gap-2 text-sm font-medium ${styles.color} relative z-10`}>
          <span>Explore Domain</span>
          <motion.svg
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </div>

        {/* Animated Border Effect for Web/Design */}
        {['web', 'design'].includes(domain) && isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute inset-0 rounded-2xl border-2 ${styles.border} opacity-50 pointer-events-none`}
          />
        )}
      </motion.div>
    </Link>
  )
}

