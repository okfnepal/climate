/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'climate': "url('../public/climate.jpg')",
        'one-world': "url('../public/oneowrld.jpg')",
      }
    },
  },
  plugins: [],
}
