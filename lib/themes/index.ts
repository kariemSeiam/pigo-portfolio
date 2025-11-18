export interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    surface: string
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
    background: string
    cursorStyle: string
  }
  layout: {
    navigation: string
    cardStyle: string
  }
}

export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: '#3DDC84',
    secondary: '#6200EE',
    accent: '#03DAC5',
    surface: '#121212',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    code: 'JetBrains Mono',
  },
  animations: {
    transition: 'ease-in-out',
    duration: 0.3,
  },
  patterns: {
    background: 'none',
    cursorStyle: 'default',
  },
  layout: {
    navigation: 'header',
    cardStyle: 'default',
  },
}

export { androidTheme } from './android'
export { webTheme } from './web'

