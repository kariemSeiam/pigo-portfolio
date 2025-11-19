/**
 * Android Development Theme
 * 
 * Design System: Material Design 3 (Material You)
 * Color Psychology:
 * - Green (#3DDC84): Android brand color, represents growth, harmony, innovation
 * - Purple (#6200EE): Modern, premium, creative (Material Design primary)
 * - Teal (#03DAC5): Calming, accessible, tech-forward
 * 
 * Visual Language:
 * - Elevation shadows (5 levels)
 * - Rounded corners (8px, 16px, 24px)
 * - Bold typography (Google Sans)
 * - Hexagon background pattern (honeycomb structure)
 * - Ripple interactions on all touchpoints
 * 
 * Navigation: Bottom bar (mobile-first, Android standard)
 * Cursor: Material ripple effect expanding from click point
 * 
 * @see CLAUDE.md - Section 6.2 for complete documentation
 */

import { Theme } from './index'

export const androidTheme: Theme = {
  id: 'android',
  name: 'Android Development',
  colors: {
    primary: '#3DDC84',      // Android Green
    secondary: '#6200EE',    // Deep Purple (Material Design primary)
    accent: '#03DAC5',       // Teal (Material Design secondary)
    surface: '#121212',      // Material Dark Surface
    onSurface: '#FFFFFF',    // White text
    error: '#CF6679',        // Material Error Red
    success: '#4CAF50',      // Material Success Green
    warning: '#FFC107',      // Material Warning Amber
  },
  fonts: {
    heading: 'var(--font-google-sans)',   // Google Sans (Android brand font)
    body: 'var(--font-roboto)',           // Roboto (Android system font)
    code: 'var(--font-jetbrains-mono)',   // JetBrains Mono
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Material Design Standard Easing
    duration: 300,  // Material Design Standard Duration
    staggerDelay: 50,
  },
  patterns: {
    background: 'hexagon',    // Honeycomb pattern
    cursorStyle: 'ripple',    // Material ripple effect
  },
  layout: {
    navigation: 'bottom-bar', // Android-style bottom navigation
    cardStyle: 'elevation',   // Material elevation shadows
  },
  custom: {
    // Android-specific customization
    elevation: {
      level1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      level2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      level3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      level4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      level5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    borderRadius: {
      small: '8px',
      medium: '16px',
      large: '24px',
    },
    fab: {
      size: '56px',
      position: 'bottom-right',
      offset: '16px',
    },
  },
}
