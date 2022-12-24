import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`

export const Placeholder = styled.p`
  opacity: .9;
  font-size: 14px;
  margin: 14px 0;
  font-weight: 200;
`

export const BasicInput = styled.input`
  background-color: rgba(35, 36, 40, 0.85);
  border: 1px solid rgba(${(props) => props.theme.colors.primary}, .3);
  border-radius: 5px;
  outline: none;
  padding: 0 16px 0 16px;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  transition: .3s;
  font-weight: 100;
  font-family: "Inter", sans-serif;
  
  &.onError {
    border: 1px solid rgba(${(props) => props.theme.colors.error}) !important;
  }

  &:focus {
    outline: none !important;
    border: 1px solid rgba(${(props) => props.theme.colors.primary}, 1);
  }
`;
