'use client'

import { ReactNode, useEffect } from 'react'
import { useThemeStore } from '@/lib/store/theme'
import { motion, AnimatePresence } from 'framer-motion'

interface ThemeProviderProps {
  children: ReactNode
  theme?: any
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const { currentTheme, setTheme, isTransitioning } = useThemeStore()

  useEffect(() => {
    if (theme && theme.id !== currentTheme.id) {
      setTheme(theme)
      applyThemeToDom(theme)
    }
  }, [theme, currentTheme.id, setTheme])

  const applyThemeToDom = (activeTheme: any) => {
    const root = document.documentElement

    // Apply color CSS variables
    root.style.setProperty('--theme-primary', hexToRgb(activeTheme.colors.primary))
    root.style.setProperty('--theme-secondary', hexToRgb(activeTheme.colors.secondary))
    root.style.setProperty('--theme-accent', hexToRgb(activeTheme.colors.accent))
    root.style.setProperty('--theme-surface', hexToRgb(activeTheme.colors.surface))

    // Apply font variables
    root.style.setProperty('--font-heading', activeTheme.fonts.heading)
    root.style.setProperty('--font-body', activeTheme.fonts.body)
    root.style.setProperty('--font-code', activeTheme.fonts.code)

    // Apply animation duration
    root.style.setProperty('--transition-duration', `${activeTheme.animations.duration}s`)

    // Data attributes for CSS selectors
    root.setAttribute('data-theme', activeTheme.id)
    root.setAttribute('data-cursor-style', activeTheme.patterns.cursorStyle)
  }

  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
      : '0 0 0'
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTheme.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '0 0 0'
}

