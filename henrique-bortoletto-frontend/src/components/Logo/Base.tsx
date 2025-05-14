import { cn } from '@/lib/utils'

const LogoRoot = ({ className, children }: React.ComponentProps<'div'>) => (
  <div className={cn('flex items-center space-x-4', className)}>{children}</div>
)

const LogoIcon = ({ className, children }: React.ComponentProps<'div'>) => (
  <div className={cn('dark:text-mauve-dark-11 text-mauve-12', className)}>
    {children}
  </div>
)

const LogoText = ({ className, children }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'hidden md:block dark:text-mauve-dark-11 text-purple-9',
      className
    )}
  >
    {children}
  </div>
)

export { LogoRoot, LogoIcon, LogoText }
