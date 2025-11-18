export interface Project {
  id: string
  slug: string
  title: string
  domain: 'android' | 'web' | 'forex' | 'data' | 'design'
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
  // Forex Trading Projects
  {
    id: '3',
    slug: 'forex-trading-bot',
    title: 'Algorithmic Trading Bot',
    domain: 'forex',
    description: 'Python-based trading bot with ML-powered signal generation and risk management',
    longDescription: 'An automated forex trading system that uses machine learning algorithms to analyze market patterns and generate trading signals. Features include real-time market data analysis, position sizing based on Kelly Criterion, and comprehensive backtesting framework.',
    technologies: ['Python', 'pandas', 'scikit-learn', 'MetaTrader API', 'PostgreSQL'],
    githubLink: 'https://github.com/example/forex-bot',
    images: ['/projects/forex-bot.jpg'],
    impactMetrics: [
      { label: 'Win Rate', value: '68%' },
      { label: 'Sharpe Ratio', value: '2.1' },
      { label: 'Max Drawdown', value: '-12%' },
    ],
    lessonsLearned: [
      'Risk management is more important than win rate',
      'Emotional discipline is key to systematic trading',
      'Backtesting must account for slippage and spread'
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'market-sentiment-analyzer',
    title: 'Market Sentiment Analyzer',
    domain: 'forex',
    description: 'Real-time sentiment analysis dashboard for forex markets using news and social media',
    longDescription: 'A comprehensive market sentiment analysis tool that aggregates data from financial news, social media, and economic calendars to gauge market sentiment across major currency pairs.',
    technologies: ['Python', 'NLP', 'Twitter API', 'News APIs', 'React', 'D3.js'],
    images: ['/projects/sentiment-analyzer.jpg'],
    impactMetrics: [
      { label: 'Data Sources', value: '15+' },
      { label: 'Accuracy', value: '74%' },
    ],
    featured: false,
  },

  // Data Analysis Projects
  {
    id: '5',
    slug: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    domain: 'data',
    description: 'ML model predicting customer churn with 92% accuracy using ensemble methods',
    longDescription: 'Built a machine learning pipeline to predict customer churn for a SaaS company. Implemented feature engineering, hyperparameter tuning, and model interpretation using SHAP values. Deployed as a REST API with real-time predictions.',
    technologies: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Flask', 'Docker'],
    githubLink: 'https://github.com/example/churn-prediction',
    images: ['/projects/churn-model.jpg'],
    impactMetrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'ROC-AUC', value: '0.95' },
      { label: 'Cost Savings', value: '$2M+/year' },
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'sales-forecasting-dashboard',
    title: 'Sales Forecasting Dashboard',
    domain: 'data',
    description: 'Interactive dashboard for sales forecasting using time series analysis and Prophet',
    longDescription: 'Created an end-to-end sales forecasting solution with automated data pipelines, time series modeling using Facebook Prophet, and interactive visualizations. Features include seasonality decomposition, anomaly detection, and what-if scenario analysis.',
    technologies: ['Python', 'Prophet', 'pandas', 'Plotly', 'Streamlit', 'PostgreSQL'],
    liveLink: 'https://sales-forecast.example.com',
    images: ['/projects/sales-dashboard.jpg'],
    impactMetrics: [
      { label: 'Forecast Accuracy', value: '87%' },
      { label: 'Planning Improvement', value: '+35%' },
    ],
    featured: true,
  },

  // Design Projects
  {
    id: '7',
    slug: 'fintech-design-system',
    title: 'Fintech App Design System',
    domain: 'design',
    description: 'Complete design system for a fintech mobile app with 150+ components',
    longDescription: 'Designed and documented a comprehensive design system for a fintech startup, including typography, color systems, iconography, and 150+ reusable components. Created detailed Figma library with auto-layout, variants, and component documentation.',
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'React', 'TypeScript'],
    liveLink: 'https://figma.com/example',
    images: ['/projects/design-system.jpg'],
    impactMetrics: [
      { label: 'Components', value: '150+' },
      { label: 'Design Speed', value: '+60%' },
      { label: 'Consistency Score', value: '98%' },
    ],
    featured: true,
  },
  {
    id: '8',
    slug: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    domain: 'design',
    description: 'Complete UX overhaul of e-commerce platform increasing conversion by 45%',
    longDescription: 'Led the redesign of a major e-commerce platform focusing on mobile-first approach, simplified checkout flow, and personalized product recommendations. Conducted user research, A/B testing, and usability studies throughout the process.',
    technologies: ['Figma', 'User Research', 'A/B Testing', 'Prototyping', 'Usability Testing'],
    images: ['/projects/ecommerce-redesign.jpg'],
    impactMetrics: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Cart Abandonment', value: '-30%' },
      { label: 'Mobile Revenue', value: '+80%' },
    ],
    lessonsLearned: [
      'Simplified checkout reduced drop-off significantly',
      'Mobile-first approach is essential for e-commerce',
      'User testing revealed unexpected pain points'
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByDomain(domain: 'android' | 'web' | 'forex' | 'data' | 'design'): Project[] {
  return projects.filter((project) => project.domain === domain)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

