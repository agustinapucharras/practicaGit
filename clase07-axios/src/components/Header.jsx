import { useState } from "react"
import Navigation from "./Navigation"

const Header = (props) => {

    const [nombre, setNombre] = useState("agus")

    

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.getValor(nombre)
    }

  return (
    <div className="text-blue-500 font-bold text-3xl flex flex-col items-around justify-center bg-amber-300">
      <Navigation/>
      <br />
      <h1 className="">Rick y Morty API</h1>
      <br />
      
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Buscar</label>
        <input type="text" placeholder="ingresa valor" onChange={(e)=>{setNombre(e.target.value)}}/>
        <button type="submit" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mostrar</button>
      </form>
    </div>
  )
}

export default Header
