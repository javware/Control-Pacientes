/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-img': "url('/public/fondo2.jpg')",
      },
    },
  },
  plugins: [],
}

