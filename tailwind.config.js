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
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / 1)',
          dark: 'rgb(var(--color-primary-dark) / 1)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / 1)',
          dark: 'rgb(var(--color-accent-dark) / 1)',
          '10': 'rgb(var(--color-accent) / 0.1)',
          '20': 'rgb(var(--color-accent) / 0.2)',
          '40': 'rgb(var(--color-accent) / 0.4)',
          '60': 'rgb(var(--color-accent) / 0.6)',
          '80': 'rgb(var(--color-accent) / 0.8)',
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgb(var(--color-accent) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-accent) / 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '80px 80px',
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'float-delay': 'float-delay 6s ease-in-out infinite',
        'float-delayed': 'float 15s ease-in-out 2s infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-slower': 'float 25s ease-in-out infinite',
        'ping-slow': 'ping-slow 8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
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
