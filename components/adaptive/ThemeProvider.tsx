'use client'

import { ReactNode, useEffect } from 'react'
import { useThemeStore } from '@/lib/store/theme'
import { motion, AnimatePresence } from 'framer-motion'
import { Theme, hexToRgb } from '@/lib/themes'

interface ThemeProviderProps {
  children: ReactNode
  theme?: Theme
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const { currentTheme, setTheme, isTransitioning } = useThemeStore()

  useEffect(() => {
    if (theme && theme.id !== currentTheme.id) {
      setTheme(theme)
      applyThemeToDom(theme)
    }
  }, [theme, currentTheme.id, setTheme])

  const applyThemeToDom = (activeTheme: Theme) => {
    const root = document.documentElement

    // Apply color CSS variables (RGB format for Tailwind)
    root.style.setProperty('--theme-primary', hexToRgb(activeTheme.colors.primary))
    root.style.setProperty('--theme-secondary', hexToRgb(activeTheme.colors.secondary))
    root.style.setProperty('--theme-accent', hexToRgb(activeTheme.colors.accent))
    root.style.setProperty('--theme-surface', hexToRgb(activeTheme.colors.surface))
    root.style.setProperty('--theme-on-surface', hexToRgb(activeTheme.colors.onSurface))

    // Apply font variables
    root.style.setProperty('--font-heading', activeTheme.fonts.heading)
    root.style.setProperty('--font-body', activeTheme.fonts.body)
    root.style.setProperty('--font-code', activeTheme.fonts.code)

    // Apply animation duration (milliseconds)
    root.style.setProperty('--transition-duration', `${activeTheme.animations.duration}ms`)

    // Data attributes for CSS selectors
    root.setAttribute('data-theme', activeTheme.id)
    root.setAttribute('data-cursor-style', activeTheme.patterns.cursorStyle)
    root.setAttribute('data-background-pattern', activeTheme.patterns.background)
    root.setAttribute('data-navigation-style', activeTheme.layout.navigation)
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

