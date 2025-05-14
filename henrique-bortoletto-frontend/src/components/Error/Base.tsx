import { cn } from '@/lib/utils'

const NoDataRoot = ({ className, children }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-1 flex-col items-center justify-center',
      className
    )}
  >
    {children}
  </div>
)

const NoDataText = ({ className, children }: React.ComponentProps<'p'>) => (
  <p className={cn('text-gray-500 text-lg mb-4', className)}>{children}</p>
)

export { NoDataRoot, NoDataText }
