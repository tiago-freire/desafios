import { cn } from '@/lib/utils'

const LoadingRoot = ({ className, children }: React.ComponentProps<'div'>) => (
  <div className={cn('flex flex-1 items-center justify-center', className)}>
    {children}
  </div>
)

const LoadingTrigger = ({
  className,
  children
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex-1 text-center', className)}>{children}</div>
)

export { LoadingRoot, LoadingTrigger }
