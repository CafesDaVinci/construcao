/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FFFBF4",
        text:"#160901",
        secondary:"#f28f3b",
        bgfooter:"#1e1d19"
      },
      dropShadow: {
        dark1: '2px 2px 0px #160901 ',
        branco1: '1px 1px 0px white',
        dark2: '1px 2px 2px #1A1A1A',
        drop1: '0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        dancing: 'var(--font-dancing)',  
        bebas: 'var(--font-bebas)',  
      },
      
    },
  },
  plugins: [],
}
