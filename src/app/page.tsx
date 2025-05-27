import Image from 'next/image'
import Link from 'next/link'
import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa'
import AnimatedDots from '@/components/AnimatedDots'

const products = [
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

const benefits = [
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

const testimonials = [
  {
    quote: "Konneqt's solutions have transformed our security infrastructure. Their products are reliable and effective.",
    author: 'John Smith',
    role: 'CTO',
    company: 'Tech Solutions Inc.',
  },
  {
    quote: 'The level of support and expertise provided by Konneqt is unmatched in the industry.',
    author: 'Sarah Johnson',
    role: 'CISO',
    company: 'Global Enterprises',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-[#0A0F29] dark:bg-dark-bg transition-colors duration-200 relative overflow-hidden">
        <AnimatedDots />
        <div className="container mx-auto px-4 relative pt-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] md:leading-[1.15] bg-gradient-to-r from-[#6379f1] to-white bg-clip-text text-transparent pt-4">
              Seamless Integration & Elevated Security within your reach
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Step into The New Standard for Optimizing Integration and security
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Subscribe our Newsletter"
                  className="w-full sm:w-80 px-4 py-3 rounded-l-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#6379f1]"
                />
                <button className="px-6 py-3 bg-[#6379f1] text-white font-semibold rounded-r-lg hover:bg-[#4c61d3] transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-[#6379f1] text-white font-semibold rounded-lg hover:bg-[#6379f1]/10 transition-colors duration-200">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-dark-bg transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group p-6 bg-white dark:bg-dark-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-dark-card py-20 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose Konneqt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-white dark:bg-dark-bg rounded-lg shadow transition-colors duration-200">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-dark-bg transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg shadow transition-colors duration-200">
                <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="not-italic font-semibold dark:text-white">{testimonial.author}</cite>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="bg-gray-50 dark:bg-dark-card py-20 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Backed by Industry Leaders</h2>
            <div className="mb-8">
              <Image
                src="/images/2future-logo.svg"
                alt="2future Logo"
                width={200}
                height={80}
                className="mx-auto dark:invert"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Proudly backed by 2future, a leading venture capital firm specializing in cybersecurity
              and enterprise technology investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 