import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 160px;
  width: 70%;
  margin: 0 auto;
  height: calc(100vh - 60px);
`;

export const Title = styled.h1`
  font-size: 58px;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const Content = styled.h3`
  font-size: 32px;
  font-family: "Lato", sans-serif;
  font-weight: 200;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const InputFieldsWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const SendButtonWrapper = styled.div`
  margin: 30px 0;
`;
