import React, { useState ,useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./style.css";

const NewCard = ({ house }) => {
  const {
    title,
    description,
    image,
    bathroom,
    bedroom,
    price,
    address,
    id,
    type,
  } = house;
  const [titelHouse, setTitelHouse] = useState("");
  const [descriptionHouse, setDescriptionHouse] = useState("");
  const [locationHouse, setLocationHouse] = useState("");
  const [typeHouse, setTypeHouse] = useState("");
  const [priceHouse, setPriceHouse] = useState("");
  const [bedroomHouse, setBedroomHouse] = useState("");
  const [bathroomHouse, setBathroomHouse] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialoge, setOpenDialoge] = useState(false);
  const [openSnackbarDelete, setOpenSnackbarDelete] = useState(false);

  useEffect(() => {
    setTitelHouse(title);
    setDescriptionHouse(description);
    setLocationHouse(address);
    setTypeHouse(type);
    setPriceHouse(price);
    setBedroomHouse(bedroom);
    setBathroomHouse(bathroom);
  }, [title, description, address, type, price, bedroom, bathroom]);
  
//open edit
  const handleClickOpen = () => {
    setOpen(true);
  };
//close edit
  const handleCancel = () => {
    setOpen(false);
    setOpenDialoge(false);
  };
//agree edit
  const handleCloseAgree = () => {
    setOpen(false);
    setOpenSnackbar(true);
  };

//open delete
  const handleClickOpenDialog = () => {
    setOpenDialoge(true);
  };

  const handleAgreeDelete = () => {
    setOpenDialoge(false);
    setOpenSnackbarDelete(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSnackbarCloseDelete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarDelete(false);
  };

  const handleChangeTitle = (event) => {
    setTitelHouse(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescriptionHouse(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocationHouse(event.target.value);
  };

  const handleChangeType = (event) => {
    setTypeHouse(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPriceHouse(event.target.value);
  };

  const handleChangeBedroom = (event) => {
    setBedroomHouse(event.target.value);
  };

  const handleChangeBathroom = (event) => {
    setBathroomHouse(event.target.value);
  };

  return (
    <>
      <section className="myHouses">
        <section className="myHouses-img">
          <img src={image} />
        </section>

        <section className="myHouses-details">
          <Typography
            className="myHouses-titel"
            variant="h6"
            component="h6"
            color="#1B4289"
          >
            {title}
          </Typography>

          <section className="house-cards-icon">
            <section className="beds-icon">
              <HotelIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {bedroom} beds
              </Typography>
            </section>
            <section className="baths-icon">
              <BathtubIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {bathroom} Baths
              </Typography>
            </section>

            <section className="locations-icon">
              <LocationOnIcon className="icon" />
              <Typography
                variant="p"
                component="p"
                color="#646464"
                fontSize="0.8rem"
              >
                {address}
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
            {price}$/month
          </Typography>
        </section>

        <section className="myHouses-icons">
          <ModeEditIcon className="edit-icon" onClick={handleClickOpen} />
          <DeleteOutlineIcon
            className="delete-icon"
            onClick={handleClickOpenDialog}
          />
        </section>
      </section>





{/* edit dialog */}
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="alert-dialog-header-title"
          color={"white"}
        >
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
             value={titelHouse} 
             onChange={handleChangeTitle} 
           />
          <TextField
            className="text-area"
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={descriptionHouse}
            onChange={handleChangeDescription} 
          />

         <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth className="update-location">
             <InputLabel id="demo-simple-select-label">Location</InputLabel>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={locationHouse} 
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
                <FormControl className="update-type">
                  <InputLabel id="demo-simple-select-label">For</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="For"
                    defaultValue={"Rent"}
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
               defaultValue={price} // Use default value from house object
               sx={{ width: "120px" }}
               value={priceHouse} // Use state variable
               onChange={handleChangePrice} 
             />

            </section>

            <section className="udpate-beds-bath">
            <TextField
             className="update-bed"
             id="outlined-Bedroom-input"
             label="Bedroom"
             type="number"
             defaultValue={bedroom} 
             sx={{ width: "120px" }}
             value={bedroomHouse} 
             onChange={handleChangeBedroom} 
           />


          <TextField
            className="update-bath"
            id="outlined-Bedroom-input"
            label="Bathroom"
            type="number"
            defaultValue={bathroom} 
            sx={{ width: "120px" }}
            value={bathroomHouse} 
            onChange={handleChangeBathroom} 
          />

            </section>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button className="cancel-btn" onClick={handleCancel} autoFocus>
            Cancel
          </Button>
          <Button className="update-btn" onClick={handleCloseAgree}>
            Save
          </Button>

        </DialogActions>
      </Dialog>

      <Dialog open={openDialoge} onClose={handleCancel}>
        <DialogTitle id="alert-dialog-title" className="dialogo-title">
          {"Are you sure to delete house?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleCancel}
            className="disagree-btn"
            color="primary"
          >
            Disagree
          </Button>
          <Button
            onClick={handleAgreeDelete}
            className="agree-btn"
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Update Information House Successfully
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={openSnackbarDelete}
        autoHideDuration={2000}
        onClose={handleSnackbarCloseDelete}
      >
        <MuiAlert onClose={handleSnackbarCloseDelete} severity="success">
          Deleted Successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default NewCard;