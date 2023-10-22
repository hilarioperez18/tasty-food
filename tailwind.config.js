// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'beige': '#F5F5DC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}