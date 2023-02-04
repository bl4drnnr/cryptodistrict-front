import styled from 'styled-components';

export const PersonalInformationContainer = styled.div`
  display: flex;
`;

export const PublicInfoTitleBox = styled.div`
  margin-bottom: 50px;
`;

export const PublicInfoTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  padding-bottom: 10px;
`;

export const FieldsContainer = styled.div`
  width: 65%;
  padding-bottom: 10px;
  margin: 0 auto;
  &.flex {
    display: flex;
  }
  &.no-line {
    border: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  &.button {
    padding-top: 30px;
  }
`;

export const AvaWrapper = styled.div`
  position: relative;
`;

export const ChangeAvatar = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
`;

export const PersonalInfoItemsWrapper = styled.div`
  &.fields {
    width: 75%;
  }
  &.changeAva {
    width: 25%;
  }
  
  &.end {
    text-align: end;
    .ava {
      border-radius: 50%;
    }
  }
`;

export const SeparationLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: .5;
  background-color: rgb(${(props) => props.theme.colors.opposite});
  margin-top: 15px;
`;
