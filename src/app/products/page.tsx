import Image from 'next/image'
import Link from 'next/link'
import { FaShieldAlt, FaUserShield, FaLock, FaChartLine, FaCode, FaBug } from 'react-icons/fa'

const products = [
  {
    id: 'qap',
    name: 'Quality Assurance Platform (QAP)',
    description: 'Comprehensive security testing and vulnerability assessment platform.',
    icon: FaShieldAlt,
    features: [
      'Automated security testing',
      'Vulnerability scanning',
      'Compliance checking',
      'Risk assessment',
      'Real-time monitoring',
      'Detailed reporting',
    ],
    benefits: [
      'Identify security gaps',
      'Reduce risk exposure',
      'Ensure compliance',
      'Improve security posture',
    ],
  },
  {
    id: 'qiam',
    name: 'Identity and Access Management (QIAM)',
    description: 'Advanced identity and access management solution for enterprise security.',
    icon: FaUserShield,
    features: [
      'Single Sign-On (SSO)',
      'Multi-factor authentication',
      'Role-based access control',
      'User lifecycle management',
      'Access governance',
      'Audit logging',
    ],
    benefits: [
      'Enhanced security',
      'Improved user experience',
      'Reduced IT overhead',
      'Regulatory compliance',
    ],
  },
  {
    id: 'qscim',
    name: 'Security Information Management (QSCIM)',
    description: 'Real-time security information and event management system.',
    icon: FaLock,
    features: [
      'Real-time threat detection',
      'Security event correlation',
      'Incident response automation',
      'Log management',
      'Security analytics',
      'Compliance reporting',
    ],
    benefits: [
      'Faster threat detection',
      'Improved incident response',
      'Better security insights',
      'Streamlined compliance',
    ],
  },
]

const features = [
  {
    icon: FaChartLine,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your security posture with advanced analytics and reporting.',
  },
  {
    icon: FaCode,
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing security tools and infrastructure.',
  },
  {
    icon: FaBug,
    title: 'Threat Intelligence',
    description: 'Stay ahead of threats with real-time intelligence and proactive protection.',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive cybersecurity solutions designed to protect your organization
          from evolving digital threats.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block w-full text-center bg-primary text-white py-3 px-6 rounded-md mt-8 hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Common Features */}
        <section className="bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Common Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
} 