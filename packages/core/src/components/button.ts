import { withVariable } from '../utils/with-variable.js'

import type { PluginAPI } from 'tailwindcss/types/config.js'

const buttonColors = [
  'primary',
  'secondary',
  'success',
  'destructive'
]

export function Button({ addComponents }: PluginAPI) {
  addComponents({
    '.button': {
      /** base */
      '@apply relative rounded-base': {},
      '@apply m-0': {},
      '@apply inline-flex items-center justify-center flex-shrink-0 align-middle': {},
      '@apply font-medium leading-tight': {},
      'transitionProperty': 'background-color, border-color, color, fill, stroke, box-shadow',
      '@apply duration-75 ease-out': {},
      '@apply outline-none appearance-none cursor-pointer select-none whitespace-nowrap': {},
      '@apply focus:outline-none': {},

      '&:disabled': {
        '@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60': {}
      },

      /** variant */
      ...buttonColors.reduce((styles, color) => ({
        ...styles,
        [`&-${color}`]: {
          color: withVariable(color, { foreground: true }),
          backgroundColor: withVariable(color)
        },
        [`&-${color}:hover`]: {
          backgroundColor: withVariable(color, { opacity: 0.8 })
        }
      }), {}),

      /** size */
      '&-small': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        padding: '0.25rem 0.5rem'
      },
      '&-medium': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        padding: '0.5rem 1rem'
      }
    }
  })
}
