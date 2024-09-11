/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/home/groen/Desktop/clothes website/Clothes-site/index.html", "./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        'greenish': '#77BD99',
        'bluey': '#1ECEBA',
        'whitish': '#EOFFFF',
        'nav': '#BAFFAF',
        'custom-green': 'rgba(30, 206, 186, var(--tw-bg-opacity))',
        'custom-bluey': 'rgba(224, 255, 255, var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
}

