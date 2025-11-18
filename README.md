# Adaptive Portfolio - The Prism

A masterpiece portfolio showcasing Android development, Web development, and SaaS projects with adaptive theming and animations.

## Features

### Adaptive Theme System
- **Android Theme**: Material Design 3 with elevation shadows, ripple effects, hexagon grid background, and bottom navigation
- **Web Theme**: Glassmorphism effects, smooth parallax scrolling, CSS grid animation background, and sticky header navigation
- **Dynamic Theme Switching**: Themes change automatically based on the current domain/page

### Responsive Design
- Mobile-first architecture with fluid typography using CSS `clamp()`
- Touch-optimized interactions (48px minimum tap targets)
- Breakpoints: Mobile (320-640px), Tablet (641-1024px), Desktop (1025-1440px), Large (1441px+)
- Adaptive navigation (bottom bar on mobile for Android, hamburger menu for Web)

### Animations & Interactions
- **60fps Performance**: All animations use transform/opacity only for GPU acceleration
- **Framer Motion**: Smooth page transitions, scroll-based parallax, and micro-interactions
- **Custom Cursor**: Ripple effect for Android theme, crosshair with HTML tags for Web theme
- **Background Patterns**: Animated hexagons (Android), moving grid lines (Web), neural network particles (Home)

### Accessibility (WCAG 3 AAA)
- Proper contrast ratios for all color combinations
- Focus indicators on all interactive elements
- ARIA labels for icon-only buttons
- Reduced motion support using `@prefers-reduced-motion`
- Semantic HTML structure

### Project System
- TypeScript interfaces for type-safe project data
- Dynamic project pages with slug-based routing
- Project cards with technologies, GitHub links, and live demos
- Impact metrics and lessons learned sections

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Fonts**: Google Sans, Roboto, Inter, SF Pro, JetBrains Mono

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── (careers)/           # Career domain pages
│   │   ├── android/         # Android development page
│   │   ├── web/             # Web development page
│   │   └── layout.tsx       # Theme-aware layout
│   ├── projects/[slug]/     # Dynamic project pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (The Prism Hub)
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles
├── components/
│   ├── adaptive/            # Theme-adaptive components
│   │   ├── ThemeProvider.tsx
│   │   ├── AdaptiveNav.tsx
│   │   ├── AdaptiveCursor.tsx
│   │   └── BackgroundPattern.tsx
│   └── cards/               # Card components
│       ├── ProjectCard.tsx
│       └── DomainCard.tsx
├── lib/
│   ├── themes/              # Theme configurations
│   │   ├── index.ts
│   │   ├── android.ts
│   │   └── web.ts
│   ├── hooks/               # Custom hooks
│   │   └── useCareerTheme.ts
│   ├── store/               # Zustand stores
│   │   └── theme.ts
│   └── data/                # Data & types
│       └── projects.ts
└── public/                  # Static assets
```

## Customization

### Adding New Projects

Edit `lib/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  slug: 'project-slug',
  title: 'Project Title',
  domain: 'android' | 'web',
  description: 'Short description',
  longDescription: 'Detailed description',
  technologies: ['React', 'Next.js', 'TypeScript'],
  githubLink: 'https://github.com/...',
  liveLink: 'https://...',
  images: ['/path/to/image.jpg'],
  impactMetrics: [
    { label: 'Performance', value: '+40%' }
  ],
  featured: true
}
```

### Modifying Themes

Edit `lib/themes/android.ts` or `lib/themes/web.ts`:

```typescript
export const androidTheme: Theme = {
  id: 'android',
  colors: {
    primary: '#3DDC84',  // Change colors
    secondary: '#6200EE',
    accent: '#03DAC5',
  },
  fonts: {
    heading: 'Google Sans',  // Change fonts
    body: 'Roboto',
  },
  // ... other theme properties
}
```

### Adding New Domains

1. Create theme file in `lib/themes/`
2. Add route in `app/(careers)/[domain]/`
3. Update `useCareerTheme` hook
4. Add domain card to home page

## Performance

- Lazy loading for images and heavy components
- Code splitting by route
- Font loading optimization (`font-display: swap`)
- GPU-accelerated animations
- Optimized bundle size with tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contact

For inquiries, reach out via the contact form or email.

---

Built with passion and attention to detail. Every pixel matters, every interaction delights.

