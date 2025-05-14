import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'font-mono text-sm md:text-base dark:text-mauve-dark-12 text-mauve-12 dark:bg-mauve-dark-2 border dark:border-mauve-dark-6 border-mauve-6 w-full min-w-0 rounded-[4px] p-3 shadow-none transition-[color,box-shadow] outline-none',
        'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'selection:bg-primary selection:text-primary-foreground',
        'placeholder:text-mauve-dark-9 placeholder:text-base placeholder:font-normal placeholder:font-mono',
        'focus-visible:border-purple-9 dark:focus-visible:border-purple-9 focus-visible:ring-purple-9/40 focus-visible:ring-4',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
