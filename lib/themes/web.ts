import { Theme } from './index'

export const webTheme: Theme = {
  id: 'web',
  name: 'Web Development',
  colors: {
    primary: '#00D9FF',
    secondary: '#9333EA',
    accent: '#A855F7',
    surface: '#0A0A0A',
  },
  fonts: {
    heading: 'SF Pro Display, Inter, sans-serif',
    body: 'Inter, sans-serif',
    code: 'JetBrains Mono, monospace',
  },
  animations: {
    transition: 'ease-out',
    duration: 0.3,
  },
  patterns: {
    background: 'grid-lines',
    cursorStyle: 'crosshair',
  },
  layout: {
    navigation: 'sticky-header',
    cardStyle: 'glassmorphism',
  },
}

