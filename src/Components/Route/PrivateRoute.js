
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);
  return <Outlet {...rest}>{isLoggedIn && <Component />}</Outlet>;
}

export default PrivateRoute;