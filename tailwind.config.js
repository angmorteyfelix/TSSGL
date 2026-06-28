/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tssglBlue: '#1e3a8a', // Maritime Blue
        tssglYellow: '#f6ed4f', // Safety Yellow
      },
    },
  },
  plugins: [],
}