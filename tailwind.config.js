/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(84, 171, 175)',
          DEFAULT: 'rgb(90, 172, 176)',
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, rgb(90, 172, 176), rgb(84, 171, 175))',
      }
    },
  },
  plugins: [],
};