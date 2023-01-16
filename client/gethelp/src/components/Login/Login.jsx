import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail as getUserFromAPI } from '../../api/apiUsers';
// import { setUserFromActiveTicket } from '../../slices/ActiveTicketSlice';
import { isUserLogged } from '../../slices/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event, dispatch) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    try {
      const getUser = await getUserFromAPI(user.email);
      // console.log('user from api', getUser);
      dispatch(isUserLogged(getUser));
      // dispatch(setUserFromActiveTicket(getUser.nickname, getUser.admin))
      if (!getUser) navigate('/login');
      else navigate('/ticket-list');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className='user-login' onSubmit={event => handleSubmit(event, dispatch)}>
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
            type='password'
            name='password'
            id='password'
            className='inputPassword'
            required
          />
          <span className='floating-label-password'>Password</span>
        </div>
        {/* <label>
          <input
            type='checkbox'
            defaultValue={false}
            name='remember'
          />
          Remember me
        </label> */}
        <button type='submit'>Send</button>
      </div>
      <div className='buttons'>
        {/* <input type='submit' id='register-btn' value='Register' className='register' /> */}
        {/* <input type='submit' id='forgot-btn' value='Forgot password?' className='forgot' /> */}
      </div>
    </form>
  );
}

export default Login;
