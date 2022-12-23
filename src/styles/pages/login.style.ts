import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const Side = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.lightSide {
    background: rgba(${(props) => props.theme.colors.lightBackground});
  }
`

export const Box = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
`

export const Link = styled.p`
  text-decoration: underline;
  display: inline;
  cursor: pointer;
  color: rgb(${(props) => props.theme.colors.primary})
`

export const Tea = styled.span`
  font-size: 12px;
  opacity: .75;
`

export const MarginWrapper = styled.div`
  margin: 15px 0;
`
