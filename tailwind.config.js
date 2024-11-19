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
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent-dark)',
          '10': 'var(--color-accent-10)',
          '20': 'var(--color-accent-20)',
          '40': 'var(--color-accent-40)',
          '60': 'var(--color-accent-60)',
          '80': 'var(--color-accent-80)',
        },
      },
    },
  },
  plugins: [],
}
