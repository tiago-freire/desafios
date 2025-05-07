import styled, { css } from "styled-components";
import backgroundImg from "../../assets/LoginAssets/background.svg";
import { media } from "../../styles/Theme/media";

export const Container = styled.section`
    background-image: url(${backgroundImg});
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
        background: linear-gradient(
        to top,
        #121113ff 0%,
        #121113e6 70%,
        #121113b3 80%,
        #12111300 100%
        );
        z-index: 1;
    }
  `

export const Form = styled.form`
    z-index: 2;
    background-color:  ${({ theme }) => theme.colors.backgroundCardInput};
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
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 15px;
  display: block;
`;
