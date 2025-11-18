'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/lib/store/theme'

export default function AdaptiveNav() {
  const pathname = usePathname()
  const { currentTheme } = useThemeStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/android', label: 'Android' },
    { href: '/web', label: 'Web' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const isAndroidTheme = currentTheme.id === 'android'
  const isWebTheme = currentTheme.id === 'web'

  // Android: Bottom navigation bar
  if (isAndroidTheme) {
    return (
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 lg:hidden"
        style={{ minHeight: '56px' }}
      >
        <div className="flex items-center justify-around h-14">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full relative overflow-hidden transition-colors ${
                pathname === item.href
                  ? 'text-android-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xs font-medium">{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  layoutId="android-nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-android-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    )
  }

  // Web: Sticky header navigation
  if (isWebTheme) {
    return (
      <>
        {/* Desktop Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container-responsive">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-xl font-bold text-gradient-web hover:opacity-80 transition-opacity"
              >
                Portfolio
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-web-primary'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="web-nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-web-primary to-web-accent"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
            >
              <div className="container-responsive py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-web-primary'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Default navigation
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

