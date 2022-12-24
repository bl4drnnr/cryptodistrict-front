import styled from "styled-components";

export const Box = styled.div`
  width: 500px;
  &.scrollable {
   height: 100vh;
   overflow-y: auto;
   padding: 20px;
   -ms-overflow-style: none;
   scrollbar-width: none;
   &::-webkit-scrollbar {
    display: none;
   }
  }
`

export const Link = styled.span`
  text-decoration: underline;
  display: inline;
  cursor: pointer;
  color: rgb(${(props) => props.theme.colors.primary});
`

export const Tea = styled.span`
  font-size: 14px;
  opacity: .75;
`

export const MarginWrapper = styled.div`
  margin: 15px 0;
`

export const MarginVerticalWrapper = styled.span`
  width: 100%;
  margin: 0 10px;
`

export const PasswordCheckBox = styled.div`
  width: 100%;
  padding: 15px;
`

export const PasswordCheckLine = styled.div`
  display: inline-grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
  font-weight: 100;
`

export const Dot = styled.div`
  height: 16px;
  width: 16px;
  background-color: rgb(${(props) => props.theme.colors.success});
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;

  &.error {
    background-color: rgb(${(props) => props.theme.colors.error});
  }
`

export const WelcomeTitle = styled.h1`
  text-align: center;
`

export const WelcomeText = styled.p`
  font-size: 20px;
  margin-top: 20px;
`

export const LoginOptions = styled.div`
  display: flex;
  margin: 20px 0;
`

export const LoginOption = styled.p`
  cursor: pointer;
  transition: .2s;
  margin: 16px 0;
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary})
  }
`

export const VerticalLine = styled.div`
  margin: 0 20px;
  width: 1px;
  background-color: white;
  height: 50px;
  float: left;
  opacity: .5;
`

export const Buttons = styled.div`
  display: flex;
  //justify-content: space-between;
`
