'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/news' },
  ],
  products: [
    { name: 'QAP', href: '/products/qap' },
    { name: 'QIAM', href: '/products/qiam' },
    { name: 'QSCIM', href: '/products/qscim' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
    { name: 'Status', href: '/status' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/konneqt' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/konneqt' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/konneqt' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/konneqt' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Konneqt</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Leading provider of cybersecurity solutions for enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-border mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Konneqt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 