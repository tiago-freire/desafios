import { cn } from '@/lib/utils'

const DetailHeaderRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn('p-4 rounded bg-mauve-alpha-9 backdrop-blur-sm', className)}
  >
    {children}
  </div>
)

const DetailsHeaderContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('text-mauve-dark-12', className)}>{children}</div>
)

const DetailsHeaderTitle = ({
  children,
  className
}: React.ComponentProps<'h1'>) => (
  <h1 className={cn('text-3xl font-semibold', className)}>{children}</h1>
)

const DetailsHeaderSubTitle = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <p className={cn('ext-base font-normal', className)}>{children}</p>
)

export {
  DetailHeaderRoot,
  DetailsHeaderTitle,
  DetailsHeaderContent,
  DetailsHeaderSubTitle
}
