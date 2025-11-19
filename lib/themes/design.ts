/**
 * Design Domain Theme
 * Figma Playground Aesthetic
 * 
 * @see CLAUDE.md - Section 6.6 for complete documentation
 */

import { Theme } from './index'

export const designTheme: Theme = {
  id: 'design',
  name: 'UI/UX Design',
  colors: {
    primary: '#FF1493',      // Deep Pink
    secondary: '#9370DB',    // Medium Purple
    accent: '#FFD700',       // Gold
    surface: '#0A0A0A',      // Dark canvas
    onSurface: '#FFFFFF',    // White
    error: '#FF6B9D',
    success: '#C400FF',
    warning: '#FFB400',
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
    code: 'var(--font-jetbrains-mono)',
  },
  animations: {
    transition: 'cubic-bezier(0.34, 1.56, 0.64, 1)',  // Back easing
    duration: 350,
    staggerDelay: 60,
  },
  patterns: {
    background: 'bezier',
    cursorStyle: 'pen',
  },
  layout: {
    navigation: 'sidebar',
    cardStyle: 'component',
  },
  custom: {
    canvas: {
      gridSize: '20px',
      showGrid: true,
    },
    component: {
      componentStroke: 'rgba(255, 20, 147, 0.3)',
    },
  },
}
