/**
 * useCareerTheme Hook
 * 
 * Returns the appropriate theme based on current URL pathname
 * 
 * @see CLAUDE.md - Section 8.2 for complete documentation
 */

'use client'

import { usePathname } from 'next/navigation'
import { Theme, defaultTheme } from '@/lib/themes'
import { androidTheme } from '@/lib/themes/android'
import { webTheme } from '@/lib/themes/web'
import { forexTheme } from '@/lib/themes/forex'
import { dataTheme } from '@/lib/themes/data'
import { designTheme } from '@/lib/themes/design'

/**
 * useCareerTheme Hook
 * 
 * Returns the appropriate theme based on current URL pathname
 * 
 * Route-to-Theme Mapping:
 * /android → androidTheme
 * /web → webTheme
 * /forex → forexTheme
 * /data → dataTheme
 * /design → designTheme
 * /projects/[slug] → theme based on project.domain
 * / (home) → defaultTheme
 * 
 * Usage:
 * ```tsx
 * const theme = useCareerTheme()
 * 
 * useEffect(() => {
 *   setTheme(theme)
 * }, [theme])
 * ```
 */
export function useCareerTheme(): Theme {
  const pathname = usePathname()

  // Domain routes
  if (pathname.startsWith('/android')) return androidTheme
  if (pathname.startsWith('/web')) return webTheme
  if (pathname.startsWith('/forex')) return forexTheme
  if (pathname.startsWith('/data')) return dataTheme
  if (pathname.startsWith('/design')) return designTheme

  // Project pages - determine theme from project domain
  if (pathname.startsWith('/projects/')) {
    const slug = pathname.split('/projects/')[1]
    // TODO: Implement project lookup from data/projects.ts
    // const project = projects.find(p => p.slug === slug)
    
    // if (project) {
    //   switch (project.domain) {
    //     case 'android': return androidTheme
    //     case 'web': return webTheme
    //     case 'forex': return forexTheme
    //     case 'data': return dataTheme
    //     case 'design': return designTheme
    //     default: return defaultTheme
    //   }
    // }
  }

  // Fallback to default theme
  return defaultTheme
}
