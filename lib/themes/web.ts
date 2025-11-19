/**
 * Web Development Theme
 * 
 * Design System: Neo-Brutalist Glassmorphism
 * Color Psychology:
 * - Cyan (#00D9FF): Digital, modern, trustworthy (tech blue)
 * - Purple (#6200EE): Innovative, premium, creative
 * - Mocha Mousse (#A47764): Pantone 2025, warm, sophisticated
 * 
 * Visual Language:
 * - Glassmorphism effects (backdrop blur, transparency)
 * - Neo-brutalist typography (bold, high contrast, large)
 * - Animated grid lines (wireframe aesthetic)
 * - Parallax scrolling effects
 * - Crosshair cursor (developer tool aesthetic)
 * 
 * Navigation: Sticky header (desktop standard)
 * Cursor: Crosshair with element tag display
 * 
 * @see CLAUDE.md - Section 6.3 for complete documentation
 */

import { Theme } from './index'

export const webTheme: Theme = {
  id: 'web',
  name: 'Web Development',
  colors: {
    primary: '#00D9FF',      // Electric Cyan
    secondary: '#6200EE',    // Electric Purple
    accent: '#A47764',       // Mocha Mousse (Pantone Color of the Year 2025)
    surface: '#0A0A0A',      // Near-black (darker than Android)
    onSurface: '#FFFFFF',    // Pure white
    error: '#EF5350',        // Material Red 400
    success: '#66BB6A',      // Material Green 400
    warning: '#FFA726',      // Material Orange 400
  },
  fonts: {
    heading: 'var(--font-inter)',         // Inter (modern web standard)
    body: 'var(--font-inter)',            // Inter
    code: 'var(--font-jetbrains-mono)',   // JetBrains Mono
  },
  animations: {
    transition: 'cubic-bezier(0.16, 1, 0.3, 1)',  // Smooth overshoot
    duration: 400,
    staggerDelay: 80,
  },
  patterns: {
    background: 'grid-lines',  // Animated wireframe grid
    cursorStyle: 'crosshair',  // Developer crosshair
  },
  layout: {
    navigation: 'sticky-header',  // Sticky top navigation
    cardStyle: 'glassmorphism',   // Glass morphism cards
  },
  custom: {
    // Web-specific customization
    glass: {
      blur: '10px',
      opacity: 0.1,
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    neoBrutalist: {
      borderWidth: '4px',
      shadowOffset: '8px',
      shadowColor: '#000000',
    },
    parallax: {
      intensity: 0.3,  // Scroll speed multiplier
    },
  },
}
