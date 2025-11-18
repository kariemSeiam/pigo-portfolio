# 🎨 The Prism Portfolio - Master Implementation Guide

> **Complete Step-by-Step Roadmap**: From zero to deployed revolutionary portfolio in 10 phases.
> **Companion Document**: Use alongside `IMPLEMENTATION_TRACKER.md` for progress tracking.

**Blueprint Reference**: `THE_PRISM_PORTFOLIO_BLUEPRINT.md`
**Progress Tracker**: `IMPLEMENTATION_TRACKER.md`
**Project Guide**: `CLAUDE.md`

---

## 📖 How to Use This Guide

1. **Read the blueprint first**: Understand the "what" and "why"
2. **Use this guide for "how"**: Step-by-step instructions
3. **Track progress in TRACKER**: Check off tasks as you complete them
4. **Update CLAUDE.md**: Keep project documentation current
5. **Commit frequently**: After each major task completion

---

## 🗺️ Implementation Phases Overview

| Phase | Focus | Duration | Deliverables |
|-------|-------|----------|--------------|
| **0** | Foundation Setup | 2-3 hours | Project initialized, dependencies installed |
| **1** | Core Architecture | 4-6 hours | Theme system, state management, providers |
| **2** | Android Domain | 6-8 hours | Complete Android page with Material Design |
| **3** | Web Domain | 6-8 hours | Complete Web page with glassmorphism |
| **4** | Forex Domain | 5-7 hours | Trading terminal page with calculator |
| **5** | Data Analysis | 5-7 hours | Jupyter-style notebook page with analyzer |
| **6** | Design Domain | 5-7 hours | Figma playground page |
| **7** | Home & Transitions | 8-10 hours | Home page + prism refraction transitions |
| **8** | Project System | 6-8 hours | Dynamic project pages + timeline |
| **9** | Advanced Features | 12-16 hours | AI chatbot, cursors, performance optimization |
| **10** | Polish & Deploy | 8-12 hours | Testing, SEO, accessibility, deployment |

**Total Estimated Time**: 65-90 hours (8-12 working days)

---

# 📋 Detailed Phase Breakdown

---

# Phase 0: Foundation Setup 🏗️

## Overview
Set up development environment and project structure. This phase ensures all tools, dependencies, and configurations are in place before coding begins.

## Prerequisites
- Node.js 18+ installed
- Git installed and configured
- VS Code (or preferred editor)
- Terminal/command line access
- GitHub account (for version control)

## Goals
1. ✅ Create Next.js 15 project with TypeScript
2. ✅ Install all core dependencies
3. ✅ Configure Tailwind CSS with custom theme
4. ✅ Set up project folder structure
5. ✅ Configure TypeScript and ESLint
6. ✅ Initialize Git repository

---

## 🔧 Step 0.1: Create Next.js Project

### Command
```bash
npx create-next-app@latest pigo-portfolio \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```

### What This Does
- Creates new Next.js 15 project named "pigo-portfolio"
- Enables TypeScript for type safety
- Includes Tailwind CSS for styling
- Uses App Router (not Pages Router)
- No `src/` directory (simpler structure)
- Sets up `@/*` import alias for cleaner imports

### Verification Steps
1. Open terminal in `pigo-portfolio` folder
2. Run `npm run dev`
3. Open `http://localhost:3000`
4. Should see default Next.js welcome page

### Troubleshooting
- **Error: "npm not found"** → Install Node.js from nodejs.org
- **Port 3000 already in use** → Kill existing process or use different port
- **TypeScript errors** → Run `npm install` to ensure all deps installed

---

## 📦 Step 0.2: Install Dependencies

### Core Dependencies
```bash
cd pigo-portfolio
npm install framer-motion@11.5.0
npm install zustand@4.5.0
```

**Why these packages?**
- `framer-motion`: Animation library for smooth transitions
- `zustand`: Lightweight state management (simpler than Redux)

