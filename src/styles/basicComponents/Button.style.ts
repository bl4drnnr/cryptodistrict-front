import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const BasicButton = styled.button`
  height: 36px;
  width: 100%;
  background-color: rgba(35, 36, 40, 0.85);
  border-radius: 5px;
  cursor: pointer;
  min-width: 100px;
  border: 1px solid rgb(${(props) => props.theme.colors.primary}, .3);
  transition: .3s;
  
  &.highHeight {
    height: 48px;
  }
  
  &:hover {
    border: 1px solid rgb(${(props) => props.theme.colors.primary}, 1);
  }
`

export const ButtonContent = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 100;
  font-family: "Inter", sans-serif;
`;
