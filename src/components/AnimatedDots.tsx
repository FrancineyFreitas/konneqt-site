'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match window size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Dot properties
    const dots: { x: number; y: number; opacity: number; speed: number }[] = []
    const numberOfDots = 50
    const dotSize = 1.5

    // Create initial dots
    for (let i = 0; i < numberOfDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random(),
        speed: 0.003 + Math.random() * 0.008,
      })
    }

    // Animation function
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        // Update opacity
        dot.opacity += dot.speed
        if (dot.opacity >= 1 || dot.opacity <= 0) {
          dot.speed = -dot.speed
        }

        // Draw outer glow (shadow effect)
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 230, 255, ${dot.opacity * 0.05})`
        ctx.fill()

        // Draw middle glow
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 230, 255, ${dot.opacity * 0.1})`
        ctx.fill()

        // Draw inner glow
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 230, 255, ${dot.opacity * 0.2})`
        ctx.fill()

        // Draw main bright dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 230, 255, ${dot.opacity * 0.4})`
        ctx.fill()

        // Add shadow blur effect
        ctx.shadowBlur = 15
        ctx.shadowColor = 'rgba(225, 230, 255, 0.3)'
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity * 0.5})`
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow blur
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
    />
  )
} 