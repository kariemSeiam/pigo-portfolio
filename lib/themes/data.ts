import { Theme } from './index'

export const dataTheme: Theme = {
  id: 'data',
  name: 'Data Analysis',
  colors: {
    primary: '#FF6B6B',      // Warm red (data viz)
    secondary: '#4ECDC4',    // Teal (charts)
    accent: '#45B7D1',       // Sky blue (insights)
    surface: '#0F0F0F',      // Notebook dark
    onSurface: '#E8E8E8',    // Light gray text
    error: '#FF4757',        // Error red
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, sans-serif',
    code: 'JetBrains Mono, Consolas, monospace',
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Material easing
    duration: 350,
  },
  patterns: {
    background: 'network-graph',  // Network graph visualization
    cursorStyle: 'pointer',       // Data point pointer
  },
  layout: {
    navigation: 'sticky-header',  // Jupyter-style header
    cardStyle: 'notebook',        // Notebook cell cards
  },
}
