import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Drawer from '@mui/material/Drawer';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserProfile from './UserProfile';
import "./style.css";
import AddHouse from "./AddHouse";
import MyHouses from "./MyHouses";
import MyFavourite from "./MyFavourite";




//  BreadCrumb
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// start Tab :
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

//   End Tab







const Profile = (props) => {

    // Start tab
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    
  return (
    <>
      <section className="profile-section" >
        <section
          className="profile-section-top"
          role="presentation"
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb" paddingLeft={15} paddingTop={5}>
            <Link underline="hover" color="#FFFFFF" href="/">
              Home
            </Link>
            <Typography color="#FFFFFF">Profile</Typography>
          </Breadcrumbs>
        </section>

         <section className="profile-section-bottom">







           {/* End */}


           {/* Start Tab  */}

           <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      
      <Tabs
        className="tabs"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Profile"
        className="tab"
         {...a11yProps(0)}
         icon={<PersonIcon/>} />
        <Tab label="My Houses"
        className="tab"
        {...a11yProps(1)} 
        icon = {<HomeIcon/>} />
        <Tab label="Favorite"
        className="tab"
       icon ={<FavoriteIcon/>} 
        {...a11yProps(2)} />
        <Tab label="Add new House"
        className="tab" 
        icon={<AddCircleIcon/>}
        {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
       <UserProfile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyHouses />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyFavourite />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddHouse />
      </TabPanel>
    
    </Box>

           {/* End Tab  */}
             

        </section> 
      </section>
    </>
  );
};

export default Profile;


