/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', 'sans-serif'],
        serif: ['"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1c1e21',
          muted: '#5a5d63',
          subtle: '#9ca0a8',
        },
        canvas: {
          DEFAULT: '#f7f9fc',
          alt: '#eff3f8',
        },
      },
    },
  },
  plugins: [],
};
