import * as S from "./style";
import Button from '../Button/style';


type ModalDeleteProps = {
  onConfirmDelete: () => void;
  onCancel: () => void;
};

const ModalDelete = ({ onConfirmDelete, onCancel }: ModalDeleteProps) => {
  return (
    <S.Container>
      <S.ModalContent>
        <S.ModalTitle>Tem certeza que deseja deletar este filme?</S.ModalTitle>
          <p>Para confirmar clique em <b>"Avançar"</b></p>
        <S.ModalActions>
          <S.ButtonCancel onClick={onCancel}>Cancelar</S.ButtonCancel>
          <Button width='125px' style={{marginLeft: "0px"}} onClick={onConfirmDelete}>Avançar</Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.Container>
  );
};

export default ModalDelete;

