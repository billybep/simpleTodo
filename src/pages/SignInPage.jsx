import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { setUser } from '../store/action'
import { useDispatch } from 'react-redux'

const SignIn = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSignIn = (e) => {
    e.preventDefault()

    const currentUser = {
      username, email, password
    }

    dispatch(setUser(currentUser))
    history.push('/app')
  }

  return(
    <>
      <div>
        <Col 
          style={{ 
            backgroundColor: '#F6F6F6', 
            margin: '3rem auto auto auto',
            borderStyle: 'solid', 
            borderWidth: '1px', 
            borderRadius: '7px',
            borderColor: 'grey'
          }}
          xl={4} lg={4} md={6} sm={10} xs={11}
        >
          <Row 
            style={{ alignItems: 'center', display: 'block', marginTop: '2em' }}
          >
            <h5><strong>Sign In</strong></h5>
          </Row>
          <Row style={{ display:'block', margin: '2rem 1rem', textAlign: 'left'}}>
            <Form onSubmit={ e => handleSignIn(e) }>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={ e => setUsername(e.target.value) }
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={ e => setEmail(e.target.value) }
                  required
                />
                <Form.Text className="text-muted" style={{ fontSize: '12px'}}>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="your password here"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                  required
                />
                <Form.Text className="text-muted" style={{ fontSize: '12px'}}>
                  Your password must be at least 8 characters long. Avoid common words or patterns.
                </Form.Text>
              </Form.Group>
              <Row style={{ display:'block', margin: '2rem auto', textAlign: 'left'}}>
                <Button
                  type='submit'
                  style={{ width: '100%' }}
                >
                  Sign In
                </Button>
              </Row>
              <hr />
              <Row style={{ display:'block', margin: '2rem auto', textAlign: 'left'}}>
                <p 
                  style={{ fontSize: '13px' }}
                >
                  Don't have an account?
                  <Link to='/signup'> Sign up</Link>
                </p>
              </Row>
            </Form>
          </Row>

        </Col>
      </div>
    </>
  )
}

export default SignIn