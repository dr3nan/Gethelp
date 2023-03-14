import React from 'react';
// TODO: add Auth0
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useState } from 'react';
import Login from '../../components/Login/Login';

const LoginView = () => {
  // const { isAuthenticated, loginWithRedirect, loginWithPopup } = useAuth0();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate(`/tickets`);
  //   }
  // });

  return (
    <>
      <Login />
    </>
  );
};

export default LoginView;