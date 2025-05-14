import { api } from '@/lib/axios'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: CreateUserRequest) {
  await api.post('/users', { name, email, password })
}
