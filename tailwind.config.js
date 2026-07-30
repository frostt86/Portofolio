/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#e6ecf5', raised: '#e6ecf5', elevated: '#e0e6f0' },
        accent: { DEFAULT: '#ff6b35', blue: '#3b82f6', dark: '#1f0b02' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
};