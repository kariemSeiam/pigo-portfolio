/**
 * Device Performance Detection System
 * Detects device capabilities and provides performance tier information
 */

export type PerformanceTier = 'high' | 'medium' | 'low'

export interface DeviceInfo {
  tier: PerformanceTier
  cores: number
  memory: number
  connection: string
  reducedMotion: boolean
  touchDevice: boolean
}

/**
 * Detect device performance tier based on hardware capabilities
 */
export function detectPerformanceTier(): PerformanceTier {
  // Server-side or no API support
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'medium'
  }

  let score = 0

  // Check CPU cores
  const cores = navigator.hardwareConcurrency || 2
  if (cores >= 8) score += 3
  else if (cores >= 4) score += 2
  else score += 1

  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory || 4
  if (memory >= 8) score += 3
  else if (memory >= 4) score += 2
  else score += 1

  // Check connection speed (if available)
  const connection = (navigator as any).connection
  if (connection) {
    const effectiveType = connection.effectiveType
    if (effectiveType === '4g') score += 2
    else if (effectiveType === '3g') score += 1
  }

  // Determine tier based on score
  if (score >= 7) return 'high'
  if (score >= 4) return 'medium'
  return 'low'
}

/**
 * Get complete device information
 */
export function getDeviceInfo(): DeviceInfo {
  const tier = detectPerformanceTier()

  return {
    tier,
    cores: navigator.hardwareConcurrency || 2,
    memory: (navigator as any).deviceMemory || 4,
    connection: (navigator as any).connection?.effectiveType || 'unknown',
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    touchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  }
}

/**
 * Get feature flags based on performance tier
 */
export function getFeatureFlags(tier: PerformanceTier) {
  switch (tier) {
    case 'high':
      return {
        enableParticles: true,
        enableBackgroundAnimations: true,
        enableCursor: true,
        particleCount: 50,
        animationQuality: 'high' as const,
        enableBlur: true,
        enable3D: true,
      }
    case 'medium':
      return {
        enableParticles: true,
        enableBackgroundAnimations: true,
        enableCursor: true,
        particleCount: 30,
        animationQuality: 'medium' as const,
        enableBlur: false,
        enable3D: false,
      }
    case 'low':
      return {
        enableParticles: false,
        enableBackgroundAnimations: false,
        enableCursor: false,
        particleCount: 0,
        animationQuality: 'low' as const,
        enableBlur: false,
        enable3D: false,
      }
  }
}

/**
 * Measure FPS (Frames Per Second)
 */
export function measureFPS(callback: (fps: number) => void, duration: number = 1000) {
  let frames = 0
  let lastTime = performance.now()

  function tick() {
    frames++
    const currentTime = performance.now()

    if (currentTime >= lastTime + duration) {
      const fps = Math.round((frames * 1000) / (currentTime - lastTime))
      callback(fps)
      frames = 0
      lastTime = currentTime
    }

    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

/**
 * Check if device prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Check if device is touch-enabled
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
