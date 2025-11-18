'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import ThemeProvider from '@/components/adaptive/ThemeProvider'
import AdaptiveNav from '@/components/adaptive/AdaptiveNav'
import AdaptiveCursor from '@/components/adaptive/AdaptiveCursor'
import BackgroundPattern from '@/components/adaptive/BackgroundPattern'
import { useCareerTheme } from '@/lib/hooks/useCareerTheme'

export default function CareersLayout({
  children,
}: {
  children: ReactNode
}) {
  const theme = useCareerTheme()
  const pathname = usePathname()

  const getBackgroundPattern = () => {
    if (pathname.startsWith('/android')) return 'hexagon'
    if (pathname.startsWith('/web')) return 'grid'
    if (pathname.startsWith('/forex')) return 'candlesticks'
    if (pathname.startsWith('/data')) return 'network'
    if (pathname.startsWith('/design')) return 'bezier'
    return 'particles'
  }

  return (
    <ThemeProvider theme={theme}>
      <AdaptiveCursor />
      <BackgroundPattern pattern={getBackgroundPattern()} />
      <AdaptiveNav />
      <div className="careers-content min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  )
}

