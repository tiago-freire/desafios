import { cn } from '@/lib/utils'

const DetailDescriptionRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn('p-4 rounded bg-mauve-alpha-9 backdrop-blur-sm', className)}
  >
    {children}
  </div>
)

const DetailDescriptionTitle = ({
  children,
  className
}: React.ComponentProps<'h3'>) => (
  <h3 className={cn('text-xs text-mauve-dark-11 font-bold mb-2', className)}>
    {children}
  </h3>
)

const DetailDescriptionText = ({
  children,
  className
}: React.ComponentProps<'p'>) => (
  <h3 className={cn('text-sm text-mauve-dark-12 font-bold', className)}>
    {children}
  </h3>
)

export { DetailDescriptionRoot, DetailDescriptionTitle, DetailDescriptionText }
