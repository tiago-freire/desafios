import styled from "styled-components"


export const Container = styled.div`
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    background-color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.black
      : theme.colors.white};

    button{
        background-color: ${({ theme }) => theme.colors.button};
        color: #fff;
        padding: 10px;
        width: 60px;
        height: 60px;
        border: none;
        font-size: 20px;
    }
`