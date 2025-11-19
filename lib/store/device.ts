/**
 * Device State Management Store (Zustand)
 * 
 * Global state for device capabilities and performance tier.
 * Features:
 * - Device tier detection (high/medium/low)
 * - Touch detection
 * - Viewport tracking
 * - Prefers reduced motion detection
 * 
 * @see CLAUDE.md - Section 7.2 for complete documentation
 */

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

/**
 * Device performance tier
 * Based on navigator.hardwareConcurrency and device testing
 */
export type DeviceTier = 'high' | 'medium' | 'low'

interface DeviceStore {
  /** Performance tier of user's device */
  tier: DeviceTier

  /** Whether device supports touch */
  hasTouch: boolean

  /** Whether user prefers reduced motion */
  prefersReducedMotion: boolean

  /** Current viewport width */
  viewportWidth: number

  /** Current viewport height */
  viewportHeight: number

  /** Whether device is in portrait orientation */
  isPortrait: boolean

  /** Update device tier */
  setTier: (tier: DeviceTier) => void

  /** Update viewport dimensions */
  setViewport: (width: number, height: number) => void
}

/**
 * Device detection and optimization store
 */
export const useDeviceStore = create<DeviceStore>()(
  devtools(
    (set) => ({
      tier: 'high',  // Default to high, will be detected on mount
      hasTouch: false,
      prefersReducedMotion: false,
      viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1920,
      viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 1080,
      isPortrait: typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : false,

      setTier: (tier) => set({ tier }),

      setViewport: (width, height) => set({
        viewportWidth: width,
        viewportHeight: height,
        isPortrait: height > width,
      }),
    }),
    { name: 'DeviceStore' }
  )
)

