import { useState } from "react"
import {Button} from "react-bootstrap"
import Register from "./Register"

const MainHome = () => {

    const [num, setNum] = useState(0)
    // VER ESTO const [num2, setNum2] = useState(()=>{})
    const [apellido, setApellido] = useState("puch")
    const [mostrar, setMostrar] = useState(false)

    const handleClick = () =>{
        setNum(num+15)
    }

    const handleApellido = () =>{
        setApellido("puchiiii")
    }

    const handleRegistro = () =>{
        setMostrar(!mostrar)
    }
  return (
    <div className='text-center'>
        <br />
        <h3>Hola estados</h3>
        <h4>numero: {num}</h4>
        <Button onClick={handleClick}>Sumar </Button>
        <br /><br />
        <h4>Apellido: {apellido}</h4>
        <Button className="btn btn-secondary"type="button" onClick={handleApellido}>Cambiar apellido</Button>

        <br /><br />
        <Button type="button" className={mostrar? "bg-danger" : "bg-success"} onClick={handleRegistro}>{mostrar? "Ocultar registro" : "Mostrar registro"}</Button>
        {mostrar === true ? <Register/> : null} 
        <br /><br />

        
      
        <br />
    </div>
  )
}

export default MainHome
