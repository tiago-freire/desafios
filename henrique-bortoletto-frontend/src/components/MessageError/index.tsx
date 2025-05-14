import { cn } from '@/lib/utils'

export const MessageError = ({
  className,
  children
}: React.ComponentProps<'span'>) => (
  <span className={cn('font-mono text-xs text-destructive', className)}>
    {children}
  </span>
)
