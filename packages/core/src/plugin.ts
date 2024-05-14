import plugin from 'tailwindcss/plugin'

import { colorVariables } from './colors.js'
import { Button } from './components/button.js'

const components = [
  Button
]

interface PluginOptions {
  colors: string[]
}

export const uiPlugin = plugin.withOptions<PluginOptions>(
  (_options = { colors: [] }) => {
    return (api) => {
      for (const component of components) {
        component(api)
      }
    }
  },
  () => ({
    theme: {
      extend: {
        colors: colorVariables,
        borderRadius: {
          base: 'var(--radius)'
        }
      }
    }
  })
)
