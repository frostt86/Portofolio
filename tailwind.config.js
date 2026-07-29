/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mono: {
          950: '#000000',
          900: '#0a0a0a',
          850: '#121212',
          800: '#181818',
          700: '#262626',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#a3a3a3',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#ffffff',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse-white': 'glowPulseWhite 2.5s ease-in-out infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
      },
      keyframes: {
        glowPulseWhite: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.05)' },
          '50%': { boxShadow: '0 0 35px rgba(255, 255, 255, 0.35), 0 0 70px rgba(255, 255, 255, 0.15)' },
        },
        borderRotate: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};