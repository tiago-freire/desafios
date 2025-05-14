import { Moon, Power, Sun } from 'lucide-react'

import { useAuth } from '@/context/auth'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

import * as S from './Base'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const { hasAutenticated, signOut } = useAuth()

  return (
    <S.HeaderRoot>
      <S.HeaderTrigger>
        <Logo />
        <S.HeaderContent>
          <Button
            variant="secondary"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Alternar tema"
          >
            <Sun className="size-6 rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
            <Moon className="size-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <span className="sr-only">Alternar tema</span>
          </Button>
          {hasAutenticated && (
            <Button onClick={signOut} title="Deslogar da conta">
              <Power className="size-6" />
            </Button>
          )}
        </S.HeaderContent>
      </S.HeaderTrigger>
    </S.HeaderRoot>
  )
}
