import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D5016',
          light: '#3D6B1E',
          dark: '#1E360F',
        },
        terracotta: {
          DEFAULT: '#C4622D',
          light: '#D4763F',
          dark: '#A5511F',
        },
        cream: '#F5F0E8',
        offwhite: '#FAFAF7',
        bark: {
          DEFAULT: '#7A5C3A',
          light: '#9B7B56',
        },
        storm: {
          DEFAULT: '#4A5568',
          light: '#718096',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [
          'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        'display-lg': [
          'clamp(2rem, 3vw + 1rem, 3.25rem)',
          { lineHeight: '1.15', letterSpacing: '-0.01em' },
        ],
        'display-md': [
          'clamp(1.5rem, 2vw + 0.75rem, 2.25rem)',
          { lineHeight: '1.2' },
        ],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      spacing: {
        section: '5rem',
        'section-lg': '8rem',
      },
    },
  },
  plugins: [],
};

export default config;
