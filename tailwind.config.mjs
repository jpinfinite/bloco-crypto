/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        brand: ['"Chakra Petch"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          orange: '#F97316',
          cobalt: '#1D4ED8',
          dark: '#0B0F19',
          light: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
};
