'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  domain: 'android' | 'web'
  slug?: string
  githubLink?: string
  liveLink?: string
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  domain,
  slug,
  githubLink,
  liveLink 
}: ProjectCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    if (slug) {
      router.push(`/projects/${slug}`)
    }
  }

  const cardContent = (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={domain === 'web' ? { scale: 1.02 } : {}}
      onClick={handleCardClick}
      className={`${domain === 'android' ? 'card-android' : 'card-web'} h-full flex flex-col ${slug ? 'cursor-pointer' : ''} group`}
    >
      <h3 className={`text-title font-bold mb-3 ${
        domain === 'android' ? 'text-gradient-android' : 'text-gradient-web'
      }`}>
        {title}
      </h3>
      
      <p className="text-body text-gray-400 mb-6 flex-grow">
        {description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              domain === 'android' 
                ? 'bg-android-primary/10 text-android-primary border border-android-primary/20' 
                : 'bg-web-primary/10 text-web-primary border border-web-primary/20'
            }`}
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-500">
            +{technologies.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800" onClick={(e) => e.stopPropagation()}>
        {slug && (
          <motion.span 
            className={`text-sm font-medium flex items-center gap-2 ${
              domain === 'android' ? 'text-android-primary' : 'text-web-primary'
            }`}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            View Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        )}
        
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Live Demo"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )

  return cardContent
}

