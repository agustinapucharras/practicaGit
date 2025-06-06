import Navigation from "./Navigation"

const Header = (props) => {

  console.log(props.titulo)


  return (
    <div>
      <h2>{props.titulo}</h2>

      <Navigation/>
    </div>
  )
}

export default Header
