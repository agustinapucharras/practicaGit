import {Row, Col} from 'react-bootstrap'
import authStore from '../store/authStore'
const Header = () => {

  const {user} = authStore()

  const logoutUser = () => {
    
  }

  return (
    <div className='bg-info'>
      <br />
      <Row>
        <Col md={6}>
        {user && <h3>Logueado</h3>}
          
        </Col>
        <Col md={6}>
        {user && <button className='btn btn-danger' onClick={logoutUser}>Cerrar Sesion</button>}
          
        </Col>
      </Row>


      <br />
    </div>
  )
}

export default Header
