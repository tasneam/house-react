import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './style.css';



const UserProfile = ()=>{

    // For Dialog 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


     //1) initial value
  const [user, setUser] = useState([]);
  // const [newHouses,setNewHouse]=useState([]);
  //2) Use Effect
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tasneam/api-house/users")
      .then((response) => response.json())
      .then((data) => {
        
        setUser(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(user);

    return (
      
        <>
 
    <section className='userInformation'>
  
<section className='userInfo'>


<Typography
className='user-info-title'
 variant="h5"
  component="h5"
  color ="#71BBB0"
  font-family= 'Bree Serif'>
  User Information
</Typography>

{/* <Avatar alt="personal Img" src={user[0].image} /> */}
<Avatar src="/broken-image.jpg" />





{/* <section className='user-info-details'>
<Typography
className='user-info-title'
 variant="p"
  component="p"
  color ="#1B4289"
  font-family= 'Bree Serif'>
  User Name :
</Typography>
<Typography
className='user-info-title'
 variant="p"
  component="p"
  color ="#1B4289"
  font-family= 'Bree Serif'>
  User Information
</Typography>
</section> */}



{/* <TextField fullWidth  label="UserName"  value={user[0].username} />  
<TextField fullWidth  id="fullWidth" value={user[0].password} /> 
 <TextField fullWidth label="Pasword"  value={user[0].password} /> 
<TextField fullWidth label="Email" value={user[0].email} />
<TextField fullWidth label="Phone" value={user[0].phone} />  */}
<TextField fullWidth  label="UserName"  value={"Tasnim khaled"} />  
{/* <TextField fullWidth  id="fullWidth" value={user[0].password} />  */}
 <TextField fullWidth label="Pasword"  value={"**********"} /> 
<TextField fullWidth label="Email" value={"tasneam1999@gmail.com"} />
<TextField fullWidth label="Phone" value={"0595092662"} />

</section>

<section className='save-edit'>
<button className='save-edit-btn' onClick={handleClickOpen}>Save Edit</button>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure  to update your personal information ?"}
        </DialogTitle>
      
        <DialogActions>
          <Button className='disagree-btn' onClick={handleClose}>Disagree</Button>
          <Button className='agree-btn' onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
</section>



    </section>
    
    </>
    )
}

export default UserProfile;