import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import { NavLink } from '@/components/Link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { MessageError } from '@/components/MessageError'

import { useAuth } from '@/context/auth'

const signInSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const { signIn } = useAuth()

  const { mutate: signInMutation, isPending } = useMutation({
    mutationFn: (data: SignInSchema) => signIn(data),
    onSuccess: () => toast.success('Login realizado com sucesso'),
    onError: (error) => {
      console.error(error)
      toast.error('Credenciais inválidas')
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  })

  function handleAuthenticate(data: SignInSchema) {
    signInMutation(data)
  }

  return (
    <div className="w-full max-w-sm space-y-6 dark:bg-mauve-dark-3 bg-mauve-2 p-4 rounded-[4px] dark:border-transparent border-mauve-6 border">
      <form onSubmit={handleSubmit(handleAuthenticate)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="space-y-0.5">
              <Input
                id="email"
                type="text"
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('email')}
              />
              {errors.email && (
                <MessageError>{errors.email.message}</MessageError>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="space-y-0.5">
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />
              {errors.password && (
                <MessageError>{errors.password.message}</MessageError>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <NavLink to="/sign-up">Cadastrar</NavLink>
            <Button type="submit" disabled={isPending}>
              Entrar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
