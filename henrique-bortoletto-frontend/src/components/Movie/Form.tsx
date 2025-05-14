import { z } from 'zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { MessageError } from '@/components/MessageError'

import { genres } from '@/constants/genres'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const statusSchema = z.enum([
  'LANCADO',
  'EM_PRODUCAO',
  'CANCELADO',
  'ANUNCIADO',
  'POS_PRODUCAO'
])

type MovieStatus = z.infer<typeof statusSchema>

const movieSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  sinopse: z.string().min(10, 'Sinopse deve ter no mínimo 10 caracteres'),
  popularity: z
    .number({ invalid_type_error: 'Popularidade deve ser um número' })
    .min(0, 'Popularidade deve ser maior que 0'),
  votes: z
    .number({ invalid_type_error: 'Número de votos deve ser um número' })
    .min(0, 'Número de votos deve ser maior que 0'),
  release: z.string().min(1, 'Data de lançamento é obrigatória'),
  duration: z
    .number({ invalid_type_error: 'Duração deve ser um número' })
    .min(1, 'Duração deve ser maior que 0'),
  status: statusSchema,
  language: z.string().min(2, 'Idioma é obrigatório'),
  budget: z
    .number({ invalid_type_error: 'Orçamento deve ser um número' })
    .min(0, 'Orçamento deve ser maior que 0'),
  revenue: z
    .number({ invalid_type_error: 'Receita deve ser um número' })
    .min(0, 'Receita deve ser maior que 0'),
  profit: z.number({ invalid_type_error: 'Lucro deve ser um número' }),
  cover: z.string().min(1, 'Capa é obrigatória'),
  thumb: z.string().min(1, 'Thumbnail é obrigatória'),
  embeed_yt: z.string().url('URL do YouTube inválida'),
  genres: z.array(z.enum(genres.map((g) => g.value) as [string, ...string[]]))
})

export type MovieSchema = z.infer<typeof movieSchema>

type FormProps = {
  defaultValues?: Partial<MovieSchema>
  onSubmit: (data: MovieSchema) => void
  isSubmitting?: boolean
  submitText: string
  onCancel: () => void
}

