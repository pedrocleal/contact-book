import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #383838;
  border: 1px solid #383838;
  border-radius: 4px;
  outline: none;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  padding: 0 12px;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  &::placeholder {
    color: #ddd;
    opacity: 0.5;
  }

  &:focus {
    border: 1px solid #9E55FC;
  }
` 