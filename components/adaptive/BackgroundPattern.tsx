'use client'

import { useEffect, useRef } from 'react'

interface BackgroundPatternProps {
  pattern: 'hexagon' | 'grid' | 'particles'
}

export default function BackgroundPattern({ pattern }: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrameId: number | null = null

    if (pattern === 'hexagon') {
      drawHexagonGrid(ctx, canvas)
    } else if (pattern === 'grid') {
      animationFrameId = animateGridLines(ctx, canvas)
    } else if (pattern === 'particles') {
      animationFrameId = animateParticles(ctx, canvas)
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [pattern])

  const drawHexagonGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const hexSize = 30
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2

    ctx.strokeStyle = 'rgba(61, 220, 132, 0.1)'
    ctx.lineWidth = 1

    for (let y = 0; y < canvas.height + hexHeight; y += hexHeight * 0.75) {
      for (let x = 0; x < canvas.width + hexWidth; x += hexWidth * 0.75) {
        const offsetX = (y / (hexHeight * 0.75)) % 2 === 0 ? 0 : hexWidth * 0.375
        drawHexagon(ctx, x + offsetX, y, hexSize)
      }
    }
  }

  const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i
      const xPos = x + size * Math.cos(angle)
      const yPos = y + size * Math.sin(angle)
      if (i === 0) {
        ctx.moveTo(xPos, yPos)
      } else {
        ctx.lineTo(xPos, yPos)
      }
    }
    ctx.closePath()
    ctx.stroke()
  }

  const animateGridLines = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): number => {
    let offset = 0
    const gridSize = 50

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      offset += 0.2
      return requestAnimationFrame(animate)
    }

    return animate()
  }

  const animateParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): number => {
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    const particles: Particle[] = []
    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      return requestAnimationFrame(animate)
    }

    return animate()
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  )
}

