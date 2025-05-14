import { Link, type NavLinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

const MovieRoot = ({
  children,
  className,
  ...props
}: React.ComponentProps<'img'>) => (
  <div
    {...props}
    className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6',
      className
    )}
  >
    {children}
  </div>
)

const MovieTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<'a'> & NavLinkProps) => (
  <Link
    {...props}
    className={cn(
      'group relative overflow-hidden rounded-[4px] aspect-[2/3]',
      className
    )}
  >
    {children}
  </Link>
)

const MovieThumb = ({ className, ...props }: React.ComponentProps<'img'>) => (
  <img className={cn('w-full h-full object-cover', className)} {...props} />
)

const MovieOverlayRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent',
      className
    )}
  >
    {children}
  </div>
)

const MovieOverlayContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'absolute inset-x-4 bottom-4 flex flex-col justify-end',
      className
    )}
  >
    {children}
  </div>
)

const MovieOverlayTitle = ({
  children,
  className
}: React.ComponentProps<'h3'>) => (
  <h3 className={cn('text-white font-semibold text-base uppercase', className)}>
    {children}
  </h3>
)

const MovieOverlayText = ({
  children,
  className
}: React.ComponentProps<'p'>) => (
  <p
    className={cn(
      'text-mauve-dark-8 text-xs transform translate-y-2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:mt-2',
      className
    )}
  >
    {children}
  </p>
)

const MovieRatingRoot = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'absolute inset-0 flex items-center justify-center transform scale-75 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100',
      className
    )}
  >
    {children}
  </div>
)

const MovieRatingContent = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div className={cn('relative size-32', className)}>{children}</div>
)

const MovieRatingSvg = ({ className }: React.ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 36 36"
    className={cn('rotate-[-90deg] scale-120', className)}
  >
    {/* prettier-ignore */}
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-mauve-dark-9 stroke-2" />
    {/* prettier-ignore */}
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-yellow-400 stroke-2" strokeDasharray="67, 100" />
  </svg>
)

const MovieRatingShadow = ({ className }: React.ComponentProps<'div'>) => (
  <div
    className={cn('absolute inset-0 rounded-full bg-mauve-alpha-10', className)}
  />
)

const MovieRatingText = ({
  className,
  children
}: React.ComponentProps<'span'>) => (
  <span
    className={cn(
      'absolute inset-0 flex items-center justify-center font-semibold z-10 text-yellow-400 text-xl',
      className
    )}
  >
    {children}
  </span>
)

export {
  MovieRoot,
  MovieThumb,
  MovieTrigger,
  MovieRatingSvg,
  MovieRatingRoot,
  MovieRatingText,
  MovieOverlayText,
  MovieOverlayRoot,
  MovieRatingShadow,
  MovieOverlayTitle,
  MovieRatingContent,
  MovieOverlayContent
}
