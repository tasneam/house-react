import React, { useEffect, useState } from "react";
import detailsImage from "../../Utilites/img/Img.png";
import ownerimg from "../../Utilites/img/Rectangle 17.png";

import Typography from "@mui/material/Typography";
// import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import "./style.css";

const Details = () => {
  let { id } = useParams();
  const [houses, setHouse] = useState([]);


  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/tasneam/api-house/houses/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  console.log(houses);

  return (
    <>
      <section className="details-section">
        <section className="details-left">

          <section className="details-left-top">
            <section className="details-left-title">
              <Typography
                className="details-house-title"
                variant="h5"
                component="h5"
              >
                {houses.title}
                <section className="fav-card">
                <FavoriteBorderIcon className="fav-card-icon" />
                </section>
              </Typography>
              <Typography variant="p" component="p" style={{paddingBottom:'5%' , color:'#646464 '}}>
              {houses.description}

            </Typography>
            <section className="location-icon">
                <LocationOnIcon className="icon" style={{  color: '#71BBB0'}}/>
                <Typography variant="p" component="p" style={{  color: '#333333'}}>
                  {houses.address}
                </Typography>
              </section>
            </section>
         
            </section>
            <h3 style={{color:'#646464'}}>House Detail</h3>

            <section className="details-cards-icon">
              <section className="bed-icon">
                <HotelIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}-Bedrooms
                </Typography>
              </section>
              <section className="bath-icon">
                <DirectionsCarFilledIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bathroom}-Carport
                </Typography>
              </section>
              <section className="Carport">
                <AspectRatioOutlinedIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}-sq
                </Typography>
              </section>
              <section className="Floors">
                <BathtubIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bathroom}-Bathrooms
                </Typography>
              </section>
        
              <section className="area">
                <StairsOutlinedIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}-Floors
                </Typography>
              </section>
 
      
          </section>
          <section className="price">
             <h2>Price :  </h2>
              <Typography
              className="details-house-price"
              variant="p"
              component="p"
            >
              {houses.price} $/month
            </Typography>
              </section>
        
        </section>

        <section className="details-right">
        <img className="house-img" src={houses.image} alt="house-img" />


        
        </section>
        </section>
        <h1 className="owner">contact with Owner </h1>

        <section className="contact-owner">

          <section className="contact-owner-left">
          <img className="house-img" src={ownerimg} alt="house-img" />

            </section>

            <section className="contact-owner-right">
                <h1 className="name-owner">Dianne Russell</h1>
                <section className="contactIcon">
            <EmailIcon className="contact-icon" />
              <Typography
                className="contact-text"
                variant="span"
                component="span"
              >
                tasnim@gmail.com
              </Typography>
              </section>
              <section className="contactIcon">
              <PhoneEnabledIcon className="contact-icon" />
              <Typography
                Typography
                className="contact-text"
                variant="span"
                component="span"
              >
                0592813281
              </Typography>
              </section>
              <section className="contactIcon">
              <LocationOnIcon className="contact-icon" />
              <Typography
                Typography
                className="contact-text"
                variant="span"
                component="span"
              >
                Palestine , khan younis
              </Typography>
              </section>
            </section>
          </section>
    </>
  );
};
export default Details;