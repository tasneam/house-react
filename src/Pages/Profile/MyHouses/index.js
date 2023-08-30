import React, { useEffect, useState } from "react";
import NewCard from "../../../Components/NewCard";
import "./style.css";

const MyHouses = () => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tasneam/api-house/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {house.slice(0, 1).map((house) => (
        <NewCard house={house} />
      ))}
    </>
  );
};

export default MyHouses;