import React from "react"
import { BrowserRouter } from 'react-router-dom'
import ContactsProvider from "./contexts/ContactsContext"
import Routes from './Routes'
import './App.css'

import styled from 'styled-components'
import { Toaster } from "react-hot-toast"
import { Footer } from "./components/Footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 72px auto;
  padding: 0 16px;
  position: relative;
`

export default function App() {
  return (
    <BrowserRouter>
      <ContactsProvider>
        <Container>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid #363636',
                color: '#fff',
                fontWeight: 500,
              }
            }}
          />
          <Routes />
          <Footer />
        </Container>
      </ContactsProvider>
    </BrowserRouter>
  )
}