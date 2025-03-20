
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: '1rem', // Default padding for all devices
          sm: '2rem', // Padding for small screens
          lg: '4rem', // Padding for large screens
          xl: '5rem', // Padding for extra-large screens
          '2xl': '6rem', // Padding for 2XL screens
        },
      },
      screens: {
        sm: '640px', // Small devices (phones)
        md: '768px', // Medium devices (tablets)
        lg: '1024px', // Large devices (desktops)
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // Ultra large devices
      },
    },
  },
  plugins: [
  ],
}
