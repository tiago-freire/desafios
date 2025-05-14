import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    "font-mono inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs md:text-base text-sm font-normal px-5 py-3 transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
    'disabled:bg-mauve-dark-9 disabled:text-mauve-dark-alpha-10 disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        default:
          'bg-purple-9 text-white hover:bg-purple-10 focus-visible:border-purple-9 focus-visible:ring-purple-9/40 focus-visible:ring-4',
        secondary:
          'bg-purple-alpha-4 dark:text-purple-3 text-mauve-12 hover:bg-purple-alpha-3 focus-visible:border-purple-9 focus-visible:ring-purple-9/40 focus-visible:ring-4'
      }
    },

    defaultVariants: {
      variant: 'default'
    }
  }
)

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn('', buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
