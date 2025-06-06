import { useState } from "react"
import {Button} from "react-bootstrap"
const Main = (props) => {

  

  //useState es una funcion que devuelve un array con 2 posiciones, en la primera posicion tengo el valor incial 
  // del estado y en la segunda tengo una funcion que actualiza mi primera parte
  const [numero, setNumero] = useState(0)

  const [nombre, setNombre] = useState("karen")
  
  //let numero = 10

  const handleClick = ()=>{
    //alert("estoy presionando el boton")
    // numero = numero + 10
    // console.log(numero)
  }


  return (
    <div className="bg-secondary">
      <br />    
      <h3 className="text-blue-500">Holis soy main</h3>
        <br />
        <Button onClick={handleClick}>Soy un boton</Button>
        <br />

        <h2>el numero es:</h2>


      <br />
    </div>
  )
}

export default Main
