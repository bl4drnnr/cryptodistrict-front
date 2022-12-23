import styled from 'styled-components';

export const Placeholder = styled.p`
  opacity: .75;
  font-weight: 300;
`

export const BasicInput = styled.input`
  background-color: rgba(35, 36, 40, 0.85);
  border: 1px solid rgba(${(props) => props.theme.colors.primary}, .5);
  width: 100%;
  font-size: 16px;

  padding: 12px;
  border-radius: 8px;
  
  :focus {
    outline: none !important;
    border: 1px solid rgba(${(props) => props.theme.colors.primary}, 1);
  }
`;
