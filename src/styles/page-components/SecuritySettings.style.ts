import styled from 'styled-components';

export const SecurityTitleBox = styled.div`
  margin-bottom: 50px;
`;

export const SecurityTitle = styled.h1`
  padding-bottom: 10px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const SeparationLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: .5;
  background-color: rgb(${(props) => props.theme.colors.opposite});
  margin-top: 15px;
`;

export const SecurityItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .25);
`;

export const ItemTitle = styled.h2`
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const ItemDescription = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  opacity: .5;
`;

export const SecurityItemWrapper = styled.div`
  &.button {
    width: 200px;
  }
`;
