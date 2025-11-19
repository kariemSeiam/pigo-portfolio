/**
 * Careers Layout - Theme-Aware
 * 
 * This layout manages theme application for all career domain pages.
 * It subscribes to pathname changes and applies the appropriate theme.
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

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useCareerTheme()
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    console.log(`[CareersLayout] Applying theme: ${theme.id}`)
    setTheme(theme)
  }, [theme, setTheme])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[rgb(var(--surface))] text-[rgb(var(--on-surface))]">
        {children}
      </div>
    </ThemeProvider>
  )
}
