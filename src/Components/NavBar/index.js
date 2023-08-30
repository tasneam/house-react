import React, { useState , useContext} from 'react';
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
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


// function NavBar() {
  const NavBar = () => {

  const {isLoggedIn , setisLoggedIn , logout  ,setError } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false); 
  const [isSignDialogOpen, setIsSignDialogOpen] = useState(false);



  const handleLoginClick = () => {
    setIsLoginDialogOpen(true); 
  };
  const handleSignClick = () => {
    setIsSignDialogOpen(true); 
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
  const handellogout = () =>{ 
    try{
      logout();
      Navigate("/");

    }catch(err){
      setError('iiiii');
    }
  }
 
  return (
    <>
    <AppBar>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} 
          className="nav-center-page">
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
          
            </Menu>
          </Box>
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button >
              <Link className='nav-links' to ="/">Home</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/aboutus">About-us</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/fillter">ALL-House</Link>
             </Button>
          </Box>

          {isLoggedIn ? (
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
     
                <Avatar className='pro-log' alt="Tasnim" src="../../Utilites/img/Rectangle 17.png" 
                style={{background:"#71BBB0"}}/>
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

              <section className='sec-Profile'>
              <Button >
              <Link className='nav-Profile' to ="/Profile">Profile</Link>
              </Button>
              <Button >
              <Link  className='nav-Profile'  onClick={handellogout}>log out</Link>
              </Button>
              </section>
            </Menu>
          </Box>
          ) : (
          <section>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn" onClick={handleSignClick}>SignUp</button>
          </section>
      )}
        </Toolbar>
        
      </Container>
     
      {isLoginDialogOpen && <LoginPopup />}
      {isSignDialogOpen && <SignPopup />}
    
    </AppBar>
    </>
  );
}
export default NavBar;