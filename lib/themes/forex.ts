/**
 * Forex Domain Theme
 * Financial Terminal Aesthetic
 * 
 * @see CLAUDE.md - Section 6.4 for complete documentation
 */

import { Theme } from './index'

export const forexTheme: Theme = {
  id: 'forex',
  name: 'Forex Trading',
  colors: {
    primary: '#FFD700',      // Gold
    secondary: '#26A69A',    // Teal (buy)
    accent: '#EF5350',       // Red (sell)
    surface: '#0A0A0A',      // Black terminal background
    onSurface: '#FFFFFF',    // White terminal text
    error: '#EF5350',        // Red for losses
    success: '#26A69A',      // Green for gains
    warning: '#FFD700',      // Gold for warnings
  },
  fonts: {
    heading: 'var(--font-jetbrains-mono)',    // Monospace for terminal feel
    body: 'var(--font-jetbrains-mono)',
    code: 'var(--font-jetbrains-mono)',
  },
  animations: {
    transition: 'linear',
    duration: 200,
    staggerDelay: 30,
  },
  patterns: {
    background: 'candlesticks',
    cursorStyle: 'selector',
  },
  layout: {
    navigation: 'ticker',
    cardStyle: 'terminal',
  },
  custom: {
    terminal: {
      textShadow: '0 0 5px currentColor',
      fontFamily: 'Courier New, monospace',
    },
    bull: '#26A69A',
    bear: '#EF5350',
  },
}
