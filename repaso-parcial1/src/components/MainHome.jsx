import Formulario from "./Formulario";

const MainHome = (props) =>{

    // const valor ="quiero pasar esto de MainHome a Home"
    // props.recibirValorMain(valor)

    return(
        <div>
            <h1>Main</h1>
            <button type="button" onClick={()=> props.recibirValorMain("que onda perraco")}>mandar a papa</button>
            <Formulario/>

        </div>
    )
}

export default MainHome;