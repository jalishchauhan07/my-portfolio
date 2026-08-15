export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        surface: '#0a0a0a',
        'surface-light': '#141414',
      }
    },
  },
  plugins: [],
};
