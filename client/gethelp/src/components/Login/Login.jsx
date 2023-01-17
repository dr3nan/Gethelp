import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail as getUserFromAPI } from '../../api/apiUsers';
import { activeUser, isUserLogged } from '../../slices/UserSlice';
import './Login.css';

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
      const userData = await getUserFromAPI(user.email);
      console.log('get user from db', userData);
      dispatch(activeUser(userData));
      // localStorage.setItem('user', JSON.stringify({ id: user._id, admin: user.admin, name: user.name }));
      localStorage.setItem('user', JSON.stringify({...userData, isLoggedIn: true}));
      // if (!userData) navigate('/login');
      // else navigate('/ticket-list');
      const userLogged = JSON.parse(localStorage.getItem('user'));
      console.log('user localStorage', userLogged);
      if (userLogged) {
        // dispatch(isUserLogged({ id: user._id, admin: user.admin, name: user.name }));
        dispatch(isUserLogged(userLogged));
        console.log('helo');
        navigate('/ticket-list');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   console.log('user localStorage', user);
  //   if (user) {
  //     // dispatch(isUserLogged({ id: user._id, admin: user.admin, name: user.name }));
  //     dispatch(isUserLogged(user));
  //     navigate('/ticket-list');
  //   }
  // }, [dispatch, navigate]);


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
