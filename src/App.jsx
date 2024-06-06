import React from 'react'
import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Delete from './Components/Delete'
import Update from './Components/Update'

function App() {
  return (
    <>
<Home/>
    <Routes>
    <Route path='/' element={<Create/>} />
  <Route path='/create' element={<Create/>} />
  <Route path='/read' element={<Read/>} />
  <Route path='/delete' element={<Delete/>}/>
  <Route path="/update" element={<Update/>}/>
    </Routes>
    </>
  )
}

export default App
