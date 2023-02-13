import React from "react"
import { BrowserRouter } from 'react-router-dom'
import ContactsProvider from "./contexts/ContactsContext"
import Routes from './Routes'
import './App.css'

import styled from 'styled-components'
import { Toaster } from "react-hot-toast"

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
          <Toaster
            position="bottom-center"
          />
          <Routes />
        </Container>
      </ContactsProvider>
    </BrowserRouter>
  )
}