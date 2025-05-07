import * as S from "./style"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Footer>
        <p>{currentYear} © Todos os direitos reservados a <b>Cubos Movies</b></p>
    </S.Footer>
  )
}

export default Footer
