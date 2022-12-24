import styled from "styled-components";

export const HomeWelcomeContainer = styled.div`
  height: calc(100vh - 80px);
`

export const HomeWelcomeBox = styled.div`
  text-align: center; 
  align-items: center;
  justify-content: center;
  display: flex;
  height: calc(300px - 50px);
  &.name {
    align-items: end;
  }
`

export const HomeWelcomeTitle = styled.span`
  font-size: 72px;
  font-weight: 100; 
  font-family: "Lato", sans-serif;
  position: relative;
  display: block;
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
    width: 100vw;
    height: 100%;
    top: 0;
    left: 50%;
    background: #eee;
    transform: translateX(-50%);
    z-index: -2;
  }
`

export const BoldWeb3 = styled.span`
  cursor: pointer;
  font-weight: 600;
  color: rgb(${(props) => props.theme.colors.primary});
`

export const Bold = styled.span`
  font-weight: 600;
`
