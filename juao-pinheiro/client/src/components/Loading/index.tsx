import * as S from "./styles"
import LoadingGif from "../../assets/HomeAssets/loading.gif"

const Loading = () => {
  
  return (
    <S.Container >
      <S.LoadingArea>
        <img className="icon-loading" src={LoadingGif} alt="" />
        <p>Aguarde em quanto adicionamos um novo filme...</p>
      </S.LoadingArea>
    </S.Container >
  );
 };
  
  export default Loading;
  