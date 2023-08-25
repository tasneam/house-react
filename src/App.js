import React, { useState , useEffect } from 'react';

import { Login } from "@mui/icons-material";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Filter from "./Pages/Filter";
// import AboutUs from "./Pages/AboutUs";
// import Details from "./Pages/Details";
import Landing from "./Pages/Landing";
// import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import './Style.css';
import LoginPopup from './Components/LoginPopup';

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
    // <Router>
    //   <Routes>
    //     <Route path = "/" element="</Landing"/>
    //     <Route path = "AboutUs" element="</AboutUs"/>
    //     <Route path =""/>
    //   </Routes>

    // </Router>
    <div className="App">
     <NavBar isLoggedIn={isLoggedIn} users={users}  />
     <LoginPopup isLoggedIn={isLoggedIn} onLogin={handleLogin} />
     <Landing />
     {/* <Details /> */}
     {/* <AboutUs /> */}
     {/* <Filter /> */}
     {/* <Login /> */}
     <Footer />
    </div>
  );
}

export default App;
