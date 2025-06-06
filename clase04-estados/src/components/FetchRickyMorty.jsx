import React, { useEffect, useState } from 'react'
import {Col,Row} from "react-bootstrap"

const FetchRickyMorty = () => {

    const[datos,setDatos] = useState([])

    const getApiData = async() =>{
        // let response = fetch("https://rickandmortyapi.com/api/character")
        // .then(res=>res.json())
        // .then(resultado=>{
            
        //     console.log(resultado)
        //     setDatos(resultado.results)
        // })

        let response = await fetch("https://rickandmortyapi.com/api/character")
        let result = await response.json()
        setDatos(result.results)

        
    }

   
 useEffect( ()=> {
    getApiData()
 },[])

  return (
    <div>
      <br />
      <h3 className='text-center'>Mostrando la API de Rick y Morty</h3>
      <br />

      <Row>
      {datos.map((dato,index)=> <Col>
        <h3>Nombre: {dato.name}</h3>
        <img src={dato.image} alt="" />
      </Col> )}
      </Row>
      
    </div>
  )
}

export default FetchRickyMorty
