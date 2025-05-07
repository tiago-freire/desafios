import * as S from "./style";
import LogoCubosDark from "../../assets/HeaderAssets/logo-cubos.svg";
import Logo500Dark from "../../assets/HeaderAssets/logo-cubos-500.svg";
import LogoCubosLight from "../../assets/HeaderAssets/logo-light.png";
import Logo500Light from "../../assets/HeaderAssets/logo-500-light.png";
import Sun from "../../assets/HeaderAssets/sun.svg";
import Moon from "../../assets/HeaderAssets/moon.png";
import Button from "../Button/style";
import useIsWide from "../../hooks/useIsWide";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const isWide = useIsWide(500);
  const { logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const LogoCubos = isDarkMode ? LogoCubosDark : LogoCubosLight;
  const Logo500 = isDarkMode ? Logo500Dark : Logo500Light;

  return (
    <S.Header>
      <img className="logo-cubos" src={isWide ? LogoCubos : Logo500} alt="logo-cubos" />
      <S.BtnArea>
        <S.ButtonColor onClick={toggleTheme}>
          <img src={isDarkMode ? Sun : Moon} alt={isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro"} />
        </S.ButtonColor>
        <Button width="90px" onClick={logout}>Logout</Button>
      </S.BtnArea>
    </S.Header>
  );
};

export default Header;