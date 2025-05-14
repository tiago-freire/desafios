import { cn } from '@/lib/utils'

const FooterRoot = ({
  className,
  children
}: React.ComponentProps<'footer'>) => (
  <footer
    className={cn(
      'py-6 px-4 border-t text-center dark:border-mauve-dark-alpha-6 border-mauve-6 bg-mauve-1 dark:bg-mauve-dark-1',
      className
    )}
  >
    {children}
  </footer>
)

const FooterText = ({ className, children }: React.ComponentProps<'p'>) => (
  <p
    className={cn(
      'text-center text-mauve-12 dark:text-mauve-dark-11',
      className
    )}
  >
    {children}
  </p>
)

export { FooterRoot, FooterText }
