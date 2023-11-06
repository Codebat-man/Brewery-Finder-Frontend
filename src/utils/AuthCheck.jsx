import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function AuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserAuthenticated = () => {
      const token = localStorage.getItem('login-token');
      return token !== null;
    };

    if (!isUserAuthenticated()) {
      navigate( '/login');
    }
  }, []);

  return;
}

export default AuthCheck;
