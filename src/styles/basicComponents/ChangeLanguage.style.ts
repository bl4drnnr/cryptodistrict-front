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
  top: 45px;
  left: -75px;
  position: absolute;

  background-color: rgb(${(props) => props.theme.colors.darkBackground});
  border: 1px solid white;
  border-radius: 8px;
`;

export const LanguageItem = styled.div`
  padding: 15px 5px;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  &:hover:first-child {
    border-radius: 8px 8px 0 0 ;
  }
  &:hover:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
