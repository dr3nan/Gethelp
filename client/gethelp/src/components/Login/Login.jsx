import React from 'react';
import { getUser as getUserFromAPI } from '../../api/apiUsers';

const Login = () => {

  const handleSubmit = async (event, dispatch) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
      isLogged: Boolean
    }
    try {
      const getUser = await getUserFromAPI(user);
      dispatch(activeUser(getUser));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className='user-login'>
      <div className='form-information'>
        <h1 id='login-header'>Login</h1>
        <div className='email-input'>
          <input
            type='text'
            name='email'
            id='email'
            className='inputEmail'
            required
          />
          <span className='floating-label-email'>Email Address</span>
        </div>
        <div className='password-input'>
          <input
            type='test'
            name='password'
            id='password'
            className='inputPassword'
            required
          />
          <span class='floating-label-password'>Password</span>
        </div>
        {/* <label>
          <input
            type='checkbox'
            defaultValue={false}
            name='remember'
          />
          Remember me
        </label> */}
        <input
          className='login'
          type='submit'
          value='Login'
        />
      </div>
      <div className='buttons'>
        {/* <input type='submit' id='register-btn' value='Register' className='register' /> */}
        {/* <input type='submit' id='forgot-btn' value='Forgot password?' className='forgot' /> */}
      </div>
    </form>
  );
}

export default Login;
