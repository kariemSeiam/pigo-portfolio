/**
 * Android Development Domain Page
 * Material Design 3 Theme
 * 
 * @see CLAUDE.md - Section 11 for complete documentation
 */

'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideUp, staggerContainer, staggerItem } from '@/lib/animations/framer-variants'
import { SkillCard, SkillsGrid } from '@/components/cards/SkillCard'

export default function AndroidPage() {
  const skills = [
    {
      name: 'Kotlin',
      level: 95,
      icon: '🔷',
      category: 'Language',
      tools: ['Coroutines', 'Flow', 'Ktor']
    },
    {
      name: 'Jetpack Compose',
      level: 90,
      icon: '🎨',
      category: 'UI Framework',
      tools: ['Material 3', 'Navigation', 'ViewModel']
    },
    {
      name: 'Android SDK',
      level: 92,
      icon: '🤖',
      category: 'Framework',
      tools: ['Activities', 'Services', 'BroadcastReceivers']
    },
    {
      name: 'Room Database',
      level: 88,
      icon: '💾',
      category: 'Data Persistence',
      tools: ['SQLite', 'Migrations', 'DAO']
    },
    {
      name: 'Retrofit',
      level: 90,
      icon: '🌐',
      category: 'Networking',
      tools: ['OkHttp', 'Moshi', 'RxJava']
    },
    {
      name: 'Dependency Injection',
      level: 85,
      icon: '💉',
      category: 'Architecture',
      tools: ['Hilt', 'Dagger', 'Koin']
    },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
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

        {/* Skills Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Technical Skills
          </motion.h2>

          <SkillsGrid>
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </SkillsGrid>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="aspect-video bg-gradient-to-br from-android-primary/20 to-android-accent/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">E-Commerce App</h3>
              <p className="text-gray-400 mb-4">
                Full-featured shopping app with Jetpack Compose, Material Design 3, and MVVM architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  Kotlin
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  Compose
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  MVVM
                </span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="aspect-video bg-gradient-to-br from-android-primary/20 to-android-accent/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Music Player</h3>
              <p className="text-gray-400 mb-4">
                Modern music player with custom animations, media controls, and playlist management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  ExoPlayer
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  Room
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-android-primary/10 text-android-primary border border-android-primary/20">
                  Hilt
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </motion.main>
  )
}
