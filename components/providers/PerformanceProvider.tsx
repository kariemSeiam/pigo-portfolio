'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  PerformanceTier,
  DeviceInfo,
  getDeviceInfo,
  getFeatureFlags,
  prefersReducedMotion,
} from '@/lib/utils/performance'

interface PerformanceContextType {
  deviceInfo: DeviceInfo
  featureFlags: ReturnType<typeof getFeatureFlags>
  fps: number
  isHighPerformance: boolean
  isMediumPerformance: boolean
  isLowPerformance: boolean
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined)

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    tier: 'medium',
    cores: 4,
    memory: 4,
    connection: 'unknown',
    reducedMotion: false,
    touchDevice: false,
  })

  const [fps, setFps] = useState(60)

  useEffect(() => {
    // Detect device info on mount
    const info = getDeviceInfo()
    setDeviceInfo(info)

    // Measure FPS for 2 seconds to get initial reading
    let frameCount = 0
    let lastTime = performance.now()
    let rafId: number

    function measureFrame() {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setFps(currentFps)
        frameCount = 0
        lastTime = currentTime
      }

      rafId = requestAnimationFrame(measureFrame)
    }

    rafId = requestAnimationFrame(measureFrame)

    // Stop measuring after 5 seconds
    const timeout = setTimeout(() => {
      cancelAnimationFrame(rafId)
    }, 5000)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const featureFlags = getFeatureFlags(deviceInfo.tier)

  // Override flags if user prefers reduced motion
  if (prefersReducedMotion()) {
    featureFlags.enableParticles = false
    featureFlags.enableBackgroundAnimations = false
    featureFlags.animationQuality = 'low'
  }

  const value: PerformanceContextType = {
    deviceInfo,
    featureFlags,
    fps,
    isHighPerformance: deviceInfo.tier === 'high',
    isMediumPerformance: deviceInfo.tier === 'medium',
    isLowPerformance: deviceInfo.tier === 'low',
  }

  return <PerformanceContext.Provider value={value}>{children}</PerformanceContext.Provider>
}

export function usePerformance() {
  const context = useContext(PerformanceContext)
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider')
  }
  return context
}
