import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'

export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
    
        let data  = {
            name: userObject.name,
            photo: userObject.picture,
            mail: userObject.email,
            pass: userObject.sub,
            role: 'user',
            from: 'google',
        } // newUser(data)
    }
    
    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "919249866967-qffo42lhcei7m2472ut3sntdmgm23umi.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large", text: "signup_with" }  // customization attributes
          );
        //   google.accounts.id.prompt();
    }, [])


  return (
    <div ref={buttonDiv}>SignUpGoogle</div>
  )
}
