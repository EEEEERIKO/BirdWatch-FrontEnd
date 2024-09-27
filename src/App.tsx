import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './routes/Login'
import Home from './routes/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element ={<Login />}/>
      <Route path='/login' element ={<Login />}/>
      <Route path='/home' element ={<Home />}/>
    </Routes>
  )
}

export default App
