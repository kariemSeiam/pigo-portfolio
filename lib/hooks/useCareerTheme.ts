'use client'

import { usePathname } from 'next/navigation'
import {
  androidTheme,
  webTheme,
  forexTheme,
  dataTheme,
  designTheme,
  defaultTheme,
  Theme
} from '@/lib/themes'

export function useCareerTheme(): Theme {
  const pathname = usePathname()

  if (pathname.startsWith('/android')) {
    return androidTheme
  }

  if (pathname.startsWith('/web')) {
    return webTheme
  }

  if (pathname.startsWith('/forex')) {
    return forexTheme
  }

  if (pathname.startsWith('/data')) {
    return dataTheme
  }

  if (pathname.startsWith('/design')) {
    return designTheme
  }

  return defaultTheme
}

