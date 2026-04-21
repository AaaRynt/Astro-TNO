import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,ts,js}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config
