import * as S from './Base'

type DetailDescriptionProps = {
  title: string
  value: string
}

export const DetailDescription = ({ title, value }: DetailDescriptionProps) => (
  <S.DetailDescriptionRoot>
    <S.DetailDescriptionTitle>{title}</S.DetailDescriptionTitle>
    <S.DetailDescriptionText>{value}</S.DetailDescriptionText>
  </S.DetailDescriptionRoot>
)
