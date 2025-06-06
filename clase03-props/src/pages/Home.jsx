import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

const Home = () => {

    const titulo = "clase 03 - props"

  return (
    <div>
      <Header titulo={titulo}/>
      <Main saludo="Bienvenidos"/>
      <Footer/>
    </div>
  )
}

export default Home
