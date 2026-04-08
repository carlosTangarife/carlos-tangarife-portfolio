/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'bg-tertiary': '#252525',
        'bg-card': '#1c1c1c',
        
        // Gold palette
        'gold': '#D4AF37',
        'gold-light': '#F4E5C3',
        'gold-dark': '#B8941E',
        'bronze': '#8B7355',
        'champagne': '#F7E7CE',
        
        // Text colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#E8E8E8',
        'text-muted': '#A0A0A0',
        'text-dark': '#6B6B6B',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(212, 175, 55, 0.1)',
        'gold-md': '0 4px 16px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 8px 32px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'pulse-gold': 'pulse 2s ease-in-out infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'bounce-scroll': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}