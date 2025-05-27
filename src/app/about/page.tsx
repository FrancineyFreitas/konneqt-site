import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Konneqt</h1>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Konneqt is a leading cybersecurity company dedicated to protecting enterprises
              from evolving digital threats through innovative solutions and expert services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower organizations with cutting-edge cybersecurity solutions that protect
                  their digital assets and enable secure business growth in an interconnected world.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the global leader in enterprise cybersecurity, recognized for innovation,
                  reliability, and excellence in protecting digital infrastructures.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <li className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously developing cutting-edge solutions to stay ahead of cyber threats.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Maintaining the highest standards of ethics and transparency in all operations.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Delivering exceptional quality and reliability in every solution we provide.
                </p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2020, Konneqt has rapidly grown to become a trusted name in enterprise
              cybersecurity. Our journey began with a vision to make advanced security solutions
              accessible to organizations of all sizes. Today, we serve clients worldwide,
              protecting their digital assets with our suite of innovative products.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/ceo.jpg"
                      alt="CEO"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Chen</h3>
                    <p className="text-gray-600">CEO & Co-founder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/cto.jpg"
                      alt="CTO"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Rodriguez</h3>
                    <p className="text-gray-600">CTO & Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 