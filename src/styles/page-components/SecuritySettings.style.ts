import styled from 'styled-components';

export const SecurityTitleBox = styled.div`
  margin-bottom: 50px;
`;

export const SecurityTitle = styled.h1`
  padding-bottom: 10px;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const Line = styled.hr`
  opacity: .5;
  color: rgb(${(props) => props.theme.colors.opposite});
`;

export const SecurityItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid red;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .5);
`;
