import styled from 'styled-components';

export const FieldsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .25);
  padding-bottom: 10px;
  margin: 5px 0;
  &.flex {
    display: flex;
  }
  &.no-line {
    border: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  &.left {
    padding-left: 5px;
  }
  &.right {
    padding-right: 5px;
  }
  &.button {
    padding-top: 30px;
  }
`;
