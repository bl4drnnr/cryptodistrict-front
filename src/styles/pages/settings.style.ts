import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  padding-top: 150px;
`;

export const SettingsPageHeader = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  border: 1px solid rgb(${(props) => props.theme.colors.opposite}, .25);
  border-radius: 8px;
`;

export const SettingsPageHeaderSide = styled.div`
  display: flex;
`;

export const SettingsHeaderTextWrapper = styled.div``;

export const Nickname = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const PersonalAccount = styled.p`
  color: rgba(${(props) => props.theme.colors.textColor}, .5);
`;

export const SettingsHeaderItemsWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
`;

export const UserProfilePicture = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  
  .ava {
    border-radius: 50%;
  }
`;

export const SettingsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  padding: 10px;
`;

export const SidebarContainer = styled.div`
  width: 250px;
`;

export const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

export const SettingsContent = styled.div`
  width: 100%;
  padding-left: 50px;
`;
