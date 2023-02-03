import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Placeholder = styled.p`
  opacity: .9;
  font-size: 14px;
  margin: 14px 0;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-weight: 200;
`;

export const BasicInput = styled.input`
  background-color: rgba(${(props) => props.theme.colors.inputBackground}, 0.85);
  border: 1px solid rgba(${(props) => props.theme.colors.primary}, .3);
  border-radius: 5px;
  outline: none;
  padding: 0 16px 0 16px;
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  font-size: 16px;
  line-height: 24px;
  transition: .3s;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-weight: 100;
  font-family: "Inter", sans-serif;

  &.high {
    height: 48px;
  }

  &.onError {
    border: 1px solid rgba(${(props) => props.theme.colors.error}) !important;
  }

  &:focus {
    outline: none !important;
    border: 1px solid rgba(${(props) => props.theme.colors.primary}, 1);
  }
`;

export const OnErrorMessage = styled.p`
  color: rgb(${(props) => props.theme.colors.error});
  font-size: small;
  font-weight: 400;
  margin-top: 5px;
`;
