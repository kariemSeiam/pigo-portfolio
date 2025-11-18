'use client'

import { motion } from 'framer-motion'
import { getProjectsByDomain } from '@/lib/data/projects'
import ProjectCard from '@/components/cards/ProjectCard'

const dataSkills = [
  'Python', 'Pandas & NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch',
  'SQL & PostgreSQL', 'Jupyter Notebooks', 'Data Visualization', 'Statistical Analysis',
  'Machine Learning', 'Deep Learning', 'Feature Engineering'
]

export default function DataPage() {
  const projects = getProjectsByDomain('data')

  return (
    <main className="min-h-screen pt-20 pb-24 lg:pb-20">
      {/* Notebook Header - Like Jupyter */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Notebook toolbar style */}
          <div className="flex items-center gap-2 mb-6 text-xs text-gray-500">
            <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">📊 Notebook</span>
            <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded">🐍 Python 3</span>
            <span className="px-2 py-1 bg-data-primary/20 border border-data-primary/30 rounded text-data-primary">● Trusted</span>
          </div>

          <h1 className="text-display font-bold text-gradient-data mb-6">
            Data Analysis & ML
          </h1>

          <div className="bg-gray-900/50 border-l-4 border-data-primary p-6 rounded-r">
            <div className="text-xs text-gray-600 mb-2 font-mono">
              In [1]: # Introduction
            </div>
            <p className="text-body text-gray-300 leading-relaxed">
              Transforming raw data into actionable insights through advanced analytics,
              machine learning, and statistical modeling. From data cleaning to model deployment,
              I handle the full data science lifecycle.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Metrics */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-xs text-gray-600 mb-3 font-mono">
            In [2]: print(portfolio_metrics)
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded font-mono text-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { key: 'projects_completed', value: '25+' },
                { key: 'datasets_analyzed', value: '500K+' },
                { key: 'ml_models_deployed', value: '12' },
                { key: 'accuracy_avg', value: '94%' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                >
                  <div className="text-data-secondary text-xs mb-1">'{metric.key}':</div>
                  <div className="text-data-primary text-xl font-bold">'{metric.value}'</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills/Tools */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-xs text-gray-600 mb-3 font-mono">
            In [3]: import skills
          </div>

          <div className="flex flex-wrap gap-3">
            {dataSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-900 border border-data-secondary/40 rounded-lg text-sm font-medium text-data-secondary hover:bg-data-secondary/10 hover:border-data-secondary transition-all cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="container-responsive mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-xs text-gray-600 mb-3 font-mono">
            In [4]: load_projects('featured')
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  domain="data"
                  slug={project.slug}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}

            {projects.length === 0 && (
              <div className="col-span-full bg-gray-900 border border-gray-800 p-8 rounded">
                <div className="text-xs text-gray-600 mb-2 font-mono">
                  Out [4]: ProjectsNotFoundError
                </div>
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="text-gray-400 font-mono text-sm">
                    # Data projects currently in development
                    <br />
                    # Check back soon for ML models and analysis notebooks
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Methodology */}
      <section className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-xs text-gray-600 mb-3 font-mono">
            In [5]: describe_methodology()
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Data-Driven',
                description: 'Decisions backed by statistical significance and rigorous analysis',
                icon: '📈',
                color: 'data-primary'
              },
              {
                title: 'Reproducible',
                description: 'Well-documented notebooks with version control and clear pipelines',
                icon: '🔄',
                color: 'data-secondary'
              },
              {
                title: 'Scalable',
                description: 'Solutions designed to handle growing datasets and model complexity',
                icon: '⚡',
                color: 'data-accent'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-data-primary/50 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className={`text-lg font-bold text-${item.color} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
