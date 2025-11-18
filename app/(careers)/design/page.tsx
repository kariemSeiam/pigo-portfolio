'use client'

import { motion } from 'framer-motion'
import { getProjectsByDomain } from '@/lib/data/projects'
import ProjectCard from '@/components/cards/ProjectCard'

const designSkills = [
  'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Prototyping',
  'Design Systems', 'Typography', 'Color Theory', 'Interaction Design',
  'User Research', 'Wireframing', 'Responsive Design'
]

export default function DesignPage() {
  const projects = getProjectsByDomain('design')

  return (
    <main className="min-h-screen pt-20 pb-24 lg:pb-20">
      {/* Figma-style Header */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          {/* Figma toolbar-style breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>🎨</span>
            <span>/</span>
            <span className="text-design-primary">Portfolio</span>
            <span>/</span>
            <span>UI/UX Design</span>
          </div>

          <h1 className="text-display font-bold text-gradient-design mb-6">
            UI/UX Design
          </h1>

          <p className="text-body text-gray-400 max-w-3xl leading-relaxed mb-8">
            Crafting delightful user experiences through thoughtful design, pixel-perfect
            interfaces, and user-centered thinking. Every design tells a story.
          </p>

          {/* Design metrics */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: '🎯', label: 'Projects', value: '50+' },
              { icon: '✨', label: 'Prototypes', value: '120+' },
              { icon: '🎨', label: 'Design Systems', value: '8' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4, type: 'spring' }}
                className="flex items-center gap-3"
              >
                <span className="text-3xl">{metric.icon}</span>
                <div>
                  <div className="text-2xl font-bold text-design-primary">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills - Figma layers style */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-design-primary rounded-full" />
            <h2 className="text-headline font-bold">Design Skills</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-design-primary to-design-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg backdrop-blur-sm hover:border-design-primary/50 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-design-accent" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-design-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects - Cards with design flair */}
      <section className="container-responsive mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-design-secondary rounded-full" />
            <h2 className="text-headline font-bold">Featured Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.7 + index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  domain="design"
                  slug={project.slug}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}

            {projects.length === 0 && (
              <div className="col-span-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-design-primary/20 via-design-secondary/20 to-design-accent/20" />

                  {/* Glass card */}
                  <div className="relative glass-dark p-12 text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <h3 className="text-2xl font-bold text-gradient-design mb-3">
                      Design Cases Coming Soon
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Curating the best design work and case studies to showcase
                      the creative process from concept to final product
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Design Philosophy */}
      <section className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-design-accent rounded-full" />
            <h2 className="text-headline font-bold">Design Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'User-Centered',
                description: 'Every design decision is rooted in user research, testing, and empathy',
                icon: '👤',
                gradient: 'from-design-primary to-design-secondary'
              },
              {
                title: 'Attention to Detail',
                description: 'Pixel-perfect execution with thoughtful micro-interactions and animations',
                icon: '✨',
                gradient: 'from-design-secondary to-design-accent'
              },
              {
                title: 'Systematic Thinking',
                description: 'Scalable design systems that maintain consistency across all touchpoints',
                icon: '🔧',
                gradient: 'from-design-accent to-design-primary'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur`} />

                {/* Card content */}
                <div className="relative bg-gray-900 p-8 rounded-xl border border-white/10 group-hover:border-transparent transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-design-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
