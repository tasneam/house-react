import React,{useEffect,useState }  from 'react';
import Typography from '@mui/material/Typography';
import './style.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HouseCard from '../../Components/Cards';

const Landing = ()=>{
  const [houses, setHouse] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tasneam/api-hunting/houses")
      .then((response) => response.json())
      .then((data) => {
     
        
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

    return(
        <>
     
      <section className="hero-section">  
      <section className="hero-content" >
               
               <Typography className="hero-title1" variant="h2" component="h2">
               find the place to
               </Typography>
               <Typography className ="hero-title2"variant="h2" component="h2">
                 live your dreams
               </Typography>
               <Typography className ="hero-title3"variant="h2" component="h2">
               easily here
               </Typography>
               <Typography className ="hero-subtitle"variant="p" component="p">
               Everything you need about finding your place to live will be 
               <br/>
               here, where it will be easier for you           
                </Typography>
   
               <form className="search" >
                   <input className="hero-searchInput" type="search" placeholder='Search for the location you want!'/>
                   <button className="serach-btn" > search
                       <ChevronRightIcon className="searchicon"></ChevronRightIcon>
                       </button>
               
               </form>
               
          </section>
          </section>

        <section className="newest-houses">
        <section className='new'>
        <Typography className="newest-houses-title" variant="h4" component="h4">
           Last House
            </Typography>
             <section className="card-conatiner">
             {houses && houses.length > 0 ? (
        houses.slice(0, 4).map((house) => (
          <HouseCard house={house} />
        ))
      ) : (
        <p>Loading...</p>
      )}
       </section>            
        </section>
        </section>
        </>
    )
}
export default Landing;



