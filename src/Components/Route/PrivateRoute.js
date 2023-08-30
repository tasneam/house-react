import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ?  <Outlet {...rest}></Outlet>: <Navigate  to='/'/> 
}

export default PrivateRoute;
