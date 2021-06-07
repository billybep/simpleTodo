import { Card, Row, Col, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, updateTaskStatus } from '../store/action.js'

const TodoCard = ({todo}) => {

  const todos = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    dispatch(deleteTask(newTodos))
  }

  const handleChange = (e, id) => {

    let updateTodos = []

    if (e.target.checked) {
      updateTodos = todos.map(todo => {
        if (todo.id === id) todo.status = 'completed'
        return todo
      })
    } else {
      updateTodos = todos.map(todo => {
        if (todo.id === id) todo.status = 'active'
        return todo
      })
    }

    dispatch(updateTaskStatus(updateTodos))
  }

  return(
    <>
      <Card style={{ justifyContent: 'center' }}>
        <Row style={{ margin: '.7rem' }}>
          <Col 
            lg={1} md={1} sm={1} xs={1}
            style={{ padding: '0px 0px' }}
          >
            <Form.Check
              aria-label="option 1"
              checked={ todo.status === 'active' ? '' : true }
              onChange={ e => handleChange(e, todo.id) } 
            />
          </Col>
          <Col
            lg={10} md={10} sm={9} xs={9}
            style={{ textAlign: 'left' }}
          >
            <Card.Title
              style={
                todo.status === 'completed' ? 
                  { 
                    textDecorationLine: 'line-through',
                    color: 'lightgrey',
                    fontSize: '1rem',
                    marginBottom: 'auto'
                  } : 
                  { fontSize: '1rem', marginBottom: 'auto' }
              }
            >
              {todo.task}
            </Card.Title>
          </Col>
          <Col 
            lg={1} md={1} sm={1} xs={1}
            style={{ padding: '0px' }}
          >
            <i 
              className="fas fa-times" 
              style={{ cursor: 'pointer' }}
              onClick={ _ => deleteTodo(todo.id) }
            ></i>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default TodoCard