### Development Dependencies
```bash
npm install -D eslint prettier eslint-config-prettier
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

**Why these packages?**
- `eslint`: Code quality and error detection
- `prettier`: Automatic code formatting
- TypeScript ESLint plugins: TypeScript-specific linting

### Verification
```bash
# Check package.json has all dependencies
cat package.json | grep "framer-motion"
cat package.json | grep "zustand"
```

---

## 🏗️ Step 0.3: Create Folder Structure

### Command
```bash
# Create all directories at once
mkdir -p app/\(careers\)/{android,web,forex,data,design}
mkdir -p app/projects/[slug]
mkdir -p components/{adaptive,cards,chat,interactions,providers,transitions}
mkdir -p lib/{themes,hooks,store,data,animations,performance,i18n,audio}
mkdir -p public/{projects,fonts,icons}
mkdir -p scripts
```

### Directory Explanation

**`app/` - Next.js 15 App Router**
- `(careers)/` - Route group (doesn't affect URL)
  - `android/` - `/android` page
  - `web/` - `/web` page
  - `forex/` - `/forex` page
  - `data/` - `/data` page
  - `design/` - `/design` page
- `projects/[slug]/` - Dynamic routes like `/projects/my-app`

**`components/` - React Components**
- `adaptive/` - Theme-aware components (nav, cursor, background)
- `cards/` - Presentational card components
- `chat/` - AI chatbot components
- `interactions/` - Micro-interactions and animations
- `providers/` - Context providers (theme, performance, RTL)
- `transitions/` - Page transition components

**`lib/` - Business Logic**
- `themes/` - Theme definitions (android, web, forex, etc.)
- `hooks/` - Custom React hooks
- `store/` - Zustand stores
- `data/` - Static data (projects, timeline, skills)
- `animations/` - Animation utilities (GSAP, prism effects)
- `performance/` - Device detection, optimization
- `i18n/` - Internationalization (RTL, translations)
- `audio/` - Sound effects (optional)

**`public/` - Static Assets**
- `projects/` - Project images
- `fonts/` - Custom fonts (if any)
- `icons/` - SVG icons, favicons

**`scripts/` - Build and Utility Scripts**
- Embedding generation for AI chatbot
- Image optimization scripts
- etc.

### Verification
```bash
# View created structure
tree -L 3 -d

# Or use ls if tree not available
ls -R app components lib
```

---

## 🎨 Step 0.4: Configure Tailwind CSS

### File: `tailwind.config.ts`

**Replace entire file with:**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Android Theme (Material Design 3)
        android: {
          primary: '#3DDC84',      // Android Green
          secondary: '#6200EE',    // Deep Purple
          accent: '#03DAC5',       // Teal
          surface: '#121212',      // Dark background
          error: '#CF6679',        // Error red
        },
        // Web Theme (Neo-Brutalist Glassmorphism)
        web: {
          primary: '#00D9FF',      // Electric Cyan
          secondary: '#6200EE',    // Electric Purple
          accent: '#A47764',       // Mocha Mousse 2025
          surface: '#0A0A0A',      // Darker background
        },
        // Forex Theme (Financial Terminal)
        forex: {
          primary: '#FFD700',      // Gold (wealth)
          bull: '#26A69A',         // Teal (buy signals)
          bear: '#EF5350',         // Red (sell signals)
          surface: '#0D0D0D',      // Terminal black
        },
        // Data Analysis Theme (Multi-color)
        data: {
          primary: '#FF6B6B',      // Warm red
          secondary: '#4ECDC4',    // Teal
          accent: '#45B7D1',       // Sky blue
          surface: '#0F0F0F',      // Notebook dark
        },
        // Design Theme (Creative)
        design: {
          primary: '#FF1493',      // Deep Pink
          secondary: '#9370DB',    // Medium Purple
          accent: '#FFD700',       // Gold
          surface: '#0A0A0A',      // Figma dark
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-google-sans)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-out': 'scaleOut 0.4s ease-in',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        'elevation-4': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      },
    },
  },
  plugins: [],
}

export default config
```

