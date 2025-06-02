'use client'

import { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(10, 53, 98, 0.15), transparent 40%)`
      }}
    />
  )
} 