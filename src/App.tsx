import React from "react"
import { BrowserRouter } from 'react-router-dom'
import ContactsProvider from "./contexts/ContactsContext"
import Routes from './Routes'
import './App.css'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 0 16px;
`

export default function App() {
  return (
    <BrowserRouter>
      <ContactsProvider>
        <Container>
          <Routes />
        </Container>
      </ContactsProvider>
    </BrowserRouter>
  )
}