'use client'

import { useState, useRef } from 'react';
import Image from 'next/image';

type MediaType = 'image' | 'video';

interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
}

const mediaContent: MediaItem[] = [
  {
    id: 'identity',
    title: 'Identity Integration',
    type: 'video',
    src: '/videos/identity-integration.mp4',
    poster: '/images/identity-integration.png',
    alt: 'Product Overview showing Multi-Cloud integration with AWS, Azure, Google Cloud, and Oracle',
  },
  {
    id: 'api-platform',
    title: 'API Platform',
    type: 'video',
    src: '/videos/api-platform.mp4',
    alt: 'QSCIM Platform architecture demonstration',
  },
  {
    id: 'observability',
    title: 'API Observability',
    type: 'image',
    src: '/images/api-observability.webp',
    alt: 'API Analytics Dashboard showing metrics',
  },
];

const VideoPlayer = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/40">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-[1200px] h-[675px] object-contain"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      
      {/* Glassmorphic Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute left-6 bottom-6 p-4 rounded-full
                 backdrop-blur-md bg-white/10 border border-white/20
                 hover:bg-white/20 transition-all duration-300
                 group flex items-center justify-center
                 shadow-lg hover:scale-105"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg 
            className="w-6 h-6 text-white group-hover:text-white/90" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg 
            className="w-6 h-6 text-white group-hover:text-white/90" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

const MediaDisplay = ({ item }: { item: MediaItem }) => {
  if (item.type === 'video') {
    return <VideoPlayer src={item.src} poster={item.poster} />;
  }

  return (
    <Image
      src={item.src}
      alt={item.alt || ''}
      fill
      className="object-contain p-4"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  );
};

export default function MediaSwitcher() {
  const [activeMedia, setActiveMedia] = useState(mediaContent[0]);

  return (
    <section className="relative py-16 bg-white dark:bg-black overflow-hidden transition-colors duration-200">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Introducing Konneqt's Product Portfolio
            </h2>
          </div>

          {/* Media Display */}
          <div className="relative aspect-[16/9] w-full mb-8 bg-gray-100 dark:bg-black/20 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <MediaDisplay item={activeMedia} />
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {mediaContent.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300
                  backdrop-blur-sm border
                  ${
                    activeMedia.id === item.id
                      ? 'bg-[#6379f1] text-white shadow-lg scale-105 border-[#6379f1]'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:hover:border-white/20 dark:text-white'
                  }
                `}
              >
                <div className="flex items-center justify-center gap-2">
                  {item.type === 'video' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4v12l12-6z" />
                    </svg>
                  )}
                  <span>{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 