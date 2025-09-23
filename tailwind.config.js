/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#38BDF8',
          600: '#0284c7',
          700: '#0369a1',
        },
        dark: {
          900: '#0A192F',
          800: '#111827',
          700: '#1f2937',
        },
        accent: {
          primary: '#38BDF8',
          secondary: '#22C55E',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flow': 'flow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateX(0) opacity(0.5)' },
          '50%': { transform: 'translateX(10px) opacity(1)' },
        }
      }
    },
  },
  plugins: [],
}