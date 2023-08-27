import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import  CardContainer  from "../../Components/CardContainer";
import TextField from "@mui/material/TextField";
 import Slider from "@mui/material/Slider"
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

import "./style.css";

const Filter = () => {
  const [houses, setHouse] = useState([]);
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [room, setRoom] = useState('');
  const minPrice = 0;
  const maxPrice = 450;
  const [price, setPrice] = useState();
  const [filter, setFilter] = useState([]);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value); // Set the selected type value
  };

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };

  

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tasneam/api-house/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
        setFilter(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleFilter = (event) => {
    event.preventDefault();

    let filterResult = houses
      .filter((house) => (!location ? true :house.address === location ))
      .filter((house) => ( house.title.toLowerCase().includes(title.toLowerCase())))
      .filter((house) => (!room ? true : house.bedroom === parseInt(room)))
      .filter((house) => (!type ? true : house.fortype === type))
      .filter((house) => (!price ? true : house.price === parseInt(price)));

     setFilter(filterResult);
     console.log(filterResult);
    console.log("hi from filter page");
  };

  

  return (
    <>
      <section className="filter-section">
        <form className="filter-search">
          <input
            className="filter-searchInput"
            type="search"
            placeholder="Search"
            onChange={handleChangeTitle} 
            color="#71BBB0"
            
          />
          <button className="filter-serach-btn" onClick={handleFilter}>
            Search
          </button>
        </form>

        <section className="filter-section-bottom">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={location}
              onChange={handleChangeLocation}
              autoWidth
              label="location"
            >

              <MenuItem value={"Gaza"}>Gaza</MenuItem>
              <MenuItem value={"Rafah"}>Rafah</MenuItem>
              <MenuItem value={"Khanyunis"}>Khanyunis</MenuItem>

            </Select>
          </FormControl>
          <TextField 
            id="outlined-Bedroom-input"
            label="Room"
            type="number"
            sx={{ width: "120px" }}
            value={room}
            onChange={handleChangeRoom}
          />

           <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={type}
              onChange={handleChangeType}
              autoWidth
              label="For"
            >
              <MenuItem value={"sale"}>For Sale</MenuItem>
              <MenuItem value={"rent"}>For Rent</MenuItem>
            </Select>
          </FormControl>


          <section>
            <Typography
            variant="span"
            component="span"
            color="#888B97"
            textAlign="center"
            
            
            >Price</Typography>
            <Slider
              aria-label="Small"
              name="price"
              value={price}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
             
              min={minPrice}
              max={maxPrice}
              variant="outlined"
              style={{ width: "300%" }}
              
              
              onChange={handleChangePrice}
            />
          </section>

        </section>
      </section>
     
     <Container  className="container-filter">
     <Typography
          variant="h5"
          component="h4"
          color="#71BBB0"
          textAlign="center"
        >
           Houses Available : (
           <span className="numOfHouse"> {filter.length} </span>
)
        </Typography>
  
     <section className="data-filter-section">
    
     
        <CardContainer className='filter-container' houses={filter} />
      </section>
     </Container>
     
    </>
  );
};
export default Filter;