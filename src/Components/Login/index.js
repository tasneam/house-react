import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './style.css'


// const LoginPopup = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


  const LoginPopup = () => {
    const [isOpen, setIsOpen] = useState(true); // Initialize as true
  
    const handleClose = () => {
      setIsOpen(false); // Close the dialog
    };
  

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleOpen}>
        Open Login
      </Button> */}
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your credentials to log in.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button  className="cancel-btn" onClick={handleClose}>Cancel</Button>
          <Button  className="log-btn" onClick={handleClose} >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPopup;
