'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  id: string
  message: string
  type: ToastType
  duration?: number
  onClose: (id: string) => void
}

const toastStyles = {
  success: {
    bg: 'bg-android-primary/10 border-android-primary/30',
    text: 'text-android-primary',
    icon: '✓',
  },
  error: {
    bg: 'bg-red-500/10 border-red-500/30',
    text: 'text-red-500',
    icon: '✕',
  },
  warning: {
    bg: 'bg-forex-primary/10 border-forex-primary/30',
    text: 'text-forex-primary',
    icon: '⚠',
  },
  info: {
    bg: 'bg-web-primary/10 border-web-primary/30',
    text: 'text-web-primary',
    icon: 'ℹ',
  },
}

export default function Toast({ id, message, type, duration = 5000, onClose }: ToastProps) {
  const style = toastStyles[type]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [id, duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`${style.bg} backdrop-blur-lg border rounded-lg p-4 shadow-lg min-w-[300px] max-w-md flex items-start gap-3`}
    >
      {/* Icon */}
      <div className={`text-2xl ${style.text} flex-shrink-0`}>
        {style.icon}
      </div>

      {/* Message */}
      <div className="flex-1">
        <p className={`text-sm ${style.text} font-medium`}>{message}</p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => onClose(id)}
        className={`${style.text} hover:opacity-70 transition-opacity flex-shrink-0`}
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export function ToastContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-20 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {children}
        </AnimatePresence>
      </div>
    </div>
  )
}
