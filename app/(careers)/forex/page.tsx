'use client'

import { motion } from 'framer-motion'
import { getProjectsByDomain } from '@/lib/data/projects'
import ProjectCard from '@/components/cards/ProjectCard'

const forexSkills = [
  'Technical Analysis', 'Risk Management', 'MetaTrader 4/5', 'Python Trading Bots',
  'Algorithmic Trading', 'Market Psychology', 'Fibonacci Retracements', 'Support & Resistance',
  'Candlestick Patterns', 'Trading Indicators'
]

export default function ForexPage() {
  const projects = getProjectsByDomain('forex')

  return (
    <main className="min-h-screen pt-20 pb-24 lg:pb-20 font-jetbrains">
      {/* Terminal Header */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-mono"
        >
          <div className="text-forex-primary text-sm mb-4">
            $ forex-trading --status active --mode professional
          </div>

          <h1 className="text-display font-bold text-gradient-forex mb-6 font-jetbrains">
            Forex Trading & Analysis
          </h1>

          <div className="text-forex-bull text-lg mb-4">
            &gt; Systematic approach to currency markets with proven strategies
          </div>

          <p className="text-body text-gray-400 max-w-3xl leading-relaxed font-sans">
            Combining technical analysis, risk management, and algorithmic trading to navigate
            the forex markets. Every trade is calculated, every risk is managed.
          </p>
        </motion.div>
      </section>

      {/* Trading Stats */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Win Rate', value: '67%', color: 'forex-bull' },
            { label: 'Risk/Reward', value: '1:3', color: 'forex-primary' },
            { label: 'Years Trading', value: '4+', color: 'forex-primary' },
            { label: 'Strategies', value: '12+', color: 'forex-bull' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
              className="bg-gray-900 border border-forex-primary/30 p-4 rounded font-mono"
            >
              <div className={`text-2xl md:text-3xl font-bold text-${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills/Expertise */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2 className="text-headline font-bold mb-6 text-forex-primary font-mono">
            $ ls -la ./expertise/
          </h2>

          <div className="flex flex-wrap gap-3">
            {forexSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.03, duration: 0.3 }}
                className="px-4 py-2 bg-gray-950 border border-forex-primary/40 rounded text-sm text-forex-bull font-mono hover:bg-forex-primary/10 transition-colors"
              >
                <span className="text-forex-primary">→</span> {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects/Trading Systems */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h2 className="text-headline font-bold mb-6 text-forex-primary font-mono">
            $ cat ./trading-systems.log
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  domain="forex"
                  slug={project.slug}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}

            {projects.length === 0 && (
              <div className="col-span-full bg-gray-950 border border-forex-primary/30 p-8 rounded font-mono">
                <div className="text-forex-primary mb-2">
                  $ echo "Status: Projects in development..."
                </div>
                <div className="text-gray-500 text-sm">
                  &gt; Trading systems and analysis tools coming soon_
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Trading Philosophy */}
      <section className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <h2 className="text-headline font-bold mb-6 text-forex-primary font-mono">
            $ cat ./philosophy.txt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Risk First',
                description: 'Never risk more than 1-2% per trade. Capital preservation is paramount.',
                icon: '🛡️'
              },
              {
                title: 'Systematic',
                description: 'Rule-based strategies tested on historical data. No emotional decisions.',
                icon: '📊'
              },
              {
                title: 'Continuous Learning',
                description: 'Markets evolve. Strategies must adapt through backtesting and refinement.',
                icon: '📈'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="bg-gray-950 border border-forex-primary/30 p-6 rounded hover:border-forex-bull/50 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-forex-primary mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-sans">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
