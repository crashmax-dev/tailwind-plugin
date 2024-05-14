import plugin from 'tailwindcss/plugin'

import { button } from './button.js'

export const uiPlugin = plugin.withOptions((_options) => {
  return (api) => {
    button(api)
  }
}, (_options) => {
  return {
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          success: 'var(--success)',
          destructive: 'var(--destructive)'
        }
      }
    }
  }
})
