import { cn } from '@/lib/utils'

const PaginationRoot = ({
  className,
  children
}: React.ComponentProps<'div'>) => (
  <div className={cn('py-6', className)}>{children}</div>
)

const PaginationContent = ({
  className,
  children
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex justify-center gap-2', className)}>{children}</div>
)

const PaginationDots = ({ className }: React.ComponentProps<'span'>) => (
  <span className={cn('px-5 py-3', className)}>...</span>
)

export { PaginationRoot, PaginationContent, PaginationDots }