### What This Adds
1. **Custom Colors**: All 5 domain color schemes
2. **Custom Fonts**: Font family utilities
3. **Animations**: Fade, slide, scale with keyframes
4. **Shadows**: Material Design elevation levels

### Test Configuration
Create a test file: `app/test-tailwind/page.tsx`

```typescript
export default function TestPage() {
  return (
    <div className="min-h-screen bg-android-surface p-8">
      <h1 className="text-4xl font-bold text-android-primary">
        Tailwind Test
      </h1>
      <div className="mt-4 p-6 bg-web-primary text-white rounded-lg shadow-elevation-2">
        Custom colors and shadows working!
      </div>
      <div className="mt-4 p-6 glass rounded-lg">
        This should have glass effect (add glass utility in globals.css)
      </div>
    </div>
  )
}
```

Visit `/test-tailwind` to verify colors work.

---

## 🎨 Step 0.5: Configure Global CSS

### File: `app/globals.css`

**Replace entire file with:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Default theme colors (RGB values for easy opacity manipulation) */
    --primary: 61, 220, 132;        /* Android Green */
    --secondary: 98, 0, 238;        /* Deep Purple */
    --accent: 3, 218, 197;          /* Teal */
    --surface: 18, 18, 18;          /* Dark Gray */
    --on-surface: 255, 255, 255;    /* White */
    --error: 207, 102, 121;         /* Error Red */

    /* Typography */
    --font-heading: var(--font-inter);
    --font-body: var(--font-inter);
    --font-code: var(--font-jetbrains-mono);

    /* Spacing */
    --nav-height: 64px;
  }

  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-[rgb(var(--surface))] text-[rgb(var(--on-surface))];
    font-family: var(--font-body), sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading), sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.75rem, 3vw, 2.5rem); }
  h4 { font-size: clamp(1.5rem, 2.5vw, 2rem); }
  h5 { font-size: clamp(1.25rem, 2vw, 1.5rem); }
  h6 { font-size: clamp(1.125rem, 1.5vw, 1.25rem); }

  code {
    font-family: var(--font-code), monospace;
    font-size: 0.875em;
  }

  pre {
    @apply bg-black/30 rounded-lg p-4 overflow-x-auto;
    font-family: var(--font-code), monospace;
  }
}

@layer components {
  /* Glass morphism utility */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-dark {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Gradient text utility */
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Custom button styles */
  .btn {
    @apply px-6 py-3 rounded-lg font-medium transition-all duration-200;
    @apply hover:scale-105 active:scale-95;
  }

  .btn-primary {
    @apply bg-[rgb(var(--primary))] text-[rgb(var(--surface))];
    @apply hover:shadow-elevation-2;
  }

  .btn-secondary {
    @apply bg-transparent border-2 border-[rgb(var(--primary))];
    @apply text-[rgb(var(--primary))];
    @apply hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--surface))];
  }

  /* Card styles */
  .card {
    @apply rounded-xl p-6 transition-all duration-300;
  }

  .card-elevated {
    @apply card bg-[rgb(var(--surface))];
    @apply shadow-elevation-2 hover:shadow-elevation-3;
  }

  .card-glass {
    @apply card glass;
    @apply hover:bg-white/20;
  }
}

@layer utilities {
  /* Custom gradient backgrounds */
  .gradient-android {
    background: linear-gradient(135deg, #3DDC84 0%, #03DAC5 100%);
  }

  .gradient-web {
    background: linear-gradient(135deg, #00D9FF 0%, #6200EE 100%);
  }

  .gradient-forex {
    background: linear-gradient(135deg, #FFD700 0%, #26A69A 100%);
  }

  .gradient-data {
    background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
  }

  .gradient-design {
    background: linear-gradient(135deg, #FF1493 0%, #FFD700 100%);
  }

  /* Text shadows for better readability */
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--surface), 1);
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--primary), 0.5);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--primary), 0.8);
}

