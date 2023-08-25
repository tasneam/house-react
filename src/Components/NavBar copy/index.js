import React, { useState } from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../Utilites/img/logo.svg'
import './style.css'
import LoginPopup from '../LoginPopup';
import SignPopup from '../SignUp';


const pages = ['Home', 'AboutUs' ,'AllHouses'];
const settings = ['Profile', 'Favorite', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false); // Initialize as false
  const [isSignDialogOpen, setIsSignDialogOpen] = useState(false); // Initialize as false

  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state

  const handleLogin = () => {
   
      setIsLoggedIn(true); // Set authentication status to true
    
  };
  // ... rest of your code

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true); // Open the login dialog
  };
  const handleSignClick = () => {
    setIsSignDialogOpen(true); // Open the login dialog
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
        {/* <section  className='navbar' > */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img className="Logo" src={Logo}/>
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            Hounter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#047857', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>



          {isLoggedIn ? (
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          ) : (
            <section>
        
         {/* <button className="login-btn" onClick={() => setIsLoginPopupOpen(true)}>Login</button> */}
         <button className="login-btn" onClick={handleLoginClick}>Login</button>


          <button className="signup-btn" onClick={handleSignClick}>SignUp</button>
          </section>
      )}
        </Toolbar>
        
      </Container>
     
      {/* {isLoginPopupOpen && <LoginPopup />}      */}
      {isLoginDialogOpen && <LoginPopup />}
      {isSignDialogOpen && <SignPopup />}

        {/* </section> */}
     
    </AppBar>
  );
}
export default NavBar;