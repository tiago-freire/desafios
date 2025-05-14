import * as S from './Base'

type DetailHeaderProps = {
  title: string
}

export const DetailsHeader = ({ title }: DetailHeaderProps) => (
  <S.DetailsHeaderContent>
    <S.DetailsHeaderTitle>{title}</S.DetailsHeaderTitle>
    <S.DetailsHeaderSubTitle>Título original: {title}</S.DetailsHeaderSubTitle>
  </S.DetailsHeaderContent>
)
