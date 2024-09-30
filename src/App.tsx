import React from 'react';
import { Route, Routes } from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons';
import './App.css'
import Login from './routes/Login'
import Home from './routes/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element ={<Login />}/>
      <Route path='/login' element ={<Login />}/>
      <Route path='/home' element ={<Home />}/>
      <Unicons.UilReact />
    </Routes>
  )
}

export default App
