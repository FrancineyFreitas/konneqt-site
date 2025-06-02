'use client'

import Link from 'next/link'
import Image from 'next/image'
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

const quickLinks = [
  { name: 'Partners', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Github', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms', href: '#' },
]

const locations = [
  {
    address: '7901 Kingspointe STE 10 - Orlando - Florida, FL 32819, USA'
  },
  {
    address: 'Avenida Brigadeiro Faria Lima, 3200 - 3 Andar - Itaim Bibi, São Paulo-SP 04538-132, Brazil'
  },
  {
    address: 'Emirates Towers , Floor 42 - Dubai - United Arab Emirates'
  }
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-dark-border transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column - Logo and Description */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Image
                src="/images/White-Konneqt.png"
                alt="Konneqt Logo"
                width={250}
                height={66}
                priority
                sizes="250px"
              />
            </div>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
              Konneqt enables organizations to achieve seamless integration and enhanced security. With our innovative products, we drive progress and advocate the adoption of open standards. This approach promotes flexibility and eliminates vendor lock-in, allowing organizations to customize their technology infrastructure to meet their unique needs without being restricted by proprietary systems.
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

          {/* Second Column - Locations */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Locations</h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index}>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Third Column - Quick Links */}
          <div className="flex flex-col items-end">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-right w-full">Quick Links</h3>
            <ul className="space-y-4 text-right w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-base text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-dark-border mt-12 pt-8 text-center text-base text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Konneqt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 