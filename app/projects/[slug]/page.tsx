'use client'

import { motion } from 'framer-motion'
import { getProjectBySlug } from '@/lib/data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useThemeStore } from '@/lib/store/theme'
import { androidTheme, webTheme } from '@/lib/themes'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const { setTheme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (project) {
      // Apply theme based on project domain
      setTheme(project.domain === 'android' ? androidTheme : webTheme)
    }
  }, [project, setTheme])

  if (!project) {
    notFound()
  }

  if (!mounted) {
    return null
  }

  const isDomain = (d: string) => project.domain === d

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container-responsive">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href={`/${project.domain}`}
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              isDomain('android') ? 'text-android-primary' : 'text-web-primary'
            } hover:opacity-80 transition-opacity`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {project.domain === 'android' ? 'Android' : 'Web'} Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
            isDomain('android') 
              ? 'bg-android-primary/10 border border-android-primary/20' 
              : 'bg-web-primary/10 border border-web-primary/20'
          }`}>
            <span className={`text-sm font-medium ${
              isDomain('android') ? 'text-android-primary' : 'text-web-primary'
            }`}>
              {project.domain === 'android' ? 'Android Project' : 'Web Project'}
            </span>
          </div>

          <h1 className={`text-display font-bold mb-6 ${
            isDomain('android') ? 'text-gradient-android' : 'text-gradient-web'
          }`}>
            {project.title}
          </h1>

          <p className="text-title text-gray-400 max-w-3xl leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                  isDomain('android') ? 'btn-android' : 'btn-web'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </motion.a>
            )}

            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-headline font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  isDomain('android')
                    ? 'bg-android-primary/10 text-android-primary border border-android-primary/20'
                    : 'bg-web-primary/10 text-web-primary border border-web-primary/20'
                }`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Metrics */}
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-headline font-bold mb-6">Impact & Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={isDomain('android') ? 'card-android' : 'card-web'}
                >
                  <div className={`text-3xl font-bold mb-2 ${
                    isDomain('android') ? 'text-gradient-android' : 'text-gradient-web'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Lessons Learned */}
        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-6">Key Takeaways</h2>
            <div className="space-y-4">
              {project.lessonsLearned.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex gap-4 p-4 rounded-lg ${
                    isDomain('android') 
                      ? 'bg-android-primary/5 border border-android-primary/10' 
                      : 'bg-web-primary/5 border border-web-primary/10'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDomain('android')
                      ? 'bg-android-primary text-gray-950'
                      : 'bg-web-primary text-gray-950'
                  }`}>
                    {index + 1}
                  </div>
                  <p className="text-body text-gray-300">{lesson}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  )
}