/* Selection color */
::selection {
  background: rgba(var(--primary), 0.3);
  color: rgb(var(--on-surface));
}

::-moz-selection {
  background: rgba(var(--primary), 0.3);
  color: rgb(var(--on-surface));
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid rgba(var(--primary), 1);
  outline-offset: 2px;
}

/* Smooth animations for reduced motion users */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### What This Adds
1. **CSS Variables**: RGB color values for easy opacity
2. **Typography**: Responsive fluid sizing with `clamp()`
3. **Glass Effects**: Glassmorphism utilities
4. **Button Styles**: Reusable button components
5. **Card Styles**: Elevated and glass card variants
6. **Custom Scrollbar**: Themed scrollbar
7. **Accessibility**: Focus styles and reduced motion support

---

## 📝 Step 0.6: Configure TypeScript

### File: `tsconfig.json`

**Verify/update configuration:**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Key Settings Explained
- `strict: true` - Enables all strict type-checking
- `paths: { "@/*": ["./*"] }` - Allows `import X from '@/lib/...'`
- `target: "ES2022"` - Modern JavaScript features

---

## 🔐 Step 0.7: Setup Environment Variables

### File: `.env.local` (create new)

```bash
# OpenAI API (for AI Chatbot - will be added in Phase 9)
# OPENAI_API_KEY=sk-...

# Supabase (for RAG vector database - Phase 9)
# NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
# SUPABASE_SERVICE_ROLE_KEY=eyJhbG...

# Vercel Analytics (Phase 10)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=...

# Development
NODE_ENV=development
```

### Add to `.gitignore`

```bash
# Environment variables
.env*.local
.env
```

**Important**: Never commit `.env.local` to Git!

---

## 🎯 Step 0.8: Initialize Git

### Commands

```bash
# Initialize repository (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "chore: Initial Next.js 15 project setup

- TypeScript and Tailwind CSS configured
- Custom theme colors for all 5 domains
- Folder structure created
- Development environment ready"

# Create feature branch
git checkout -b feature/prism-portfolio-implementation
```

### Best Practices
- Commit after each phase completion
- Write descriptive commit messages
- Use conventional commits format:
  - `feat:` - New features
  - `fix:` - Bug fixes
  - `docs:` - Documentation
  - `chore:` - Maintenance tasks
  - `refactor:` - Code restructuring

---

## ✅ Phase 0 Checklist

Before moving to Phase 1, ensure:

- [ ] `npm run dev` works without errors
- [ ] Can access `http://localhost:3000`
- [ ] Tailwind colors working (test with `/test-tailwind`)
- [ ] All folders created (check with `ls -R`)
- [ ] TypeScript compiling (no errors in terminal)
- [ ] Git initialized with first commit
- [ ] `.env.local` created and in `.gitignore`
- [ ] VS Code (or editor) opened in project root

### Verification Test

Create `app/test/page.tsx`:

```typescript
export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-android-primary to-web-primary p-8">
      <h1 className="text-6xl font-bold text-white animate-fade-in">
        Phase 0 Complete! 🎉
      </h1>
      <div className="mt-8 p-6 glass rounded-xl">
        <p className="text-xl">All systems ready to go!</p>
      </div>
    </div>
  )
}
```

Visit `/test` - should see colorful gradient with glass effect.

---

## 🚦 Ready for Phase 1?

If all checkboxes are marked, you're ready to proceed to **Phase 1: Core Architecture**!

---

# Phase 1: Core Architecture 🏛️

## Overview
Build the foundation of the portfolio: theme system, state management, and provider components. This is the backbone that enables domain-specific transformations.

