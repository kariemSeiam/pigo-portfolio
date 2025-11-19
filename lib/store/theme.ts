/**
 * Theme State Management Store (Zustand)
 * 
 * Global state for managing the current active theme and transitions.
 * Features:
 * - Redux DevTools integration
 * - LocalStorage persistence
 * - Automatic transition state management
 * 
 * @see CLAUDE.md - Section 7.1 for complete documentation
 */

import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { Theme, defaultTheme } from '@/lib/themes'

/**
 * Theme store interface
 */
interface ThemeStore {
  /** Current active theme */
  currentTheme: Theme

  /** Previous theme (for transitions) */
  previousTheme: Theme | null

  /** Whether a theme transition is in progress */
  isTransitioning: boolean

  /** Transition progress (0-1) for custom animations */
  transitionProgress: number

  /** Update the current theme */
  setTheme: (theme: Theme) => void

  /** Set transition state */
  setIsTransitioning: (value: boolean) => void

  /** Update transition progress */
  setTransitionProgress: (progress: number) => void

  /** Reset to default theme */
  resetTheme: () => void
}

/**
 * Global theme store
 * 
 * Features:
 * - Redux DevTools integration (development only)
 * - LocalStorage persistence (remembers last theme on refresh)
 * - Selector subscriptions (efficient re-renders)
 * 
 * Usage:
 * ```tsx
 * const { currentTheme, setTheme } = useThemeStore()
 * 
 * // Or with selector for better performance
 * const primary = useThemeStore(state => state.currentTheme.colors.primary)
 * ```
 */
export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      subscribeWithSelector((set, get) => ({
        currentTheme: defaultTheme,
        previousTheme: null,
        isTransitioning: false,
        transitionProgress: 0,

        setTheme: (theme) => {
          const current = get().currentTheme
          
          // Don't trigger transition if same theme
          if (current.id === theme.id) return

          console.log(`[ThemeStore] Transitioning from ${current.id} to ${theme.id}`)
          
          set({
            previousTheme: current,
            currentTheme: theme,
            isTransitioning: true,
            transitionProgress: 0,
          })

          // Auto-reset transition state after 1 second
          setTimeout(() => {
            set({ isTransitioning: false, transitionProgress: 1 })
          }, 1000)
        },

        setIsTransitioning: (value) => set({ isTransitioning: value }),

        setTransitionProgress: (progress) => set({ transitionProgress: progress }),

        resetTheme: () => {
          set({
            currentTheme: defaultTheme,
            previousTheme: null,
            isTransitioning: false,
            transitionProgress: 0,
          })
        },
      })),
      {
        name: 'prism-theme-storage',  // LocalStorage key
        partialize: (state) => ({ currentTheme: state.currentTheme }),  // Only persist currentTheme
      }
    ),
    { name: 'ThemeStore' }  // DevTools name
  )
)

// Subscribe to theme changes for analytics (if in browser)
if (typeof window !== 'undefined') {
  useThemeStore.subscribe(
    (state) => state.currentTheme,
    (theme) => {
      console.log(`[Analytics] Theme changed to: ${theme.id}`)
      // Track theme change in analytics
      // window.gtag?.('event', 'theme_change', { theme: theme.id })
    }
  )
}
