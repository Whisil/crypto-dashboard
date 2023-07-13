/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#fff',
      basic: {
        100: '#E1E3E6',
        300: '#C0C1C6',
        600: '#838487',
        700: '#5A5A5C',
        750: '#434446',
        800: '#343536',
        825: '#2A2A2B',
        850: '#252526',
        875: '#1D1D1E',
        900: '#101011',
      },
      blue: {
        400: '#3870FF',
        500: '#2260FF',
        600: '104CE9',
      },
      red: {
        500: '#FF4D8D',
      },
      green: {
        500: '#2CDD9D',
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
