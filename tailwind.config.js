// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        text: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        text: 'text 3s ease infinite',
      },
    },
  },
  plugins: [],
};
