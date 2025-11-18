'use client'

import { useEffect, useState, useRef } from 'react'
import { useThemeStore } from '@/lib/store/theme'

export default function AdaptiveCursor() {
  const { currentTheme } = useThemeStore()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [hoveredElement, setHoveredElement] = useState<string>('')
  const cursorRef = useRef<HTMLDivElement>(null)
  const ripples = useRef<Array<{ id: number; x: number; y: number }>>([])
  const [activeRipples, setActiveRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    // Check if touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    let animationFrameId: number

    const updateCursorPosition = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      
      // Add ripple for Android theme
      if (currentTheme.id === 'android') {
        const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
        setActiveRipples((prev) => [...prev, newRipple])
        
        setTimeout(() => {
          setActiveRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
        }, 600)
      }
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // For Web theme, show element tag name
      if (currentTheme.id === 'web' && target.tagName) {
        setHoveredElement(target.tagName.toLowerCase())
      }
    }

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)

    // Hide default cursor
    document.body.classList.remove('cursor-default')

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
      document.body.classList.add('cursor-default')
    }
  }, [isTouchDevice, currentTheme.id])

  if (isTouchDevice) {
    return null
  }

  const isAndroid = currentTheme.id === 'android'
  const isWeb = currentTheme.id === 'web'

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Android: Ripple cursor */}
        {isAndroid && (
          <div
            className={`w-6 h-6 rounded-full border-2 border-android-primary bg-android-primary/20 ${
              isClicking ? 'scale-150' : ''
            } transition-transform duration-150`}
          />
        )}

        {/* Web: Crosshair cursor with tag name */}
        {isWeb && (
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-web-primary"
            >
              <line x1="12" y1="0" x2="12" y2="8" stroke="currentColor" strokeWidth="1" />
              <line x1="12" y1="16" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1" />
              <line x1="16" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
            {hoveredElement && (
              <div className="absolute top-6 left-6 px-2 py-1 bg-web-primary/90 text-gray-900 text-xs font-mono rounded whitespace-nowrap">
                &lt;{hoveredElement}&gt;
              </div>
            )}
          </div>
        )}

        {/* Default cursor */}
        {!isAndroid && !isWeb && (
          <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>

      {/* Android ripple effects */}
      {isAndroid &&
        activeRipples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              position: 'fixed',
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 9998,
            }}
          />
        ))}
    </>
  )
}

