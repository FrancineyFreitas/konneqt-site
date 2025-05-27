'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Update the HTML class when theme changes
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    // Save preference to localStorage
    localStorage.setItem('darkMode', (!isDarkMode).toString())
  }

  // On mount, check for saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 