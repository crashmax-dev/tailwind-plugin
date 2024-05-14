import { uiPlugin } from '@ui/core'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,ts}'
  ],
  theme: {},
  plugins: [uiPlugin()]
}
