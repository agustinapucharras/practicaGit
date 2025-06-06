import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Personajes from './pages/Personajes'
import Personaje from './pages/Personaje'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/personajes" element={<Personajes/>}/>
          <Route path="/personaje/:id" element={<Personaje/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
