import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './style.css';

const AddHouse = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [Name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [Bedrooms, setBedrooms] = useState('');
  const [Bathrooms, setBathrooms] = useState('');


  const [address, setAddress] = useState('');
  const [Description, setDescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (agree) => {
    setOpen(false);

    if (agree) {
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
            <TextField
            fullWidth
            label="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
            <TextField
            fullWidth
            label="Bedrooms"
            value={Bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          /> 
          <TextField
          fullWidth
          label="Bathrooms"
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






