import { notFound } from 'next/navigation'
import { FaShieldAlt, FaUserShield, FaLock, FaCheck } from 'react-icons/fa'

const products = {
  qap: {
    name: 'Quality Assurance Platform (QAP)',
    description: 'Comprehensive security testing and vulnerability assessment platform.',
    icon: FaShieldAlt,
    longDescription: `Our Quality Assurance Platform (QAP) is a state-of-the-art security testing and vulnerability 
    assessment solution designed to help organizations identify and address security vulnerabilities before they can 
    be exploited. With automated testing capabilities and comprehensive reporting, QAP makes it easy to maintain 
    a strong security posture.`,
    features: [
      {
        title: 'Automated Security Testing',
        description: 'Continuous security testing with automated vulnerability scanning and assessment.',
      },
      {
        title: 'Compliance Checking',
        description: 'Ensure adherence to industry standards and regulatory requirements.',
      },
      {
        title: 'Risk Assessment',
        description: 'Identify and prioritize security risks based on potential impact and likelihood.',
      },
      {
        title: 'Real-time Monitoring',
        description: 'Monitor security status and testing progress in real-time.',
      },
    ],
    pricing: [
      {
        name: 'Standard',
        price: '$499',
        period: 'per month',
        features: [
          'Up to 100 security tests per month',
          'Basic vulnerability scanning',
          'Email support',
          'Basic reporting',
        ],
      },
      {
        name: 'Professional',
        price: '$999',
        period: 'per month',
        features: [
          'Unlimited security tests',
          'Advanced vulnerability scanning',
          'Priority email & phone support',
          'Advanced reporting & analytics',
          'Custom compliance templates',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact sales',
        features: [
          'Everything in Professional',
          'Dedicated support team',
          'Custom integration options',
          'On-premise deployment available',
          'Custom feature development',
        ],
      },
    ],
  },
  qiam: {
    name: 'Identity and Access Management (QIAM)',
    description: 'Advanced identity and access management solution for enterprise security.',
    icon: FaUserShield,
    longDescription: `QIAM is our comprehensive identity and access management solution that helps organizations 
    secure and manage user identities and access rights across their entire digital infrastructure. With features 
    like SSO, MFA, and role-based access control, QIAM provides both security and convenience.`,
    features: [
      {
        title: 'Single Sign-On (SSO)',
        description: 'Streamline access with secure single sign-on capabilities.',
      },
      {
        title: 'Multi-factor Authentication',
        description: 'Add extra layers of security with multiple authentication factors.',
      },
      {
        title: 'Role-based Access Control',
        description: 'Manage access rights based on user roles and responsibilities.',
      },
      {
        title: 'User Lifecycle Management',
        description: 'Automate user provisioning, deprovisioning, and access reviews.',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: '$399',
        period: 'per month',
        features: [
          'Up to 100 users',
          'Basic SSO',
          'Standard MFA options',
          'Email support',
        ],
      },
      {
        name: 'Business',
        price: '$799',
        period: 'per month',
        features: [
          'Up to 500 users',
          'Advanced SSO',
          'All MFA options',
          'Priority support',
          'Advanced reporting',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact sales',
        features: [
          'Unlimited users',
          'Custom integrations',
          'Dedicated support',
          'Custom deployment options',
          'Advanced features',
        ],
      },
    ],
  },
  qscim: {
    name: 'Security Information Management (QSCIM)',
    description: 'Real-time security information and event management system.',
    icon: FaLock,
    longDescription: `QSCIM is our powerful security information and event management system that provides 
    real-time threat detection and response capabilities. By correlating security events from multiple sources, 
    QSCIM helps organizations identify and respond to security threats quickly and effectively.`,
    features: [
      {
        title: 'Real-time Threat Detection',
        description: 'Identify and analyze security threats in real-time.',
      },
      {
        title: 'Security Event Correlation',
        description: 'Correlate events from multiple sources for better threat detection.',
      },
      {
        title: 'Incident Response Automation',
        description: 'Automate response actions for common security incidents.',
      },
      {
        title: 'Security Analytics',
        description: 'Advanced analytics for better security insights and decision-making.',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$599',
        period: 'per month',
        features: [
          'Up to 100 events per second',
          'Basic correlation rules',
          'Standard support',
          'Basic reporting',
        ],
      },
      {
        name: 'Advanced',
        price: '$1,299',
        period: 'per month',
        features: [
          'Up to 1000 events per second',
          'Advanced correlation',
          'Priority support',
          'Advanced analytics',
          'Custom rules engine',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact sales',
        features: [
          'Unlimited events',
          'Custom integrations',
          'Dedicated support team',
          'Advanced features',
          'Custom deployment',
        ],
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  const Icon = product.icon

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Product Header */}
          <div className="text-center mb-12">
            <Icon className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.description}</p>
          </div>

          {/* Product Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
          </div>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.pricing.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <FaCheck className="text-primary w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 