import {
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import type { MovieSchema } from '@/components/Movie/Form'
import { EditForm } from '@/components/Movie/Edit/EditForm'

import * as S from '../Base'

export type EditProps = {
  movieId: number
  values: MovieSchema
  onSuccess?: () => void
}

export const Edit = ({ ...props }: EditProps) => (
  <S.DialogProvider>
    <S.DialogRoot>
      <SheetTrigger asChild>
        <Button variant="default" title="Editar Filme">
          Editar Filme
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px] h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="mb-8">Editar Filme</SheetTitle>
          <EditForm {...props} />
        </SheetHeader>
      </SheetContent>
    </S.DialogRoot>
  </S.DialogProvider>
)
