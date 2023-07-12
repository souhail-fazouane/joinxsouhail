/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xl': '14px',
      "base": "13px",
      "sm": "12px"
    },
    extend: {
      fontFamily: {
        primary: 'Inter'
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        regular: 400
      },
      colors: {
        hintedGrey1: '#0e0e10',
        hintedGrey2: '#18181b',
        backgroundButton: '#9147ff',
        hintedGrey11: '#dedee3',
        colorMessage: '#efeff1'
      }
    },
  },
  plugins: [],
}
