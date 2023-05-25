/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ["Marcellus"],
    },
    extend: {
      colors: {
        blue: {
          logo: "#00249C",
        }
      },
    },
  },
  plugins: [],
}

