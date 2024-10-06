import { Route, Routes } from 'react-router-dom'
<<<<<<< Updated upstream
import './App.css'
=======
>>>>>>> Stashed changes
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
