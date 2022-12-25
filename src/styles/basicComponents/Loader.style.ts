import styled from 'styled-components';

export const LoadingBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const LoadingSpinner = styled.span`
  z-index: 1;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  
  &:before , &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
  }
  :after {
    box-shadow: 0 10px 0 rgb(${(props) => props.theme.colors.primary}) inset;
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
`;
