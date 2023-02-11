import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  position: relative;

  hr {
    width: 100%;
    margin: 24px 0;
    border: 1px solid #9E55FC;
    opacity: 0.2;
    height: 1px;
  }

  .search-icon {
    position: absolute;
    right: 10px;
    bottom: 105px;
    opacity: 0.5;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  
  strong {
    display: block;
    color: #9E55FC;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`