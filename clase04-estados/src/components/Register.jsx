import React from 'react'
import { useState } from 'react'
import {Form, Button} from "react-bootstrap"

const Register = () => {

  const initialState = {
    nombre:"",
    apellido:"",
    telefono:null
  }

  const [usuarios, setUsuarios] = useState([])

  const [user, setUser] = useState(initialState)

  //estados independientes
  // const[nombre, setNombre] = useState("")
  // const[apellido, setApellido] = useState("")
  // const[telefono, setTelefono] = useState(null)


  const handleSubmit = (e) =>{
    e.preventDefault()

    //if(user.nombre==="") para validar q los input no se manden vacios

    setUsuarios([...usuarios,user])
    e.target.reset() //para borrar los input
  }

  // const handleNom = (e) =>{
  //   //console.log(e.target.value)
  //   setNombre(e.target.value)
  // }

  //  const handleApe = (e) =>{
  //   setApellido(e.target.value)
    
  //  }

  //  const handleTel = (e) =>{
  //   setTelefono(e.target.value)
  //  }

   //es cuando yo paso el mouse por encima y larga un evento onMouseEnter
   const handleMouseEnter = (e) =>{
    //console.log(e)
    //alert("ingreso en el label")
   }

   const handleChange = (e) =>{
    //con e.target.name identificamos en q input estamos
    //console.log(e.target.name)  
    setUser({...user,[e.target.name]:e.target.value})
   }

   const handleEliminar = (id) =>{
    const usuarioFiltrado = usuarios.filter((_,index)=>id!==index)
    setUsuarios(usuarioFiltrado)
  }

   let perritos = ["sultan", "polo", "magui", "cinco"]

  return (
    <div className='m-3'>
      <Form style={{width:"50%"}} onSubmit={handleSubmit}>
        <Form.Label onMouseEnter={handleMouseEnter}>Nombre</Form.Label>
        <Form.Control type='text' placeholder='escribe tu nombre' onChange={handleChange} name='nombre' required/>
        <br />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='escribe tu apellido' onChange={handleChange} name='apellido' required/>   {/*onChange={(e)=>{setApellido(e.target.value)}} */}
        <br />
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='number' placeholder='escribe tu telefono' onChange={handleChange} name='telefono' required/>
        <br />
        <Button type='submit'>Enviar</Button>
      </Form>

      <br /><br />
      {/* <h4>Datos: {nombre} {apellido} {telefono}</h4> */}
      <h4>Otros datos: {user.nombre} {user.apellido} {user.telefono}</h4>

      <br /><br /><br />

      {/* {perritos.map((perrito,index) => <li key={index}>{perrito}</li>)} */}
      {usuarios.length>0 ? usuarios.map((usuario,index) => <li key={index}>{usuario.nombre} {usuario.apellido} <button onClick={()=>handleEliminar(index)} className='btn btn-danger'>Eliminar</button></li>) : <h3>no tiene nada</h3>}
      
    </div>
  )
}

export default Register
