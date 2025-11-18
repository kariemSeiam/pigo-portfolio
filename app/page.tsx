'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import DomainCard from '@/components/cards/DomainCard'
import BackgroundPattern from '@/components/adaptive/BackgroundPattern'
import AdaptiveCursor from '@/components/adaptive/AdaptiveCursor'

const morphingTexts = [
  { prefix: 'I build', highlight: 'Android Apps', color: 'text-android-primary' },
  { prefix: 'I create', highlight: 'Web Experiences', color: 'text-web-primary' },
  { prefix: 'I trade', highlight: 'Forex Markets', color: 'text-forex-primary' },
  { prefix: 'I analyze', highlight: 'Data & ML', color: 'text-data-primary' },
  { prefix: 'I design', highlight: 'UI/UX', color: 'text-design-primary' },
]

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % morphingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentText = morphingTexts[currentTextIndex]

  return (
    <>
      <AdaptiveCursor />
      <BackgroundPattern pattern="particles" />
      
      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Morphing Text */}
        <section className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-display font-bold mb-6">
              <span className="text-white">Welcome to My </span>
              <span className="text-gradient-android">Portfolio</span>
            </h1>
            
            {/* Morphing Text Animation */}
            <div className="h-20 sm:h-24 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5 }}
                  className="text-headline sm:text-display font-bold"
                >
                  <span className="text-gray-400">{currentText.prefix} → </span>
                  <span className={currentText.color}>{currentText.highlight}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-body text-gray-400 max-w-2xl mx-auto mt-6"
            >
              A multifaceted professional crafting experiences across 5 domains: Android, Web,
              Forex Trading, Data Analysis, and UI/UX Design. Each refraction reveals a different expertise.
            </motion.p>
          </motion.div>
        </section>

        {/* Domain Cards - The Prism */}
        <section className="w-full max-w-7xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gradient-android"
          >
            Explore Through the Prism
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <DomainCard
                title="Android Development"
                description="Native Android apps with Kotlin, Jetpack Compose, and Material Design 3"
                domain="android"
                icon="📱"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <DomainCard
                title="Web Development"
                description="Full-stack web applications with React, Next.js, and TypeScript"
                domain="web"
                icon="🌐"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <DomainCard
                title="Forex Trading"
                description="Systematic trading strategies with technical analysis and risk management"
                domain="forex"
                icon="💹"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <DomainCard
                title="Data Analysis"
                description="Machine learning models and statistical analysis with Python and TensorFlow"
                domain="data"
                icon="📊"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <DomainCard
                title="UI/UX Design"
                description="User-centered design with Figma, prototyping, and design systems"
                domain="design"
                icon="🎨"
              />
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
            {[
              { label: 'Domains', value: '5', gradient: 'text-gradient-android' },
              { label: 'Projects', value: '50+', gradient: 'text-gradient-web' },
              { label: 'Technologies', value: '30+', gradient: 'text-gradient-forex' },
              { label: 'Experience', value: '5+ Years', gradient: 'text-gradient-data' },
              { label: 'Coffee', value: '∞', gradient: 'text-gradient-design' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 text-center hover:border-white/20 transition-all cursor-pointer"
              >
                <div className={`text-2xl sm:text-3xl font-bold ${stat.gradient} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Explore Domains</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
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
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  )
}

