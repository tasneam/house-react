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
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import houseImg2 from  "../../../Utilites/img/Img.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./style.css";

const MyHouses = () => {

  // For Dialog

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // For Select location 
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };





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
            color="#71BBB0"
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
            color={"#71BBB0"}
           className="myHouses-price"
          >
            300$/month
          </Typography>
        </section>

        <section className="myHouses-icons">

            <ModeEditIcon className="edit-icon" onClick={handleClickOpen}/>
           < DeleteOutlineIcon className="delete-icon"/>

            
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
            color="#71BBB0"
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
            color={"#71BBB0"}
           className="myHouses-price"
          >
            100$/month
          </Typography>
        </section>

        <section className="myHouses-icons">

            <ModeEditIcon className="edit-icon"/>
           < DeleteOutlineIcon className="delete-icon"/>

            
        </section>
      </section>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  className="alert-dialog-tit">
          {"Update House Information"}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            defaultValue="Classic House"
            />

<TextField className="text-area"
          id="outlined-multiline-static"
          label="Description"
          multiline
          
          rows={4}
          fullWidth

          defaultValue="Elegant, grand proportioned two bedroom, two bathroom condominium in a meticulously-run, elevator building. With views overlooking Berkeley Street this oversized property is stunning from start to finish. The welcoming foyer features beautiful original marble flooring."
        />


<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="update-location">
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          
          onChange={handleChangeLocation}
        >
          <MenuItem value={"Gaza"}>Gaza</MenuItem>
          <MenuItem value={"Rafah"}>Rafah</MenuItem>
          <MenuItem value={"Khanyounis"}>Khanyounis</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <section className="udpate-price-type">

    <Box sx={{ minWidth: 120 }}>
      <FormControl  className="update-type"  >
        <InputLabel id="demo-simple-select-label">For</InputLabel>
        <Select 
       
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="For"
          defaultValue="Rent"
          
          
          onChange={handleChangeType}
        >
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Sale"}>Sale</MenuItem>
        
        </Select>
      </FormControl>
    </Box>

    <TextField 
            className="update-price"
            id="outlined-Bedroom-input"
            label="Price"
            type="number"
            defaultValue="200%"
            sx={{ width: "120px" }}
            value={price}
            onChange={handleChangePrice}
          />

    </section>


          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyHouses;