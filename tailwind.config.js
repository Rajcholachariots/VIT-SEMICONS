/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '300px', // Custom small screen size
        // Other breakpoints can also be customized here
        md: '768px',
        lg: '1024px',
        xl: '1400px',
        xxl: '1750px'
      },
    },
  },
  plugins: [require("daisyui")],
}

