import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 600px;
  margin: 150px auto 0 auto;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
  font-family: "Lato", sans-serif;
`;

export const Content = styled.h3`
  font-size: 32px;
  font-weight: 100;
  font-family: "Lato", sans-serif;
  margin: 15px 0;
`;

export const Link = styled.h3`
  text-decoration: underline;
  display: inline;
  cursor: pointer;
  color: rgb(${(props) => props.theme.colors.primary});
`;


export const LinkWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;
