import { z } from 'zod'

export const envSchema = z.object({
  VITE_KEY_APP: z.string(),
  VITE_KEY_TOKEN: z.string(),
  VITE_API_URL: z.string().url()
})

export const env = envSchema.parse(import.meta.env)
