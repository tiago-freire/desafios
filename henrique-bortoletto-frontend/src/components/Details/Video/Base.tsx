import { cn } from '@/lib/utils'

const DetailVideoRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('mt-20', className)}>{children}</div>
)

const DetailVideoTitle = ({
  children,
  className
}: React.ComponentProps<'h2'>) => (
  <h2 className={cn('text-2xl font-bold mb-4', className)}>{children}</h2>
)

const DetailVideoContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('aspect-video w-full rounded overflow-hidden', className)}>
    {children}
  </div>
)

export { DetailVideoRoot, DetailVideoTitle, DetailVideoContent }
