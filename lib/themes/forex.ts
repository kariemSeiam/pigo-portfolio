import { Theme } from './index'

export const forexTheme: Theme = {
  id: 'forex',
  name: 'Forex Trading',
  colors: {
    primary: '#FFD700',      // Gold (wealth, premium)
    secondary: '#26A69A',    // Teal (bullish signals)
    accent: '#EF5350',       // Red (bearish signals)
    surface: '#0D0D0D',      // Terminal black
    onSurface: '#00FF41',    // Matrix green text
    error: '#FF5252',        // Critical error red
  },
  fonts: {
    heading: 'JetBrains Mono, Courier New, monospace',
    body: 'JetBrains Mono, monospace',
    code: 'JetBrains Mono, monospace',
  },
  animations: {
    transition: 'linear',    // Sharp terminal transitions
    duration: 200,
  },
  patterns: {
    background: 'candlesticks',  // Candlestick chart pattern
    cursorStyle: 'terminal',     // Terminal cursor with blink
  },
  layout: {
    navigation: 'sticky-header', // Fixed terminal header
    cardStyle: 'terminal',       // Terminal window cards
  },
}
