import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './Components/LoginPopup';
import Layout from './Pages/Layout';
import Landing from './Pages/Landing';
import Details from './Pages/Details';
import AboutUs from './Pages/AboutUs';
import Filter from './Pages/Filter';
import ErrorPage from './Pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUserData] = useState(null);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user); 
  };

  return (
    <>
    <Layout> 
        {!isLoggedIn && <LoginPopup onLogin={handleLogin} />}

      <Routes>
        {/* <Route path = "/" element={<Landing />}/>
        <Route path ="/details/:id" element ={<Details/>}/>
        <Route  path = "/AboutUs" element={<AboutUs />}/>
        <Route path ="/fillter" element={<Filter />}/>
        <Route path ="*" element={<ErrorPage />}/> */}

         <Route exact path='/' element={<PublicRoute />} > 
          <Route exact path='/' element={<Landing />} />
        </Route>
        <Route exact path='/' element={<PublicRoute />} > 
          <Route exact path='/AboutUs' element={<AboutUs />} />
        </Route>
         <Route exact path='/' element={<PrivateRoute />} > 
          <Route exact path='/fillter' element={<Filter />} />
         </Route>

      </Routes>
      </Layout >


    </>
  );
}

export default App;




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


    // {/* </Router> */}
    // {/* // <div className="App">
    // //  <NavBar /> */}
    //  {/* isLoggedIn={isLoggedIn} users={users}   */}
    //  {/* <LoginPopup isLoggedIn={isLoggedIn} onLogin={handleLogin} /> */}

    //  {/* <Profile/> */}

    //  {/* <Landing /> */}
    //  {/* <Details /> */}
    //  {/* <AboutUs /> */}
    //  {/* <Filter /> */}
    //  {/* <Login /> */}
    // {/* //  <ErrorPage />
    // //  <Footer />
    // // </div> */}


/*
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './Components/LoginPopup';
import Layout from './Pages/Layout';
import Landing from './Pages/Landing';
import Details from './Pages/Details';
import AboutUs from './Pages/AboutUs';
import Filter from './Pages/Filter';
import ErrorPage from './Pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUserData] = useState(null); // State to hold user data

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user); // Set the user data after login
  };

  return (
    <Layout>
      {/* Render LoginPopup only if user is not logged in */
//       {!isLoggedIn && <LoginPopup onLogin={handleLogin} />}
      
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/details/:id" element={<Details />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/fillter" element={<Filter />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </Layout>
//   );
// }

// export default App;
