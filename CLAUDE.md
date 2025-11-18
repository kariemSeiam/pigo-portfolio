# CLAUDE.md - AI Assistant Guide for Pigo Portfolio

> **Purpose**: This document provides AI assistants with comprehensive context about the Pigo Portfolio codebase, including architecture, conventions, workflows, and best practices for making changes.

**Last Updated**: 2025-11-18
**Project**: Pigo Portfolio - "The Prism"
**Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion, Zustand

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Directory Structure](#directory-structure)
4. [Key Concepts](#key-concepts)
5. [Development Conventions](#development-conventions)
6. [Common Tasks](#common-tasks)
7. [File Reference](#file-reference)
8. [Testing & Quality](#testing--quality)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

### What This Project Is

An adaptive portfolio application showcasing Android and Web development skills with domain-specific theming. The portfolio automatically switches visual themes, navigation patterns, and interactions based on the current page/domain.

### Core Features

- **Multi-Theme System**: Automatic theme switching (Material Design for Android, Glassmorphism for Web)
- **Adaptive Components**: Navigation, cursor, and backgrounds adapt to domain
- **Dynamic Routing**: Project pages generated from data with slug-based URLs
- **Smooth Animations**: Framer Motion transitions, parallax scrolling, micro-interactions
- **Responsive Design**: Mobile-first with fluid typography using CSS `clamp()`
- **Canvas Animations**: 60fps background patterns (hexagons, grid lines, particles)

### Tech Stack

```
Framework:       Next.js 14 (App Router with React Server Components)
Language:        TypeScript (strict mode)
Styling:         TailwindCSS 3.4 with custom theme extensions
Animation:       Framer Motion 11.5
State:           Zustand 4.5 (lightweight, no Redux)
Fonts:           Google Sans, Roboto, Inter, SF Pro, JetBrains Mono
Build:           Webpack (Next.js default), PostCSS, Autoprefixer
```

---

## Architecture

### Next.js 14 App Router Structure

```
Route Mapping:
/                           → app/page.tsx (Home with particle background)
/android                    → app/(careers)/android/page.tsx (Material Design theme)
/web                        → app/(careers)/web/page.tsx (Glassmorphism theme)
/projects/[slug]            → app/projects/[slug]/page.tsx (Dynamic project pages)
/404                        → app/not-found.tsx (Custom 404 page)

Layout Hierarchy:
app/layout.tsx              → Root layout (fonts, metadata, global setup)
  └─ app/(careers)/layout.tsx → Theme-aware layout (navigation, background, cursor)
      ├─ app/(careers)/android/page.tsx
      ├─ app/(careers)/web/page.tsx
      └─ app/projects/[slug]/page.tsx (inherits theme from project.domain)
```

### Component Architecture

```
Adaptive Components (theme-aware):
- ThemeProvider.tsx         → Context provider, injects CSS variables
- AdaptiveNav.tsx           → Navigation (bottom bar for Android, header for Web)
- AdaptiveCursor.tsx        → Cursor (ripple for Android, crosshair for Web)
- BackgroundPattern.tsx     → Canvas animations (hexagons, grid, particles)

Presentational Components:
- DomainCard.tsx            → Domain selection cards on home page
- ProjectCard.tsx           → Project showcase cards with tech tags
```

### State Management (Zustand)

```typescript
// Single store: theme.ts
interface ThemeStore {
  currentTheme: Theme          // Active theme object
  setTheme: (theme: Theme) => void
  isTransitioning: boolean     // For page transition effects
  setIsTransitioning: (value: boolean) => void
}
```

**Key Point**: Theme state is **not persisted**. It's determined by URL path on each page load via `useCareerTheme` hook.

### Theme System Flow

```
1. User navigates to /android
2. Next.js renders app/(careers)/layout.tsx
3. Layout calls useCareerTheme() hook
4. Hook reads pathname, returns androidTheme
5. useEffect in layout calls setTheme(androidTheme)
6. ThemeProvider detects store change
7. ThemeProvider injects CSS variables into :root
8. All components use theme colors via Tailwind classes (text-[var(--primary)])
9. Adaptive components check currentTheme.id to render appropriately
```

---

## Directory Structure

```
pigo-portfolio/
├── app/                                # Next.js 14 App Router
│   ├── layout.tsx                      # Root layout: fonts (Inter, JetBrains Mono), metadata
│   ├── page.tsx                        # Home: morphing text, domain cards, particle background
│   ├── not-found.tsx                   # Custom 404 page with back navigation
│   ├── globals.css                     # Global styles, Tailwind directives, custom utilities
│   │
│   ├── (careers)/                      # Route group for themed pages
│   │   ├── layout.tsx                  # CRITICAL: Applies theme, nav, cursor, background
│   │   ├── android/page.tsx            # Android showcase: skills, projects, FAB, Material Design
│   │   └── web/page.tsx                # Web showcase: parallax, SaaS features, glassmorphism
│   │
│   └── projects/[slug]/page.tsx        # Dynamic project detail pages (slug from projects.ts)
│
├── components/
│   ├── adaptive/                       # Theme-adaptive components
│   │   ├── ThemeProvider.tsx           # Injects CSS vars, wraps with AnimatePresence
│   │   ├── AdaptiveNav.tsx             # Bottom bar (Android) vs sticky header (Web)
│   │   ├── AdaptiveCursor.tsx          # Ripple (Android) vs crosshair (Web)
│   │   └── BackgroundPattern.tsx       # Canvas: hexagons/grid/particles
│   │
│   └── cards/                          # Presentational card components
│       ├── DomainCard.tsx              # Android/Web selection cards (home page)
│       └── ProjectCard.tsx             # Project cards with tech tags, links
│
├── lib/
│   ├── themes/                         # Theme configuration objects
│   │   ├── index.ts                    # Theme interface, defaultTheme
│   │   ├── android.ts                  # Material Design theme config
│   │   └── web.ts                      # Glassmorphism theme config
│   │
│   ├── hooks/
│   │   └── useCareerTheme.ts           # Hook: returns theme based on pathname
│   │
│   ├── store/
│   │   └── theme.ts                    # Zustand store for theme state
│   │
│   └── data/
│       └── projects.ts                 # Project definitions, utility functions
│
├── public/                             # Static assets (images, fonts, icons)
│
├── scripts/
│   └── get-local-ip.js                 # Dev server network info display
│
├── Configuration Files:
│   ├── package.json                    # Dependencies, scripts
│   ├── tsconfig.json                   # TypeScript config (strict mode, @ alias)
│   ├── tailwind.config.js              # Custom colors, animations, typography
│   ├── next.config.js                  # Next.js build configuration
│   ├── postcss.config.js               # PostCSS plugins (Tailwind, Autoprefixer)
│   └── .eslintrc.json                  # ESLint rules (Next.js core-web-vitals)
│
└── Documentation:
    ├── README.md                       # Full feature documentation
    ├── GETTING_STARTED.md              # Setup and customization guide
    └── CLAUDE.md                       # This file (AI assistant guide)
```

### Important Path Aliases

```typescript
// tsconfig.json
"paths": {
  "@/*": ["./*"]  // @ refers to project root
}

// Usage examples:
import { androidTheme } from '@/lib/themes/android'
import { ProjectCard } from '@/components/cards/ProjectCard'
```

---

## Key Concepts

### 1. Adaptive Theme System

**Core Principle**: The UI adapts to the content domain, not user preference.

**Theme Object Structure** (`lib/themes/index.ts`):
```typescript
export interface Theme {
  id: string                    // 'android' | 'web' | 'default'
  name: string                  // Display name
  colors: {
    primary: string             // Main brand color (hex)
    secondary: string           // Secondary color
    accent: string              // Accent/highlight color
    surface: string             // Background surface color
    error?: string              // Error state color
  }
  fonts: {
    heading: string             // Headings/titles font
    body: string                // Body text font
    code: string                // Code/monospace font
  }
  animations: {
    transition: string          // Transition timing function
    duration: number            // Default duration (ms)
  }
  patterns: {
    background: string          // 'hexagon' | 'grid-lines' | 'particles'
    cursorStyle: string         // 'ripple' | 'crosshair' | 'default'
  }
  layout: {
    navigation: string          // 'header' | 'bottom-bar' | 'sticky-header'
    cardStyle: string           // 'elevation' | 'glassmorphism' | 'default'
  }
}
```

**How Themes Are Applied**:
1. `useCareerTheme` hook reads pathname
2. Returns corresponding theme object (android/web/default)
3. Layout component calls `setTheme()` in useEffect
4. `ThemeProvider` listens to theme store changes
5. On change, injects CSS variables into `document.documentElement.style`
6. Components use `var(--primary)`, `var(--secondary)`, etc.

**CSS Variables Injected**:
```css
:root {
  --primary: 61, 220, 132;          /* RGB values for Material green */
  --secondary: 98, 0, 238;
  --accent: 3, 218, 197;
  --surface: 18, 18, 18;
  --heading-font: 'Google Sans', sans-serif;
  --body-font: 'Roboto', sans-serif;
  /* ... etc */
}
```

**Usage in Components**:
```tsx
// Tailwind classes using CSS variables
<div className="bg-[rgb(var(--primary))] text-[rgb(var(--surface))]">
  {/* Content */}
</div>

// Or use predefined Tailwind colors
<div className="bg-android-primary text-white">  {/* Android theme */}
<div className="bg-web-primary text-white">      {/* Web theme */}
```

### 2. Route Groups in Next.js

**Why `(careers)` is in parentheses**:
- Parentheses create a **route group** that doesn't affect the URL
- `app/(careers)/android/page.tsx` → `/android` (not `/careers/android`)
- Allows shared layout (`app/(careers)/layout.tsx`) without adding URL segment
- Keeps theme-aware pages grouped logically

**Layout Nesting**:
```
Root Layout (app/layout.tsx)
└─ Careers Layout (app/(careers)/layout.tsx) ← Applies theme, nav, cursor
    ├─ Android Page (/android)
    ├─ Web Page (/web)
    └─ Project Pages (/projects/[slug])
```

### 3. Dynamic Routes

**Project Pages** (`app/projects/[slug]/page.tsx`):
```typescript
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)  // Fetch from projects.ts
  if (!project) notFound()  // Shows 404 if slug not found

  // Set theme based on project domain
  useEffect(() => {
    setTheme(project.domain === 'android' ? androidTheme : webTheme)
  }, [project.domain])

  return /* project details */
}
```

**How Slugs Work**:
- File name `[slug]` creates dynamic route parameter
- `/projects/my-app` → `params.slug = 'my-app'`
- Projects defined in `lib/data/projects.ts` with unique slugs
- No static pages generated; uses SSR (Server-Side Rendering)

### 4. Canvas-Based Backgrounds

**Three Pattern Types** (`BackgroundPattern.tsx`):

```typescript
// 1. Hexagon Grid (Android theme)
- Static tessellation of hexagons
- Green strokes (#3DDC84)
- Responsive to window resize

// 2. Grid Lines (Web theme)
- Animated moving grid
- Cyan color with low opacity
- Offset animation creates motion

// 3. Particle Network (Home page)
- 50 particles with physics simulation
- Velocity-based movement
- Lines connect particles within 150px
- Neural network visualization
```

**Performance Optimization**:
- Uses `requestAnimationFrame` for 60fps
- Canvas 2D (not WebGL) for simplicity
- Hidden on mobile devices (optional)
- Resize debouncing to prevent lag

### 5. Custom Cursor System

**Adaptive Cursor Behavior** (`AdaptiveCursor.tsx`):

```typescript
// Android Theme: Ripple Effect
- Small circular cursor (6px diameter)
- Click creates expanding ripple animation
- Ripples fade out over 0.6s
- Material Design inspired

// Web Theme: Crosshair with HTML Tags
- SVG crosshair cursor (+ symbol)
- Shows element tag name on hover (<button>, <div>)
- Developer-friendly, highlights interactivity
- Cyan color matching theme

// Touch Devices: Hidden
- Detects touch via window.matchMedia
- Falls back to default cursor
```

**Implementation Notes**:
- Uses `position: fixed` with high z-index
- Tracks mouse with `mousemove` event + RAF buffer
- `mix-blend-mode: difference` for visibility on any background
- State management for click ripples (array of animations)

### 6. Framer Motion Patterns

**Common Animation Patterns**:

```typescript
// 1. Fade In on Mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

// 2. Slide Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>

// 3. Stagger Children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>

// 4. Parallax Scrolling (Web page)
const { scrollY } = useScroll()
const opacity = useTransform(scrollY, [0, 300], [1, 0])
<motion.div style={{ opacity }}>
```

**Performance Best Practices**:
- Only animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left` (causes reflow)
- Use `layout` prop sparingly (expensive)
- Prefer CSS animations for simple cases

---

## Development Conventions

### Code Style

**TypeScript**:
- **Strict mode enabled**: All types must be explicit
- **Interface over type**: Use `interface` for object shapes, `type` for unions
- **No `any`**: Always type properly or use `unknown`
- **Props interfaces**: Define for all components

  ```typescript
  interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    domain: 'android' | 'web'
    slug?: string
    githubLink?: string
  }
  ```

**React/Next.js**:
- **Server Components by default**: Only add `'use client'` when needed (hooks, events)
- **Async components**: Use `async` for server components that fetch data
- **Client directive placement**: Top of file, before imports

  ```typescript
  'use client'  // Required for useState, useEffect, event handlers

  import { useState } from 'react'
  ```

**Component Structure**:
```typescript
// 1. Imports
import { useState } from 'react'
import { motion } from 'framer-motion'

// 2. Type definitions
interface ComponentProps {
  // ...
}

// 3. Component
export default function Component({ prop1, prop2 }: ComponentProps) {
  // 4. Hooks (useState, useEffect, custom hooks)
  const [state, setState] = useState()

  // 5. Event handlers
  const handleClick = () => {}

  // 6. Render logic
  return (
    // JSX
  )
}
```

**Naming Conventions**:
- **Components**: PascalCase (`ProjectCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useCareerTheme.ts`)
- **Utils/data**: camelCase (`projects.ts`, `getProjectBySlug`)
- **Constants**: UPPER_SNAKE_CASE (if true constants)
- **CSS classes**: kebab-case or Tailwind utilities

### File Organization

**Component Files**:
```
components/
├── adaptive/           # Theme-aware components (check theme.id)
└── cards/              # Presentational components (receive props)
```

**When to Create New Component**:
- Used in 2+ places (DRY principle)
- Complex logic (50+ lines)
- Separates concerns (presentation vs behavior)
- Improves testability

**When to Keep Inline**:
- Single-use UI (page-specific sections)
- Simple markup (< 20 lines)
- Tightly coupled to parent logic

### Styling Guidelines

**Tailwind First**:
```tsx
// ✅ Good: Use Tailwind utilities
<div className="flex items-center gap-4 bg-android-primary text-white p-4 rounded-lg">

// ❌ Avoid: Inline styles (unless dynamic values)
<div style={{ backgroundColor: '#3DDC84' }}>
```

**Custom Classes** (`globals.css`):
```css
/* Only for reusable patterns not covered by Tailwind */
.btn-android {
  @apply px-6 py-3 bg-android-primary text-white rounded-lg shadow-elevation-2;
  @apply hover:shadow-elevation-4 active:shadow-elevation-1;
  @apply transition-shadow duration-200;
}
```

**Responsive Design**:
```tsx
// Mobile-first breakpoints
<div className="
  w-full           /* mobile: full width */
  md:w-1/2         /* tablet: half width */
  lg:w-1/3         /* desktop: third width */
  xl:w-1/4         /* large: quarter width */
">
```

**Dark Mode** (Not Currently Implemented):
- Portfolio uses fixed dark theme
- To add light mode: use Tailwind `dark:` classes + theme toggle

### Git Workflow

**Branch Naming**:
```
claude/claude-md-mi4wmnlvfqemiavm-013RwCBDkf9mrSMubCiydp58  # Current feature branch
```

**Commit Messages**:
```
Format: <type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting (no code change)
- refactor: Code restructuring
- perf: Performance improvement
- test: Add/update tests
- chore: Build/tooling changes

Examples:
feat: Add project filtering by technology
fix: Resolve cursor flicker on Android theme
docs: Update CLAUDE.md with theme system details
refactor: Extract theme injection logic to hook
```

**Pull Request Process**:
1. Ensure all changes are committed
2. Push to feature branch: `git push -u origin <branch-name>`
3. Create PR with descriptive title and summary
4. Review changes yourself first
5. Verify build succeeds (`npm run build`)

---

## Common Tasks

### Adding a New Project

**File**: `lib/data/projects.ts`

```typescript
// 1. Add project object to projects array
{
  id: '3',                          // Unique ID (increment)
  slug: 'my-new-project',           // URL-friendly (lowercase, hyphens)
  title: 'My New Project',
  domain: 'android',                // or 'web'
  description: 'Short pitch (1-2 sentences for card)',
  longDescription: 'Full detailed description for project page...',
  technologies: ['Kotlin', 'Room', 'Coroutines'],
  githubLink: 'https://github.com/user/repo',  // Optional
  liveLink: 'https://play.google.com/...',     // Optional
  images: ['/projects/my-project.jpg'],        // Add images to public/projects/
  impactMetrics: [                             // Optional
    { label: 'Performance', value: '+40%' },
    { label: 'Users', value: '50K+' }
  ],
  lessonsLearned: [                            // Optional
    'Lesson 1',
    'Lesson 2'
  ],
  featured: true                               // Show on domain page
}

// 2. Add project images to public/projects/
// 3. Navigate to /projects/my-new-project to verify
```

**Testing**:
```bash
# Verify project appears on domain page
http://localhost:3000/android  # or /web

# Verify project detail page works
http://localhost:3000/projects/my-new-project
```

### Modifying a Theme

**File**: `lib/themes/android.ts` or `web.ts`

```typescript
// Example: Change Android primary color
export const androidTheme: Theme = {
  id: 'android',
  name: 'Android',
  colors: {
    primary: '#FF6B6B',      // Change from #3DDC84 to red
    secondary: '#6200EE',
    accent: '#03DAC5',
    surface: '#121212',
    error: '#CF6679'
  },
  // ... rest of theme
}
```

**Also update Tailwind config** (`tailwind.config.js`):
```javascript
colors: {
  android: {
    primary: '#FF6B6B',      // Match theme color
    // ...
  }
}
```

**Testing**:
- Navigate to `/android`
- Verify colors update throughout page
- Check buttons, links, navigation, cursor

### Adding a New Domain (e.g., "Design")

**Step 1**: Create theme (`lib/themes/design.ts`)
```typescript
export const designTheme: Theme = {
  id: 'design',
  name: 'Design',
  colors: {
    primary: '#FF1493',  // Deep pink
    secondary: '#9370DB',
    accent: '#FFD700',
    surface: '#0A0A0A'
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Lato',
    code: 'JetBrains Mono'
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: 300
  },
  patterns: {
    background: 'particles',     // or create new pattern
    cursorStyle: 'default'
  },
  layout: {
    navigation: 'sticky-header',
    cardStyle: 'glassmorphism'
  }
}
```

**Step 2**: Update Tailwind config
```javascript
colors: {
  design: {
    primary: '#FF1493',
    secondary: '#9370DB',
    accent: '#FFD700',
    surface: '#0A0A0A'
  }
}
```

**Step 3**: Update theme hook (`lib/hooks/useCareerTheme.ts`)
```typescript
import { designTheme } from '@/lib/themes/design'

export function useCareerTheme(): Theme {
  const pathname = usePathname()

  if (pathname.startsWith('/android')) return androidTheme
  if (pathname.startsWith('/web')) return webTheme
  if (pathname.startsWith('/design')) return designTheme  // Add this
  return defaultTheme
}
```

**Step 4**: Create page (`app/(careers)/design/page.tsx`)
```typescript
'use client'

export default function DesignPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Design showcase content */}
    </main>
  )
}
```

**Step 5**: Add domain card to home page (`app/page.tsx`)
```tsx
<DomainCard
  title="Design"
  description="UI/UX design and creative work"
  domain="design"
  icon="🎨"
/>
```

**Step 6**: Update TypeScript types
```typescript
// In lib/themes/index.ts or relevant files
type Domain = 'android' | 'web' | 'design'  // Add 'design'
```

### Customizing Navigation

**File**: `components/adaptive/AdaptiveNav.tsx`

**Android Theme (Bottom Bar)**:
```typescript
// Currently shows on mobile only
// To show on desktop, remove md:hidden class

// Current:
<nav className="md:hidden ...">  // Hidden on desktop

// Change to:
<nav className="...">  // Always visible
```

**Web Theme (Header)**:
```typescript
// Desktop: Horizontal nav
// Mobile: Hamburger menu

// To change nav items:
const navItems = [
  { href: '/web', label: 'Home' },
  { href: '/web#projects', label: 'Projects' },
  { href: '/web#skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },  // Add new item
]
```

### Adding Contact Form

**Current State**: No contact form (only mailto links)

**Implementation Steps**:

1. **Create API route** (`app/api/contact/route.ts`):
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Send email (use Resend, SendGrid, etc.)
  // Or save to database

  return NextResponse.json({ success: true })
}
```

2. **Create form component** (`components/ContactForm.tsx`):
```typescript
'use client'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // Handle response
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

3. **Add to page** (e.g., `app/(careers)/web/page.tsx`):
```tsx
import ContactForm from '@/components/ContactForm'

// In page component
<section id="contact" className="...">
  <h2>Get In Touch</h2>
  <ContactForm />
</section>
```

### Performance Optimization

**Current Optimizations**:
- Canvas animations use RAF (60fps)
- Framer Motion only animates transform/opacity
- Tailwind purges unused CSS
- Next.js code splitting by route
- Image optimization with `next/image` (if used)

**Further Improvements**:

1. **Lazy load components**:
```typescript
import dynamic from 'next/dynamic'

const BackgroundPattern = dynamic(
  () => import('@/components/adaptive/BackgroundPattern'),
  { ssr: false }  // Skip SSR for client-only component
)
```

2. **Optimize images**:
```tsx
import Image from 'next/image'

<Image
  src="/projects/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

3. **Reduce bundle size**:
```bash
# Analyze bundle
npm run build
# Check .next/analyze/ output

# Remove unused dependencies
npm uninstall <package>
```

---

## File Reference

### Critical Files (Modify with Care)

| File | Purpose | Modify When... |
|------|---------|---------------|
| `app/layout.tsx` | Root layout, fonts, metadata | Changing site-wide fonts or SEO |
| `app/(careers)/layout.tsx` | Theme application | Adjusting theme behavior |
| `lib/themes/index.ts` | Theme interface | Adding theme properties |
| `components/adaptive/ThemeProvider.tsx` | CSS variable injection | Changing how themes are applied |
| `tailwind.config.js` | Tailwind theme | Adding colors, animations, utilities |
| `tsconfig.json` | TypeScript config | Rarely (already optimized) |

### Frequently Modified Files

| File | Purpose | Modify When... |
|------|---------|---------------|
| `lib/data/projects.ts` | Project definitions | Adding/editing projects |
| `app/page.tsx` | Home page content | Updating intro, stats, domain cards |
| `app/(careers)/android/page.tsx` | Android page content | Updating Android skills, projects |
| `app/(careers)/web/page.tsx` | Web page content | Updating Web skills, projects |
| `app/globals.css` | Global styles | Adding custom CSS utilities |

### Reference Files (Read-Only)

| File | Purpose | Notes |
|------|---------|-------|
| `package.json` | Dependencies | Auto-managed by npm |
| `package-lock.json` | Dependency tree | Never edit manually |
| `.next/` | Build output | Auto-generated, gitignored |
| `node_modules/` | Installed packages | Auto-managed |

### Key Line Numbers

**Home Page** (`app/page.tsx`):
- Line 10-15: Morphing text messages
- Line 117-122: Quick stats
- Line 140-150: Domain cards

**Android Page** (`app/(careers)/android/page.tsx`):
- Line 7-10: Android skills array
- Line 159: FAB contact email link

**Web Page** (`app/(careers)/web/page.tsx`):
- Line 8-11: Web skills array
- Line 18-25: Parallax scroll configuration

**Projects Data** (`lib/data/projects.ts`):
- Line 12-60: Project definitions array

**Theme Provider** (`components/adaptive/ThemeProvider.tsx`):
- Line 15-40: CSS variable injection logic
- Line 42-45: Hex to RGB conversion

---

## Testing & Quality

### Current Testing Setup

**Linting** (ESLint):
```bash
npm run lint
```

**What's Checked**:
- React hooks rules
- Next.js core web vitals
- Unused variables
- TypeScript errors

**No Unit/E2E Tests Yet**:
- Consider adding Jest for component tests
- Consider adding Playwright/Cypress for E2E tests

### Manual Testing Checklist

**Before Committing**:
- [ ] Run `npm run lint` (no errors)
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test mobile responsiveness (DevTools)
- [ ] Verify all themes (/android, /web, /)
- [ ] Check project pages load
- [ ] Verify animations are smooth (60fps)
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Check custom cursor works (desktop)

**Build Test**:
```bash
npm run build  # Should succeed with no errors
npm start      # Test production build locally
```

### Type Checking

```bash
# TypeScript compiler (no output mode)
npx tsc --noEmit
```

**Common Type Errors**:
- Missing props in components
- Wrong domain type ('android' | 'web')
- Undefined project properties

### Accessibility Testing

**Manual Checks**:
- Tab through all interactive elements
- Check focus indicators are visible
- Verify ARIA labels on icon buttons
- Test with screen reader (NVDA, VoiceOver)
- Check color contrast (WCAG AAA)

**Tools**:
- Lighthouse (Chrome DevTools)
- axe DevTools browser extension
- WAVE browser extension

---

## Deployment

### Build Process

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# Output: .next/ directory with optimized build
```

### Environment Variables

**Current**: None required (all data is hardcoded)

**Future** (if adding backend features):
```bash
# .env.local
DATABASE_URL=...
RESEND_API_KEY=...
NEXT_PUBLIC_ANALYTICS_ID=...
```

**Important**:
- Variables prefixed with `NEXT_PUBLIC_` are exposed to browser
- Server-only variables don't need prefix
- Add `.env.local` to `.gitignore` (already done)

### Deployment Platforms

**Vercel (Recommended)**:
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Production deployment
vercel --prod
```

**Netlify**:
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Docker**:
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Themes switch properly
- [ ] Images load (check public/ assets)
- [ ] Fonts load (Google Fonts)
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Meta tags correct (SEO)
- [ ] Favicon displays

---

## Troubleshooting

### Common Issues

**1. Theme not applying**

**Symptoms**: Colors don't change, default theme shown

**Causes**:
- useCareerTheme not returning correct theme
- ThemeProvider not wrapping component
- CSS variables not injected

**Debug**:
```typescript
// In layout.tsx
const theme = useCareerTheme()
console.log('Current theme:', theme.id)  // Check value

// In ThemeProvider
console.log('Applying theme:', currentTheme.id)
```

**Fix**:
- Ensure path matches condition in `useCareerTheme.ts`
- Check layout hierarchy (ThemeProvider must wrap children)

---

**2. Custom cursor not showing**

**Symptoms**: Default cursor visible instead of ripple/crosshair

**Causes**:
- Touch device detected (intended behavior)
- Theme not recognized
- Z-index conflict

**Debug**:
```typescript
// In AdaptiveCursor.tsx
console.log('Theme ID:', currentTheme.id)
console.log('Cursor style:', currentTheme.patterns.cursorStyle)
```

**Fix**:
- Check `currentTheme.patterns.cursorStyle` matches expected value
- Verify z-index is higher than other elements
- Check if touch device (should hide on mobile)

---

**3. Animations laggy**

**Symptoms**: Stuttering animations, low FPS

**Causes**:
- Animating layout properties (width, height, top, left)
- Too many simultaneous animations
- Canvas performance issues

**Debug**:
```bash
# Chrome DevTools
1. Performance tab → Record
2. Trigger animation
3. Stop recording
4. Check FPS (should be 60fps)
5. Look for "Long Tasks" (red bars)
```

**Fix**:
- Only animate `transform` and `opacity`
- Use `will-change: transform` for heavy animations
- Reduce number of particles in BackgroundPattern
- Add `@media (prefers-reduced-motion: reduce)` checks

---

**4. Build fails**

**Symptoms**: `npm run build` errors

**Common Errors**:

```bash
# Type errors
Error: Type 'string' is not assignable to type 'Domain'
Fix: Ensure domain values are exactly 'android' | 'web'

# Missing module
Error: Cannot find module '@/components/...'
Fix: Check import path, verify file exists

# ESLint errors
Error: React Hook useEffect has a missing dependency
Fix: Add dependency to useEffect array or use ESLint disable
```

**Steps**:
1. Run `npm run lint` first
2. Fix all linting errors
3. Run `npx tsc --noEmit` for type checking
4. Then `npm run build`

---

**5. Project page returns 404**

**Symptoms**: `/projects/my-project` shows not-found page

**Causes**:
- Slug mismatch between URL and projects.ts
- Project not in projects array
- getProjectBySlug returns undefined

**Debug**:
```typescript
// In projects.ts
console.log('All projects:', projects)
console.log('Looking for slug:', slug)
const found = getProjectBySlug(slug)
console.log('Found project:', found)
```

**Fix**:
- Verify slug in projects.ts matches URL exactly
- Check slug is lowercase with hyphens only
- Ensure project object has all required fields

---

**6. Fonts not loading**

**Symptoms**: Fallback fonts shown instead of Google Sans/Inter/etc.

**Causes**:
- Font import failed
- Font name mismatch
- CSS variable not applied

**Debug**:
```bash
# Chrome DevTools → Network tab
Filter: Font
Check if fonts load (200 status)
```

**Fix**:
```typescript
// Verify in app/layout.tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// Check in globals.css
body {
  font-family: var(--font-inter), sans-serif;
}
```

---

### Debug Tools

**Browser DevTools**:
```bash
Chrome DevTools (F12):
- Console: Log errors, warnings
- Network: Check asset loading
- Performance: Profile animations
- Lighthouse: SEO, accessibility, performance scores
- React DevTools: Component tree, props, state
```

**VS Code Extensions**:
- ESLint: Real-time linting
- Tailwind CSS IntelliSense: Class autocomplete
- Error Lens: Inline error display
- TypeScript Error Translator: Clearer error messages

**Useful Console Commands**:
```javascript
// Check current theme
console.log(useThemeStore.getState().currentTheme)

// List all projects
console.log(projects)

// Check viewport size
console.log(`${window.innerWidth}x${window.innerHeight}`)
```

---

## Best Practices for AI Assistants

### When Making Changes

1. **Read before writing**: Always read the file first before editing
2. **Understand context**: Check related files (imports, exports)
3. **Test locally**: Verify changes work with `npm run dev`
4. **Type safety**: Ensure TypeScript types are correct
5. **Consistency**: Match existing code style and patterns

### When Adding Features

1. **Check existing patterns**: Look for similar features first
2. **Reuse components**: Don't duplicate if component exists
3. **Follow conventions**: Use established naming and structure
4. **Update types**: Add TypeScript interfaces for new data
5. **Document changes**: Update comments and this file if needed

### When Debugging

1. **Read error messages**: TypeScript/ESLint errors are helpful
2. **Check console**: Browser console shows runtime errors
3. **Verify imports**: Ensure paths are correct (use @ alias)
4. **Test incrementally**: Make one change at a time
5. **Use git diff**: Review changes before committing

### Code Quality Checklist

Before completing a task:
- [ ] TypeScript types are correct (no `any`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Components follow naming conventions
- [ ] Imports use `@/` alias where appropriate
- [ ] Comments added for complex logic
- [ ] No console.log left in production code
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility considered (ARIA labels, focus states)

---

## Additional Resources

### Documentation Links

- **Next.js 14 Docs**: https://nextjs.org/docs
- **React 18 Docs**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **TailwindCSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion
- **Zustand Docs**: https://docs.pmnd.rs/zustand

### Internal Documentation

- **README.md**: Full feature documentation and setup
- **GETTING_STARTED.md**: Quick start and customization guide
- **package.json**: Scripts and dependencies reference

### Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check types without building

# Package management
npm install <pkg>    # Add new dependency
npm uninstall <pkg>  # Remove dependency
npm outdated         # Check for updates
npm update           # Update dependencies

# Git
git status           # Check changes
git diff             # View changes
git add .            # Stage all changes
git commit -m "..."  # Commit with message
git push             # Push to remote
```

---

## Changelog

**2025-11-18**: Initial CLAUDE.md creation
- Comprehensive codebase analysis
- Architecture documentation
- Development conventions
- Common tasks and troubleshooting
- AI assistant best practices

---

## Contact & Support

For questions about this codebase:
1. Check this CLAUDE.md file first
2. Review README.md and GETTING_STARTED.md
3. Check official framework documentation
4. Search for similar patterns in the codebase

**Project maintained by**: Pigo Portfolio Team
**Last updated**: 2025-11-18
**Version**: 1.0.0

---

*This document is maintained as the codebase evolves. When making significant architectural changes, update this file accordingly.*
