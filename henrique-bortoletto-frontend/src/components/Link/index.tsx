import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type NavLinkProps = ComponentProps<typeof Link>

export const NavLink = ({ className, ...props }: NavLinkProps) => (
  <Link
    {...props}
    className={cn(
      'font-mono underline flex items-center text-sm md:text-base font-normal text-purple-9 transition-colors hover:text-purple-10',
      className
    )}
  />
)
