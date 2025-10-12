import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Add from './Products/Add'

const Index = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<Add />} />
        
    </Routes>
  )
}

export default Index