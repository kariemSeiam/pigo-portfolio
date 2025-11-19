/**
 * SkillCard Component
 * 
 * Displays a skill with proficiency level and animated progress bar
 * Adapts styling based on current theme
 * 
 * Features:
 * - Animated progress bar on scroll into view
 * - Theme-aware gradient colors
 * - Hover effects
 * - Optional tools/technologies list
 */

'use client'

import { motion } from 'framer-motion'
import { useThemeStore } from '@/lib/store/theme'

export interface SkillCardProps {
  /** Skill name (e.g., "React", "Python", "Figma") */
  name: string

  /** Proficiency level (0-100) */
  level: number

  /** Optional emoji or icon */
  icon?: string

  /** Optional list of related tools/frameworks */
  tools?: string[]

  /** Optional category */
  category?: string
}

/**
 * SkillCard Component
 */
export function SkillCard({
  name,
  level,
  icon,
  tools = [],
  category
}: SkillCardProps) {
  const currentTheme = useThemeStore(state => state.currentTheme)
  const cardStyle = currentTheme.layout.cardStyle

  // Base card classes
  const baseClasses = "p-6 rounded-xl transition-all duration-300"
  
  // Card style variations
  const cardClasses = {
    elevation: `${baseClasses} bg-[rgb(var(--surface))] shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1`,
    glassmorphism: `${baseClasses} bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10`,
    terminal: `${baseClasses} bg-black/40 border border-gray-800 font-mono hover:border-[rgb(var(--primary))]`,
    notebook: `${baseClasses} bg-[#2d2d2d] border border-gray-700 hover:border-[rgb(var(--primary))]`,
    component: `${baseClasses} bg-[#1E1E1E] border border-gray-800 hover:border-[rgb(var(--primary))]`,
    default: `${baseClasses} bg-gray-900 border border-gray-800 hover:border-[rgb(var(--primary))]/50`
  }

  return (
    <motion.div
      className={cardClasses[cardStyle] || cardClasses.default}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <span className="text-4xl flex-shrink-0">{icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold truncate">{name}</h3>
          {category && (
            <p className="text-sm text-gray-500 mt-1">{category}</p>
          )}
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-[rgb(var(--primary))]">
            {level}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-black/30 rounded-full overflow-hidden mb-4">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      {/* Tools/Technologies */}
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <motion.span
              key={tool}
              className="text-xs px-3 py-1 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] border border-[rgb(var(--primary))]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

/**
 * SkillsGrid - Grid container for multiple skill cards
 */
export function SkillsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}
