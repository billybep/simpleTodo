import { Container, Button } from 'react-bootstrap'
import ShowDate from '../components/showDate'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return(
    <>
      <Container >
        <ShowDate />
        <h1 style={{ margin: '9rem auto 1rem' }}>Organize everything with a simple app...</h1>
        <p>
          This is a simple Task Management, 
          simple but can organize your task with TODOapp...
        </p>
        <Button variant="success" size="lg" active>
          <Link to='/signin' style={{ textDecorationLine: 'none', color: 'white'  }}>
            Get Started
          </Link>
        </Button>
      </Container>
    </>
  )
}

export default HomePage