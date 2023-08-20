import NavBar from "./Components/NavBar";
import Details from "./Pages/Details";
// import Landing from "./Pages/Landing";
import './Style.css';

// import {HouseCard, NavBar,Footer} from '../Components';

// import {Layout, Landing, AboutUs} from '../Pages';

function App() {
  return (
    <div className="App">
     <NavBar />
     {/* <Landing /> */}
     <Details />
    </div>
  );
}

export default App;
