import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  background-color: rgb(${(props) => props.theme.colors.lightBackground});
  position: fixed;
  z-index: 999;
`

export const Box = styled.div`
  width: 90%;
  height: 50%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`

export const NavigationButtons = styled.div`
  display: flex;
`

export const Buttons = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.p`
  margin: 0 15px;
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
  transition: .2s;
  font-weight: 200;
  font-size: 14px;
  
  &.logIn {
    &:hover {
      background: rgba(255, 255, 255, .15);
      color: rgb(${(props) => props.theme.colors.primary});
    }
  }
  
  &.signup {
    background: rgb(${(props) => props.theme.colors.primary});
    color: black;
  }
`

export const Logo = styled.h2`
  cursor: pointer;
  transition: .2s;
  margin-right: 35px;
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary});
  }
`
