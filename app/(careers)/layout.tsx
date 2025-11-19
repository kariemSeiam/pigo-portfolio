/**
 * Careers Layout - Theme-Aware
 * 
 * This layout manages theme application for all career domain pages.
 * It includes all adaptive components that respond to theme changes.
 * 
 * Route Mapping:
 * - /android → androidTheme
 * - /web → webTheme
 * - /forex → forexTheme
 * - /data → dataTheme
 * - /design → designTheme
 * 
 * @see CLAUDE.md - Section 8.3 for complete documentation
 */

'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store/theme'
import { useCareerTheme } from '@/lib/hooks/useCareerTheme'
import { ThemeProvider } from '@/components/adaptive/ThemeProvider'
import AdaptiveNav from '@/components/adaptive/AdaptiveNav'
import AdaptiveCursor from '@/components/adaptive/AdaptiveCursor'
import BackgroundPattern from '@/components/adaptive/BackgroundPattern'

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useCareerTheme()
  const setTheme = useThemeStore((state) => state.setTheme)
  const currentTheme = useThemeStore((state) => state.currentTheme)

  useEffect(() => {
    console.log(`[CareersLayout] Applying theme: ${theme.id}`)
    setTheme(theme)
  }, [theme, setTheme])

  return (
    <ThemeProvider>
      {/* Adaptive Navigation */}
      <AdaptiveNav />

      {/* Adaptive Cursor (desktop only) */}
      <AdaptiveCursor />

      {/* Background Pattern */}
      <BackgroundPattern pattern={currentTheme.patterns.background} />

      {/* Main Content */}
      <div className="min-h-screen bg-[rgb(var(--surface))] text-[rgb(var(--on-surface))]">
        {children}
      </div>
    </ThemeProvider>
  )
}
