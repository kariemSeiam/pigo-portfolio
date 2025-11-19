import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Prism Portfolio - Multifaceted Professional Experience',
    short_name: 'Prism Portfolio',
    description: 'An adaptive masterpiece portfolio showcasing expertise across 5 domains: Android Development, Web Development, Forex Trading, Data Analysis, and UI/UX Design',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#3DDC84',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['portfolio', 'professional', 'development'],
    lang: 'en-US',
  }
}
