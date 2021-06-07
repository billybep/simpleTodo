import Title from './TitleHeader'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'
import { Col, Row } from 'react-bootstrap'

const TasksActive = () => {

  const todos = useSelector(state => state.tasks)
  const activeTodos = todos.filter(todo => todo.status === 'active')

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
              activeTodos.map(task => {
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
    </>
  )
}

export default TasksActive