'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-9xl font-bold text-gradient-android mb-4"
        >
          404
        </motion.div>

        <h1 className="text-headline font-bold mb-4">Page Not Found</h1>
        
        <p className="text-body text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Perhaps you've discovered the undefined path?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-android px-8 py-3 rounded-lg font-medium"
            >
              Go Home
            </motion.button>
          </Link>
          
          <Link href="/android">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              Explore Android
            </motion.button>
          </Link>
          
          <Link href="/web">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              Explore Web
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>Here are the defined paths:</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {['/', '/android', '/web', '/projects'].map((path) => (
              <code key={path} className="px-3 py-1 bg-gray-900 rounded text-xs">
                {path}
              </code>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

