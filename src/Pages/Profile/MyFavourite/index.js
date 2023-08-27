import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from "@mui/material/Typography";
import houseImg from "../../../Utilites/img/Img.png";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import houseImg2 from  "../../../Utilites/img/Img.png";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';


import "./style.css";

const MyFavourite = () => {

  //1) initial value
  const [house, setHouse] = useState([]);
  //2) Use Effect
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alaa-jamal/houseapi/users")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



// For snakbar& Dialog
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const [open, setOpen] = useState(false);
const [snackbarOpen, setSnackbarOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleAgree = () => {
  setOpen(false);
  setSnackbarOpen(true);
};

const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};






  return (
    <>
      <section className="myHouses">
        <section className="myHouses-img">
          <img src={houseImg} />
        </section>

        <section className="myHouses-details">
          <Typography
            className="myHouses-titel"
            variant="h6"
            component="h6"
            color="#1B4289"
          >
            Classic House
          </Typography>

          <section className="house-cards-icon">
            <section className="beds-icon" >
              <HotelIcon className="icon" />
              <Typography 
              
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                 2 beds
              </Typography>
             
            </section>
            <section  className="baths-icon">
              <BathtubIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                3 Baths
              </Typography>
            </section>

            <section  className="locations-icon">
              <LocationOnIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                Gaza-Palestine
              </Typography>
            </section>

          </section>

          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            marginTop={3}
            color={"#1B4289"}
           className="myHouses-price"
          >
            300$/month
          </Typography>
        </section>

        <section className="myHouses-icons">

           
           < DeleteOutlineIcon className="delete-icon" onClick={handleOpen}/>

            
        </section>
      </section>


      <section className="myHouses">
        <section className="myHouses-img">
          <img src={houseImg2} />
        </section>

        <section className="myHouses-details">
          <Typography
            className="myHouses-titel"
            variant="h6"
            component="h6"
            color="#1B4289"
          >
           Studio House
          </Typography>

          <section className="house-cards-icon">
            <section className="beds-icon" >
              <HotelIcon className="icon" />
              <Typography 
              
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                 1beds
              </Typography>
             
            </section>
            <section  className="baths-icon">
              <BathtubIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                2 Baths
              </Typography>
            </section>

            <section  className="locations-icon">
              <LocationOnIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                Rafah-Palestine
              </Typography>
            </section>

          </section>

          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            marginTop={3}
            color={"#1B4289"}
           className="myHouses-price"
          >
            100$/month
          </Typography>
        </section>

        <section className="myHouses-icons">

           
           < DeleteOutlineIcon className="delete-icon" onClick={handleOpen}/>

            
        </section>
      </section>


      {/* For Dialoge & Sanakbar */}

      <Dialog open={open} onClose={handleClose}>
       
      <DialogTitle id="alert-dialog-title">
          {"Are you sure delete house from a Favourite List?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} className="disagree-btn" color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} className="agree-btn" color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Deleted Successful!
        </MuiAlert>
      </Snackbar>

  
    </>
  );


 

};

export default MyFavourite;