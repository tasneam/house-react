import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './style.css'

const SignPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSignUp = async () => {
    const formData = {
      username,
      password,
      email,
      mobile,
    };

    try {
      const response = await fetch('https://my-json-server.typicode.com/tasneam/api-signup/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        handleClose(); // Close the dialog after successful sign-up
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your credentials to sign up.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Mobile"
            type="text"
            fullWidth
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button className="cancel-btn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="sign-btn" onClick={handleSignUp}>
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignPopup;
