import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';


const PublicRoute = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Outlet>
    {isLoggedIn ? (
        <Component />
      ) : (
        <Navigate to="/" />
      )
    }
  </Outlet>
  );
};

export default PublicRoute;
