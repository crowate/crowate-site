import React, { useRef, useState, } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


const Login = () => {
  const emailRef = useRef()
  const passRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [currUser, setCurrUser] = useState(null)
  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    setLoading(true)
    const {user, session, err} = await login(emailRef.current.value, passRef.current.value)
    navigate("/profile", {replace: true})
    console.log(session)
    setError(err)
    setCurrUser(user)
    setLoading(false)
  }

  return (
      <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: "100vh"}}
      >
        <div className='w-100' style={{maxWidth: "800px"}}>
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h2 className='text-center mb-4'>Log In</h2>
                    {currUser && currUser.email}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passRef} required />
                        </Form.Group>
                        <Button disabled={loading} type='submit' className='w-100 mt-2'>Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to="/signup" >Sign Up</Link>
            </div>
        </div>
       </Container>
      </>
  )
}

export default Login