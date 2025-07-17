/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        background: 'var(--background)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}
