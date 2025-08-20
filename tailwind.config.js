/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta basada en el brochure (azules y verde)
        primary: {
          50: '#E7F7FF',
          100: '#CBEFFE',
          200: '#9EDFFB',
          300: '#6CC9F0',
          400: '#43B7E6',
          500: '#2FAFDF',
          600: '#1FA3D4',
          700: '#178FC0',
          800: '#0F77A1',
          900: '#0A5F82',
        },
        secondary: {
          50: '#E6EEF7',
          100: '#C8D7E8',
          200: '#9AB3CF',
          300: '#6E8FB4',
          400: '#426A98',
          500: '#1F497C',
          600: '#0F3968',
          700: '#0A2F59',
          800: '#08294F',
          900: '#06254A',
        },
        accent: {
          50: '#F0FBEF',
          100: '#DCF7D6',
          200: '#BDEFB0',
          300: '#9BE686',
          400: '#7EDB61',
          500: '#66D044',
          600: '#57BE38',
          700: '#4AA330',
          800: '#3D8529',
          900: '#2E631F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}