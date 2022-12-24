import styled from "styled-components";

export const Container = styled.div`
  padding-top: 160px;
  width: 100%;
  background: rgb(${(props) => props.theme.colors.darkBackground});
  padding-bottom: 160px;
`

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Wrapper = styled.div``

export const Headers = styled.h1`
  font-size: 72px;
  font-weight: 100;
  font-family: "Lato", sans-serif;
`

export const Header = styled.span`
  font-size: 144px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  animation: text-appearing 2s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  opacity: 0;
  color: rgb(${(props) => props.theme.colors.primary});
  
  @keyframes text-appearing {
    from {
      transform: scale(0.5);
      opacity: 0;
      filter: blur(1.5rem);
    }
    to {
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }
`

export const Test = styled.h1`
  font-size: 144px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
`
