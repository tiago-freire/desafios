import styled from "styled-components"
import { media } from "../../styles/Theme/media";
import { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCardInput};
  width: 400px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};

  ${media.tablet(css`
      margin-bottom: 5px;
      height: 30px;
      padding: 5px;
  `)}
`;

export const TextArea = styled.textarea`
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Select = styled.select`
  height: 50px;
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
`

export const LinkYoutube = styled.div`
  margin: 10px 0px;

  label{
    font-size: 13px;
    font-weight: bold;
  }
`
export const ButtonCancel = styled.button`
   padding: 10px 16px;
    background: ${({ theme }) => theme.colors.cancel};
    color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.white
      : theme.colors.black};

    border: none;
    cursor: pointer;
    border-radius: 4px;
`

export const Button = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.button};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 15px;
  display: block;
`;


