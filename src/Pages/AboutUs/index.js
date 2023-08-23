import React from 'react';
import aboutImage from '../../Utilites/img/about.png';
import Typography from '@mui/material/Typography';
import './style.css'
const AboutUs = ()=>{
    return(
        <>
            <Typography className="about-title" variant="h4" component="h4">
             About Us
            </Typography>
        <section className="about-section">
            <section className="about-section-right">
            <Typography className="about-subtitle" variant="h4" component="h4">
            Professional house hounter
            </Typography>

            <Typography className="about-p" variant="p" component="p">
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua

            </Typography>


            </section>
            <section className='about-section-left'>
            <img className ="about"src={aboutImage}/>

       
            </section>

       

        </section>
        
        </>
        
    );

}

export default AboutUs;