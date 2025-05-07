import styled from "styled-components";
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


  export const ActionsHome = styled.div`
    z-index: 2;
    display: flex;
    gap: 10px;               
    margin-left: auto;
    align-items: center;

    ${media.tablet(css`
       flex-direction: column;
       margin-left: 0;
    `)}
  `

  export const StyledInput = styled.input`
      width: 488px;
      height: 44px;
      border-radius: 1px;
      padding: 16px;
      background-color: ${({ theme }) => theme.colors.input};
      border: 1px solid ${({ theme }) => theme.colors.borderInput};
      color: ${({ theme }) => theme.colors.text};

      ${media.tablet(css`
        width: 100%;
      `)}
  `
  export const InputWrapper = styled.div`
    position: relative; 
    display: inline-flex;
    align-items: center;

    ${media.tablet(css`
        width: 100%;
    `)}
  `
  export const IconSearch = styled.img`
    position: absolute;
    right: 12px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  `

  export const ButtonFilter = styled.button`
    width: 64px;
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
        width: 110px;
    `)}
  `

export const SectionCards = styled.div`
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.backgroundCards};
    padding: 24px;
    border-radius: 4px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
`

export const AreaButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${media.tablet(css`
      gap: 10px;
  `)}
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;



export const FilterBadge = styled.span`
  background-color: #ff5555;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  margin-left: 8px;
  font-size: 12px;
`;

export const ClearFiltersButton = styled.button`
  background: transparent;
  border: none;
  color: #ff5555;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff2222;
  }
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  width: 100%;
  font-size: 18px;
  color: #777;
  margin-top: 40px;
`;


