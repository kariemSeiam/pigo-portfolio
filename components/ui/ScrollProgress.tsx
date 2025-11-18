'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollProgressProps {
  color?: string
  height?: number
}

export default function ScrollProgress({ color = '#3DDC84', height = 3 }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left z-50"
      style={{
        scaleX,
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  )
}
