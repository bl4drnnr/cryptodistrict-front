import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  position: relative;
`

export const Box = styled.div`
  width: 100%;
  height: 50%;
  top: 25%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  width: 250px;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.h3`
  margin: 0 30px;
`
