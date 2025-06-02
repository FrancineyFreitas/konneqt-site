'use client'

import Image from 'next/image'

const logos = [
  { src: '/images/logoeds-109006.svg', alt: 'EDS Logo' },
  { src: '/images/logoLatinus-429023.svg', alt: 'Latinus Logo' },
  { src: '/images/logoasper-0a021a.svg', alt: 'Asper Logo' },
  { src: '/images/logoaltaica.png', alt: 'Altaica Logo' },
  { src: '/images/logovatrox.png', alt: 'Vatrox Logo' },
  { src: '/images/logoidenticum.png', alt: 'Identicum Logo' },
  { src: '/images/logosmart.png', alt: 'Smart Logo' },
  { src: '/images/logostrema.png', alt: 'Strema Logo' },
  // Duplicate logos to create seamless loop
  { src: '/images/logoeds-109006.svg', alt: 'EDS Logo' },
  { src: '/images/logoLatinus-429023.svg', alt: 'Latinus Logo' },
  { src: '/images/logoasper-0a021a.svg', alt: 'Asper Logo' },
  { src: '/images/logoaltaica.png', alt: 'Altaica Logo' },
  { src: '/images/logovatrox.png', alt: 'Vatrox Logo' },
  { src: '/images/logoidenticum.png', alt: 'Identicum Logo' },
  { src: '/images/logosmart.png', alt: 'Smart Logo' },
  { src: '/images/logostrema.png', alt: 'Strema Logo' },
];

export default function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-[#121212] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-[#121212] to-transparent"></div>

      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {logos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 mx-16 w-60 h-36 relative"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain brightness-[0.4] dark:brightness-0 dark:invert"
              priority={index < 8}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 