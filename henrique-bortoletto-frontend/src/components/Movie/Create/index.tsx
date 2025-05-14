import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { CreateForm } from '@/components/Movie/Create/CreateForm'

import * as S from '../Base'

export const Create = () => (
  <S.DialogProvider>
    <S.DialogRoot>
      <SheetTrigger asChild>
        <Button variant="default" title="Adicionar Filme" className="flex-1">
          Adicionar Filme
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px] h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="mb-8">Adicionar Filme</SheetTitle>
          <CreateForm />
        </SheetHeader>
      </SheetContent>
    </S.DialogRoot>
  </S.DialogProvider>
)
