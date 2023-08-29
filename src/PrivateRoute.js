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
import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from './AuthContext';


const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Outlet>
      {isLoggedIn ? (
          <Component />
        ) : (
          <Navigate to="/LoginPopup" />
        )
      }
    </Outlet>
    
  );
};

export default PrivateRoute;
