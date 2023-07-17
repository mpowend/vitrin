/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        asphalt: '#2c3e50',
        wetAsphalt: '#34495e',
        yellow: '#f1c40f',
        darkBlack: '#181716',
        lightBlack: '#2a2727',
        lighterBlack: '#393433',
        bgDark: 'ffffffdd',
      },
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
        carouselLoading: {
          '0%': { width: '4%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slide: 'slide 600ms ease-out forwards',
        carouselLoading: 'carouselLoading 4000ms linear forwards',
      },
    },
  },
  plugins: [],
}
