/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--color-background-rgb))',
        border: 'rgb(var(--color-border-rgb))',
        text: 'rgb(var(--color-text-rgb))',
        blue: 'rgb(var(--color-blue-rgb))',
        green: 'rgb(var(--color-green-rgb))',
        orange: 'rgb(var(--color-orange-rgb))',
      },
    },
  },
  plugins: [],
};
