import React from 'react'
import SignUpGoogle from '../components/SignUpGoogle'
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import Input from '../components/Input'
import {useSingUpMutation} from '../features/usersAPI'
import { useRef } from 'react'
import Alert from '../components/Alert/Alert'

export default function SignUp() {
let [SignUpRedux, {data : userRedux , error}] = useSingUpMutation()
let msg = ""


if(userRedux?.success){
  msg = userRedux?.message
}else{
  msg = error?.data.message
}



const nameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const countryRef = useRef();
const passwordRef = useRef();
const photoRef = useRef();

  const form = [
    {
      label:"Name",
      name: "name",
      type: "text",
      value: nameRef
    },
    {
      label:"Lastname",
      name: "lastName",
      type: "text",
      value: lastNameRef
    },
    {
      label:"Email",
      name: "email",
      type: "email",
      value: emailRef
    },
    {
      label:"Country",
      name: "country",
      type: "text",
      value: countryRef
    },
    {
      label:"Password",
      name: "password",
      type: "password",
      value: passwordRef
    },
    {
      label:"Photo",
      name: "photo",
      type: "url",
      value: photoRef
    }
  ]

function newUser (e){
  e.preventDefault();
  
  let dataCity = {
    name : nameRef.current.value,
    lastName : lastNameRef.current.value,
    mail : emailRef.current.value,
    country : countryRef.current.value,
    password : passwordRef.current.value,
    photo : photoRef.current.value,    
    role : "user",
    from : "form"
    }
    
    SignUpRedux(dataCity)
  }
    



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
          <form className='Register-form'  onSubmit={newUser}>
            {form.map((input) => (
              <Input
                name = {input.name}
                type = {input.type}
                label = {input.label}
                key = {input.name}
                value = {input.value}
              />
            ))}
          <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
          <Alert label={"SIGN UP"} message={msg} />
        </form>
        </div>
        <div className='SignUp-logIn'>
          <p>Do you have an account?</p>
          <LinkRouter to="/auth/signin">Log In</LinkRouter>
        </div>
    </div>
  )
}
