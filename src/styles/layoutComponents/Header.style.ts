import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  background-color: rgb(${(props) => props.theme.colors.lightBackground});
  position: fixed;
  z-index: 999;
`;

export const Box = styled.div`
  width: 90%;
  height: 50%;
  margin: 15px auto;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const NavigationButtons = styled.div`
  width: 33%;
  display: flex;
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 33%;
  @media only screen and (max-width: 780px) {
    float: right;
    width: 100%;
  } 
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.h3`
  margin: 5px 15px 0 15px;
  cursor: pointer;
  transition: .2s;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  color: rgb(${(props) => props.theme.colors.textColor});
  
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary});
  }
`;

export const Button = styled.div`
  &:first-child {
    margin-left: auto;
  }
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
  color: rgb(${(props) => props.theme.colors.textColor});
  
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
`;

export const Logo = styled.h2`
  cursor: pointer;
  transition: .2s;
  margin-right: 35px;
  margin-top: 5px;
  color: rgb(${(props) => props.theme.colors.textColor});
  
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary});
  }
`;

export const SearchBarWrapper = styled.div`
  width: 33%;
  @media only screen and (max-width: 1260px) {
    display: none;
  }
`;

export const SearchBarBox = styled.div`
  width: 200px;
  margin: 0 auto;
`;
