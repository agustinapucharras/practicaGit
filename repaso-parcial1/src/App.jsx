import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import SobreMi from "./pages/SobreMi"

function App() {
 

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sobre-mi" element={<SobreMi/>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
