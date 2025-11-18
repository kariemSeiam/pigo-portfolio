'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface DomainCardProps {
  title: string
  description: string
  domain: 'android' | 'web'
  icon: string
}

export default function DomainCard({ 
  title, 
  description, 
  domain, 
  icon 
}: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: domain === 'web' ? 1.02 : 1,
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
        className={`${domain === 'android' ? 'card-android' : 'card-web'} cursor-pointer group h-full min-h-[240px] flex flex-col`}
      >
        <motion.div 
          variants={iconVariants}
          className="text-5xl sm:text-6xl mb-4"
        >
          {icon}
        </motion.div>
        
        <h2 className={`text-title sm:text-headline font-bold mb-3 ${
          domain === 'android' ? 'text-gradient-android' : 'text-gradient-web'
        }`}>
          {title}
        </h2>
        
        <p className="text-body text-gray-400 mb-6 flex-grow">
          {description}
        </p>

        {/* Explore Button */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className={domain === 'android' ? 'text-android-primary' : 'text-web-primary'}>
            Explore Domain
          </span>
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

        {/* Animated Border Effect for Web */}
        {domain === 'web' && isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 rounded-2xl border-2 border-web-primary opacity-50 pointer-events-none"
          />
        )}
      </motion.div>
    </Link>
  )
}

