import styled from "styled-components"
import { media } from "../../styles/Theme/media";
import { css } from "styled-components";

export const Header = styled.header`
    background-color: url(${props => props.theme.title === 'dark' ? props.theme.colors.black : props.theme.colors.white});
    width: 100%;
    height: 72px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};

    .logo-cubos{
        width: 250px;
    }

    ${media.tablet(css`
        .logo-cubos{
            width: 150px;
        }
    `)}
`

export const BtnArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ButtonColor = styled.button`
    width: 64px;
    height: 44px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.cancel};
    border: none;
    transition: 0.5s;

    img{
        width: 40px;
        height: 40px;
    }

    &:hover{
        opacity: .6;
    }
`

