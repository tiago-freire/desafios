import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        [
          'font-mono text-sm md:text-base dark:text-mauve-dark-12 text-mauve-12 dark:bg-mauve-dark-2 border dark:border-mauve-dark-6 border-mauve-6 w-full flex field-sizing-content min-h-16 rounded-[4px] p-3 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-purple-9 dark:focus-visible:border-purple-9 focus-visible:ring-purple-9/40 focus-visible:ring-4',
          'placeholder:text-mauve-dark-9 placeholder:text-base placeholder:font-normal placeholder:font-mono',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
        ],
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
