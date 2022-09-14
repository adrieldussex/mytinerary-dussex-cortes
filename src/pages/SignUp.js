import React, { useState } from 'react'
import SignUpGoogle from '../components/SignUpGoogle'
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('')
  const [lname, setLname] = useState('')
  const [photo, setPhoto] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='SignUp-container'>
      <form className='SignUp-register' onSubmit={handleSubmit}>
        <h3>
          Sign up to see and create itineraries with your friends
        </h3>
        <SignUpGoogle />
        <div className='Register-divisor'>
          <hr></hr>
          <h3>OR</h3>
          <hr></hr>
        </div>
        <input className='Input' name='Name' placeholder='Name' type='text' required></input>
        <input className='Input' name='LastName' placeholder='Last Name' type='text' required></input>
        <input className='Input' name='photo' placeholder='URL Photo' type='' required></input>
        <input className='Input' name='email' placeholder='Email' type='email' required></input>
        <input className='Input' name='pass' placeholder='Password' type='password' required></input>
        <button className='Submit-button' type='submit'>Create Account</button>
        
      </form>
      <div className='SignUp-logIn'>
        <p>Do you have an account?</p>
        <LinkRouter to='/auth/signin'>Log In</LinkRouter>
      </div>
    </div>
  )
}