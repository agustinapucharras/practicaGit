import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPersonaje from '../components/main/MainPersonaje'

const Personaje = () => {
  return (
    <div className='text-center'>
      <Header/>
      <MainPersonaje/>
      <Footer/>
    </div>
  )
}

export default Personaje
