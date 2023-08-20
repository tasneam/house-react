import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import HotelIcon from '@mui/icons-material/Hotel';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import {Link} from 'react-router-dom';
import './style.css';

export default function HouseCard({house}) {
    const {title,description,image,bathroom,bedroom,price,address,id}=house;

  return (
    <section>
       <Card className="house-card" sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 226 }}
        image={image}
        title={title}
      />
      <section className="fav-card">
      <FavoriteBorderIcon className="fav-card-icon" />
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
         {/* <section className='address'> */}
         <Typography variant="body2" color="text.secondary" class='card-description'>
         <LocationOnOutlinedIcon className="icon"/>
         {/* <h3>  */}
          {address}
          {/* </h3> */}
          {/* {description.split('').slice(0,70).join('')} */}
         </Typography>
         {/* </section> */}
       </CardContent>

       <section className="cards-icon">

       <section className="bed-icon">
       <LocalHotelOutlinedIcon className="icon"/>
         <Typography variant="p" component="p">
           {bedroom}-Beds
         </Typography>
       </section>
       <section className="bath-icon">
       <BathtubOutlinedIcon className="icon"/>
         <Typography variant="p" component="p">
           {bathroom}-Baths
         </Typography>
       </section>
       {/* <section className="location-icon">
       <LocationOnIcon className="icon"/>
         <Typography variant="p" component="p">
           {address}
         </Typography>
       </section> */}
     </section>

     <CardActions>
         <Button class="seeDetails-btn" size="small">
    {/* //       <Link className = "seeDetails-btn-link" to ={`/details/${id}`}> */}
      see details
      {/* </Link> */}
           </Button>
        
       </CardActions>
    </Card>

    </section>

    // <section>
    //   <Card className="house-card"  
    //   sx={{ maxWidth: 345,
    //      maxHeight:700,
    //      marginBottom:5 }}>
    //   <CardMedia className="card-image"
    //     sx={{ height: 226}}
    //     image ={image}
    //   />
    //   <section className="fav-card">
    //   <FavoriteBorderIcon className="fav-card-icon" />
    //   </section>
       
    //   <CardContent class="card-content">
    //     <section class="card-content-top">
    //     <Typography class="card-title" gutterBottom variant="h2" component="h2">
    //     {title.split('').slice(0,16).join('')}
    //     </Typography>
    //     <Typography class="card-price" gutterBottom variant="h2" component="h2">
    //     {price}$
    //     </Typography>
    //     </section>
    //     <Typography variant="body2" color="text.secondary" class='card-description'>
    //      {description.split('').slice(0,70).join('')}
         
    //     </Typography>
    //   </CardContent>
      
    //     <section className="cards-icon">

    //     <section className="bed-icon">
    //     <HotelIcon className="icon"/>
    //       <Typography variant="p" component="p">
    //         {bedroom}beds
    //       </Typography>
    //     </section>
    //     <section className="bath-icon">
    //     <BathtubIcon className="icon"/>
    //       <Typography variant="p" component="p">
    //         {bathroom}Baths
    //       </Typography>
    //     </section>
    //     <section className="location-icon">
    //     <LocationOnIcon className="icon"/>
    //       <Typography variant="p" component="p">
    //         {city}
    //       </Typography>
    //     </section>

        

    //   </section>
      
    //   <CardActions>
    //     <Button class="seeDetails-btn" size="small">
    //       {/* <Link className = "seeDetails-btn-link" to ={`/details/${id}`}>see details</Link> */}
    //       </Button>
        
    //   </CardActions>
    // </Card>

    // </section>

    
  );
}






// import  React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './style.css';

// export default function HouseCard({house}) {
//     const {title,description,image}=house;

//   return (
//     <section>
//       <Card className="house-card" sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={image}
//         title={title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small"> More Details</Button>
//       </CardActions>
//     </Card>

//     </section>

    
//   );
// }