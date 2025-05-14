import { cn } from '@/lib/utils'

const DetailsRoot = ({ children, className }: React.ComponentProps<'div'>) => (
  <div className={cn('py-8', className)}>{children}</div>
)

const DetailsContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn('px-8 pb-8 2xl:pb-0 pt-8 relative 2xl:h-[620px]', className)}
  >
    {children}
  </div>
)

type DetailsCoverProps = {
  cover?: string
} & React.ComponentProps<'div'>

const DetailsCover = ({
  cover = '',
  children,
  className
}: DetailsCoverProps) => {
  return (
    <div
      style={{ backgroundImage: cover ? `url(${cover})` : 'none' }}
      className={cn(
        'absolute inset-0 bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-[linear-gradient(270deg,rgba(18,17,19,0.00)_0%,rgba(18,17,19,0.80)_50%,#121113_100%)] -z-10',
        className
      )}
    >
      {children}
    </div>
  )
}

const DetailsHeaderRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col sm:flex-row gap-4 items-center justify-between mb-4',
      className
    )}
  >
    {children}
  </div>
)

const DetailsHeaderActions = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('flex gap-2', className)}>{children}</div>
)

const DetailsGrid = ({ children, className }: React.ComponentProps<'div'>) => (
  <div
    className={cn('grid grid-cols-1 lg:grid-cols-[374px_1fr] gap-4', className)}
  >
    {children}
  </div>
)

const DetailsGridThumb = ({
  className,
  ...props
}: React.ComponentProps<'img'>) => (
  <img
    className={cn(
      'w-full max-w-full sm:max-w-[370px] object-cover rounded',
      className
    )}
    {...props}
  />
)

const DetailsGridDivider = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('space-y-4', className)}>{children}</div>
)

export {
  DetailsRoot,
  DetailsGrid,
  DetailsCover,
  DetailsContent,
  DetailsGridThumb,
  DetailsHeaderRoot,
  DetailsGridDivider,
  DetailsHeaderActions
}
