import styled from 'styled-components';

export const FieldsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .25);
  margin: 0 0 15px 30px;
  padding-bottom: 10px;
  &.flex {
    display: flex;
  }
  &.no-line {
    border: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0 10px;
`;
