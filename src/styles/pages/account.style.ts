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
  display: flex;
  
  @media screen and (max-width: 520px) {
    display: block;
  }
`;

export const UserInfoContainer = styled.div`
  height: 100%;
  width: 350px;
  padding: 15px;
  
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
  cursor: pointer;
  
  .ava {
    border-radius: 50%;
  }
`;

export const UserBioBox = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgb(${(props) => props.theme.colors.opposite});
  color: rgb(${(props) => props.theme.colors.textColor});
  padding: 15px;
`;

export const UserAssetsBox = styled.div`
  width: 100%;
  max-height: 500px;
  margin-top: 15px;
  border-radius: 8px;
  border: 1px solid rgb(${(props) => props.theme.colors.opposite});
`;

export const Nickname = styled.h1`
  padding-top: 15px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const AccountTitle = styled.p`
  padding: 15px 0;
  color: rgb(${(props) => props.theme.colors.textColor});
`;
