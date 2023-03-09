/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      smd: { min: '480px' },
      md: { min: '768px' },
      ld: { min: '1024px' },
      gd: { min: '1600px' }
    }
  },
  plugins: []
}
