import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap';

//actions
import { login, logout } from '../../store/actions/auth'

function LoginForm({ auth, login, logout }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('you submitted the form! ', data);
    //lol so unecessary
    login(...Object.values(data))
  }

  const logoutButton = (
    <Button variant="outline-primary" onClick={logout}>LogOut</Button>
  )
  const loginForm = (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Control ref={register} type="text" placeholder="Username" name="username"/ >
      <Form.Control ref={register} type="password" placeholder="Password" name="password"/ >
      <Form.Control type="submit"/ >
    </Form>
  )

  return auth.loggedIn ? logoutButton : loginForm; 
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { login, logout })(LoginForm)