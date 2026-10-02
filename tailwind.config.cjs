/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'border-t-[#1F48FF]',
    'border-l-[#1F48FF]'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        'affairs': ['Affairs', 'serif'],
        'affairs-italic': ['Affairs', 'serif'],
        'affairs-mono': ['Affairs Mono', 'monospace'],
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'paper': '#FAFAF7',
        'ink': '#0A0A0A',
        'soket-blue': '#1F48FF',
        'hairline': '#E4E4E0',
        'muted': '#5B5B57',
        'soket-dark': '#0A0A0A',
        'soket-gray': '#F7F7F7',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '120': '30rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      fontSize: {
        '17': ['1.0625rem', { lineHeight: '1.55' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.25' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        'tightest': '-1.12px',
        'label': '0.08em',
      },
      animation: {
        'fade-up': 'fadeUp 250ms ease-out forwards',
        'check-appear': 'checkAppear 200ms ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        checkAppear: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  important: true,
} 