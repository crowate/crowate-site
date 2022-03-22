// import { Alert } from 'bootstrap'
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../supabase'
const Signup = () => {
  const emailRef = useRef()
  const userRef = useRef()
  const passRef = useRef()
  const passConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [currUser, setCurrUser] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passRef.current.value !== passConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    
    try {
      
      setLoading(true)
      
      const {user, session, err} = await signup(userRef.current.value, emailRef.current.value, passRef.current.value)
      navigate("/profile", {replace: true})
      
      if (err) {
        throw(err)
      }

      setCurrUser(user)
      

    } catch (err) {
      setError(err)
    }

    try {
      let user = await supabase.auth.user()
      
      let updates = {
        User_ID: user.id,
        Username: user.user_metadata.username,
        Profile_Picture: "https://f004.backblazeb2.com/file/Crowate/User-Login-256.png"
      }

      let { err } = await supabase.from('Profile Data').upsert(updates)

      if (err) {
        throw(err)
      }

      setLoading(false)

    } catch (err) {
      alert(err.message)
    }
    
    

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
                  <h2 className='text-center mb-4'>Sign Up</h2>
                  {currUser && currUser.email}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id='username'>
                          <Form.Label>Username</Form.Label>
                          <Form.Control type='username' ref={userRef} required />
                      </Form.Group>
                      <Form.Group id='email'>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type='email' ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id='password'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type='password' ref={passRef} required />
                      </Form.Group>
                      <Form.Group id='password-confirm'>
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type='password' ref={passConfirmRef} required />
                      </Form.Group>
                      <Button disabled={loading} type='submit' className='w-100 mt-2'>Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
      </>
  )
}

export default Signup