/**
 * Web Development Domain Page
 * Neo-Brutalist Glassmorphism Theme
 * 
 * @see CLAUDE.md - Section 12 for complete documentation
 */

'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations/framer-variants'

export default function WebPage() {
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
          <span className="text-6xl">💻</span>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none mt-4">
            Web
            <br />
            <span className="text-gradient gradient-web">Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Crafting blazing-fast, pixel-perfect web experiences with modern
            frameworks and cutting-edge technologies. Full-stack development with Next.js.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              className="px-8 py-4 text-lg bg-web-primary text-black rounded-xl font-bold hover:shadow-elevation-2 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="px-8 py-4 text-lg border-2 border-web-primary text-web-primary rounded-xl font-bold hover:bg-web-primary/10"
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
