import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 20px;
`

export const LabelBox = styled.label`
  display: block;
  position: relative;
  max-width: 12px;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &:hover input {
    background-color: #ccc;
  }
`

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 5px;
  
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`

export const Label = styled.p`
  padding-top: 4px;
  margin: 0;
  font-size: 12px;
  color: white;
`
