/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          dark: 'rgb(var(--color-secondary))'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))'
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))'
        },
        highlight: {
          DEFAULT: 'rgb(var(--color-highlight))'
        },
        background: {
          DEFAULT: 'rgb(var(--color-background))'
        },
        foreground: {
          DEFAULT: 'rgb(var(--color-foreground))'
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
        heading: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 15px 2px rgb(var(--color-accent))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};