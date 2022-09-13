import React from 'react'
import SignUpGoogle from '../components/SignUpGoogle'
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import Input from '../components/Input'


export default function SignUp() {
  return (
    <div className='SignUp-container'>
        <div className='SignUp-register'>
          <LinkRouter to='/'>
            <img className='Header-logo' src='/img/Logo-nav.png' alt="logo-header"></img>
          </LinkRouter>
          <h3>
            Sign up to see and create itineraries with your friends
          </h3>
          <SignUpGoogle/>
          <div className='Register-divisor'>
            <hr></hr>
            <h3>OR</h3>
            <hr></hr>
          </div>
          <Input />
          <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
          <button className='Submit-button' type='submit'>Sign Up</button>
        </div>
        <div className='SignUp-logIn'>
          <p>Have an account?</p>
          <a href="#">Log In</a>
        </div>
    </div>
  )
}
