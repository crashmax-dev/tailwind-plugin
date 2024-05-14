import { colors } from './colors.js'
import { hsl } from './hsl.js'

import type { PluginAPI } from 'tailwindcss/types/config.js'

export function button({ addBase, addComponents, theme }: PluginAPI) {
  addBase({
    '.button': {
      fontFamily: 'inherit',
      display: 'inline-flex',
      cursor: 'pointer',
      touchAction: 'manipulation',
      userSelect: 'none',
      inlineSize: 'fit-content',

      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'calc(var(--radius) - 2px)',

      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
      transitionDuration: '.15s'
    },
    '.button-small': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      padding: '0.25rem 0.5rem'
    },
    '.button-medium': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      padding: '0.5rem 1rem'
    }
  })

  for (const colorName of colors) {
    const colorValue = theme<string>(`colors.${colorName}`)
    const variantClassName = `.button-${colorName}`

    addComponents({
      [variantClassName]: {
        color: hsl(`var(--${colorName}-foreground)`),
        backgroundColor: hsl(colorValue)
      },
      [`${variantClassName}:hover`]: {
        backgroundColor: hsl(colorValue, 0.8)
      }
    }, {
      respectPrefix: true
    })
  }
}
