import styled from 'styled-components';

export const HomeWelcomeContainer = styled.div`
  height: 100vh;

  &.light {
    height: 100%;
    background-color: rgb(${(props) => props.theme.colors.lightBackground});
  }

  &.dark {
    height: 100%;
    background-color: rgb(${(props) => props.theme.colors.darkBackground});
  }
`;

export const HomeWelcomeBox = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 250px;
  @media only screen and (max-width: 780px) {
    height: 200px;
  }

  &.name {
    align-items: end;
  }

  &.block {
    display: block;
    animation: text-appearing 2s;
    @keyframes text-appearing {
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    }
  }
`;

export const InputWrapper = styled.div`
  text-align: start;
  max-width: 500px;
  margin: 0 auto 30px auto;
  @media only screen and (max-width: 780px) {
    width: 70%;
    text-align: center;
  }
`;

export const HomeWelcomeTitle = styled.span`
  font-size: 72px;
  font-weight: 100;
  font-family: "Lato", sans-serif;
  position: relative;
  display: block;
  animation: text-appearing 2s;

  @keyframes lines {
    from {
      width: 0
    }
    to {
      width: 100vw
    }
  }

  @keyframes text-appearing {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
  }

  &::before {
    height: 100%;
    left: -20px;
    right: -20px;
    background: rgb(13, 17, 23);
    z-index: -1;
  }

  &::after {
    animation: lines 2s;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 50%;
    background: #eee;
    transform: translateX(-50%);
    z-index: -2;
  }

  @media only screen and (max-width: 780px) {
    font-size: 40px;
  }
`;

export const BoldWeb3 = styled.span`
  cursor: pointer;
  font-weight: 600;
  color: rgb(${(props) => props.theme.colors.primary});
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const StartButton = styled.div`
  margin: 0 auto;
  height: 48px;
  width: 100%;
  background-color: rgb(${(props) => props.theme.colors.primary});
  color: black;
  border-radius: 8px;
  transition: .5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0 0 149px 9px rgba(${(props) => props.theme.colors.primary}, 0.37);
    -moz-box-shadow: 0 0 149px 9px rgba(${(props) => props.theme.colors.primary}, 0.37);
    box-shadow: 0 0 149px 9px rgba(${(props) => props.theme.colors.primary}, 0.37);
  }

  &.aboutPage {
    margin-top: 50px
  }
`;

export const ButtonText = styled.h3`
  width: 100%;
  font-weight: 100;

  @media only screen and (max-width: 780px) {
    font-size: 14px;
  }
`;

export const Lines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -1;
`;

export const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100vh;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  animation: appearing 2s;

  @keyframes appearing {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
    }
  }

  @keyframes drop {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: drop 4s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
    margin-left: -20%;

    &::after {
      animation-delay: 1.6s;
    }
  }

  &:nth-child(2) {
    display: none;
  }

  &:nth-child(3) {
    margin-left: 20%;

    &::after {
      animation-delay: 2.4s;
    }
  }

  &:nth-child(4) {
    margin-left: 40%;

    &::after {
      animation-delay: 4s;
    }
  }

  &:nth-child(5) {
    margin-left: -40%;

    &::after {
      animation-delay: 0.2s;
    }
  }

  &:nth-child(6) {
    margin-left: -30%;

    &::after {
      animation-delay: 0.9s;
    }
  }

  &:nth-child(7) {
    margin-left: 30%;

    &::after {
      animation-delay: 2.2s;
    }
  }
`;

export const CryptoDescriptionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 500px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const CryptoDescriptionBox = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &.mirrored {
    text-align: end;
  }
  
  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

export const CryptoDescriptionHeader = styled.h1`
  font-size: 58px;
  font-weight: 900;
  font-family: "Lato", sans-serif;

  @media only screen and (max-width: 1200px) {
    font-size: 32px;
  }

  &.subHeader {
    font-size: 28px;
    font-weight: 100;
    margin: 30px 0;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  position: relative;

  @media only screen and (max-width: 1200px) {
    height: 200px;
  }

  .image-nft {
    position: absolute;

    &.crypto-creation {
      left: 20%;
    }

    &.metamask {
      left: 0;
    }

    &.contract {
      left: 35%;
    }
  }

  .image {
    position: absolute;
    top: 10%;
    transition: .2s;
    @media only screen and (max-width: 1200px) {
      top: 0;
    }

    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }

    &.btc {
      right: 10%;
    }

    &.ltc {
      right: 0;
    }

    &.usdt {
      right: 20%;
    }

    &.eth {
      right: 30%;
    }
  }
`;

export const ImageWrapper = styled.div`
  @media only screen and (max-width: 1200px) {
    display: flex;
    margin: 0 auto;
  }
`;

export const ItemsWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;
