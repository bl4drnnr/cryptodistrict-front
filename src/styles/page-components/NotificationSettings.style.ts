import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(${(props) => props.theme.colors.opposite}, .25);
  padding-bottom: 10px;
  margin: 5px 0;
`;

export const ItemHeader = styled.h3``;

export const ItemDescription = styled.p``;
