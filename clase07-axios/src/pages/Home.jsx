import {useState} from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'


const Home = () => {

  const [valor, setValor] = useState("")

  const getValor = (newValor) =>{
    setValor(newValor)
  }

  return (
    <div>
      <Header getValor={getValor}/>
      <MainHome/>
      <Footer/>
    </div>
  )
}

export default Home