## Goals
1. ✅ Create theme type definitions and interfaces
2. ✅ Implement all 5 domain themes (Android, Web, Forex, Data, Design)
3. ✅ Set up Zustand store for theme state
4. ✅ Build ThemeProvider component
5. ✅ Create useCareerTheme hook
6. ✅ Configure root layout with fonts
7. ✅ Build careers layout with theme application

---

## 🎨 Step 1.1: Theme System Foundation

### Task 1.1.1: Create Theme Interface

**File**: `lib/themes/index.ts`

```typescript
// lib/themes/index.ts

/**
 * Domain types for portfolio sections
 */
export type Domain = 'android' | 'web' | 'forex' | 'data' | 'design' | 'default';

/**
 * Complete theme interface for domain-specific styling
 */
export interface Theme {
  /** Unique identifier for the theme */
  id: Domain;

  /** Display name */
  name: string;

  /** Color palette */
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
    onSurface: string;
    error?: string;
  };

  /** Typography settings */
  fonts: {
    heading: string;
    body: string;
    code: string;
  };

  /** Animation configuration */
  animations: {
    transition: string;  // CSS easing function
    duration: number;    // Default duration in ms
  };

  /** Visual patterns */
  patterns: {
    background: 'hexagon' | 'grid-lines' | 'particles' | 'candlesticks' | 'network' | 'bezier';
    cursorStyle: 'ripple' | 'crosshair' | 'default' | 'selector' | 'pen';
  };

  /** Layout configuration */
  layout: {
    navigation: 'header' | 'bottom-bar' | 'sticky-header' | 'ticker' | 'cells' | 'sidebar';
    cardStyle: 'elevation' | 'glassmorphism' | 'default' | 'terminal' | 'notebook' | 'component';
  };
}

/**
 * Default theme used for home page and transitions
 */
export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: '#3DDC84',
    secondary: '#6200EE',
    accent: '#03DAC5',
    surface: '#121212',
    onSurface: '#FFFFFF',
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
    code: 'var(--font-jetbrains-mono)',
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: 300,
  },
  patterns: {
    background: 'particles',
    cursorStyle: 'default',
  },
  layout: {
    navigation: 'header',
    cardStyle: 'default',
  },
};

/**
 * Convert hex color to RGB values for CSS variables
 * @param hex - Hex color string (e.g., '#3DDC84')
 * @returns RGB values as string (e.g., '61, 220, 132')
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `${r}, ${g}, ${b}`;
}
```

**Purpose**: This file defines the contract that all themes must follow. It ensures consistency across all 5 domains.

---

### Task 1.1.2: Create Android Theme

**File**: `lib/themes/android.ts`

```typescript
// lib/themes/android.ts
import { Theme } from './index';

/**
 * Android theme - Material Design 3 aesthetic
 *
 * Color Psychology:
 * - Green (#3DDC84): Android brand color, represents growth, harmony, freshness
 * - Purple (#6200EE): Modern, creative, premium feel
 * - Teal (#03DAC5): Calming, tech-forward, accessible
 *
 * Design Principles:
 * - Material Design 3 with elevation shadows
 * - Hexagon background pattern (honeycomb structure)
 * - Ripple cursor effect for Material interaction
 * - Bottom navigation bar (mobile-first)
 */
export const androidTheme: Theme = {
  id: 'android',
  name: 'Android Development',
  colors: {
    primary: '#3DDC84',      // Android Green
    secondary: '#6200EE',    // Deep Purple
    accent: '#03DAC5',       // Teal
    surface: '#121212',      // Material Dark Surface
    onSurface: '#FFFFFF',    // White text
    error: '#CF6679',        // Material Error Red
  },
  fonts: {
    heading: 'var(--font-google-sans)',  // Google Sans (if available)
    body: 'var(--font-roboto)',          // Roboto (Android system font)
    code: 'var(--font-jetbrains-mono)',  // JetBrains Mono
  },
  animations: {
    transition: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Material Design easing
    duration: 300,
  },
  patterns: {
    background: 'hexagon',     // Honeycomb pattern
    cursorStyle: 'ripple',     // Material ripple effect
  },
  layout: {
    navigation: 'bottom-bar',  // Mobile-style bottom nav
    cardStyle: 'elevation',    // Material elevation shadows
  },
};
```

