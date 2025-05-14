import { api } from '@/lib/axios'

export async function deleteMovie(id: number) {
  await api.delete(`/movies/${id}`)
}
