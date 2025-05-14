import { cn } from '@/lib/utils'

const DetailStatsRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('grid grid-cols-1 xl:grid-cols-2 gap-4', className)}>
    {children}
  </div>
)

const DetailStatsTitle = ({
  children,
  className
}: React.ComponentProps<'h2'>) => (
  <h2 className={cn('', className)}>{children}</h2>
)

const DetailStatsContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('grid grid-cols-3 gap-4', className)}>{children}</div>
)

export { DetailStatsRoot, DetailStatsTitle, DetailStatsContent }
