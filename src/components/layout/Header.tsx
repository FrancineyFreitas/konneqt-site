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
  {
    name: 'About',
    href: '/about',
    subItems: [
      { name: 'About us', href: '/about/about-us' },
      { name: 'Brand guidelines', href: '/about/brand' },
    ]
  },
  {
    name: 'Team',
    href: '/team',
    description: "We're all about people"
  },
  {
    name: 'Partners',
    href: '/partners',
    description: "We have more than just business partners"
  },
  {
    name: 'Events',
    href: '/events',
    description: "Here, you'll see where we'll be presenting our products"
  }
]

const productLinks = [
  {
    name: 'QSCIM',
    href: '/products/qscim',
    logo: '/images/qscim-white-color.png',
    subItems: [
      { name: 'QSCIM Product Overview', href: '/products/qscim/overview' },
      { name: 'QSCIM for IBM Verify SaaS', href: '/products/qscim/ibm-verify' },
      { name: 'QSCIM for Ping Identity', href: '/products/qscim/ping-identity' },
      { name: 'QSCIM for Okta', href: '/products/qscim/okta' },
      { name: 'QSCIM ROI Calculator', href: '/products/qscim/roi-calculator' },
      { name: 'ROI 5 Years - QSCIM for IGA Products', href: '/products/qscim/roi-5-years' },
      { name: 'QSCIM Freemium', href: '/products/qscim/freemium' }
    ]
  },
  {
    name: 'QAP',
    href: '/products/qap',
    logo: '/images/qap-white-color.png',
    subItems: [
      { name: 'Product overview QAP', href: '/products/qap/overview' },
      { name: 'QAP Canvas', href: '/products/qap/canvas' },
      { name: 'OxyNexus', href: '/products/qap/oxynexus' }
    ]
  },
  {
    name: 'QIAM',
    href: '/products/qiam',
    logo: '/images/qiam-white-color-2.png',
    subItems: [
      { name: 'QIAM product overview', href: '/products/qiam/overview' },
      { name: 'QIAM main features', href: '/products/qiam/features' }
    ]
  }
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-dark-border shadow-sm transition-colors duration-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/images/Black-Konneqt.png"
                  alt="Konneqt Logo"
                  width={180}
                  height={48}
                  className="block dark:hidden transition-opacity duration-200"
                  priority
                  sizes="180px"
                />
                <Image
                  src="/images/White-Konneqt.png"
                  alt="Konneqt Logo"
                  width={180}
                  height={48}
                  className="hidden dark:block transition-opacity duration-200"
                  priority
                  sizes="180px"
                />
              </div>
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-6xl -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white dark:bg-dark-card p-6">
                          <div className="flex space-x-8">
                        {companyLinks.map((item) => (
                              <div key={item.name} className="flex-1">
                                <Link
                                  href={item.href}
                                  className="group inline-flex items-center"
                                >
                                  <p className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary">
                                    {item.name}
                                  </p>
                                </Link>
                                <div className="mt-3">
                                  {item.subItems ? (
                                    <ul className="space-y-2">
                                      {item.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                          <Link
                                            href={subItem.href}
                                            className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                                          >
                                            • {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-dark-border p-4">
                          <Link
                            href="/about"
                            className="flow-root rounded-md px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-dark-card"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                Learn more about Konneqt
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">
                              Discover our story and mission
                            </span>
                          </Link>
                        </div>
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-6xl -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white dark:bg-dark-card p-6">
                          <div className="flex space-x-12">
                        {productLinks.map((item) => (
                              <div key={item.name} className="flex-1">
                                <Link
                                  href={item.href}
                                  className="group inline-block"
                                >
                                  <div className="relative w-32 h-8">
                                    <Image
                                      src={item.logo}
                                      alt={`${item.name} Logo`}
                                      fill
                                      className="object-contain object-left"
                                    />
                                  </div>
                                </Link>
                                <div className="mt-4">
                                  <ul className="space-y-2">
                                    {item.subItems.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                                        >
                                          • {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-dark-border p-4">
                          <Link
                            href="/products/presentation"
                            className="flow-root rounded-md px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-dark-card"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                Konneqt Product Presentation
                              </span>
                            </span>
                          </Link>
                        </div>
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