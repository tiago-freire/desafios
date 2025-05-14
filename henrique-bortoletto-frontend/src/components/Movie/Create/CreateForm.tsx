import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createMovie } from '@/api/create-movie'
import { Form, type MovieSchema } from '@/components/Movie/Form'

import { useDialog } from '../Base'

export const CreateForm = () => {
  const { toggleDialog } = useDialog()
  const queryClient = useQueryClient()

  const handleSuccess = () => {
    toast.success('Filme cadastrado com sucesso')
    toggleDialog()
    queryClient.invalidateQueries({
      queryKey: ['movies']
    })
  }

  const mutation = useMutation({
    mutationFn: createMovie,
    onSuccess: () => handleSuccess(),
    onError: () => toast.error('Erro ao cadastrar filme')
  })

  const handleSubmit = (data: MovieSchema) => {
    mutation.mutate({
      ...data,
      release: new Date(data.release).toISOString()
    })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      isSubmitting={mutation.isPending}
      submitText="Cadastrar"
      onCancel={toggleDialog}
    />
  )
}
