'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from '@/context/ThemeContext'

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Branding Guidelines', href: '/branding' },
  { name: 'Team', href: '/team' },
  { name: 'Partners', href: '/partners' },
  { name: 'Events', href: '/events' },
]

const productLinks = [
  { name: 'QAP', href: '/products/qap', description: 'Quality Assurance Platform' },
  { name: 'QIAM', href: '/products/qiam', description: 'Identity and Access Management' },
  { name: 'QSCIM', href: '/products/qscim', description: 'Security Information Management' },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border shadow-sm transition-colors duration-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary dark:text-white">Konneqt</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              Home
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
                    Company
                    <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-48 mt-2 bg-white dark:bg-dark-card rounded-md shadow-lg">
                      <div className="py-2">
                        {companyLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-border"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
                    Products
                    <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-64 mt-2 bg-white dark:bg-dark-card rounded-md shadow-lg">
                      <div className="py-2">
                        {productLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-border"
                          >
                            <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/support" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              Support
            </Link>

            <Link href="/news" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              News
            </Link>

            <Link href="/partners" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              Partners
            </Link>

            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white">
              Contact
            </Link>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="container mx-auto px-4 py-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                     dark:bg-dark-card dark:border-dark-border dark:text-white dark:placeholder-gray-400"
          />
        </div>
      )}
    </header>
  )
} 