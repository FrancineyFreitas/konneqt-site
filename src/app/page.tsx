'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa'
import MediaSwitcher from '@/components/MediaSwitcher'
import Products from '@/components/Products'
import AnimatedBorderCard from '@/components/AnimatedBorderCard'
import LogoCarousel from '@/components/LogoCarousel'

interface Product {
  name: string;
  description: string;
  icon: React.ComponentType;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'QAP',
    description: 'Quality Assurance Platform for comprehensive security testing',
    icon: FaShieldAlt,
    href: '/products/qap',
  },
  {
    name: 'QIAM',
    description: 'Identity and Access Management solution for enterprise security',
    icon: FaUserShield,
    href: '/products/qiam',
  },
  {
    name: 'QSCIM',
    description: 'Security Information Management for real-time threat detection',
    icon: FaLock,
    href: '/products/qscim',
  },
]

const benefits: Benefit[] = [
  {
    title: 'Enterprise-Grade Security',
    description: 'Protect your organization with military-grade encryption and security protocols.',
  },
  {
    title: 'Real-Time Monitoring',
    description: '24/7 threat detection and response capabilities to keep your systems secure.',
  },
  {
    title: 'Compliance Ready',
    description: 'Meet industry standards and regulatory requirements with our certified solutions.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative pt-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] md:leading-[1.15] text-gray-900 dark:bg-gradient-to-r dark:from-[#6379f1] dark:to-white dark:bg-clip-text dark:text-transparent pt-4">
              Seamless Integration & Elevated Security within your reach
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Step into The New Standard for Optimizing Integration and security
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Subscribe our Newsletter"
                  className="w-full sm:w-80 px-4 py-3 rounded-l-lg bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#6379f1]"
                />
                <button className="px-6 py-3 bg-[#6379f1] text-white font-semibold rounded-r-lg hover:bg-[#4c61d3] transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-[#6379f1] text-[#6379f1] dark:text-white font-semibold rounded-lg hover:bg-[#6379f1]/10 transition-colors duration-200">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Switcher Section */}
      <MediaSwitcher />

      {/* Products Section */}
      <Products />

      {/* Benefits Section */}
      <section className="bg-white dark:bg-black py-20 transition-colors duration-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Title and Subtitle */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              No vendor lock-in for identity<br />
              Management and integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              At Konneqt, we are transforming the way organizations handle Identity and Access Management. Our cutting-edge technologies increase security, optimize operations and provide an elevated user experience for companies around the world.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - No Vendor Lock-In */}
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 mb-6 text-[#6379f1] dark:text-white transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v3h2V7h-2zm0 4v6h2v-6h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Eliminating Gaps with No Vendor Lock-In</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Explore how our Innovative Solutions are transforming the Identity and Security sectors, along with Integration and APIs.
                  </p>
                </div>
              </div>
            </AnimatedBorderCard>

            {/* Card 2 - Identity Workflows */}
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 mb-6 text-[#6379f1] dark:text-white transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Seamless Identity Workflows</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Provisioning and governance as a Cornerstone of Innovation, driving essential advancements needed to support a fast growing market.
                  </p>
                </div>
              </div>
            </AnimatedBorderCard>

            {/* Card 3 - APIs and Integration */}
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 mb-6 text-[#6379f1] dark:text-white transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Rethinking APIs and Integration Initiatives</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Get ready to explore innovative approaches to exposing, managing and deploying APIs, while gaining full power and control over your Integrations.
                  </p>
                </div>
              </div>
            </AnimatedBorderCard>

            {/* Card 4 - Scalable Innovation */}
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 mb-6 text-[#6379f1] dark:text-white transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Empowering Scalable Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Exploring innovative technological solutions for continuous and sustainable growth. We provide power and flexibility to drive advancements and meet evolving demands.
                  </p>
                </div>
              </div>
            </AnimatedBorderCard>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="bg-white dark:bg-black py-20 transition-colors duration-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text and Logo */}
            <div className="flex flex-col">
              {/* Logo Container */}
            <div className="mb-8">
              <Image
                src="/images/logo-2Future-Branco.png"
                alt="2future Logo"
                width={300}
                height={80}
                className="object-contain"
                priority
                sizes="300px"
              />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-black dark:text-white">Our Investor and a little about their Background</h2>
                <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                  2Future Holding is a Future Capital Investment firm dedicated to connecting people, ideas, and transformative businesses. Initially established as a single-family office, 2Future has grown into a Holding Company with perpetual capital and robust presence across the USA, Brazil, Europe and Middle East.
                </p>
                <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                  The company's diverse investment portfolio spans technology, lifestyle, health, and well-being, with the commitment to promoting sustainable growth, pioneering industry innovations, and making a meaningful impact on people's lives and the planet.
                </p>
                <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                  At 2Future, the future isn't just something we anticipate – it's a Vision we actively shape together with our partners and affiliates.
                </p>
              </div>
            </div>

            {/* Right Column - Company Image */}
            <div className="h-full">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/2future-empresa.jpeg"
                  alt="2Future Company"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white dark:bg-black py-20 transition-colors duration-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Partners</h2>
            </div>
            <LogoCarousel />
          </div>
        </div>
      </section>
    </div>
  )
} 