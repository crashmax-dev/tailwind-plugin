import { cn } from '@ui/tailwind'
import { type VariantProps, cva } from 'class-variance-authority'

import type { JSX } from '@reatom/jsx/jsx-runtime'

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'button-primary',
      secondary: 'button-secondary',
      success: 'button-success',
      destructive: 'button-destructive'
    },
    size: {
      small: 'button-small',
      medium: 'button-medium'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})

type ButtonVariants = VariantProps<typeof buttonVariants>

interface ButtonProps {
  children: JSX.ElementChildren
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: string
}

export function Button(props: ButtonProps) {
  return (
    <button
      class={cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)}
    >
      {props.children}
    </button>
  )
}
