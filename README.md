# 🎨 The Prism Portfolio - Adaptive Multi-Domain Portfolio

> **Where Light Becomes Spectrum** ✨
>
> A revolutionary adaptive portfolio that refracts professional identity across 5 distinct domains with physics-based transitions and domain-specific theming.

**Status**: ✅ Phase 0 Complete | 🎯 Phase 1 Ready to Start

A masterpiece portfolio showcasing expertise across **5 professional domains**:
- 🤖 Android Development (Material Design 3)
- 💎 Web Development (Neo-Brutalist Glassmorphism)  
- 💰 Forex Trading (Financial Terminal)
- 📊 Data Analysis (Jupyter Notebook)
- 🎨 UI/UX Design (Figma Playground)

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

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router) ✨ Latest
- **Runtime**: React 19.2.0 with Server Components
- **Language**: TypeScript 5.5.3 (Strict Mode)
- **Styling**: TailwindCSS 3.4.1 with custom theme system
- **Animations**: Framer Motion 11.5.4 + GSAP 3.12 (ready)
- **State Management**: Zustand 4.5.5 with DevTools
- **Fonts**: Inter, JetBrains Mono, Google Sans (customizable per domain)

## 📊 Build Status

| Metric | Status |
|--------|--------|
| **Production Build** | ✅ **PASSING** (0 errors) |
| **TypeScript Errors** | ✅ **ZERO** |
| **Routes Generated** | 11 static + 1 dynamic |
| **Linter Errors** | ✅ **ZERO** |
| **Bundle Size** | Optimized with tree-shaking |
| **Performance** | 60fps animations enabled |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (18.17 or higher)
- npm or yarn package manager

### Installation & Development

```bash
# Clone and navigate to project
cd pigo-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available URLs**:
- 🏠 Home: `http://localhost:3000`
- 🤖 Android: `http://localhost:3000/android`
- 💻 Web: `http://localhost:3000/web`
- 💹 Forex: `http://localhost:3000/forex`
- 📊 Data: `http://localhost:3000/data`
- 🎨 Design: `http://localhost:3000/design`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Or deploy directly to Vercel (recommended)
vercel deploy
```

## 📁 Project Structure

```
pigo-portfolio/
├── app/
│   ├── (careers)/                    # 🎯 Theme-aware career domain pages
│   │   ├── layout.tsx               # Applies themes based on pathname
│   │   ├── android/page.tsx         # Material Design 3 theme
│   │   ├── web/page.tsx             # Glassmorphism theme
│   │   ├── forex/page.tsx           # Terminal theme
│   │   ├── data/page.tsx            # Notebook theme
│   │   └── design/page.tsx          # Figma theme
│   ├── projects/[slug]/page.tsx     # Dynamic project showcase
│   ├── layout.tsx                   # Root layout with fonts
│   ├── page.tsx                     # Home page (Prism Hub)
│   └── globals.css                  # Global utilities & theme injection
│
├── components/
│   ├── adaptive/                     # 🎨 Theme-aware components
│   │   ├── ThemeProvider.tsx        # CSS variable injection
│   │   ├── AdaptiveNav.tsx          # Navigation (6 styles)
│   │   ├── AdaptiveCursor.tsx       # Custom cursors (6 types)
│   │   └── BackgroundPattern.tsx    # Canvas patterns (6 types)
│   ├── cards/                        # Reusable card components
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   └── TimelineCard.tsx
│   ├── interactions/                 # Micro-interactions
│   │   └── FloatingActionButton.tsx
│   └── sections/                     # Page sections
│       ├── HeroSection.tsx
│       ├── SkillsSection.tsx
│       └── ProjectsGrid.tsx
│
├── lib/
│   ├── themes/                       # 🎭 5 complete theme systems
│   │   ├── index.ts                 # Theme interface + utilities
│   │   ├── android.ts               # Material Design 3 (Green #3DDC84)
│   │   ├── web.ts                   # Neo-Brutalist (Cyan #00D9FF)
│   │   ├── forex.ts                 # Financial Terminal (Gold #FFD700)
│   │   ├── data.ts                  # Jupyter Notebook (Red #FF6B6B)
│   │   └── design.ts                # Figma Playground (Pink #FF1493)
│   │
│   ├── store/                        # 🗂️ Zustand state management
│   │   ├── theme.ts                 # Theme store with DevTools
│   │   └── device.ts                # Device detection store
│   │
│   ├── hooks/                        # 🪝 Custom React hooks
│   │   ├── useCareerTheme.ts        # Theme routing by pathname
│   │   └── useDeviceTier.ts         # Performance tier detection
│   │
│   ├── animations/                   # ✨ Animation presets
│   │   ├── framer-variants.ts       # 11 Framer Motion variants
│   │   └── gsap-animations.ts       # GSAP timeline presets
│   │
│   ├── data/                         # 📊 Static content
│   │   ├── projects.ts              # Project catalog
│   │   ├── skills.ts                # Skills by domain
│   │   └── timeline.ts              # Career timeline
│   │
│   └── utils/                        # 🔧 Utility functions
│       ├── cn.ts                    # Class name merger
│       └── format.ts                # Formatting helpers
│
├── public/
│   ├── projects/                    # Project images
│   ├── icons/                       # Favicons & social icons
│   └── models/                      # 3D models (future)
│
├── .env.local                        # Environment variables
├── tailwind.config.js               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
└── next.config.js                   # Next.js configuration
```

**Total Structure**: 30+ directories | 20+ core files created | ~2,000 LOC

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

---

## 📈 Development Roadmap

| Phase | Status | Focus | ETA |
|-------|--------|-------|-----|
| **Phase 0** | ✅ **COMPLETE** | Foundation & Theme System | Done |
| **Phase 1** | 🎯 **READY** | Complete Core Architecture | 4-6 hrs |
| **Phase 2-6** | 📋 Planned | Domain-Specific Pages | 30-40 hrs |
| **Phase 7-8** | 📋 Planned | Home & Project System | 14-20 hrs |
| **Phase 9-10** | 📋 Planned | Advanced Features & Deploy | 20-30 hrs |

**Total Estimated Time**: 60-90 hours (with 4 tasks/hour velocity)

---

## 📚 Documentation

- **Blueprint**: See `THE_PRISM_PORTFOLIO_BLUEPRINT.md` (7,242 lines)
- **Implementation Guide**: See `IMPLEMENTATION_GUIDE.md` (Complete architecture reference)
- **Progress Tracker**: See `IMPLEMENTATION_TRACKER.md` (Real-time task tracking)
- **AI Reference**: See `CLAUDE.md` (AI assistant master guide)

---

Built with passion and attention to detail. Every pixel matters, every interaction delights.

**Phase 0 Completed**: 2025-11-18 ✅

