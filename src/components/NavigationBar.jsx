import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../store/action'

const NavigationBar = () => {

  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const history = useHistory()

  const signOut = _ => {

    const initial = {
      currentUser: {},
      tasks : []
    }

    dispatch(resetState(initial))
    history.push('/')
  }

  return(
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link
            style={{ textDecorationLine: 'none', color: 'white'}}
            to='/'
          >
            TODOapp
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav inline='true'>
          {
            Object.keys(currentUser).length === 0 ? 
              (
                <Button variant="outline-light">
                  <Link 
                    style={{ textDecorationLine: 'none', color: 'white'}}
                    to='/signin'
                  >
                    Sign In <i className="fas fa-sign-in-alt"></i>
                  </Link>  
                </Button>
              ) : 
              (
                <Button variant="outline-light">
                  <Link 
                    style={{ textDecorationLine: 'none', color: 'white'}}
                    onClick={ signOut }
                  >
                    Sign Out <i className="fas fa-sign-out-alt"></i>
                  </Link>  
                </Button>
              )
          }
        </Nav>
      </Navbar>
    </>
  )
}

export default NavigationBar