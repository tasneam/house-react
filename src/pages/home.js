// import React ,{useEffect} from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';
// import '@fontsource/roboto/500.css';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';


// import { CardContainer } from '../../Components';

const Landing = ()=>{
 

    return(
        <>
        <section className="hero-section">
            <section className="hero-content">
               
            <Typography className="hero-title1" variant="h1" component="h2">
              Find Your
            </Typography>
            <Typography className ="hero-title2"variant="h2" component="h2">
              DREAM HOUSE
            </Typography>
            <Typography className ="hero-subtitle"variant="p" component="p">
            Everything you need about finding your place to live will be here, where it will be easier for you
            </Typography>

            <form className="searchhh" >
                <input className="hero-searchInput" type="search" placeholder='Search for the location you want!' />
                <button className="serach-btn"><SearchIcon className="searchicon"></SearchIcon></button>
            
            </form>
            
            </section>

          
  
        

            

        </section>
        {/* <section className="newest-houses">
        <Typography className="" variant="h3" component="h3">
             Newest Houses
            </Typography>


        </section> */}
        
        {/* <CardContainer houses={houses}/> */}

        </>
    )
}
export default Landing;

