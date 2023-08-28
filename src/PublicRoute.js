import React from 'react';
import { Route ,Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
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
