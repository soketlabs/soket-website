/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'border-t-[#1B41FF]',
    'border-l-[#1B41FF]'
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
      },
      colors: {
        'soket-gray': '#F7F7F7',
        'soket-blue': '#1B41FF',
        'soket-dark': '#282727'
      },
      letterSpacing: {
        'tightest': '-1.12px',
      },
    },
  },
  plugins: [],
  important: true, // This makes Tailwind classes override existing styles
} 