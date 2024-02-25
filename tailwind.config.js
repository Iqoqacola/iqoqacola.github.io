/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#7FC7D9',
        'secondary': '#6b7280',
        'bgColor': '#DCF2F1',
        'thirdty': '#365486'
      },
    },
  },
  plugins: [],
}

