import 'styled-components';
import { Theme } from '../styles/Theme/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}