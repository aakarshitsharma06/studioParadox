/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#F2F2F2',
        card: '#0a0a0c',
        'card-foreground': '#F2F2F2',
        border: 'rgba(242, 242, 242, 0.1)',
        'border-strong': 'rgba(242, 242, 242, 0.25)',
        muted: 'rgba(242, 242, 242, 0.55)',
        'muted-foreground': 'rgba(242, 242, 242, 0.4)',
        accent: '#3df599',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
