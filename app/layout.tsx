import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Prism Portfolio - Multifaceted Professional Experience',
  description: 'An adaptive masterpiece portfolio showcasing expertise across 5 domains: Android Development, Web Development, Forex Trading, Data Analysis, and UI/UX Design with dynamic theming',
  keywords: [
    'Android Development',
    'Web Development',
    'Forex Trading',
    'Data Analysis',
    'UI/UX Design',
    'React',
    'Next.js',
    'Kotlin',
    'TypeScript',
    'Material Design',
    'Portfolio'
  ],
  authors: [{ name: 'Pigo' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3DDC84',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${roboto.variable}`}
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

