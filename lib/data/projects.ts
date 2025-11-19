/**
 * Projects Data
 * Central repository of all portfolio projects across 5 domains
 */

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  domain: 'android' | 'web' | 'forex' | 'data' | 'design'
  image?: string
  tags: string[]
  year: number
  featured: boolean
  link?: string
  github?: string
  githubLink?: string
  liveLink?: string
  technologies?: string[]
  impactMetrics?: Array<{ label: string; value: string }>
  lessonsLearned?: string[]
}

export const projects: Project[] = [
  // Android Projects
  {
    id: 'android-1',
    slug: 'ecommerce-app',
    title: 'E-Commerce App',
    description: 'Full-featured shopping app with Jetpack Compose and Material Design 3',
    longDescription: 'A complete e-commerce application built with Kotlin and Jetpack Compose, featuring Material Design 3 principles, real-time inventory management, and secure payment processing.',
    domain: 'android',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
    year: 2024,
    featured: true,
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'MVVM Architecture'],
    impactMetrics: [
      { label: 'Downloads', value: '100K+' },
      { label: 'Rating', value: '4.8' },
      { label: 'Users', value: '50K' },
    ],
    lessonsLearned: [
      'Material Design 3 principles improve user retention by 35%',
      'Jetpack Compose reduces development time by 40%',
      'Proper state management is crucial for scalability',
    ],
  },
  
  // Web Projects
  {
    id: 'web-1',
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Real-time analytics dashboard with Next.js 15 and WebSockets',
    longDescription: 'A comprehensive SaaS analytics dashboard built with Next.js 15, featuring real-time data updates, interactive charts, and multi-tenant support.',
    domain: 'web',
    tags: ['Next.js', 'React', 'TypeScript', 'WebSocket'],
    year: 2024,
    featured: true,
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'WebSocket'],
    impactMetrics: [
      { label: 'Users', value: '5K+' },
      { label: 'Performance', value: '98 Lighthouse' },
      { label: 'Uptime', value: '99.9%' },
    ],
    lessonsLearned: [
      'Next.js 15 Server Components improve performance significantly',
      'Real-time WebSocket connections require careful state management',
      'Proper caching strategies can reduce API calls by 60%',
    ],
  },
  
  // Forex Projects
  {
    id: 'forex-1',
    slug: 'trading-bot',
    title: 'Algorithmic Trading Bot',
    description: 'AI-powered trading bot with technical analysis and risk management',
    domain: 'forex',
    tags: ['Python', 'CCXT', 'Machine Learning'],
    year: 2024,
    featured: true,
    technologies: ['Python', 'CCXT', 'Machine Learning', 'Technical Analysis'],
  },
  
  // Data Projects
  {
    id: 'data-1',
    slug: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive data exploration tool with 3D visualizations',
    domain: 'data',
    tags: ['Python', 'Plotly', 'Pandas', 'Jupyter'],
    year: 2024,
    featured: true,
    technologies: ['Python', 'Plotly', 'Pandas', 'Jupyter Notebook'],
  },
  
  // Design Projects
  {
    id: 'design-1',
    slug: 'design-system',
    title: 'Design System',
    description: 'Comprehensive design system with 100+ components',
    domain: 'design',
    tags: ['Figma', 'Design System', 'Components'],
    year: 2024,
    featured: true,
    technologies: ['Figma', 'Design Tokens', 'Storybook'],
  },
]

/**
 * Get a project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
