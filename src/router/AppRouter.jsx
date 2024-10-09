import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='/detalle/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
