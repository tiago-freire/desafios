import styled from "styled-components"


export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9999;
    font-size: 18px;
`

export const LoadingArea = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundCardInput};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    height: 100vh;
    width: 100vw;

    .icon-loading{
        width: 150px;
    }

`