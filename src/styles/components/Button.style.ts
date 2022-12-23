import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(35, 36, 40, 0.85);
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid rgba(${(props) => props.theme.colors.primary}, .3);

  :hover {
    border: 1px solid rgb(${(props) => props.theme.colors.primary});
  }
  
  &.disabled {
    background: red;
  }
`;

export const ButtonContent = styled.p`
  color: rgba(238, 238, 238, .85);
  font-size: 18px;
`;
