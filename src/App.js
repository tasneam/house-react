import React, { useState , useEffect } from 'react';

import { Login } from "@mui/icons-material";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Filter from "./Pages/Filter";
import AboutUs from "./Pages/AboutUs";
import Details from "./Pages/Details";
import Landing from "./Pages/Landing";
// import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import './Style.css';
import LoginPopup from './Components/LoginPopup';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/NotFound';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';

// import {HouseCard, NavBar,Footer} from '../Components';

// import {Layout, Landing, AboutUs} from '../Pages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUserData] = useState(null); // State to hold user data

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user); // Set the user data after login
  };

  // Fetch user data on component mount
  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const response = await fetch("https://my-json-server.typicode.com/tasneam/api-house/users");
  //       if (response.ok) {
  //         const users = await response.json();
  //         // Assuming you have a logged-in user, you can set user data here
  //         setUserData(users[0]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   }

  //   fetchUserData();
  // }, []);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  return (
    <>
    {/* <Router> */}
    <Layout> 

      <Routes>
        <Route path = "/" element={<Landing />}/>
        <Route path ="/details/:id" element ={<Details/>}/>
        <Route path = "AboutUs" element={<AboutUs />}/>
        <Route path ="/fillter" element={<Filter />}/>
        <Route path ="*" element={<ErrorPage />}/>
      </Routes>
      </Layout >


    {/* </Router> */}
    {/* // <div className="App">
    //  <NavBar /> */}
     {/* isLoggedIn={isLoggedIn} users={users}   */}
     {/* <LoginPopup isLoggedIn={isLoggedIn} onLogin={handleLogin} /> */}

     {/* <Profile/> */}

     {/* <Landing /> */}
     {/* <Details /> */}
     {/* <AboutUs /> */}
     {/* <Filter /> */}
     {/* <Login /> */}
    {/* //  <ErrorPage />
    //  <Footer />
    // </div> */}
    </>
  );
}

export default App;
