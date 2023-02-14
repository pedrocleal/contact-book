import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
`

export const Container = styled.div`
  padding: 24px;

  margin: auto;
  
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #D6014F;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #FFFFFF0A;
  
  color: #FFFFFF;

  .actions {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    width: 100%;

    button {
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;

      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 500;
    }

    .cancel {
      border: none;
      background: none;
      color: #fff;
    }

    .remove {
      background-color: #D6014F;
      color: #FFFFFF;
    }
  }
`