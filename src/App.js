import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Filter from "./Pages/Filter";
// import AboutUs from "./Pages/AboutUs";
// import Details from "./Pages/Details";
import Landing from "./Pages/Landing";
// import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import './Style.css';

// import {HouseCard, NavBar,Footer} from '../Components';

// import {Layout, Landing, AboutUs} from '../Pages';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path = "/" element="</Landing"/>
    //     <Route path = "AboutUs" element="</AboutUs"/>
    //     <Route path =""/>
    //   </Routes>

    // </Router>
    <div className="App">
     <NavBar />
     {/* <Landing /> */}
     {/* <Details /> */}
     {/* <AboutUs /> */}
     <Filter />
     <Footer />
    </div>
  );
}

export default App;
