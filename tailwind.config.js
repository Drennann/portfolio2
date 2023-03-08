/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      md: { min: '768px' },
      ld: { min: '1024px' },
      gd: { min: '1600px' }
    }
  },
  plugins: []
}
