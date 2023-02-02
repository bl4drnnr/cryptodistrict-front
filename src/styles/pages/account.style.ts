import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  padding-top: 150px;
`;

export const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  
  @media screen and (max-width: 520px) {
    display: block;
  }
`;

export const UserInfoContainer = styled.div`
  height: 255px;
  width: 100%;
  
  @media screen and (max-width: 520px) {
    margin: 0 auto;
    height: auto;
  }
`;

export const UserAssetsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px;
`;

export const UserProfilePicture = styled.div`
  display: flex;
  position: relative;
  
  .ava {
    border-radius: 50%;
  }
`;

export const AccountInfoContainer = styled.div`
  padding: 0 30px;
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Nickname = styled.h1`
  margin-right: 15px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const FullName = styled.p`
  opacity: .75;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const UserBio = styled.p`
  max-width: 50%;
  opacity: .5;
  color: rgb(${(props) => props.theme.colors.textColor});
  padding-top: 15px;
`;

export const AccountContentContainer = styled.div`
`;

export const UserSideBar = styled.div`
  width: 225px;
  height: 100%;
`;
