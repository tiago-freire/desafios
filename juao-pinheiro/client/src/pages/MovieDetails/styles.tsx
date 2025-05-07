import styled from 'styled-components';
import backgroundImgDark from "../../assets/LoginAssets/background.svg";
import { media } from "../../styles/Theme/media";
import { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) =>
    theme.title === 'dark'
      ? `url(${backgroundImgDark}) center/cover no-repeat`
      : theme.colors.background};
  width: 100%;
  min-height: calc(100vh - 72px - 100px);
  z-index: 0;
  padding: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => {
      const bgColor = theme.colors.background;
      return `linear-gradient(
        to top,
        ${bgColor}ff 0%,
        ${bgColor}e6 70%,
        ${bgColor}b3 80%,
        ${bgColor}00 100%
      )`;
    }};
    z-index: 1;
  }
`;


export const ContentInfo = styled.div`
    position: relative;
    z-index: 2;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: flex;
    flex-direction: column;
    padding: 32px 5vw;
    gap: 30px;
`;

export const InfoMovie = styled.div`
   display: flex;
   justify-content: space-between;

   ${media.alternative(css`
      flex-direction: column;
  `)}
`;

export const HeaderInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tablet(css`
        flex-direction: column;
        gap: 30px;
        width: 100%;
    `)}
`;

export const ActionsMovie = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const LeftInfoMovie = styled.div`
    display: flex;
    gap: 20px;
    align-items: self-start;

    ${media.tablet(css`
      flex-direction: column;
      align-items: center;
    `)}
`;

export const StatisticsTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Statistic = styled.div`
    background:${({ theme }) =>
    theme.title === 'dark'
      ? "rgba(255, 255, 255, 0.05)"
      : theme.colors.textPrimary};

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 4px;
    padding: 15px;
    color: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s ease;
`;

export const StatisticGenre = styled.div`
    background-color: ${({ theme }) => theme.colors.genre};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    margin-top: 20px;
`;

export const DesciptionMovie = styled.div`
    background: ${({ theme }) =>
    theme.title === 'dark'
      ? "rgba(255, 255, 255, 0.05)"
      : theme.colors.textPrimary};
      
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 4px;
    padding: 15px;
    color: ${({ theme }) => theme.colors.white};
    width: 30vw;
    transition: transform 0.3s ease;

    ${media.tablet(css`
      flex-direction: column;
      width: 100%;
    `)}
`;

export const StatisticsMovie = styled.div`
    display: flex;
    width: 400px;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px;
    margin-left: 20px;

    ${media.alternative(css`
      width: 100%;
      margin: 30px 0;
  `)}
`;

export const Title = styled.h1``;
export const TitleArea = styled.div``;
export const Image = styled.img`
  width: 400px;
  height: 550px;

    ${media.tablet(css`
      width: 100%;
      height: auto;
    `)}
`;
export const Text = styled.p`
    font-size: 20px;
`;
export const Button = styled.button``;

export const DeleteButton = styled(Button)`
    width: 91px;
    height: 44px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.cancel};
    border: none;
    color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.white
      : theme.colors.black};
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        opacity: .6;
    }

    ${media.tablet(css`
      width: 100px;
    `)}
`;
export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
`;

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
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.backgroundCardInput};
    width: 400px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ModalTitle = styled.h2`
    margin-bottom: 20px;
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
export const Select = styled.select`
    width: 100%;
    height: 35px;
    padding: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
`;
export const TextArea = styled.textarea`
    margin-bottom: 12px;
    padding: 10px;
    border: 1px solid #ccc;
    color: ${({ theme }) => theme.colors.black};
    resize: vertical;
`;
export const FileInput = styled.input``;
export const ButtonBack = styled.button`
    color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.white
      : theme.colors.black};
    background-color: transparent;
    border: none;
    margin-right: auto;
    font-size: 50px;
    cursor: pointer;

`;
export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const SectionTrailer = styled.div`
`;



