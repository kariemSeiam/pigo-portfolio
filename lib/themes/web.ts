import { Theme } from './index'

export const webTheme: Theme = {
  id: 'web',
  name: 'Web Development',
  colors: {
    primary: '#00D9FF',      // Bright cyan
    secondary: '#9333EA',    // Purple
    accent: '#A855F7',       // Light purple accent
    surface: '#0A0A0A',      // Near black surface
    onSurface: '#FFFFFF',    // White text on surface
  },
  fonts: {
    heading: 'SF Pro Display, Inter, sans-serif',
    body: 'Inter, sans-serif',
    code: 'JetBrains Mono, monospace',
  },
  animations: {
    transition: 'ease-out',  // Smooth ease-out
    duration: 300,
  },
  patterns: {
    background: 'grid-lines',    // Animated grid pattern
    cursorStyle: 'crosshair',    // Developer crosshair cursor
  },
  layout: {
    navigation: 'sticky-header', // Sticky header navigation
    cardStyle: 'glassmorphism',  // Glass morphism cards
  },
}

