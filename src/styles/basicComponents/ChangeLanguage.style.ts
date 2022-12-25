import styled from 'styled-components';

export const ChangeLanguageContainer = styled.div`
  position: relative;
`;

export const PickedLanguage = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;

export const LanguagesList = styled.div`
  width: 100px;
  top: 20px;
  left: -100px;
  position: absolute;
  
  background: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
`;

export const LanguageItem = styled.div`
  padding: 15px 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  
  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }
  &:hover:first-child {
    border-radius: 8px 8px 0 0 ;
  }
  &:hover:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
