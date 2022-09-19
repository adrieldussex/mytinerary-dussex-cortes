import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useSingUpMutation } from '../features/usersAPI'

export default function SignInGoogle() {
    const buttonDiv = useRef(null)
    let newUser = useSingUpMutation
    
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)

        let data = {
          name: userObject.given_name,
          lastname: userObject.family_name,
          photo: userObject.picture,
          mail: userObject.email,
          password: userObject.sub,
          country: "Argentina",
          role: 'user',
          from: 'google'
        }
        newUser(data)
      }
      
    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "919249866967-qffo42lhcei7m2472ut3sntdmgm23umi.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            context: "signup"
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large", text: "signup_with", shape: "pill" }
          );
    }, [])

  return (
    <div ref={buttonDiv}></div>
  )
}
