# Getting Started with Your Adaptive Portfolio

## Quick Start (3 Steps)

### 1. Install Dependencies

```powershell
npm install
```

This will install:
- Next.js 14 with App Router
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Zustand

### 2. Run Development Server

```powershell
npm run dev
```

The portfolio will be available at: http://localhost:3000

### 3. Start Customizing!

## What You'll See

### Home Page (`/`)
- Morphing text animation cycling through your skills
- Two domain cards (Android & Web)
- Quick stats section
- Animated particle background

### Android Page (`/android`)
- Material Design 3 styling
- Hexagon grid background
- Bottom navigation bar (mobile)
- Floating Action Button (FAB)
- Material elevation shadows and ripple effects

### Web Page (`/web`)
- Glassmorphism effects
- Animated CSS grid background
- Parallax hero section
- SaaS features showcase
- Smooth scroll animations

## First Steps to Customize

### 1. Add Your Projects

Edit `lib/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    slug: 'my-android-app',
    title: 'My Amazing Android App',
    domain: 'android',
    description: 'Short pitch for the project',
    longDescription: 'Full detailed description...',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM'],
    githubLink: 'https://github.com/yourusername/project',
    liveLink: 'https://play.google.com/store/...',
    images: ['/projects/image.jpg'],
    impactMetrics: [
      { label: 'Performance', value: '+40%' },
      { label: 'Users', value: '10K+' }
    ],
    lessonsLearned: [
      'Key insight #1',
      'Key insight #2'
    ],
    featured: true
  },
  // Add more projects...
]
```

### 2. Update Personal Information

**Home Page** (`app/page.tsx`):
- Change morphing text messages (line 10-15)
- Update stats (line 117-122)
- Modify domain descriptions

**Domain Pages**:
- Android: `app/(careers)/android/page.tsx`
- Web: `app/(careers)/web/page.tsx`

### 3. Customize Colors

**Android Colors** (`tailwind.config.js`):
```javascript
android: {
  primary: '#3DDC84',    // Your brand color
  secondary: '#6200EE',
  accent: '#03DAC5',
}
```

**Web Colors** (`tailwind.config.js`):
```javascript
web: {
  primary: '#00D9FF',    // Your brand color
  secondary: '#9333EA',
  accent: '#A855F7',
}
```

### 4. Update Skills

**Android Skills** (`app/(careers)/android/page.tsx` line 7-10):
```typescript
const androidSkills = [
  'Kotlin', 'Jetpack Compose', 'Material Design 3',
  // Add your skills...
]
```

**Web Skills** (`app/(careers)/web/page.tsx` line 8-11):
```typescript
const webSkills = [
  'React', 'Next.js', 'TypeScript',
  // Add your skills...
]
```

### 5. Add Contact Information

Update the email in:
- Android FAB: `app/(careers)/android/page.tsx` line 159
- Add contact section in any page

## Theme System

The portfolio automatically switches themes based on the current page:

- **Home** (`/`): Neutral with particle network background
- **Android** (`/android`): Material Design with hexagon grid
- **Web** (`/web`): Glassmorphism with animated grid lines
- **Projects** (`/projects/[slug]`): Inherits theme from project domain

## Responsive Breakpoints

- **Mobile**: 320px - 640px (bottom nav for Android)
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Large**: 1441px+

## Custom Cursor

Desktop users will see:
- **Android pages**: Circular ripple cursor with click effects
- **Web pages**: Crosshair cursor showing HTML element tags
- **Touch devices**: Standard cursor (automatically detected)

## Background Patterns

Three animated canvas-based backgrounds:
- **Hexagon Grid**: Android theme (static)
- **Moving Grid Lines**: Web theme (animated)
- **Particle Network**: Home page (interactive)

## Build for Production

```powershell
npm run build
npm start
```

## Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build output is in `.next` folder, compatible with any Node.js hosting.

## Troubleshooting

### Styles not loading?
```powershell
npm run dev
```
Restart the dev server.

### Custom cursor not showing?
Check that you're on desktop (not touch device) and viewing a themed page (`/android` or `/web`).

### Animations laggy?
- Check browser DevTools performance
- Verify GPU acceleration is enabled
- Animations use `transform` and `opacity` for 60fps

## Next Steps

1. **Add your photo/avatar** to home page
2. **Create project images** in `public/projects/`
3. **Write project descriptions** with impact metrics
4. **Add testimonials** (optional)
5. **Set up analytics** (Plausible, Google Analytics)
6. **Add contact form** backend
7. **Create blog section** (optional)

## Support

Refer to:
- README.md for full documentation
- Next.js 14 docs: https://nextjs.org/docs
- Framer Motion docs: https://www.framer.com/motion/
- TailwindCSS docs: https://tailwindcss.com/docs

---

**Ready to make it yours!** Start by adding your projects and personalizing the content. The theme system and animations are already masterpiece-level. 🚀

