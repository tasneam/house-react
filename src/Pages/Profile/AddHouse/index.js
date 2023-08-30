import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import { Box, InputLabel } from '@mui/material';


const AddHouse = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [Name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [Bedrooms, setBedrooms] = useState('');
  const [Bathrooms, setBathrooms] = useState('');

  const [type, setType] = useState('Rent');

  const [address, setAddress] = useState('');
  const [Description, setDescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (agree) => {
    setOpen(false);
  
    if (agree) {
      const houseData = {
        name: Name,
        price: parseFloat(price),
        area: parseFloat(area),
        bedrooms: parseInt(Bedrooms),
        bathrooms: parseInt(Bathrooms),
        address: address,
        description: Description,
      };
  
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/tasneam/api-addHouse/houses',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(houseData),
          }
        );
  
        if (response.ok) {
          // Open Snackbar
          setSnackbarOpen(true);
          // Clear the text fields
          setName('');
          setPrice('');
          setArea('');
          setBedrooms('');
          setBathrooms('');
  
          setAddress('');
          setDescription('');
          // Reset selected photo
          setSelectedPhoto(null);

          console.log('success' , houseData)
        } else {
          console.error('Failed to add house information');
        }
      } catch (error) {
        console.error('Error while making the API request:', error);
      }
    }
  };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  }; 
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }; 

  return (
    <>
      <section className="addInformation">
        <section className="addInfo">
          <Typography
            className="add-info-title"
            variant="h5"
            component="h5"
            color="#1B4289"
            fontFamily="Bree Serif"
          >
            Add House
          </Typography>

          <TextField
            fullWidth
            label="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
            <TextField
            fullWidth
            label="Area"
            type="number"

            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
            <TextField
            fullWidth
            label="Bedrooms"
            type="number"

            value={Bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          /> 
          <TextField
          fullWidth
          label="Bathrooms"
          type="number"

          value={Bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
          <TextField
            fullWidth
            label="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            fullWidth
            label="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl className="add-type">
              <InputLabel id="demo-simple-select-label">For</InputLabel>
              <Select
              className='for-select-type'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChangeType}
              >
                <MenuItem value={"Rent"}>Rent</MenuItem>
                <MenuItem value={"Sale"}>Sale</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl className="add-type">
              <InputLabel id="demo-simple-select-label">Address</InputLabel>
              <Select
              className='for-select-type'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={address}
                label="address"
                onChange={handleChangeAddress}
              >
                  <MenuItem value={"Gaza"}>Gaza</MenuItem>
                  <MenuItem value={"Rafah"}>Rafah</MenuItem>
                  <MenuItem value={"Khanyounis"}>Khanyounis</MenuItem>
              </Select>
            </FormControl>
          </Box>
          

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            // style={{ marginTop: '10px' }}
          />
          {selectedPhoto && (
            <div
              className="image-container"
              style={{ maxWidth: '100%' }}
            >
              <img
                src={URL.createObjectURL(selectedPhoto)}
                alt="Selected House"
                className="image"
              />
            </div>
          )}
        </section>

        <section className="save-add">
          <button className="save-add-btn" onClick={handleClickOpen}>
            Save
          </button>

          <Dialog
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Are you sure to Add your House information ?'}
            </DialogTitle>

            <DialogActions>
              <Button
                className="disagree-btn"
                onClick={() => handleClose(false)}
              >
                Disagree
              </Button>
              <Button
                className="agree-btn"
                onClick={() => handleClose(true)}
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </section>
      </section>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Information updated successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AddHouse;






