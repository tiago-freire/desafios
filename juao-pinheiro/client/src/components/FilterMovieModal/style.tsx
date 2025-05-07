import styled from "styled-components"
import { media } from "../../styles/Theme/media";
import { css } from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
`;

export const Modal = styled.div`
  background: ${({ theme }) =>
  theme.title === 'dark'
    ? theme.colors.backgroundCardInput
    : theme.colors.white};

  width: 400px;
  padding: 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  ${media.tablet(css`
      width: 90%;
  `)}
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
  border: ${({ theme }) =>
  theme.title === 'dark'
    ? `1px solid ${theme.colors.white}`
    : `1px solid ${theme.colors.black}`};

  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
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
  margin-top: 40px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
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

