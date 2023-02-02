import styled from 'styled-components';

export const NotificationTitleBox = styled.div`
  margin-bottom: 50px;
`;

export const NotificationTitle = styled.h1`
  padding-bottom: 10px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const Line = styled.hr`
  opacity: .5;
  color: rgb(${(props) => props.theme.colors.opposite});
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
