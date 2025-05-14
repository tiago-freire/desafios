import { env } from '@/env'

import type { User } from '@/context/auth'

export const storage = {
  getUser: () => {
    const user = localStorage.getItem(env.VITE_KEY_APP)
    return user ? JSON.parse(user) : null
  },

  getToken: () => {
    return localStorage.getItem(env.VITE_KEY_TOKEN)
  },

  setAuth: (token: string, user: User) => {
    localStorage.setItem(env.VITE_KEY_TOKEN, token)
    localStorage.setItem(env.VITE_KEY_APP, JSON.stringify(user))
  },

  clearAuth: () => {
    localStorage.removeItem(env.VITE_KEY_TOKEN)
    localStorage.removeItem(env.VITE_KEY_APP)
  }
}
