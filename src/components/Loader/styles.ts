import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(2px);

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;