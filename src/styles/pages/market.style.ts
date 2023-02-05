import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  padding-top: 150px;
  
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;
