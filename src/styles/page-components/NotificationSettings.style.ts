import styled from 'styled-components';

export const NotificationTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 780px) {
    display: block;
    text-align: center;
  }
`;

export const NotificationTitle = styled.h1`
  padding-bottom: 10px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const SeparationLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: .5;
  background-color: rgb(${(props) => props.theme.colors.opposite});
  margin-top: 15px;
  &.margin-bottom {
    margin-bottom: 50px;
  }
`;


export const NotificationItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .25);
`;

export const NotificationItemWrapper = styled.div`
  &.button {
    width: 200px;
  }
`;

export const ItemTitle = styled.h2`
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const ItemDescription = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  opacity: .5;
`;

export const ShowMoreLink = styled.p`
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: rgb(${(props) => props.theme.colors.primary});
`;

export const ShowMoreContainer = styled.div`
  padding: 20px;
`;

export const NotificationSectionDescription = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor}, .75);
`;
