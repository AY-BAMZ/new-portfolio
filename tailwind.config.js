/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        bold: 700,
        medium: 600,
        normal: 500,
        regular: 400,
        light: 300,
        thin: 200,
      },
      colors: {
        borderColor: '#F2F4F7',
        link: '#3B82F6',
        brand: {
          stroke: '#E3E4ED',
        },
        black: {
          default: '#000000',
          1000: '#111111',
          900: '#1D2939',
          800: '#334155',
          700: '#465871',
          600: '#667085',
          500: '#707070',
          400: '#9DA2A7',
          300: '#E4E7EC',
          200: '#F2F4F7',
          100: '#F5F7F7',
        },
        primary: {
          blue: '#3FA5FF',
          red: '#FF6C6C',
          green: '#7FFF92',
          purple: '#B379FF',
          yellow: '#FFF67F',
          cray: '#3FFFDC',
        },
        bg: {
          light: '#FFFCEF',
          btn: '#171E3D',
          'bg-one': '#EFD9A0',
          'bg-two': '#FFFCEF',
          'bg-three': '#C9FFF6',
        },
        success: {
          default: '#02A870',
          deep: '#027750',
          light: '#00D68F',
          thin: '#EBFBE6',
          thinDeep: '#CEF0DB',
        },
        danger: {
          default: '#F95454',
          deep: '#E54040',
          light: '#FB8787',
          thin: '#FFEAEA',
        },
        yellow: {
          default: '#ffff00',
          deep: '#FFD000',
          light: '#FFFF33',
          thin: '#FDD83520',
        },
        warning: {
          default: '#F39B33',
          deep: '#DF871F',
          light: '#F7B970',
          thin: '#FFEEDA',
        },
      },
    },
  },
  plugins: [],
};
