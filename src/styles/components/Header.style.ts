import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  position: relative;
`

export const Box = styled.div`
  width: 100%;
  height: 50%;
  top: 25%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  width: 190px;
  justify-content: space-between;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.h3`
  margin: 0 30px;
  cursor: pointer;
  transition: .2s;
  
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary});
  }
`

export const Button = styled.div`
  width: 90px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  
  &.logIn {
    &:hover {
      background: rgba(255, 255, 255, .15);
      color: rgb(${(props) => props.theme.colors.primary});
    }
  }
  
  &.register {
    background: rgb(${(props) => props.theme.colors.primary});
    color: black;
  }
`

export const Logo = styled.h1`
  cursor: pointer;
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary});
  }
`