---

### Task 1.1.3: Create Web Theme

**File**: `lib/themes/web.ts`

```typescript
// lib/themes/web.ts
import { Theme } from './index';

/**
 * Web theme - Neo-Brutalist Glassmorphism
 *
 * Color Psychology:
 * - Cyan (#00D9FF): Digital, modern, trustworthy (tech blue)
 * - Purple (#6200EE): Creative, innovative, premium
 * - Mocha Mousse (#A47764): 2025 Pantone, warmth, sophistication
 *
 * Design Principles:
 * - Glassmorphism with backdrop blur
 * - Neo-brutalist typography (bold, high contrast)
 * - Grid lines background (wireframe aesthetic)
 * - Crosshair cursor (developer tool vibe)
 * - Sticky header navigation
 */
export const webTheme: Theme = {
  id: 'web',
  name: 'Web Development',
  colors: {
    primary: '#00D9FF',      // Electric Cyan
    secondary: '#6200EE',    // Electric Purple
    accent: '#A47764',       // Mocha Mousse (Pantone 2025)
    surface: '#0A0A0A',      // Almost black
    onSurface: '#FFFFFF',    // Pure white
  },
  fonts: {
    heading: 'var(--font-inter)',         // Inter (web standard)
    body: 'var(--font-inter)',            // Inter
    code: 'var(--font-jetbrains-mono)',   // JetBrains Mono
  },
  animations: {
    transition: 'cubic-bezier(0.16, 1, 0.3, 1)',  // Smooth bounce
    duration: 400,
  },
  patterns: {
    background: 'grid-lines',  // Wireframe grid
    cursorStyle: 'crosshair',  // Developer crosshair
  },
  layout: {
    navigation: 'sticky-header',  // Sticky top nav
    cardStyle: 'glassmorphism',   // Glass cards
  },
};
```

---

### Task 1.1.4-6: Create Remaining Themes

**Continue creating themes for Forex, Data Analysis, and Design following the same pattern.**

See `THE_PRISM_PORTFOLIO_BLUEPRINT.md` Chapter 5 for complete specifications.

---

## 🔄 Step 1.2: State Management with Zustand

### Task 1.2.1: Create Theme Store

**File**: `lib/store/theme.ts`

```typescript
// lib/store/theme.ts
import { create } from 'zustand';
import { Theme, defaultTheme } from '@/lib/themes';

/**
 * Theme store interface
 */
interface ThemeStore {
  /** Current active theme */
  currentTheme: Theme;

  /** Whether a theme transition is in progress */
  isTransitioning: boolean;

  /** Update the current theme */
  setTheme: (theme: Theme) => void;

  /** Set transition state (for animations) */
  setIsTransitioning: (value: boolean) => void;
}

/**
 * Global theme store using Zustand
 *
 * Usage:
 * ```tsx
 * const { currentTheme, setTheme } = useThemeStore();
 * setTheme(androidTheme);
 * ```
 */
export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: defaultTheme,
  isTransitioning: false,

  setTheme: (theme) => {
    console.log(`[ThemeStore] Switching to theme: ${theme.id}`);
    set({ currentTheme: theme });
  },

  setIsTransitioning: (value) => {
    set({ isTransitioning: value });
  },
}));
```

**Why Zustand?**
- Simpler than Redux (less boilerplate)
- TypeScript-friendly
- No context provider needed (direct hook access)
- Small bundle size (~1KB)

---

## 🎨 Step 1.3: Theme Provider Component

### Task 1.3.1: Create ThemeProvider

