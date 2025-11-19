/**
 * Skills Data
 * Skills organized by domain
 */

export interface Skill {
  name: string
  level: number  // 0-100
  icon: string
  category: string
  description?: string
}

export const androidSkills: Skill[] = [
  { name: 'Kotlin', level: 95, icon: '🔷', category: 'Language' },
  { name: 'Jetpack Compose', level: 90, icon: '🎨', category: 'UI' },
  { name: 'Android SDK', level: 92, icon: '🤖', category: 'Framework' },
  { name: 'Material Design 3', level: 88, icon: '📱', category: 'Design' },
  { name: 'Room Database', level: 85, icon: '💾', category: 'Database' },
  { name: 'Retrofit', level: 90, icon: '🌐', category: 'Networking' },
]

export const webSkills: Skill[] = [
  { name: 'Next.js', level: 95, icon: '⚡', category: 'Framework' },
  { name: 'React', level: 93, icon: '⚛️', category: 'Library' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Language' },
  { name: 'TailwindCSS', level: 92, icon: '🎨', category: 'Styling' },
  { name: 'GraphQL', level: 85, icon: '🔷', category: 'API' },
  { name: 'PostgreSQL', level: 88, icon: '🐘', category: 'Database' },
]

export const forexSkills: Skill[] = [
  { name: 'Technical Analysis', level: 88, icon: '📈', category: 'Trading' },
  { name: 'Python', level: 92, icon: '🐍', category: 'Language' },
  { name: 'CCXT', level: 85, icon: '🔄', category: 'Library' },
  { name: 'Risk Management', level: 90, icon: '⚠️', category: 'Trading' },
  { name: 'Backtesting', level: 82, icon: '⏮️', category: 'Strategy' },
]

export const dataSkills: Skill[] = [
  { name: 'Python', level: 95, icon: '🐍', category: 'Language' },
  { name: 'Pandas', level: 92, icon: '📊', category: 'Library' },
  { name: 'SQL', level: 90, icon: '🔍', category: 'Database' },
  { name: 'Matplotlib', level: 88, icon: '📈', category: 'Visualization' },
  { name: 'Machine Learning', level: 85, icon: '🤖', category: 'AI' },
  { name: 'Jupyter', level: 90, icon: '📓', category: 'Tool' },
]

export const designSkills: Skill[] = [
  { name: 'Figma', level: 95, icon: '🎨', category: 'Tool' },
  { name: 'UI Design', level: 92, icon: '📱', category: 'Design' },
  { name: 'UX Research', level: 88, icon: '🔬', category: 'Research' },
  { name: 'Prototyping', level: 90, icon: '🛠️', category: 'Tool' },
  { name: 'Design Systems', level: 88, icon: '🎯', category: 'System' },
  { name: 'Branding', level: 85, icon: '🏷️', category: 'Brand' },
]

