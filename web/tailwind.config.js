/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '40px',
          // sm: '1vw',
          // md: '3vw',
          // lg: '6vw',
          // xl: '9vw',
        },
       maxWidth: 'none',
       minWidth: 'none',
      
      },
    },
  },
  plugins: [],
}