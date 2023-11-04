/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        240: '60rem',
      },
    },
  },
  plugins: [],
}
