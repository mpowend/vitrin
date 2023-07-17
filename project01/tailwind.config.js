/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      asphalt: '#2c3e50',
      yellow: '#f1c40f',
    },
    extend: {
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0%)',
          },

          '100%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
        },
      },
      animation: {
        slide: 'slide 600ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
