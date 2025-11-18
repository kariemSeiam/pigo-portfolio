'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/cards/ProjectCard'
import { getProjectsByDomain } from '@/lib/data/projects'

const androidSkills = [
  'Kotlin', 'Jetpack Compose', 'Material Design 3', 'MVVM', 'Coroutines', 
  'Room Database', 'Retrofit', 'Hilt/Dagger', 'Navigation Component', 'LiveData'
]

export default function AndroidPage() {
  const projects = getProjectsByDomain('android')

  return (
    <main className="min-h-screen pt-20 pb-24 lg:pb-20">
      {/* Hero Section */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-android-primary/10 border border-android-primary/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-android-primary animate-pulse" />
            <span className="text-sm text-android-primary font-medium">Android Development</span>
          </div>
          
          <h1 className="text-display font-bold text-gradient-android mb-6">
            Native Android Excellence
          </h1>
          
          <p className="text-title text-gray-400 max-w-3xl leading-relaxed">
            Crafting high-performance, beautiful Android applications using modern Kotlin, 
            Jetpack Compose, and Material Design 3 principles. Every pixel matters, every 
            interaction delights.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-headline font-bold mb-8">Tech Stack</h2>
          
          <div className="flex flex-wrap gap-3">
            {androidSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(61, 220, 132, 0.2)'
                }}
                className="px-4 py-2 bg-gray-900 border border-android-primary/30 rounded-lg text-sm font-medium text-android-primary hover:bg-android-primary/10 transition-colors cursor-pointer shadow-elevation-1 hover:shadow-elevation-4"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-headline font-bold mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  domain="android"
                  slug={project.slug}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}
            
            {projects.length === 0 && (
              <div className="col-span-full">
                <div className="card-android text-center py-12">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-title font-bold text-gray-400 mb-2">
                    Projects Coming Soon
                  </h3>
                  <p className="text-body text-gray-500">
                    Exciting Android projects are in development
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-headline font-bold mb-8">Development Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Material First',
                description: 'Embracing Material Design 3 for intuitive, beautiful interfaces'
              },
              {
                icon: '⚡',
                title: 'Performance',
                description: 'Optimized code with efficient memory management and smooth 60fps animations'
              },
              {
                icon: '🔧',
                title: 'Maintainable',
                description: 'Clean architecture with MVVM pattern and comprehensive testing'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="card-android"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-title font-bold mb-2 text-android-primary">{item.title}</h3>
                <p className="text-body text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Material Design FAB (Floating Action Button) */}
      <motion.a
        href="mailto:contact@example.com"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 w-14 h-14 bg-android-primary rounded-full shadow-elevation-8 flex items-center justify-center text-gray-950 hover:shadow-elevation-8 transition-shadow z-40"
        aria-label="Contact"
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
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.a>
    </main>
  )
}