**File**: `components/providers/ThemeProvider.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useThemeStore } from '@/lib/store/theme';
import { hexToRgb } from '@/lib/themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider - Injects CSS variables based on current theme
 *
 * This component:
 * 1. Listens to theme changes from Zustand store
 * 2. Converts hex colors to RGB for CSS variables
 * 3. Injects variables into document root
 * 4. Wraps children with AnimatePresence for transitions
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    // Get document root element
    const root = document.documentElement;

    // Convert hex colors to RGB
    const primaryRgb = hexToRgb(currentTheme.colors.primary);
    const secondaryRgb = hexToRgb(currentTheme.colors.secondary);
    const accentRgb = hexToRgb(currentTheme.colors.accent);
    const surfaceRgb = hexToRgb(currentTheme.colors.surface);
    const onSurfaceRgb = hexToRgb(currentTheme.colors.onSurface);

    // Inject CSS variables
    root.style.setProperty('--primary', primaryRgb);
    root.style.setProperty('--secondary', secondaryRgb);
    root.style.setProperty('--accent', accentRgb);
    root.style.setProperty('--surface', surfaceRgb);
    root.style.setProperty('--on-surface', onSurfaceRgb);

    // Typography variables
    root.style.setProperty('--font-heading', currentTheme.fonts.heading);
    root.style.setProperty('--font-body', currentTheme.fonts.body);
    root.style.setProperty('--font-code', currentTheme.fonts.code);

    // Animation variables
    root.style.setProperty('--transition', currentTheme.animations.transition);
    root.style.setProperty('--duration', `${currentTheme.animations.duration}ms`);

    console.log(`[ThemeProvider] Applied theme: ${currentTheme.name}`);
  }, [currentTheme]);

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
```

**How it works:**
1. Subscribes to `useThemeStore` changes
2. When theme changes, updates all CSS variables
3. Components can now use `var(--primary)` in styles
4. AnimatePresence enables page transition animations

---

**[Document continues with Steps 1.4-1.7 and all remaining phases...]**

---

# Phase 2-10 Summary

Due to length, phases 2-10 follow the same detailed structure:

- **Phase 2**: Android Domain Page (15 tasks)
- **Phase 3**: Web Domain Page (15 tasks)
- **Phase 4**: Forex Domain Page (12 tasks)
- **Phase 5**: Data Analysis Page (12 tasks)
- **Phase 6**: Design Domain Page (12 tasks)
- **Phase 7**: Home Page & Prism Transitions (16 tasks)
- **Phase 8**: Project System & Timeline (14 tasks)
- **Phase 9**: Advanced Features (AI, Cursors, Performance) (20 tasks)
- **Phase 10**: Polish, Testing, Deploy (10 tasks)

**Total Tasks**: 156 tasks across 10 phases

---

# 📚 Quick Reference

## Import Patterns

```typescript
// Themes
import { androidTheme } from '@/lib/themes/android';
import { useThemeStore } from '@/lib/store/theme';

// Components
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AdaptiveNav } from '@/components/adaptive/AdaptiveNav';

// Hooks
import { useCareerTheme } from '@/lib/hooks/useCareerTheme';

// Data
import { projects } from '@/lib/data/projects';
```

## Common Commands

```bash
# Development
npm run dev                  # Start dev server
npm run build                # Build for production
npm run start                # Start production server
npm run lint                 # Run ESLint

# Type checking
npx tsc --noEmit            # Check TypeScript errors

# Git
git status                   # Check changes
git add .                    # Stage all changes
git commit -m "message"      # Commit
git push                     # Push to remote
```

## Troubleshooting

### Server won't start
```bash
# Kill port 3000 process
npx kill-port 3000
# Then restart
npm run dev
```

### TypeScript errors
```bash
# Delete cache and reinstall
rm -rf .next node_modules
npm install
```

### Tailwind classes not working
```bash
# Restart dev server
# Check tailwind.config.ts content paths include your files
```

---

**Last Updated**: 2025-11-18
**Version**: 1.0.0
**For**: The Prism Portfolio Implementation
