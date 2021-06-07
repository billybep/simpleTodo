import Title from './TitleHeader'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks, clearCompletedTask } from '../store/action'
import TodoCard from './TodoCard'

const Tasks = () => {

  const [todo, setTodo] = useState('')
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const completedTodos = tasks.filter(task => task.status === 'completed')

  const onPressEnter = (e) => {
    if (e.key.includes('Enter') || e.key.includes('NumpadEnter')) {
      let id = null
      tasks.length ? id = tasks[tasks.length-1].id+1 : id = 0 
      const todos = {
        id,
        task: todo,
        status: 'active'
      }
      dispatch(setTasks(todos))
    }
  }

  const onKeyEnterUp = (e) => {
    if (e.key.includes('Enter') || e.key.includes('NumpadEnter')) e.target.value = ''
  }

  const clearTask = () => {
    const deleteCompletedTodo = tasks.filter(task => task.status !== 'completed')
    dispatch(clearCompletedTask(deleteCompletedTodo))
  }

  return(
    <>
      <Title />
      <Container>
        <Col
          lg={8} md={6} sm={10} xs={12} 
          style={{ margin: 'auto' }}
        >
          <Form.Group>
            <Form.Control 
              size="lg" 
              type="text"
              placeholder="what needs to be done?"
              value={todo}
              onKeyDown={ e => onPressEnter(e) }
              onChange={ e => setTodo(e.target.value)}
              onKeyUp={ e => onKeyEnterUp(e) }
            />
          </Form.Group>
        </Col>
        <Col>
          <div>
            <Col 
              lg={8} md={6} sm={10} xs={12} 
              style={{ margin: 'auto', padding: '0rem 0.3rem' }}
            >
              {
                tasks.map(task => {
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
          completedTodos.length ?
          (
            <Button
              className="mt-2"
              variant="primary-outline"
              size="lg"
              onClick={ clearTask }
            >
              clear completed <i className="fas fa-trash-alt" style={{ color: 'red' }}></i>
            </Button>
          ) : ''
        }
      </Container>
    </>
  )
}

export default Tasks