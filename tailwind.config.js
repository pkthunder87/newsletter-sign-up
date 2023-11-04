/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto',
    },
    screens: {
      sm: '425px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        'frontend-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
