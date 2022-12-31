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
  color: black;
  
  &:hover {
    background-color: rgb(0, 0, 0, .1);
    border-radius: 8px;
  }
`;

export const Flag = styled.span`
  font-size: 32px;
  padding: 0 15px;
`;

export const LanguageName = styled.span`
  font-size: 24px;
  margin-left: 15px;
  @media screen and (max-width: 520px) {
    font-size: 18px;
  }
`;
