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
  background-color: ghostwhite;
  
  @media screen and (max-width: 520px) {
    display: block;
  }
`;

export const UserInfoContainer = styled.div`
  height: 100%;
  width: 350px;
  background-color: bisque;
  padding: 15px;
  
  @media screen and (max-width: 520px) {
    margin: 0 auto;
  }
`;

export const UserAssetsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  position: relative;
  padding: 15px;
`;

export const UserProfilePicture = styled.div`
  border-radius: 50%;
  width: 100%;
  height: auto;
  padding-top: 100%;
  background: cornflowerblue;
`;

export const UserBioBox = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  border: 1px solid rgb(${(props) => props.theme.colors.opposite});
`;

export const UserAssetsBox = styled.div`
  width: 100%;
  max-height: 500px;
  margin-top: 15px;
  border-radius: 8px;
  border: 1px solid rgb(${(props) => props.theme.colors.opposite});
`;

