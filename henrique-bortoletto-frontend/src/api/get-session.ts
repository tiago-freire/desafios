import { api } from '@/lib/axios'

export interface SessionRequest {
  email: string
  password: string
}

export interface SessionResponse {
  access_token: string
  data: {
    id: number
    name: string
    email: string
  }
}

export async function getSession({ email, password }: SessionRequest) {
  const response = await api.post<SessionResponse>('/auth/login', {
    email,
    password
  })

  return response.data
}
