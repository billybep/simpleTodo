import Title from './TitleHeader'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import TodoCard from './TodoCard'
import { clearCompletedTask } from '../store/action'

const TasksCompelete = () => {

  const todos = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const completeTodos = todos.filter(todo => todo.status === 'completed')

  const clearTask = () => {
    const deleteCompletedTodo = todos.filter(task => task.status !== 'completed')
    dispatch(clearCompletedTask(deleteCompletedTodo))
  }

  return(
    <>
      <Title />
      <Col>
        <div>
          <Col 
            lg={8} md={6} sm={10} xs={12} 
            style={{ margin: 'auto', padding: '0rem 0.3rem' }}
          >
            {
              completeTodos.map(task => {
                return (
                  <Row 
                    key={task.id}
                    style={{ margin: '0.2rem'}}
                  >
                    <Col lg={12}>
                      <TodoCard todo={task}/>
                    </Col>
                  </Row>
                )
              })
            }
          </Col>
        </div>
      </Col>
      {
        completeTodos.length ?
        (
          <Button
            className="mt-2"
            variant="primary-outline"
            onClick={ clearTask }
            size="lg"
          >
            clear completed <i className="fas fa-trash-alt" style={{ color: 'red' }}></i>
          </Button>
        ) : ''
      }
    </>
  )
}

export default TasksCompelete