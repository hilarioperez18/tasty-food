// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brownfood': '#dc644d',
        'lightbrownfood': '#e66e4d',
        'redfood': '#eb6362',
        'lightblue': '#bae3e4',
        'mydarkblue': '#1b74bd',
        'mediumblue': '#98bdf1',
        'aquamarine': '#57d6e3',
        'darkaqua': '#48bed9',
        'superdarkblue': '#2f5f76',
        'mybrown': '#742b17',
        'lightbrown': '#a73d1f',
        'beige': '#F5F5DC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

 

  
}
