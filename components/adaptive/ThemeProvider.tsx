/**
 * ThemeProvider - Injects CSS variables and manages theme state
 * 
 * Responsibilities:
 * 1. Subscribe to theme store changes
 * 2. Convert theme colors to CSS variables
 * 3. Inject variables into document root
 * 4. Provide AnimatePresence context for transitions
 * 5. Log theme changes for debugging
 * 
 * CSS Variables Injected:
 * - --primary, --secondary, --accent (RGB values)
 * - --surface, --on-surface (RGB values)
 * - --font-heading, --font-body, --font-code
 * - --transition, --duration
 * 
 * Usage in components:
 * ```tsx
 * <div className="bg-[rgb(var(--primary))]">
 * <div style={{ color: `rgb(var(--accent))` }}>
 * ```
 * 
 * @see CLAUDE.md - Section 8.1 for complete documentation
 */

'use client'

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/lib/store/theme'
import { getThemeCSSVariables } from '@/lib/themes'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme = useThemeStore((state) => state.currentTheme)

  useEffect(() => {
    // Get CSS variables from theme
    const cssVars = getThemeCSSVariables(currentTheme)
    
    // Get document root
    const root = document.documentElement

    // Inject all CSS variables
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    // Add theme ID as data attribute for CSS selectors
    root.setAttribute('data-theme', currentTheme.id)

    // Log theme application
    console.log(`[ThemeProvider] Applied theme: ${currentTheme.name} (${currentTheme.id})`)
    console.log('[ThemeProvider] CSS Variables:', cssVars)

    // Optional: Trigger theme change event for other components
    window.dispatchEvent(new CustomEvent('themechange', { detail: currentTheme }))
  }, [currentTheme])

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
}
