import { cn } from '@/lib/utils'

const AuthRoot = ({ children, className }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex min-h-screen flex-col bg-mauve-1 dark:bg-mauve-dark-1',
      className
    )}
  >
    {children}
  </div>
)

const AuthContent = ({ children, className }: React.ComponentProps<'main'>) => (
  <main
    className={cn(
      'flex-1 flex justify-center items-center relative',
      'before:content-[""] before:absolute before:inset-0 dark:before:bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.75)_98%,rgba(0,0,0,0.0)_100%)] before:bg-[linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0.75)_98%,rgba(255,255,255,0.80)_100%)]',
      'after:content-[""] after:absolute after:inset-0 after:bg-[url("/cover.webp")] after:bg-cover after:bg-center after:-z-10',
      className
    )}
  >
    {children}
  </main>
)

const AuthContainer = ({
  children,
  className
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'container flex items-center justify-center px-4 relative z-10',
      className
    )}
  >
    {children}
  </div>
)

export { AuthRoot, AuthContent, AuthContainer }
