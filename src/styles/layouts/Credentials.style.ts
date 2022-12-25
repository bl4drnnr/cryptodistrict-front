import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
`;

export const LoginHeader = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  justify-content: space-between;
`;

export const LoginHeaderTitle = styled.h3`
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  transition: .2s;
  cursor: pointer;
  &:hover {
    color: rgb(${(props) => props.theme.colors.primary})
  }
`;

export const LoginHeaderButton = styled.div`
  display: flex;
  align-items: baseline;
  padding: 30px;
`;

export const Side = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(${(props) => props.theme.colors.darkBackground});

  &.lightSide {
    background: rgba(${(props) => props.theme.colors.lightBackground});
  }
`;
