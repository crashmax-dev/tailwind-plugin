import { withVariable } from './utils/with-variable.js'

export const colors = [
  'background',
  'foreground',

  'card',
  'card-foreground',

  'popover',
  'popover-foreground',

  'primary',
  'primary-foreground',

  'secondary',
  'secondary-foreground',

  'muted',
  'muted-foreground',

  'accent',
  'accent-foreground',

  'success',
  'success-foreground',

  'destructive',
  'destructive-foreground',

  'border',
  'radius',
  'input',
  'ring'
]

export const colorVariables = colors.reduce((styles, color) => ({
  ...styles,
  [color]: withVariable(color)
}), {})
