/**
 * BackgroundPattern Component
 * 
 * Canvas-based animated background patterns
 * Supports all theme pattern types:
 * - hexagon: Honeycomb tessellation (Android)
 * - grid-lines: Animated wireframe grid (Web)
 * - particles: Particle network (Default)
 * - candlesticks: Trading chart candlesticks (Forex)
 * - network: Neural network graph (Data)
 * - bezier: Bézier curve animations (Design)
 */

'use client'

import { useEffect, useRef } from 'react'

interface BackgroundPatternProps {
  pattern: 'hexagon' | 'grid-lines' | 'particles' | 'candlesticks' | 'network' | 'bezier'
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
    } else if (pattern === 'grid-lines') {
      animationFrameId = animateGridLines(ctx, canvas)
    } else if (pattern === 'particles') {
      animationFrameId = animateParticles(ctx, canvas)
    } else if (pattern === 'candlesticks') {
      animationFrameId = animateCandlesticks(ctx, canvas)
    } else if (pattern === 'network') {
      animationFrameId = animateNetwork(ctx, canvas)
    } else if (pattern === 'bezier') {
      animationFrameId = animateBezier(ctx, canvas)
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

  const animateCandlesticks = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): number => {
    const candleWidth = 20
    const candleSpacing = 30
    const candleCount = Math.floor(canvas.width / candleSpacing)
    
    const candles = Array.from({ length: candleCount }, () => ({
      open: Math.random() * 100 + 50,
      close: Math.random() * 100 + 50,
      high: Math.random() * 120 + 80,
      low: Math.random() * 50 + 20,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      candles.forEach((candle, index) => {
        const x = index * candleSpacing + candleSpacing / 2
        const isGreen = candle.close > candle.open
        
        ctx.strokeStyle = isGreen ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'
        ctx.fillStyle = isGreen ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'
        
        // Draw wick
        ctx.beginPath()
        ctx.moveTo(x, candle.high)
        ctx.lineTo(x, candle.low)
        ctx.stroke()
        
        // Draw body
        const bodyTop = Math.min(candle.open, candle.close)
        const bodyHeight = Math.abs(candle.close - candle.open)
        ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight)
      })

      return requestAnimationFrame(animate)
    }

    return animate()
  }

  const animateNetwork = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): number => {
    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
    }

    const nodes: Node[] = []
    const nodeCount = 30

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.fillStyle = 'rgba(255, 107, 107, 0.5)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        nodes.forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.strokeStyle = `rgba(255, 107, 107, ${(1 - distance / 200) * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      return requestAnimationFrame(animate)
    }

    return animate()
  }

  const animateBezier = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): number => {
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.strokeStyle = 'rgba(255, 20, 147, 0.2)'
      ctx.lineWidth = 2

      const curves = 5
      for (let i = 0; i < curves; i++) {
        const offset = (time + i * 100) * 0.001
        const y = canvas.height / 2 + Math.sin(offset) * 100
        
        ctx.beginPath()
        ctx.moveTo(0, y)
        
        for (let x = 0; x < canvas.width; x += 50) {
          const cpx = x + 25
          const cpy = y + Math.sin((x + offset * 100) * 0.01) * 50
          const ex = x + 50
          const ey = y + Math.sin((x + 50 + offset * 100) * 0.01) * 50
          ctx.quadraticCurveTo(cpx, cpy, ex, ey)
        }
        
        ctx.stroke()
      }

      time += 1
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
