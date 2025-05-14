import { cn } from '@/lib/utils'

const HeaderRoot = ({
  className,
  children
}: React.ComponentProps<'header'>) => (
  <header
    className={cn(
      'w-full border-b dark:border-mauve-dark-alpha-6 border-mauve-6 bg-mauve-1 dark:bg-mauve-dark-1 py-4',
      className
    )}
  >
    {children}
  </header>
)

const HeaderTrigger = ({
  className,
  children
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'container mx-auto flex items-center justify-between px-4',
      className
    )}
  >
    {children}
  </div>
)

const HeaderContent = ({
  className,
  children
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex gap-2', className)}>{children}</div>
)

export { HeaderRoot, HeaderTrigger, HeaderContent }
