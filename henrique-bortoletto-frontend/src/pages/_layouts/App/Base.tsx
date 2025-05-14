import { cn } from '@/lib/utils'

const AppRoot = ({ children, className }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col min-h-screen bg-mauve-1 dark:bg-mauve-dark-1',
      className
    )}
  >
    {children}
  </div>
)

const AppContent = ({ children, className }: React.ComponentProps<'main'>) => (
  <main
    className={cn('container mx-auto px-4 flex-1 flex flex-col', className)}
  >
    {children}
  </main>
)

export { AppRoot, AppContent }
