import React from "react"
import { BrowserRouter } from 'react-router-dom'
import ContactsProvider from "./contexts/ContactsContext"
import Routes from './Routes'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <ContactsProvider>
        <Routes />
      </ContactsProvider>
    </BrowserRouter>
  )
}