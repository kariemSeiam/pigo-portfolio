/**
 * Android Development Domain Page
 * Material Design 3 Theme
 * 
 * @see CLAUDE.md - Section 11 for complete documentation
 */

'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideUp } from '@/lib/animations/framer-variants'

export default function AndroidPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1.1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <span className="text-6xl">🤖</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
            Android
            <br />
            <span className="text-gradient gradient-android">Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Building native Android applications with Kotlin, Jetpack Compose,
            and Material Design 3 principles. Crafting smooth, performant mobile experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              className="px-8 py-4 text-lg bg-android-primary text-black rounded-xl font-bold hover:shadow-elevation-2 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="px-8 py-4 text-lg border-2 border-android-primary text-android-primary rounded-xl font-bold hover:bg-android-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.section>
      </div>
    </motion.main>
  )
}
