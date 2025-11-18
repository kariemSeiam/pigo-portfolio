import { Theme } from './index'

export const androidTheme: Theme = {
  id: 'android',
  name: 'Android Development',
  colors: {
    primary: '#3DDC84',
    secondary: '#6200EE',
    accent: '#03DAC5',
    surface: '#121212',
    error: '#CF6679',
  },
  fonts: {
    heading: 'Google Sans, Roboto, sans-serif',
    body: 'Roboto, sans-serif',
    code: 'JetBrains Mono, monospace',
  },
  animations: {
    transition: 'spring(1, 80, 10, 0)',
    duration: 0.4,
  },
  patterns: {
    background: 'hexagon-grid',
    cursorStyle: 'ripple',
  },
  layout: {
    navigation: 'bottom-bar',
    cardStyle: 'elevation',
  },
}

