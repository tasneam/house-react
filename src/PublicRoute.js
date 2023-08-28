import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';


const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Outlet
      {...rest}
      render={props =>
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
