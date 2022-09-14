import React from 'react'
import SignInGoogle from '../components/SignInGoogle'
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='SignUp-container'>
      <form className='SignUp-register' onSubmit={handleSubmit}>
        <h3>
          Log in to your account
        </h3>
        <SignInGoogle />
        <div className='Register-divisor'>
          <hr></hr>
          <h3>OR</h3>
          <hr></hr>
        </div>
        <input className='Input' name='email' placeholder='Email' type='email' required></input>
        <input className='Input' name='pass' placeholder='Password' type='password' required></input>
        <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</p>
        <button className='Submit-button' type='submit'>Log In</button>        
      </form>
      <div className='SignUp-logIn'>
        <p>Do you want an account?</p>
        <LinkRouter to='/auth/signup'>Sign Up</LinkRouter>
      </div>
    </div>
  )
}
