import { Theme } from './index'

export const androidTheme: Theme = {
  id: 'android',
  name: 'Android Development',
  colors: {
    primary: '#3DDC84',      // Material Design 3 primary green
    secondary: '#6200EE',    // Deep purple
    accent: '#03DAC5',       // Teal accent
    surface: '#121212',      // Dark surface
    onSurface: '#FFFFFF',    // White text on surface
    error: '#CF6679',        // Error red
  },
  fonts: {
    heading: 'Google Sans, Roboto, sans-serif',
    body: 'Roboto, sans-serif',
    code: 'JetBrains Mono, monospace',
  },
  animations: {
    transition: 'spring(1, 80, 10, 0)',  // Material Design spring
    duration: 400,
  },
  patterns: {
    background: 'hexagon',    // Hexagon tessellation pattern
    cursorStyle: 'ripple',    // Material Design ripple effect
  },
  layout: {
    navigation: 'bottom-bar', // Material bottom navigation
    cardStyle: 'elevation',   // Material elevation shadows
  },
}

