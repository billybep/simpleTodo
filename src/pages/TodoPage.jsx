import { Nav, Container, Row, Col, Badge } from 'react-bootstrap'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShowDate from '../components/showDate'
import Tasks from '../components/Tasks'
import TasksActive from '../components/TasksActive'
import TasksCompelete from '../components/TasksComplete'

const TodoPage = () => {

  const history = useHistory()
  const todos = useSelector(state => state.tasks)
  const activeTodos = todos.filter(todo => todo.status === 'active')
  const completedTodos = todos.filter(todo => todo.status === 'completed')
  
  return(
    <>
      <ShowDate />
      <Container className='mt-5'>
        <Nav style={{ display: 'block' }} justify variant="tabs">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12} style={{ padding: '0px' }}>
              <Nav.Item>
                <Nav.Link onClick={ _ => history.push('/app/tasks') }>
                  All <Badge variant="info">{ todos.length ? todos.length : ''}</Badge>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} style={{ padding: '0px' }}>
              <Nav.Item>
                <Nav.Link 
                  onClick={ _ => history.push('/app/active') }
                  disabled={ activeTodos.length === 0 ? true : false }
                >
                  Active{' '}
                    <Badge variant="danger">
                      { activeTodos.length === 0 ? '' : activeTodos.length }
                    </Badge>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} style={{ padding: '0px' }}>
              <Nav.Item>
                <Nav.Link 
                  onClick={ _ => history.push('/app/complete') }
                  disabled={ completedTodos.length === 0  ? true : false }
                >
                  Completed{' '}
                    <Badge variant="success">
                      { completedTodos.length === 0 ? '' : completedTodos.length }
                    </Badge>
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Nav>
      </Container>

      <Switch>
        <Route path='/app/tasks'>
          <Tasks />
        </Route>
        <Route path='/app/active'   component={TasksActive} />
        <Route path='/app/complete' component={TasksCompelete} />
      </Switch>
    </>
  )
}

export default TodoPage