/**
 * AdaptiveNav - Theme-aware navigation component
 * Enhanced to support all 5 domain themes
 * 
 * @see CLAUDE.md - Section 8.3
 */

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
    { href: '/forex', label: 'Forex' },
    { href: '/data', label: 'Data' },
    { href: '/design', label: 'Design' },
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

  const navStyle = currentTheme.layout.navigation
  const themeId = currentTheme.id

  // Android or bottom-bar: Bottom navigation
  if (navStyle === 'bottom-bar' || themeId === 'android') {
    return (
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(var(--surface))] border-t border-white/10 backdrop-blur-lg"
      >
        <div className="flex items-center justify-around h-14 max-w-7xl mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 h-full relative"
              >
                <span className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-[rgb(var(--primary))]' : 'text-gray-400 hover:text-white'
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[rgb(var(--primary))]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </motion.nav>
    )
  }

  // Forex or ticker: Ticker bar
  if (navStyle === 'ticker' || themeId === 'forex') {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-[rgb(var(--primary))]/30 backdrop-blur-lg font-mono"
      >
        <div className="px-6 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-6 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm whitespace-nowrap transition-colors ${
                    isActive ? 'text-[rgb(var(--primary))]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label.toUpperCase()}
                  {isActive && <span className="ml-2">●</span>}
                </Link>
              )
            })}
          </div>
        </div>
      </motion.nav>
    )
  }

  // Data or cells: Cell navigation
  if (navStyle === 'cells' || themeId === 'data') {
    return (
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed top-6 left-6 z-50 bg-[#2d2d2d] border border-gray-700 rounded-lg p-2 backdrop-blur-lg"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded font-mono text-sm transition-colors ${
                  isActive ? 'bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary))]' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-xs text-gray-600">[{index}]:</span>
                {item.label}
              </Link>
            )
          })}
        </div>
      </motion.nav>
    )
  }

  // Design or sidebar: Sidebar navigation
  if (navStyle === 'sidebar' || themeId === 'design') {
    return (
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 bottom-0 w-20 z-50 bg-[#1E1E1E] border-r border-gray-800"
      >
        <div className="flex flex-col h-full py-6">
          <Link href="/" className="px-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--accent))] flex items-center justify-center text-black font-bold text-xl">
              P
            </div>
          </Link>
          <div className="flex-1 flex flex-col gap-2 px-3">
            {navItems.slice(1).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex flex-col items-center gap-1 p-3 rounded-lg transition-all ${
                    isActive ? 'bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  title={item.label}
                >
                  <span className="text-xs">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[rgb(var(--primary))] rounded-r"
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </motion.nav>
    )
  }

  // Web or sticky-header: Sticky header (default)
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
                PRISM
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? 'text-[rgb(var(--primary))]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="header-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--primary))]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="container-responsive py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === item.href ? 'text-[rgb(var(--primary))]' : 'text-gray-400 hover:text-white'
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
