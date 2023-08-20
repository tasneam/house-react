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
// import ownerImg from "../../Utilis/images/ownerImg.png";
import { useParams } from "react-router-dom";
import "./style.css";

const Details = () => {
  //1)  initaial value
  let { id } = useParams();
  const [houses, setHouse] = useState([]);

  // Fetch house details from API:
  //2) Use Effect
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/tasneam/api-house/houses${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
      <section className="details-section">
        <section className="details-left">
          {/* <img className="house-img" src={houses.image} alt="house-img" /> */}

          <section className="details-left-top">
            <section className="details-left-title">
              <Typography
                className="details-house-title"
                variant="h5"
                component="h5"
                // style={{}}
              >
                {/* {houses.title} */}
                Let’s tour and see our house!
              </Typography>
              <Typography variant="p" component="p" style={{paddingBottom:'5%' , color:'#646464 '}}>
              {/* {houses.description} */}
              Houses recommended by our partners that have been curated to become the home of your dreams!

            </Typography>
            <section className="location-icon">
                <LocationOnIcon className="icon" style={{  color: '#71BBB0'}}/>
                <Typography variant="p" component="p" style={{  color: '#333333'}}>
                  {/* {houses.address} */}
                  779 6th Ave New York, NY 120400
                </Typography>
              </section>
            </section>
              {/* <section className="fav-card">
                <FavoriteBorderIcon className="fav-card-icon" />
              </section> */}
            </section>
            <h3 style={{color:'#646464'}}>House Detail</h3>

            <section className="details-cards-icon">
              <section className="bed-icon">
                <HotelIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}beds
                </Typography>
              </section>
              <section className="bath-icon">
                <DirectionsCarFilledIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bathroom}Baths
                </Typography>
              </section>
              <section className="Carport">
                <AspectRatioOutlinedIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}beds
                </Typography>
              </section>
              <section className="Floors">
                <BathtubIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bathroom}Baths
                </Typography>
              </section>
        
              <section className="area">
                <StairsOutlinedIcon className="icon" />
                <Typography variant="p" component="p">
                  {houses.bedroom}beds
                </Typography>
              </section>
 
        

            {/* <Typography
              className="details-house-price"
              variant="p"
              component="p"
            >
              {houses.price}$/month
            </Typography> */}
          </section>
          <section className="price">
             <h2>Price :  </h2>
              <Typography
              className="details-house-price"
              variant="p"
              component="p"
            >
              {/* {houses.price} */}
             300 $/month
            </Typography>
              </section>
        

          {/* <section className="details-para">
            <Typography variant="p" component="p">
              {houses.description}
            </Typography>
          </section> */}
        </section>

        <section className="details-right">
        <img className="house-img" src={detailsImage} alt="house-img" />

        {/* <img className="house-img" src={houses.image} alt="house-img" /> */}

          {/* <Typography className="contact-title" variant="p" component="p">
            Contact with owner
          </Typography> */}
          {/* <Avatar
            className="ownerimg"
            alt="owner-img"
            src={ownerImg}
            sx={{ width: 56, height: 56 }}
          /> */}

          {/* <section className="details-data">
            <section className="contact-owner">
              <PersonIcon className="contact-icon" />
              <Typography
                Typography
                className="contact-text"
                variant="p"
                component="p"
              >
                Alaa Jamal
              </Typography>
            </section>

           
          </section> */}
        
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