export const Form = ({
  defaultValues,
  onSubmit,
  isSubmitting,
  submitText,
  onCancel
}: FormProps) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<MovieSchema>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      profit: 0,
      genres: [],
      ...defaultValues
    }
  })

  const budget = watch('budget')
  const revenue = watch('revenue')
  const selectedGenres = watch('genres')

  useEffect(() => {
    if (Number.isFinite(budget) && Number.isFinite(revenue)) {
      setValue('profit', revenue - budget)
    }
  }, [budget, revenue, setValue])

  const handleCheckboxChange = (genre: string) => (checked: boolean) => {
    setValue(
      'genres',
      checked
        ? [...(selectedGenres || []), genre]
        : (selectedGenres || []).filter((g) => g !== genre)
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex-1 flex justify-between flex-col gap-4"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <div className="space-y-0.5">
            <Input
              id="title"
              placeholder="Digite o título do filme"
              className="p-2"
              {...register('title')}
            />
            {errors.title && (
              <MessageError>{errors.title.message}</MessageError>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="release">Data de Lançamento</Label>
            <div className="space-y-0.5">
              <Input
                id="release"
                type="date"
                placeholder="Data de lançamento"
                className="p-2"
                {...register('release')}
              />
              {errors.release && (
                <MessageError>{errors.release.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duração (minutos)</Label>
            <div className="space-y-0.5">
              <Input
                id="duration"
                type="number"
                placeholder="Duração em minutos"
                className="p-2"
                {...register('duration', { valueAsNumber: true })}
              />
              {errors.duration && (
                <MessageError>{errors.duration.message}</MessageError>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="language">Idioma</Label>
            <div className="space-y-0.5">
              <Select
                defaultValue={defaultValues?.language}
                onValueChange={(value) => setValue('language', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt">Português</SelectItem>
                  <SelectItem value="en">Inglês</SelectItem>
                  <SelectItem value="es">Espanhol</SelectItem>
                  <SelectItem value="fr">Francês</SelectItem>
                </SelectContent>
              </Select>
              {errors.language && (
                <MessageError>{errors.language.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <div className="space-y-0.5">
              <Select
                defaultValue={defaultValues?.status}
                onValueChange={(value: MovieStatus) =>
                  setValue('status', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LANCADO">Lançado</SelectItem>
                  <SelectItem value="EM_PRODUCAO">Em Breve</SelectItem>
                  <SelectItem value="CANCELADO">Cancelado</SelectItem>
                  <SelectItem value="ANUNCIADO">Anunciado</SelectItem>
                  <SelectItem value="POS_PRODUCAO">Pós produção</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <MessageError>{errors.status.message}</MessageError>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="popularity">Popularidade</Label>
            <div className="space-y-0.5">
              <Input
                id="popularity"
                type="number"
                placeholder="Popularidade do filme"
                className="p-2"
                {...register('popularity', { valueAsNumber: true })}
              />
              {errors.popularity && (
                <MessageError>{errors.popularity.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="votes">Votos</Label>
            <div className="space-y-0.5">
              <Input
                id="votes"
                type="number"
                placeholder="Número de votos"
                className="p-2"
                {...register('votes', { valueAsNumber: true })}
              />
              {errors.votes && (
                <MessageError>{errors.votes.message}</MessageError>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-2">
            <Label htmlFor="budget">Orçamento ($)</Label>
            <div className="space-y-0.5">
              <Input
                id="budget"
                type="number"
                placeholder="Orçamento"
                className="p-2"
                {...register('budget', { valueAsNumber: true })}
              />
              {errors.budget && (
                <MessageError>{errors.budget.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="revenue">Receita ($)</Label>
            <div className="space-y-0.5">
              <Input
                id="revenue"
                type="number"
                placeholder="Receita"
                className="p-2"
                {...register('revenue', { valueAsNumber: true })}
              />
              {errors.revenue && (
                <MessageError>{errors.revenue.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profit">Lucro ($)</Label>
            <div className="space-y-0.5">
              <Input
                id="profit"
                type="number"
                disabled
                placeholder="Lucro"
                className="p-2"
                {...register('profit', { valueAsNumber: true })}
              />
              {errors.profit && (
                <MessageError>{errors.profit.message}</MessageError>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sinopse">Sinopse</Label>
          <div className="space-y-0.5">
            <Textarea
              id="sinopse"
              placeholder="Informe a sinopse do filme"
              {...register('sinopse')}
            />
            {errors.sinopse && (
              <MessageError>{errors.sinopse.message}</MessageError>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="embeed_yt">Link do Trailer (YouTube)</Label>
          <div className="space-y-0.5">
            <Input
              id="embeed_yt"
              className="p-2"
              placeholder="URL do YouTube"
              {...register('embeed_yt')}
            />
            {errors.embeed_yt && (
              <MessageError>{errors.embeed_yt.message}</MessageError>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cover">URL da Capa</Label>
            <div className="space-y-0.5">
              <Input
                id="cover"
                className="p-2"
                placeholder="Capa do filme"
                {...register('cover')}
              />
              {errors.cover && (
                <MessageError>{errors.cover.message}</MessageError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumb">URL da Thumbnail</Label>
            <div className="space-y-0.5">
              <Input
                id="thumb"
                className="p-2"
                placeholder="Thumbnail do filme"
                {...register('thumb')}
              />
              {errors.thumb && (
                <MessageError>{errors.thumb.message}</MessageError>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Gêneros</Label>
          <div className="grid grid-cols-3 gap-2">
            {genres.map((genre) => (
              <div key={genre.value} className="flex items-center space-x-2">
                <Checkbox
                  id={genre.value}
                  onCheckedChange={handleCheckboxChange(genre.value)}
                  checked={selectedGenres?.includes(genre.value)}
                />
                <Label htmlFor={genre.value}>{genre.label}</Label>
              </div>
            ))}
          </div>
          {errors.genres && (
            <MessageError>{errors.genres.message}</MessageError>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="default" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : submitText}
        </Button>
      </div>
    </form>
  )
}
