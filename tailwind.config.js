/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-background',
    'bg-blue',
    'bg-green',
    'bg-orange',
    'text-background',
    'text-blue',
    'text-green',
    'text-orange',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--color-background-rgb))',
        blue: 'rgb(var(--color-blue-rgb))',
        green: 'rgb(var(--color-green-rgb))',
        orange: 'rgb(var(--color-orange-rgb))',
      },
    },
  },
  plugins: [],
};
