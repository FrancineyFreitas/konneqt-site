import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import CursorTrail from '@/components/CursorTrail'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konneqt - Cybersecurity Solutions',
  description: 'Leading provider of cybersecurity solutions for enterprises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-200`}>
        <ThemeProvider>
          <CursorTrail />
          <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text">
            <Header />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 