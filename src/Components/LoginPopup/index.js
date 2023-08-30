import React, { useState, useEffect ,useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './style.css';
import AuthContext from '../Context/AuthContext';

const LoginPopup = () => {

  const { isAuth, setIsAuth, login } = useContext(AuthContext);


  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/tasneam/api-hunting/users");

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log('Logged in:', user);
      login({username, password} ,{accessToken :username , refreshToken:username})

      setIsOpen(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
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
          {loginError && (
            <p className="error-message">Incorrect username or password.</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button className="cancel-btn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="log-btn" onClick={handleLogin}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPopup;
