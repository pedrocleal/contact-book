import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    margin: 16px 0;
    border: 1px solid #9E55FC;
  }
`

export const HeaderContent = styled.div`
  .back {
    display: flex;
    align-items: center;
    color: #9E55FC;
    font-weight: 500;
    margin-bottom: 16px;
    background: none;
    cursor: pointer;
    border: none;
    transition: color 0.2s;
    font-family: 'Montserrat', sans-serif;
    gap: 4px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 8px;
`

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #ddd;
`