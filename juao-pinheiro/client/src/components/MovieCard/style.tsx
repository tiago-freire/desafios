import styled from "styled-components"

export const Movie = styled.div`
    cursor: pointer;
    position: relative;


    img{
        width: 320px;
        height: 440px;
    }

    &::after {
            content: "";
            position: absolute;
            bottom: 4px;
            left: 0;
            width: 100%;
            height: 60%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
            pointer-events: none;
        }
`
export const InfoMovie = styled.div`
    position: absolute;
    bottom: 4px;
    color: white;
    padding: 20px;
    width: 100%;
    z-index: 3;
`

