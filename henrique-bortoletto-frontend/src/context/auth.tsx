import { createContext, useContext, useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { storage } from '@/lib/storage'
import { getSession, type SessionRequest } from '@/api/get-session'

export type User = {
  id: number
  name: string
  email: string
}

type AuthProviderProps = {
  user: User | null
  hasAutenticated: boolean
  signIn: ({ email, password }: SessionRequest) => Promise<void>
  signOut: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps
)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => storage.getUser())
  const queryClient = useQueryClient()

  const handleSignIn = async ({ email, password }: SessionRequest) => {
    const { data, access_token } = await getSession({ email, password })

    storage.setAuth(access_token, data)
    setUser(data)
  }

  const handleSignOut = () => {
    storage.clearAuth()
    queryClient.clear()
    setUser(null)
  }

  useEffect(() => {
    const token = storage.getToken()
    const user = storage.getUser()

    if (!(token && user)) return
    setUser(user)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        hasAutenticated: !!user,
        signIn: handleSignIn,
        signOut: handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
