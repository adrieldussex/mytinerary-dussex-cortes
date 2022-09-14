import React, { useState } from 'react'
import SignUpGoogle from '../components/SignUpGoogle'
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import Input from '../components/Input'

export default function SignUp() {
  const form = [
    {
      label:"Name",
      name: "name",
      type: "text",
      value: ""
    },
    {
      label:"Lastname",
      name: "lastName",
      type: "text",
      value: ""
    },
    {
      label:"Email",
      name: "email",
      type: "email",
      value: ""
    },
    {
      label:"Country",
      name: "country",
      type: "text",
      value: ""
    },
    {
      label:"Password",
      name: "password",
      type: "password",
      value: ""
    },
    {
      label:"Photo",
      name: "photo",
      type: "url",
      value: ""
    }
  ]

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
          <form className='Register-form'>
            {form.map((input) => (
              <Input
                name = {input.name}
                type = {input.type}
                label = {input.label}
              />
            ))}
          <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
          <button className='Submit-button' type='submit'>Sign Up</button>
        </form>
        </div>
        <div className='SignUp-logIn'>
          <p>Do you have an account?</p>
          <LinkRouter to="/auth/signin">Log In</LinkRouter>
    </div>
  )
}