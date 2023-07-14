/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-16': 'repeat(auto-fill, 4rem)',
        'fill-24': 'repeat(auto-fill, 6rem)',
        'fill-64': 'repeat(auto-fill, 16rem)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

