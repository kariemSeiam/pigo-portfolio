/**
 * Theme System - Core Interface and Utilities
 * 
 * This file defines the Theme interface and default theme for The Prism Portfolio.
 * All domain-specific themes (android.ts, web.ts, etc.) implement this interface.
 * 
 * @see CLAUDE.md - Section 6.1 for complete documentation
 */

/**
 * Domain types for portfolio sections
 * Each domain represents a distinct professional expertise area
 */
export type Domain = 
  | 'android'   // Mobile development with Material Design
  | 'web'       // Web development with glassmorphism
  | 'forex'     // Trading/finance with terminal aesthetic
  | 'data'      // Data analysis with notebook style
  | 'design'    // UI/UX with Figma-inspired design
  | 'default'   // Home page and fallback

/**
 * Complete theme configuration interface
 * Every theme must implement all properties for consistency
 */
export interface Theme {
  /** Unique identifier matching Domain type */
  id: Domain

  /** Display name for UI ("Android Development", "Web Development", etc.) */
  name: string

  /** Color palette - all hex colors (#RRGGBB format) */
  colors: {
    /** Primary brand color - buttons, links, highlights */
    primary: string
    /** Secondary color - supporting elements */
    secondary: string
    /** Accent color - micro-interactions, hover states */
    accent: string
    /** Surface color - card backgrounds, panels */
    surface: string
    /** Text color on surfaces - ensures proper contrast */
    onSurface: string
    /** Optional error color - form validation, alerts */
    error?: string
    /** Optional success color - confirmations, positive feedback */
    success?: string
    /** Optional warning color - cautions, alerts */
    warning?: string
  }

  /** Typography configuration */
  fonts: {
    /** Headings/titles font */
    heading: string
    /** Body text font */
    body: string
    /** Code/monospace font */
    code: string
  }

  /** Animation timing configuration */
  animations: {
    /** CSS easing function (e.g., 'cubic-bezier(0.4, 0, 0.2, 1)') */
    transition: string
    /** Default animation duration in milliseconds */
    duration: number
    /** Optional stagger delay for list animations (ms) */
    staggerDelay?: number
  }

  /** Visual pattern configuration */
  patterns: {
    /** Background canvas pattern type */
    background: 'hexagon' | 'grid-lines' | 'particles' | 'candlesticks' | 'network' | 'bezier'
    /** Custom cursor style */
    cursorStyle: 'ripple' | 'crosshair' | 'default' | 'selector' | 'pointer' | 'pen'
  }

  /** Layout configuration */
  layout: {
    /** Navigation style */
    navigation: 'header' | 'bottom-bar' | 'sticky-header' | 'ticker' | 'cells' | 'sidebar'
    /** Card style for project/content cards */
    cardStyle: 'elevation' | 'glassmorphism' | 'default' | 'terminal' | 'notebook' | 'component'
  }

  /** Optional: Domain-specific configuration */
  custom?: {
    [key: string]: any
  }
}

/**
 * Default theme for home page and fallback
 */
export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: '#3DDC84',      // Android green as default
    secondary: '#6200EE',    // Deep purple
    accent: '#03DAC5',       // Teal
    surface: '#121212',      // Dark surface
    onSurface: '#FFFFFF',    // White text
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
    code: 'var(--font-jetbrains-mono)',
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Material Design easing
    duration: 300,
  },
  patterns: {
    background: 'particles',
    cursorStyle: 'default',
  },
  layout: {
    navigation: 'header',
    cardStyle: 'default',
  },
}

/**
 * Utility: Convert hex color to RGB values for CSS variables
 * @param hex - Hex color string (e.g., '#3DDC84')
 * @returns RGB values as comma-separated string (e.g., '61, 220, 132')
 * @example
 * hexToRgb('#3DDC84') // Returns '61, 220, 132'
 * // Usage in CSS: rgba(var(--primary), 0.5) → rgba(61, 220, 132, 0.5)
 */
export function hexToRgb(hex: string): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '')
  
  // Validate hex format
  if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    console.warn(`Invalid hex color: ${hex}, defaulting to black`)
    return '0, 0, 0'
  }

  // Parse RGB components
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)

  return `${r}, ${g}, ${b}`
}

/**
 * Utility: Get contrasting text color (black or white) for a given background
 * @param hex - Background hex color
 * @returns '#000000' or '#FFFFFF' for optimal contrast
 */
export function getContrastColor(hex: string): '#000000' | '#FFFFFF' {
  const rgb = hexToRgb(hex).split(', ').map(Number)
  const [r, g, b] = rgb
  
  // Calculate relative luminance (WCAG formula)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

/**
 * Utility: Generate theme CSS variables object
 * @param theme - Theme configuration
 * @returns Object ready to spread into style prop
 */
export function getThemeCSSVariables(theme: Theme): Record<string, string> {
  return {
    '--primary': hexToRgb(theme.colors.primary),
    '--secondary': hexToRgb(theme.colors.secondary),
    '--accent': hexToRgb(theme.colors.accent),
    '--surface': hexToRgb(theme.colors.surface),
    '--on-surface': hexToRgb(theme.colors.onSurface),
    '--font-heading': theme.fonts.heading,
    '--font-body': theme.fonts.body,
    '--font-code': theme.fonts.code,
    '--transition': theme.animations.transition,
    '--duration': `${theme.animations.duration}ms`,
  }
}
