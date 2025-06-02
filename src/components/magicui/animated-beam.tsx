'use client'

import React from 'react'
import { useEffect, useState } from 'react'

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  containerRef: React.RefObject<HTMLElement>
  duration?: number
}

export const AnimatedBeam = ({
  fromRef,
  toRef,
  containerRef,
  duration = 3,
}: AnimatedBeamProps) => {
  const [path, setPath] = useState<string>('')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const gradientId = `beam-gradient-${Math.random().toString(36).substr(2, 9)}`
  const pathId = `beam-path-${Math.random().toString(36).substr(2, 9)}`

  useEffect(() => {
    const updatePath = () => {
      if (!fromRef.current || !toRef.current || !containerRef.current) return

      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      const startX = fromRect.left + fromRect.width / 2 - containerRect.left
      const startY = fromRect.top + fromRect.height / 2 - containerRect.top
      const endX = toRect.left + toRect.width / 2 - containerRect.left
      const endY = toRect.top + toRect.height / 2 - containerRect.top

      // Calculate angle for gradient
      const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)

      setPath(`M ${startX},${startY} L ${endX},${endY}`)
      setDimensions({
        width: containerRect.width,
        height: containerRect.height
      })
      
      // Update gradient angle
      const gradient = document.getElementById(gradientId) as unknown as SVGLinearGradientElement
      if (gradient) {
        gradient.setAttribute('gradientTransform', `rotate(${angle}, 0.5, 0.5)`)
      }
    }

    updatePath()
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [fromRef, toRef, containerRef, gradientId])

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        clipPath: 'inset(0)',
      }}
    >
      <defs>
        <linearGradient 
          id={gradientId} 
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0a3562" stopOpacity="0" />
          <stop offset="20%" stopColor="#0a3562" stopOpacity="0.8" />
          <stop offset="80%" stopColor="#0a3562" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a3562" stopOpacity="0" />
        </linearGradient>
        <mask id={`beam-mask-${gradientId}`}>
          <path
            id={pathId}
            d={path}
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>

      {/* Base path with lower opacity */}
      <path
        d={path}
        stroke="#0a356220"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Animated beam on top */}
      <rect
        width="20%"
        height="100%"
        fill={`url(#${gradientId})`}
        mask={`url(#beam-mask-${gradientId})`}
        className="animate-beam"
      />
    </svg>
  )
} 