import styled from 'styled-components';

export const BasicInput = styled.input`
  background-color: rgba(35, 36, 40, 0.85);
  width: 100%;
  border: none;
  font-size: 16px;

  padding: 12px;
  border-radius: 8px;
  
  :focus {
    outline: none !important;
    border: 1px solid rgba(255, 215, 0, .5);
  }
`;
