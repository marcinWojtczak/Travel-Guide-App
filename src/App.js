import React, { useState, useEffect } from 'react';
import Main from "./components/Main/Main";
import Map from "./components/Map/Map"
import { getDestinationCoordinates } from './api/coordinateApi';
import PlacesList from './components/PlacesList/PlacesList'
// import { getPlacesData } from './api/travelAdvisorApi'


function App() {
  //Coordinates
  const [coordinates, setCoordinates] = useState({tr_latitude: 52.237049, tr_latitude: "", bl_longitude: "", bl_longitude: 21.017532})
  console.log(coordinates)

  //input data
  const [destination, setDestination] = useState('warsaw')
  console.log(destination);

  const [places, setPlaces] = useState([])

  const distance = 5

  // Get destination input coordinate
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {tr_latitude, tr_longitude, bl_latitude, bl_longitude } = await getDestinationCoordinates(destination, distance)
    setCoordinates({tr_latitude, tr_latitude, bl_latitude, bl_longitude})
  } 

  // useEffect(() => {
  //   getPlacesData()
  //     .then((data) => {
  //       console.log(data)
  //       setPlaces(data);
  //     })
  // }, []);

  

  return (
    <>
      <Main setDestination={setDestination} handleSubmit={handleSubmit} />
      <Map coordinates={coordinates} setCoordinates={setCoordinates}/>
      <PlacesList />
    </>
  );
}

export default App;
