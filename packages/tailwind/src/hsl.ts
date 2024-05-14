export function hsl(color: string, opacity?: number): string {
  if (opacity) return `hsl(${color} / ${opacity})`
  return `hsl(${color})`
}
