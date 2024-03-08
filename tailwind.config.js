/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: 'rgb(214, 211, 209)', // Define your custom background color
        customColor: 'rgb(41, 37, 36)', // Define your custom background color
      },
    },
  },
  plugins: [],
}

