import styled from "styled-components";

type ButtonProps = {
  width?: string;
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.white
      : theme.colors.black};
      
  height: 44px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  transition: 0.5s;
  margin-left: auto;


  &:hover{
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.button};
  }
`;

export default Button;
