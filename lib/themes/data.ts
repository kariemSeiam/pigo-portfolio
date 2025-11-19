/**
 * Data Analysis Domain Theme
 * Jupyter Notebook Aesthetic
 * 
 * @see CLAUDE.md - Section 6.5 for complete documentation
 */

import { Theme } from './index'

export const dataTheme: Theme = {
  id: 'data',
  name: 'Data Analysis',
  colors: {
    primary: '#FF6B6B',      // Warm Red
    secondary: '#4ECDC4',    // Teal
    accent: '#45B7D1',       // Sky Blue
    surface: '#1E1E1E',      // Notebook background
    onSurface: '#E0E0E0',    // Light text
    error: '#FF6B6B',
    success: '#51CF66',
    warning: '#FFD93D',
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
    code: 'var(--font-jetbrains-mono)',
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: 300,
    staggerDelay: 50,
  },
  patterns: {
    background: 'network',
    cursorStyle: 'pointer',
  },
  layout: {
    navigation: 'cells',
    cardStyle: 'notebook',
  },
  custom: {
    notebook: {
      cellBackground: '#2d2d2d',
      cellBorder: '1px solid #444',
    },
  },
}
