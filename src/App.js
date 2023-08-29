import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './Components/LoginPopup';
import Layout from './Pages/Layout';
import Landing from './Pages/Landing';
import Details from './Pages/Details';
import AboutUs from './Pages/AboutUs';
import Filter from './Pages/Filter';
import ErrorPage from './Pages/NotFound';
import SignPopup from './Components/SignUp';
import PrivateRoute from './Components/Route/PrivateRoute';
import PublicRoute from './Components/Route/PublicRoute';
import AuthProvider from './Components/Context/Authrization';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [users, setUserData] = useState(null);

  // const handleLogin = (user) => {
  //   setIsLoggedIn(true);
  //   setUserData(user); 
  // };

  return (
    <>
    <AuthProvider>

    <Layout> 
        {/* {!isLoggedIn && <LoginPopup onLogin={handleLogin} />} */}

      <Routes>
        
         <Route exact path='/' element={<PublicRoute />} > 
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/LoginPopup' element={<LoginPopup />} />
          <Route exact path='/LoginPopup' element={<SignPopup />} />
        </Route>
        <Route exact path='/' element={<PrivateRoute />} > 
        <Route exact path='/AboutUs' element={<AboutUs />} />
        </Route>

        <Route exact path='/fillter' element={<Filter />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />


  
      </Routes>
      </Layout >
      </AuthProvider>


    </>
  );
}

export default App;


