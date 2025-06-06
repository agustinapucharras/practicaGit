import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import authStore from '../../store/authStore'

const MainLogin = () => {

  const{loginUser} = authStore()

  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault()

    if(usuario === "raul" && contraseña === "123"){
      alert("Bienvenido Jefe")
      navigate("/personajes")
      loginUser("token")

    }else{
      alert("Usuario o contraseña incorrectos")
    }

    e.target.reset() // Limpiar el formulario
  }
  return (
    <div>
      <br />
      <h3>Logueate</h3>
      <br />
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="">Usuario </label>
        <input type="text" placeholder='' required onChange={(e)=>setUsuario(e.target.value)}/>
        <br /><br />
        <label htmlFor="">Contraseña </label>
        <input type="password" placeholder='' required onChange={(e)=>setContraseña(e.target.value)}/>
        <br /><br />
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>

      
    </div>
  )
}

export default MainLogin
