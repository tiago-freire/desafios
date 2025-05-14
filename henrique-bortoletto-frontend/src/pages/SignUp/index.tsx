import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import { NavLink } from '@/components/Link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { MessageError } from '@/components/MessageError'

import { createUser } from '@/api/create-user'

const signInSchema = z
  .object({
    name: z.string().min(1, 'Nome de usuário é obrigatório'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirm: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
  })
  .refine((data) => data.password === data.confirm, {
    message: 'As senhas não coincidem',
    path: ['confirm']
  })

type SignInSchema = z.infer<typeof signInSchema>

export function SignUp() {
  const navigate = useNavigate()

  const { mutate: createUserMutation, isPending } = useMutation({
    mutationFn: (data: Omit<SignInSchema, 'confirm'>) => createUser(data),
    onSuccess: () => {
      toast.success('Usuário cadastrado com sucesso')
      navigate('/sign-in')
    },
    onError: () => toast.error('Credenciais inválidas')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  })

  function handleAuthenticate({ name, email, password }: SignInSchema) {
    createUserMutation({ name, email, password })
  }

  return (
    <div className="w-full max-w-sm space-y-6 dark:bg-mauve-dark-3 bg-mauve-2 p-4 rounded-[4px] dark:border-transparent border-mauve-6 border">
      <form onSubmit={handleSubmit(handleAuthenticate)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <div className="space-y-0.5">
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                autoCapitalize="none"
                autoCorrect="off"
                {...register('name')}
              />
              {errors.name && (
                <MessageError>{errors.name.message}</MessageError>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="space-y-0.5">
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
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
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirmação de senha</Label>
            <div className="space-y-0.5">
              <Input
                id="confirm"
                type="password"
                placeholder="Digite sua senha novamente"
                {...register('confirm')}
              />
              {errors.confirm && (
                <MessageError>{errors.confirm.message}</MessageError>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <NavLink to="/sign-in">Voltar para o login</NavLink>
            <Button type="submit" disabled={isPending}>
              Cadastrar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
