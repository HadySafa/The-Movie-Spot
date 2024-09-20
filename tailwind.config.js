/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        'dark-gray': '#1C1C1C',
        'red':'rgb(255,0,0)'
      }
    },
  },
  plugins: [],
}

