import { cn } from '@/lib/utils'

const DetailPercenteRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('relative size-20', className)}>{children}</div>
)

const DetailPercenteShadow = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'absolute inset-0 rounded-full bg-mauve-alpha-9 backdrop-blur-sm',
      className
    )}
  >
    {children}
  </div>
)

const DetailPercenteText = ({
  children,
  className
}: React.ComponentProps<'span'>) => (
  <span
    className={cn(
      'absolute inset-0 flex items-center justify-center font-semibold z-10 text-yellow-400 text-xl',
      className
    )}
  >
    {children}
  </span>
)

export { DetailPercenteRoot, DetailPercenteShadow, DetailPercenteText }
