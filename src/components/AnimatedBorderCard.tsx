'use client'

import { useRef, useState, useEffect } from 'react'

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedBorderCard({ children, className = '' }: AnimatedBorderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateMousePosition = (ev: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = ((ev.clientX - rect.left) / rect.width) * 100;
      const y = ((ev.clientY - rect.top) / rect.height) * 100;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl ${className}`}
    >
      {/* Animated border effect */}
      <div 
        className="absolute -inset-[1px] rounded-xl transition-opacity duration-300 bg-[#6379f1] opacity-0 group-hover:opacity-100"
        style={{
          maskImage: `radial-gradient(circle at ${position.x}% ${position.y}%, black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(circle at ${position.x}% ${position.y}%, black, transparent 80%)`
        }}
      />

      {/* Content container with single border */}
      <div className="relative h-full bg-gray-50 dark:bg-dark-bg rounded-xl border border-[#e5e7eb] dark:border-[#e5e7eb1a] transition-colors duration-300">
        {children}
      </div>
    </div>
  );
} 