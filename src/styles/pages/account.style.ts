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
  border-bottom: 1px solid rgb(${(props) => props.theme.colors.opposite}, .5);
  margin-bottom: 30px;
  
  .ava {
    border-radius: 50%;
  }
`;

export const AccountInfoContainer = styled.div`
  padding: 0 30px;
  width: auto;
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Nickname = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const FullName = styled.p`
  opacity: .75;
  margin: 0 5px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const UserBio = styled.p`
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

export const UserProfilePictureWrapper = styled.div`
  border-right: 1px solid rgb(${(props) => props.theme.colors.opposite}, .5);
  padding: 15px;
`;

export const AccountCreatedAtContainer = styled.div`
  min-width: 200px;
`;

export const CreatedAtParagraph = styled.p`
  color: rgba(${(props) => props.theme.colors.textColor});
  text-align: end;
`;

export const CreatedAtDate = styled.p`
  color: rgba(${(props) => props.theme.colors.textColor}, .5);
  text-align: end;
`;

export const UserTitle = styled.p`
  color: rgba(${(props) => props.theme.colors.textColor}, .5);
  text-align: center;
  margin: 10px 0;
`;

export const ContactField = styled.div`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
`;

export const ContactIcon = styled.div`
  margin: 0 5px;
  filter: ${(props) => props.theme.colors.svgIcon};
`;
