'use client'

import Image from 'next/image'
import Link from 'next/link'
import BeamDemo from './BeamDemo'
import AnimatedBorderCard from '@/components/AnimatedBorderCard'

export default function Products() {
  return (
    <section className="relative py-20 bg-white dark:bg-black transition-colors duration-200 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* QSCIM Product */}
          <div className="mb-16">
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Logo Container */}
                      <div className="relative w-48 h-16">
                        <Image
                          src="/images/qscim-white-color.png"
                          alt="QSCIM Logo"
                          fill
                          className="object-contain"
                          priority
                          sizes="192px"
                        />
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      QSCIM is an innovative SCIM gateway that revolutionizes the Provisioning and de-Provisioning of users and identity data across multiple sources and destinations.
                    </p>
                    <Link
                      href="/products/qscim"
                      className="inline-block px-8 py-3 bg-[#6379f1] text-white font-semibold rounded-lg hover:bg-[#4c61d3] transition-colors duration-200"
                    >
                      Explore QSCIM
                    </Link>
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center">
                    <BeamDemo />
                  </div>
                </div>
              </div>
            </AnimatedBorderCard>
          </div>

          {/* QAP Product */}
          <div className="mb-16">
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Logo Container */}
                      <div className="relative w-48 h-16">
                        <Image
                          src="/images/qap-white-color.png"
                          alt="QAP Logo"
                          fill
                          className="object-contain"
                          priority
                          sizes="192px"
                        />
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      QAP (Quantum API Platform) introduces fresh insights along with essential capabilities that enable organizations to optimize API management.
                    </p>
                    <Link
                      href="/products/qap"
                      className="inline-block px-8 py-3 bg-[#6379f1] text-white font-semibold rounded-lg hover:bg-[#4c61d3] transition-colors duration-200"
                    >
                      Explore QAP
                    </Link>
                  </div>
                  <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    {/* Placeholder for future image/video */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                      Image/Video Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBorderCard>
          </div>

          {/* QIAM Product */}
          <div>
            <AnimatedBorderCard>
              <div className="p-8 bg-gray-50 dark:bg-dark-bg rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Logo Container */}
                      <div className="relative w-48 h-16">
                        <Image
                          src="/images/qiam-white-color-2.png"
                          alt="QIAM Logo"
                          fill
                          className="object-contain"
                          priority
                          sizes="192px"
                        />
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      QIAM provides an integrated platform for seamless management of distributed identities, self-sovereign identities (SSI), and verifiable credentials.
                    </p>
                    <Link
                      href="/products/qiam"
                      className="inline-block px-8 py-3 bg-[#6379f1] text-white font-semibold rounded-lg hover:bg-[#4c61d3] transition-colors duration-200"
                    >
                      Explore QIAM
                    </Link>
                  </div>
                  <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    {/* Placeholder for future image/video */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                      Image/Video Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBorderCard>
          </div>
        </div>
      </div>
    </section>
  )
} 