import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import Cookies from 'js-cookie';

function AuthProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [error, setError] = useState();
   const [user, setUser] = useState(null);

  const login = (userData, tokens) => {
    setUser(userData);
    Cookies.set('accessToken', tokens.accessToken);
    Cookies.set('refreshToken', tokens.refreshToken);
      setisLoggedIn(true)

  };

  const logout = () => {
    setUser(null);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
      setisLoggedIn(false)

  };


  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
  setisLoggedIn(true)
    } else {
      setisLoggedIn(false)
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ setisLoggedIn, isLoggedIn, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;