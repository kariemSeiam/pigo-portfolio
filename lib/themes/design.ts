import { Theme } from './index'

export const designTheme: Theme = {
  id: 'design',
  name: 'UI/UX Design',
  colors: {
    primary: '#FF1493',      // Deep pink (creative)
    secondary: '#9370DB',    // Medium purple (artistic)
    accent: '#FFD700',       // Gold (premium)
    surface: '#0A0A0A',      // Figma dark canvas
    onSurface: '#FFFFFF',    // Pure white text
    error: '#FF4081',        // Pink error
  },
  fonts: {
    heading: 'SF Pro Display, Helvetica Neue, sans-serif',
    body: 'SF Pro Text, system-ui, sans-serif',
    code: 'SF Mono, JetBrains Mono, monospace',
  },
  animations: {
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',  // Figma easing
    duration: 450,
  },
  patterns: {
    background: 'bezier-curves',  // Bézier curve animations
    cursorStyle: 'crosshair',     // Design crosshair
  },
  layout: {
    navigation: 'sticky-header',  // Figma-style top bar
    cardStyle: 'glassmorphism',   // Frosted glass cards
  },
}
