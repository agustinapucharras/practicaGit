import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPersonajes from '../components/main/MainPersonajes'

const Personajes = () => {
  return (
    <div className='text-center'>
      <Header/>
      <MainPersonajes/>
      <Footer/>
    </div>
  )
}

export default Personajes
