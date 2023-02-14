import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    bottom: 110px;
    opacity: 0.5;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 24px;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }

  .add-contact-link {
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
  }
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 42px;
  
  strong {
    display: block;
    color: #9E55FC;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
  gap: 16px;

  min-height: 300px;
  overflow-y: auto;
`

export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #383838;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px #FFFFFF0A;
`

export const ContactInfo = styled.div`
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: #ddd;
    font-size: 14px;
    font-weight: 500;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .delete-icon {
    cursor: pointer;
  }
`

export const NoContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  
  min-height: 300px;
  width: 100%;

  text-align: center;

  h3 {
    color: #fff;
    font-size: 22px;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
`