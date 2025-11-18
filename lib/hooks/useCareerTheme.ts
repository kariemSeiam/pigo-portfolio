'use client'

import { usePathname } from 'next/navigation'
import { androidTheme, webTheme, defaultTheme, Theme } from '@/lib/themes'

export function useCareerTheme(): Theme {
  const pathname = usePathname()
  
  if (pathname.startsWith('/android')) {
    return androidTheme
  }
  
  if (pathname.startsWith('/web')) {
    return webTheme
  }
  
  return defaultTheme
}

