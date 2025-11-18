'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '@/components/cards/ProjectCard'
import { getProjectsByDomain } from '@/lib/data/projects'

const webSkills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Flask', 'PostgreSQL',
  'Tailwind CSS', 'Framer Motion', 'REST APIs', 'GraphQL', 'Docker', 'Vercel'
]

const saasFeatures = [
  {
    icon: '🚀',
    title: 'Performance First',
    description: 'Lightning-fast load times with optimized bundles and lazy loading'
  },
  {
    icon: '🎨',
    title: 'Modern UI/UX',
    description: 'Beautiful, intuitive interfaces with glassmorphism and smooth animations'
  },
  {
    icon: '🔒',
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with horizontal scaling capabilities'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Pixel-perfect design across all devices and screen sizes'
  }
]

export default function WebPage() {
  const projects = getProjectsByDomain('web')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div ref={containerRef} className="relative">
      <main className="min-h-screen pt-20 pb-24 lg:pt-24">
        {/* Hero Section with Parallax */}
        <motion.section 
          style={{ opacity, scale }}
          className="container-responsive mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-web-primary/10 border border-web-primary/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-web-primary animate-pulse" />
              <span className="text-sm text-web-primary font-medium">Web Development & SaaS</span>
            </div>
            
            <h1 className="text-display font-bold text-gradient-web mb-6 leading-tight">
              Building the Modern Web
            </h1>
            
            <p className="text-title text-gray-400 max-w-3xl leading-relaxed">
              Full-stack web applications and SaaS products that blend cutting-edge technology 
              with exceptional user experience. From concept to deployment, creating digital 
              solutions that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-web px-8 py-3 rounded-lg font-medium"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-medium border border-white/20 hover:border-web-primary/50 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        {/* SaaS Features Grid */}
        <section className="container-responsive mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-12 text-center">
              <span className="text-gradient-web">SaaS Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saasFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="card-web group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-web-primary group-hover:text-web-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="container-responsive mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-8">Technology Stack</h2>
            
            <div className="flex flex-wrap gap-3">
              {webSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
                  }}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur-lg border border-web-primary/30 rounded-lg text-sm font-medium text-web-primary hover:bg-web-primary/10 transition-all cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container-responsive mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-8">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    domain="web"
                    slug={project.slug}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                  />
                </motion.div>
              ))}
              
              {projects.length === 0 && (
                <div className="col-span-full">
                  <div className="card-web text-center py-12">
                    <div className="text-6xl mb-4">🌐</div>
                    <h3 className="text-title font-bold text-gray-400 mb-2">
                      Projects Coming Soon
                    </h3>
                    <p className="text-body text-gray-500">
                      Exciting web projects are in development
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Development Process */}
        <section className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-12 text-center">
              Development Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding requirements and goals' },
                { step: '02', title: 'Design', desc: 'Creating beautiful, functional interfaces' },
                { step: '03', title: 'Develop', desc: 'Building with modern technologies' },
                { step: '04', title: 'Deploy', desc: 'Launching and monitoring performance' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="card-web h-full">
                    <div className="text-5xl font-bold text-web-primary/20 mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-web-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-web-primary to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

