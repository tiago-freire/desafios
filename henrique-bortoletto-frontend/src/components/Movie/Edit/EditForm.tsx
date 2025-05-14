import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { updateMovie } from '@/api/update-movie'
import { useDialog } from '@/components/Movie/Base'
import { Form, type MovieSchema } from '@/components/Movie/Form'

import type { EditProps } from '.'

export const EditForm = ({ movieId, values, onSuccess }: EditProps) => {
  const { toggleDialog } = useDialog()

  const handleSuccess = () => {
    toast.success('Filme atualizado com sucesso')
    toggleDialog()
    onSuccess?.()
  }

  const mutation = useMutation({
    mutationFn: (data: MovieSchema) => updateMovie(movieId, data),
    onSuccess: () => handleSuccess(),
    onError: () => toast.error('Erro ao atualizar filme')
  })

  const handleSubmit = (data: MovieSchema) => {
    mutation.mutate({
      ...data,
      release: new Date(data.release).toISOString()
    })
  }

  return (
    <Form
      defaultValues={values}
      onSubmit={handleSubmit}
      isSubmitting={mutation.isPending}
      submitText="Atualizar"
      onCancel={toggleDialog}
    />
  )
}
