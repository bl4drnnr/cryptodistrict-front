import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const BasicButton = styled.button`
  height: 36px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(${(props) => props.theme.colors.primary}, .5);
  transition: .3s;
  
  &.fillButton {
    background-color: rgb(${(props) => props.theme.colors.primary});
    color: black;
  }
  
  &.highHeight {
    height: 48px;
  }
  
  &.disabled {
    background-color: rgba(${(props) => props.theme.colors.disableColor}, 0.20);
  }
  
  &:hover {
    border: 1px solid rgb(${(props) => props.theme.colors.primary}, 1);
  }
`;

export const ButtonContent = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: rgb(${(props) => props.theme.colors.textColor});
`;
