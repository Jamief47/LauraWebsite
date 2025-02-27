/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#107bb7',
          yellow: '#ffe500',
        },
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        'sanchez': ['Sanchez', 'serif'],
      },
    },
  },
  plugins: [],
};