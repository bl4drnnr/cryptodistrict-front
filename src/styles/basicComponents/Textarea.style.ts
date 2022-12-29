import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Placeholder = styled.p`
  opacity: .9;
  font-size: 14px;
  margin: 14px 0;
  font-weight: 200;
`;

export const BasicTextarea = styled.textarea`
  background-color: rgba(35, 36, 40, 0.85);
  border: 1px solid rgba(${(props) => props.theme.colors.primary}, .3);
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  line-height: 24px;
  transition: .3s;
  font-weight: 100;
  font-family: "Inter", sans-serif;

  padding: 15px;
  font-size: 14px;
  min-height: 56px;
  max-height: 200px;
  height: 120px;
  resize: vertical;
  white-space: pre-wrap;

  &.onError {
    border: 1px solid rgba(${(props) => props.theme.colors.error}) !important;
  }

  &:focus {
    outline: none !important;
    border: 1px solid rgba(${(props) => props.theme.colors.primary}, 1);
  }
`;
