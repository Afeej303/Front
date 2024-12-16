/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    plugins: [
      require('flowbite/plugin')
    ],
  },
    extend: {
      colors:{
        'gold': '#D39C32',
        'gold-dark':'#AC802D',
        'gold-bg':'#F2E4CA',
        'drop-bg':'#EAE6E6'
      },
      borderRadius: {
        '10': '10px', // Add a custom border-radius value
      },
    },
  },
  
}
