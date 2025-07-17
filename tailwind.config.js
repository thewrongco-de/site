/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        black: 'var(--black)',
        white: 'var(--white)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}
