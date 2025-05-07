import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Theme } from './Theme/styles';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  button {
    cursor: pointer;
  }

  input, textarea, select {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export default GlobalStyles;