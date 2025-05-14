import { cn } from '@/lib/utils'

const DetailSummaryRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('grid grid-cols-1 2xl:grid-cols-2 gap-4', className)}>
    {children}
  </div>
)

const DetailSummaryContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('space-y-4', className)}>{children}</div>
)

const DetailSummaryGrid = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('grid grid-cols-2 gap-4', className)}>{children}</div>
)

export { DetailSummaryRoot, DetailSummaryContent, DetailSummaryGrid }
