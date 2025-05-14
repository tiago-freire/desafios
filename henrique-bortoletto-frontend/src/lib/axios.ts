import axios from 'axios'
import { env } from '@/env'

import { storage } from '@/lib/storage'

export const api = axios.create({
  baseURL: env.VITE_API_URL
})

api.interceptors.request.use(
  (config) => {
    const token = storage.getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      storage.clearAuth()
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  }
)
