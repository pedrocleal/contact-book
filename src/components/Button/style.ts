import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  height: 30px;
  padding: 0 16px;
  border-radius: 4px;
  border: 2px solid #9E55FC;
  outline: #fff;

  box-shadow: 0px 4px 10px 0px #FFFFFF0A;
  cursor: pointer; 
  color: #fff;
  background-color: #9E55FC;  

  font-family: 'Montserrat', sans-serif;  
  font-size: 16px;
  font-weight: 500;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;

    &:hover {
      background-color: #9E55FC;
    }
  }
`