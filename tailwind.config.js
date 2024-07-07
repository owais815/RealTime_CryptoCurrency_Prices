/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3b82f6',
        'custom-cyan': '#06b6d4',
        'dark-gray': '#374151',
        'dark-white': '#f3f4f6',
        'crypto-bg': '#0d1421'
      },
      'vulcan': {
        '50': '#f3f6fc',
        '100': '#e7edf7',
        '200': '#c9d8ee',
        '300': '#9ab8df',
        '400': '#6492cc',
        '500': '#4074b7',
        '600': '#2f5b9a',
        '700': '#27497d',
        '800': '#243f68',
        'vulcan-900':'#223658',
        '950': '#0d1421',
    },
    
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)',
      },
      borderRadius: {
        'custom-radius': '0.375rem',
      },
    },
  },
  plugins: [],
};
