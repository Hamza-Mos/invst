import React, {useState} from 'react';
import firebase from 'firebase/app';
import "firebase/auth";

function SignUpScreen() 
{

  const [auth, setAuth] = useState(false);
  
  const signUpGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        if(user)
        {
          setAuth(true);
        }
      });
  };
  
  return (
    <div>
      {auth ? (<h1>Successful!</h1>) : (<button onClick={signUpGoogle}>Sign Up With Google</button>)}
    </div>
  );
}

export default SignUpScreen
