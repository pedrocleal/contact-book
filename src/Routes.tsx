import React from 'react'
import { Routes as RootRoutes, Route } from 'react-router-dom'
import CreateContact from './pages/CreateContact'
import EditContact from './pages/EditContact'
import Home from './pages/Home'

export default function Routess() {
  return (
    <RootRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/edit/:id' element={<EditContact />} />
      <Route path='/create' element={<CreateContact />} />
    </RootRoutes>
  )
}