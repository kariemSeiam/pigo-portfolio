import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Roboto } from 'next/font/google'
import { ToastProvider } from '@/components/providers/ToastProvider'
import { PerformanceProvider } from '@/components/providers/PerformanceProvider'
import SkipToContent from '@/components/ui/SkipToContent'
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
  metadataBase: new URL('https://pigo-portfolio.vercel.app'),
  title: {
    default: 'The Prism Portfolio - Multifaceted Professional Experience',
    template: '%s | The Prism Portfolio',
  },
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
    'Portfolio',
    'Framer Motion',
    'TailwindCSS',
  ],
  authors: [{ name: 'Pigo', url: 'https://pigo-portfolio.vercel.app' }],
  creator: 'Pigo',
  publisher: 'Pigo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pigo-portfolio.vercel.app',
    siteName: 'The Prism Portfolio',
    title: 'The Prism Portfolio - Multifaceted Professional Experience',
    description: 'An adaptive masterpiece portfolio showcasing expertise across 5 domains: Android Development, Web Development, Forex Trading, Data Analysis, and UI/UX Design',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Prism Portfolio - Multifaceted Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Prism Portfolio - Multifaceted Professional Experience',
    description: 'An adaptive masterpiece portfolio showcasing expertise across 5 domains',
    images: ['/og-image.png'],
    creator: '@pigo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
        <SkipToContent />
        <PerformanceProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </PerformanceProvider>
      </body>
    </html>
  )
}

