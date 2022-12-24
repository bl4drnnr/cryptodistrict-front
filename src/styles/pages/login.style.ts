import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
`

export const Side = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(${(props) => props.theme.colors.darkBackground});

  &.lightSide {
    background: rgba(${(props) => props.theme.colors.lightBackground});
  }
`

export const Box = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
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

export const PasswordCheckBox = styled.div`
  width: 100%;
  border: 1px solid rgb(${(props) => props.theme.colors.primary}, .3);
  border-radius: 8px;
  padding: 15px;
`

export const PasswordCheckLine = styled.div`
  display: inline-grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  padding: 5px;
`

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: #34c523;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;

  &.error {
    background-color: #e85656;
  }
`

export const WelcomeTitle = styled.h1`
  text-align: center;
`

export const WelcomeText = styled.p`
  font-size: 20px;
  margin-top: 20px;
`

export const LoginHeader = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  justify-content: space-between;
`

export const LoginHeaderTitle = styled.h3`
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  transition: .2s;
  cursor: pointer;
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary})
  }
`

export const LoginHeaderButton = styled.div`
  display: flex;
  align-items: baseline;
  padding: 30px;
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
