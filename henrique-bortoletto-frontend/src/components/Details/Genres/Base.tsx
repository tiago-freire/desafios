import { cn } from '@/lib/utils'

const DetailGenresRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'p-4 rounded bg-mauve-alpha-9 backdrop-blur-sm w-full 2xl:w-fit',
      className
    )}
  >
    {children}
  </div>
)

const DetailGenresTitle = ({
  children,
  className
}: React.ComponentProps<'h3'>) => (
  <h3 className={cn('text-xs text-mauve-dark-11 font-bold mb-2', className)}>
    {children}
  </h3>
)

const DetailGenresContent = ({
  children,
  className
}: React.ComponentProps<'p'>) => (
  <h3 className={cn('flex gap-2', className)}>{children}</h3>
)

export { DetailGenresRoot, DetailGenresTitle, DetailGenresContent }
