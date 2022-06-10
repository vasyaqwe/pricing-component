/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '400px',
      md: '740px',
      lg: '900px',
      xl: '1440px'
    },
    extend: {
      colors: {
        discountBg: 'hsl(14, 92%, 95%)',
        discountText: 'hsl(15, 100%, 70%)',
        ctaText: 'hsl(226, 100%, 87%)',
        ctaBg: 'hsl(227, 35%, 25%)',
        mainBg: 'hsl(230, 100%, 99%)',
        text: 'hsl(225, 20%, 60%)',
        textDark: 'hsl(227, 35%, 25%)',
      }
    },
  },
  plugins: [],
}
