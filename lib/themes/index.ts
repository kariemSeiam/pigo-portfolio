// Domain type for all 5 career domains + default
export type Domain = 'android' | 'web' | 'forex' | 'data' | 'design' | 'default';

// Background pattern types for each domain
export type BackgroundPattern = 'hexagon' | 'grid-lines' | 'particles' | 'candlesticks' | 'network-graph' | 'bezier-curves';

// Cursor style types for adaptive cursor
export type CursorStyle = 'ripple' | 'crosshair' | 'default' | 'terminal' | 'pointer';

// Navigation layout types
export type NavigationStyle = 'header' | 'bottom-bar' | 'sticky-header';

// Card style types
export type CardStyle = 'elevation' | 'glassmorphism' | 'default' | 'terminal' | 'notebook';

export interface Theme {
  id: Domain
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    surface: string
    onSurface: string      // Text color on surface
    error?: string
  }
  fonts: {
    heading: string
    body: string
    code: string
  }
  animations: {
    transition: string
    duration: number
  }
  patterns: {
    background: BackgroundPattern
    cursorStyle: CursorStyle
  }
  layout: {
    navigation: NavigationStyle
    cardStyle: CardStyle
  }
}

// Utility function to convert hex to RGB for CSS variables
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
}

export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: '#3DDC84',
    secondary: '#6200EE',
    accent: '#03DAC5',
    surface: '#121212',
    onSurface: '#FFFFFF',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    code: 'JetBrains Mono',
  },
  animations: {
    transition: 'ease-in-out',
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

export { androidTheme } from './android'
export { webTheme } from './web'
export { forexTheme } from './forex'
export { dataTheme } from './data'
export { designTheme } from './design'

