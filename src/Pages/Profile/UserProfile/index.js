import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './style.css';

const UserProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tasneam/api-hunting/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleSaveClick = () => {
    setOpen(false);
  };

  const handleCancelClick = () => {
    setOpen(false);
  };

  return (
    <section className='userInformation'>
      <section className='userInfo'>
        <Typography className='user-info-title' variant="h5" component="h5">
          User Information
        </Typography>
        <Avatar className='user-info-logo' src="/broken-image.jpg" />
        <TextField
          fullWidth
          label="UserName"
          value={user.username}
          type='text'
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <TextField
          fullWidth
          label="Password"
          type='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <TextField
          fullWidth
          label="Email"
          type='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          fullWidth
          label="Phone"
          type='phone'
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </section>

      <section className='save-edit'>
        <button className='save-edit-btn' onClick={handleEditClick}>
          Edit
        </button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to update your personal information?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCancelClick}>Disagree</Button>
            <Button onClick={handleSaveClick} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </section>
  );
}

export default UserProfile;
