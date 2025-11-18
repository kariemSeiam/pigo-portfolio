export interface Project {
  id: string
  slug: string
  title: string
  domain: 'android' | 'web'
  description: string
  longDescription: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
  images: string[]
  impactMetrics?: {
    label: string
    value: string
  }[]
  lessonsLearned?: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'android-app-1',
    title: 'Android Project 1',
    domain: 'android',
    description: 'A native Android application built with Kotlin and Jetpack Compose',
    longDescription: 'Detailed description of the Android project...',
    technologies: ['Kotlin', 'Jetpack Compose', 'Material Design 3', 'MVVM'],
    images: ['/projects/android-1.jpg'],
    impactMetrics: [
      { label: 'Performance Improvement', value: '40%' },
      { label: 'Users', value: '10K+' },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'saas-web-app',
    title: 'SaaS Web Application',
    domain: 'web',
    description: 'A full-stack SaaS platform built with Next.js and Flask',
    longDescription: 'Detailed description of the SaaS project...',
    technologies: ['Next.js', 'React', 'TypeScript', 'Flask', 'PostgreSQL'],
    githubLink: 'https://github.com/example/saas',
    liveLink: 'https://example.com',
    images: ['/projects/web-1.jpg'],
    impactMetrics: [
      { label: 'API Response Time', value: '-60%' },
      { label: 'Active Users', value: '5K+' },
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByDomain(domain: 'android' | 'web'): Project[] {
  return projects.filter((project) => project.domain === domain)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

