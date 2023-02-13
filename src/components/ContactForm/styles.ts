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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  gap: 16px;
  `;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
  position: relative;

  label {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  svg {
    position: absolute;
    right: 8px;
    top: 55%;
    transform: translateY(-50%);
    color: #9E55FC;
    animation: ${spin} 0.8s linear infinite;
  }
`;