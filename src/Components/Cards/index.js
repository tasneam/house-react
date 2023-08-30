import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './style.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';


    export default function HouseCard({ house }) {
      const { title, image, bathroom, fortype ,bedroom, price, address, id } = house;
    
      const [isFavorite, setIsFavorite] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [isSale, setIsSale] = useState(fortype === "sale");

    
      const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        setSnackbarOpen(true); 
      };
    
      const handleCloseSnackbar = () => {
        setSnackbarOpen(false); 
      };
  return (
    <section>
       <Card className="house-card" sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 226 }}
        image={image}
        title={title}
      />
   
         <section className="fav-card">
          {isFavorite ? (
            <FavoriteOutlinedIcon
              className="fav-card-icon favorite"
              onClick={toggleFavorite}
            />
          ) : (
            <FavoriteBorderIcon
              className="fav-card-icon"
              onClick={toggleFavorite}
            />
          )}
        </section>
       <section>
        {isSale ? (
          <section className="type-btn" style={{ color: "#00CE3A" , backgroundColor:"#F1FFF1"}} >
        <AttachMoneyIcon className="typeicon sale" />
        <Typography className="fortype" gutterBottom variant="h2" component="h2">
        {fortype}
      </Typography>
    </section>
      ) : (
        <section className="type-btn" style={{ color: "#119BFF" , backgroundColor:"#D7EEFF"}}>
        <HomeIcon className="typeicon rent" />
        <Typography className="fortype" gutterBottom variant="h2" component="h2">
        {fortype}
      </Typography>
    </section>
      )}
      </section>
      


       <CardContent class="card-content">
         <section class="card-content-top">
         <Typography class="card-title" gutterBottom variant="h2" component="h2">
         {title.split('').slice(0,16).join('')}
        </Typography>
         <Typography class="card-price" gutterBottom variant="h2" component="h2">
         {price}$
         </Typography>
         </section>
         <Typography variant="body2" color="text.secondary" class='card-description'>
         <LocationOnOutlinedIcon className="icon"/>
          {address}
         </Typography>
      
       </CardContent>

       <section className="cards-icon">

       <section className="bed-icon-land">
       <LocalHotelOutlinedIcon className="icon"/>
         <Typography variant="p" component="p">
           {bedroom}-Beds
         </Typography>
       </section>
       <section className="bath-icon-land">
       <BathtubOutlinedIcon className="icon"/>
         <Typography variant="p" component="p">
           {bathroom}-Baths
         </Typography>
       </section>

     </section>

     <CardActions>
         <Button class="seeDetails-btn" size="small">
         <Link className = "seeDetails-btn-link" to ={`/details/${id}`}>
      see details
         </Link>
           </Button>
        
       </CardActions>
    </Card>

    <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} 
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          {isFavorite ? 'Added to Favorites' : 'Removed from Favorites'}
        </MuiAlert>
      </Snackbar>

    </section>

);
}
   