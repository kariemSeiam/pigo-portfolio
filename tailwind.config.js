/** @type {import('tailwindcss').Config} */
module.exports = {
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
          primary: '#3DDC84',
          secondary: '#6200EE',
          accent: '#03DAC5',
          surface: '#121212',
          error: '#CF6679',
        },
        // Web Theme (Neo-Brutalist Glassmorphism)
        web: {
          primary: '#00D9FF',
          secondary: '#6200EE',
          accent: '#A47764', // Mocha Mousse 2025
          surface: '#0A0A0A',
        },
        // Forex Theme (Financial Terminal)
        forex: {
          primary: '#FFD700',    // Gold (wealth)
          bull: '#26A69A',       // Teal (buy signals)
          bear: '#EF5350',       // Red (sell signals)
          surface: '#0D0D0D',    // Terminal black
        },
        // Data Analysis Theme (Multi-color)
        data: {
          primary: '#FF6B6B',    // Warm red
          secondary: '#4ECDC4',  // Teal
          accent: '#45B7D1',     // Sky blue
          surface: '#0F0F0F',    // Notebook dark
        },
        // Design Theme (Creative)
        design: {
          primary: '#FF1493',    // Deep Pink
          secondary: '#9370DB',  // Medium Purple
          accent: '#FFD700',     // Gold
          surface: '#0A0A0A',    // Figma dark
        },
      },
      fontFamily: {
        'google-sans': ['Google Sans', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sf-pro': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp
        'display': 'clamp(2.5rem, 5vw, 4rem)',
        'headline': 'clamp(2rem, 4vw, 3rem)',
        'title': 'clamp(1.5rem, 3vw, 2rem)',
        'body': 'clamp(1rem, 2vw, 1.125rem)',
        'label': 'clamp(0.875rem, 1.5vw, 1rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        // Material Design elevation system
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'elevation-4': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'elevation-8': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        // Web theme glow effects
        'glow-sm': '0 0 10px rgba(0, 217, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 217, 255, 0.5)',
      },
      animation: {
        'ripple': 'ripple 0.6s linear',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

