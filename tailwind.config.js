/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta por proporción áurea: ver los tokens en src/assets/main.css
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          dark: 'hsl(var(--color-primary-dark) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          dark: 'hsl(var(--color-accent-dark) / <alpha-value>)',
          '10': 'hsl(var(--color-accent) / 0.1)',
          '20': 'hsl(var(--color-accent) / 0.2)',
          '40': 'hsl(var(--color-accent) / 0.4)',
          '60': 'hsl(var(--color-accent) / 0.6)',
          '80': 'hsl(var(--color-accent) / 0.8)',
        },
        highlight: 'hsl(var(--color-highlight) / <alpha-value>)',
        support: 'hsl(var(--color-support) / <alpha-value>)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, hsl(var(--color-accent) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--color-accent) / 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '80px 80px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delay': 'float-delay 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 1s infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse': 'pulse-dramatic 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-80px) scale(1.2)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(80px, -80px) scale(1.2)' },
        },
        'pulse-dramatic': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.5' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.5)', opacity: '0.2' },
          '100%': { transform: 'scale(1)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
