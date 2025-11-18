import { create } from 'zustand'
import { Theme, defaultTheme } from '@/lib/themes'

interface ThemeStore {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  isTransitioning: boolean
  setIsTransitioning: (value: boolean) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: defaultTheme,
  setTheme: (theme) => set({ currentTheme: theme }),
  isTransitioning: false,
  setIsTransitioning: (value) => set({ isTransitioning: value }),
}))

