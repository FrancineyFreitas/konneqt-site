/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#1A1A1A',
        accent: '#FF6B00',
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E5E5E5',
          border: '#2E2E2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'flow-x': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'flow-x-reverse': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'flow-y': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'flow-y-reverse': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-size': '200% 100%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 100%',
            'background-position': 'right center'
          }
        },
        'pulse-opacity': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' }
        },
        beam: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(70%)' }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'flow-x': 'flow-x 8s linear infinite',
        'flow-x-reverse': 'flow-x-reverse 8s linear infinite',
        'flow-y': 'flow-y 8s linear infinite',
        'flow-y-reverse': 'flow-y-reverse 8s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-opacity': 'pulse-opacity 4s ease-in-out infinite',
        'beam': 'beam 1.5s linear infinite',
        'scroll': 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 