import styled from "styled-components"
import { media } from "../../styles/Theme/media";
import { css } from "styled-components";


export const Container = styled.div`
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
`
export const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.backgroundCardInput};
    width: 30vw;
    padding: 24px;
    border-radius: 5px;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 20px;


    ${media.tablet(css`
        width: 90%;
    `)}
`

export const ModalTitle = styled.h1`
    font-size: 25px;
`

export const ModalActions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
`

export const ButtonCancel = styled.button`
    padding: 10px 16px;
    background: ${({ theme }) => theme.colors.cancel};
    color: #fff;
    border: none;
    cursor: pointer; 
    height: 44px;
    border-radius: 4px;
`

