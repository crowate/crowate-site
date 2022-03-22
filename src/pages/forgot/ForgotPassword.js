// import { Alert } from 'bootstrap'
import React, { useRef, useState, } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'



const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [currUser, setCurrUser] = useState(null)
  const [message, setMessage] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    setMessage('')
    setLoading(true)
    const {user, session, err} = await resetPassword(emailRef.current.value)
    setMessage("Check inbox for further instructions")
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
                  <h2 className='text-center mb-4'>Password Reset</h2>
                  {currUser && currUser.email}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                      </Form.Group>
                      <Button disabled={loading} type='submit' className='w-100 mt-2'>
                        Reset Password
                      </Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Remember your password? Back to <Link to="/login" >Log in</Link>
          </div>
        </div>
      </Container>
      </>
  )
}

export default ForgotPassword