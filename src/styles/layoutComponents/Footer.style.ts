import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(255, 255, 255, .25);
  background-color: rgb(${(props) => props.theme.colors.lightBackground});
`;

export const Box = styled.div`
  width: 90%;
  height: 50%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;

export const NavigationButtons = styled.div`
  display: flex;
`;

export const NavigationLink = styled.p`
  font-size: 14px;
  margin: 5px 0 0 15px;
  opacity: .75;
  transition: .2s;
  &:hover {
    cursor: pointer;
    color: rgba(${(props) => props.theme.colors.primary});
  }
`;
