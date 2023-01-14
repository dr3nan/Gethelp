import React from 'react';
import { useState } from 'react';

function Login(props) {

  const initialState = () => ({
    email: '',
    password: '',
  })

  const [login, setLogin] = useState(initialState());

  const handleSubmit = () => {

  }

  return (
    <form className='user-login'>
      <div className='form-information'>
        <h1 id='login-header'>Login</h1>
        <div className='email-input'>
          <input type='text' className='inputEmail' required />
          <span class='floating-label-email'>Email Address</span>
        </div>
        <div className='password-input'>
          <input type='password' className='inputPassword' required />
          <span class='floating-label-password'>Password</span>
        </div>
        <label>
          <input type='checkbox' defaultValue={false} name="remember" /> Remember me
        </label>
        <input className='login' type='submit' value='Login'></input>
      </div>
      <div className='buttons'>
        <input type='submit' id='register-btn' value='Register' className='register' />
        <input type='submit' id='forgot-btn' value='Forgot password?' className='forgot' />
      </div>
    </form>
  );
}

export default Login;