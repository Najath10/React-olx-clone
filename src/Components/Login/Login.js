import React, { useState ,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom';
function Login() {

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const history= useHistory()
  const {firebase} =useContext(FirebaseContext)
  const handleLogin =(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      history.push('/')

    }).catch((error)=>{
      alert(error)
    })
   
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
