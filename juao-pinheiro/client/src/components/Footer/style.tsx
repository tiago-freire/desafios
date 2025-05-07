import styled from "styled-components"


export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.backgroundCardInput};
    padding: 24px;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-top: 2px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    
    p{
        font-size: 16px;
    }
`

