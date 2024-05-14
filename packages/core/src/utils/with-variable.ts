interface WithVariableOptions {
  opacity?: number
  foreground?: boolean
}

export function withVariable(
  variable: string,
  { opacity, foreground }: WithVariableOptions = {}
): string {
  if (foreground) {
    variable = `${variable}-foreground`
  }

  if (opacity) {
    return `hsl(var(--${variable}) / ${opacity})`
  }

  return `hsl(var(--${variable}))`
}
