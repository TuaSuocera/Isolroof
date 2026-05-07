import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          2: '#1a1a1a',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          2: '#F5F3EF',
        },
        rule: '#E6E2DA',
        muted: '#7A756D',
        red: {
          DEFAULT: '#E63027',
          deep: '#B81E16',
        },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
