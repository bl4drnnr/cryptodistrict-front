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
  color: rgb(${(props) => props.theme.colors.primary});
`

export const Tea = styled.span`
  font-size: 12px;
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
