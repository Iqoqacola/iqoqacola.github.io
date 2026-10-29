/** @type {import('tailwindcss').Config} */
export default {
  content: {
    // Resolve paths from this file, not from wherever the dev server was started
    relative: true,
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      // Values live in src/index.scss (:root = dark, html.light = light)
      colors: {
        richBlack: 'rgb(var(--c-rich-black) / <alpha-value>)',
        gunmetal: 'rgb(var(--c-gunmetal) / <alpha-value>)',
        platinum: 'rgb(var(--c-platinum) / <alpha-value>)',
        luxuryGold: 'rgb(var(--c-luxury-gold) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}