import styled, { css } from "styled-components";
import backgroundImg from "../../assets/LoginAssets/background.svg";
import { media } from "../../styles/Theme/media";

export const Container = styled.section`
    background: ${({ theme }) =>
    theme.title === 'dark'
      ? `url(${backgroundImg}) center/cover no-repeat`
      : theme.colors.background};
      
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => {
      const bgColor = theme.colors.background;
      return `linear-gradient(
        to top,
        ${bgColor}ff 0%,
        ${bgColor}e6 70%,
        ${bgColor}b3 80%,
        ${bgColor}00 100%
      )`;
    }};
    z-index: 1;
  }
`

export const Form = styled.form`
    z-index: 2;
    background-color:  ${({ theme }) => theme.colors.backgroundLogin};
    padding: 16px;
    border-radius: 4px;
    width: 412px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${({ theme }) => theme.colors.white};


    ${media.mobile(css`
       width: 90%;
    `)}
`
export const AreaInput = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const Label = styled.label``
export const Input = styled.input`
    width: 100%;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #3C393F;
    color: #5d5861;
    background-color: #1A191B;
    padding: 12px;
`
export const LoginControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Error = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 4px;
  display: block;
`;