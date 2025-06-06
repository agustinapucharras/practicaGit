import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import FetchRickyMorty from '../components/FetchRickyMorty'

const Home = () => {
  return (
    <div>
      <Header/>
      {/* <MainHome/> */}
      <FetchRickyMorty/>
      <Footer/>
    </div>
  )
}

export default Home
