/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        zolar: {
          bg: '#0B1426',
          surface: '#121E38',
          elev: '#1A2B4C',
          gold: '#F4B528',
          goldHover: '#FAD36C',
          text: '#F8FAFC',
          muted: '#94A3B8'
        }
      }
    }
  },
  plugins: []
};
