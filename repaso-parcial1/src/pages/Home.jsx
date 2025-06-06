import {useState} from "react"
import { Link } from "react-router-dom";
import MainHome from "../components/MainHome";

const Home = () =>{
    const [valor, setValor] = useState("")

    const recibirValorMain = (valor) =>{
        setValor(valor)
    }
    return (
        <div>
            <h1>Holis a todos</h1>
            <MainHome recibirValorMain={recibirValorMain}/>
            {valor ? <h3>me llego de Main a Home: {valor}</h3> : <h3>no me llego nada de Main a Home</h3>}
            <br />
            {valor == "" ? "no hay nada todavia en valor" : <h2>lo que llega es:{valor}</h2>}
            <br />
            
            
            <Link to="/sobre-mi"><button>Sobre mi</button></Link>
        </div>
    )
}

export default Home;