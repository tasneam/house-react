import React from 'react';
import footerImage from '../../Utilites/img/logo.svg';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import{Link} from 'react-router-dom';


import "./style.css";
import { Link } from 'react-router-dom';
// import  Button  from '@mui/material';
const Footer =()=>{
    return(
        <>
        <section className="footer-section">

            <section className="footer-section-left">
            <section className='foter-logo'>
            <img  className ="footerIcon"src={footerImage}/>
            <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            Hounter
          </Typography>
          </section>

         <Typography className ="footer-title"variant="p" component="p">
         We provide information about properties such as houses, 
         villas and apartments to help people find their dream home             
         </Typography>
    

         <section class="footer-contact-icons">
                <FacebookIcon/>
              <WhatsAppIcon/>
              <InstagramIcon/>

                </section>
                

            </section>
            <section className="footer-section-center">
            <Typography variant="h5" component="h5">
                 Links
                </Typography>
                <Typography  variant="p" component="p" >
                 <Link className='footer-links'  to="/">
                    Home
                    </Link>
                </Typography>

                <Typography  variant="p" component="p" >
                 <Link className='footer-links'  to="/fillter">
                   All Houses
                    </Link>
                </Typography>

                <Typography variant="p" component="p" >  
                 <Link className='footer-links'  to="/aboutus">
                    About Us
                    </Link>
                </Typography>
                
            </section>

            <section className="footer-section-right">
            <Typography className ="footer-contact" variant="h5" component="h5">
                Contact Us
            </Typography>
                
         <Typography className ="footer-title"variant="p" component="p" style={{color:"#888B97"}}>
         info@hounter.com          
         </Typography>
         <Typography className ="footer-title"variant="p" component="p" style={{color:"#888B97"}}>
         0595092662
      
         </Typography>
              
             
            </section>

        </section>
        </>
    );
}

export default Footer;