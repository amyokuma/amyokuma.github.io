/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'CabinetGrotesk': ['CabinetGrotesk', 'sans-serif'],
        'GeneralSans': ['GeneralSans', 'sans-serif']
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      fontStyle: {
        'italic' : 'italic',
      },
    },
  },
  plugins: [],
}

