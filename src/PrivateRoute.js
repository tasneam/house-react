// PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// function PrivateRoute({ element, ...rest }) {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/" />
//   );
// }

// export default PrivateRoute;
import React from 'react';
import { Route ,Navigate} from 'react-router-dom';
import { useAuth } from './AuthContext';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
