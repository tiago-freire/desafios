import { css } from "styled-components";

export const media = {
  mobile: (styles: any) => css`
    @media (max-width: 500px) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (max-width: 1024px) {
      ${styles}
    }
  `,

  alternative: (styles: any) => css`
    @media (max-width: 1105px) {
      ${styles}
    }
  `,
};
