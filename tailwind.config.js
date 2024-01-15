/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
            primary: '#F6831F',
            black: '#111',
            white: '#fff'
        },
    screens: {
            xl: { max: '1400px' },
            // => @media (max-width: 1023px) { ... }
            
            lg: { max: '1200px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '1000px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '767px' },
            // => @media (max-width: 639px) { ... }

            xs: { max: '540px' },
            // => @media (max-width: 540px) { ... }
        },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
